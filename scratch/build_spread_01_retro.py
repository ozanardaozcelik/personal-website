import os
import cv2
import numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageFilter

SPREAD_BASE = r'scratch/clean_paper_spread.png'
SRC_PHOTO = r'C:\Users\dloozi\Desktop\pcçocuk.jpeg'
OUT_FINAL = r'public/landing-pages/meng-to-sketchbook/marina-bay-sands.png'

# Load clean base sketchbook spread (1760 x 1240)
spread = Image.open(SPREAD_BASE).convert('RGBA')

# Typography
font_kicker = ImageFont.truetype(r'C:\Windows\Fonts\georgiab.ttf', 13)
font_title = ImageFont.truetype(r'C:\Windows\Fonts\georgiab.ttf', 28)
font_sub = ImageFont.truetype(r'C:\Windows\Fonts\georgiai.ttf', 18)
font_body = ImageFont.truetype(r'C:\Windows\Fonts\georgia.ttf', 21)
font_note = ImageFont.truetype(r'C:\Windows\Fonts\georgiai.ttf', 15)
font_signature = ImageFont.truetype(r'C:\Windows\Fonts\georgia.ttf', 13)

INK_DEEP = (34, 30, 25, 255)
INK_FAINT = (110, 98, 85, 255)
EARTH = (145, 95, 48, 255)
RULE_COLOR = (175, 160, 145, 180)

# ==================== LEFT PAGE: TEXT CONTENT ====================
text_canvas = Image.new('RGBA', spread.size, (0, 0, 0, 0))
draw = ImageDraw.Draw(text_canvas)

LX = 145
LY = 285
MAX_W = 670

# 1. Kicker & Plate Number
draw.text((LX, LY), 'BÖLÜM 01 // İLK KIVILCIM · 3 YAŞINDA İLK BİLGİSAYAR', font=font_kicker, fill=EARTH)
draw.text((LX + MAX_W - 70, LY), 'LEVHA 01', font=font_kicker, fill=INK_FAINT)
draw.line([(LX, LY + 24), (LX + MAX_W, LY + 24)], fill=RULE_COLOR, width=1)

# 2. Title & Subtitle (Without "90'ların sonu")
draw.text((LX, LY + 36), '3 Yaş: İlk Bilgisayar & Oyunlar', font=font_title, fill=INK_DEEP)
draw.text((LX, LY + 76), 'Dijital Dünyayla İlk Karşılaşma', font=font_sub, fill=EARTH)
draw.line([(LX, LY + 112), (LX + 140, LY + 112)], fill=EARTH, width=1)

# 3. Main Body Paragraph (Exact User Memory)
body_text = (
    'Henüz 3 yaşımdayken eve ilk masaüstü bilgisayarımın alınmasıyla başlayan bu serüven; '
    'saatlerce başında oturduğum oyunlar ile monitörün karşısındaki saf çocukluk merakıyla filizlendi. '
    'Klavyenin tuşlarına basarak ekranda bir şeyleri hareket ettirebilmek, komutlar vermek ve sanal '
    'dünyada dolaşabilmek bana makinelerin nasıl çalıştığına dair silinmez bir merak uyandırdı.'
)

def wrap_text(text, font, max_width, d):
    words = text.split(' ')
    lines = []
    cur = words[0]
    for w in words[1:]:
        test = cur + ' ' + w
        bbox = d.textbbox((0, 0), test, font=font)
        if bbox[2] - bbox[0] <= max_width:
            cur = test
        else:
            lines.append(cur)
            cur = w
    lines.append(cur)
    return lines

lines = wrap_text(body_text, font_body, MAX_W, draw)
curr_y = LY + 132
for line in lines:
    draw.text((LX, curr_y), line, font=font_body, fill=INK_DEEP)
    curr_y += 34

curr_y += 28
note_text = '✦ "Makinelere duyulan tutku, bir çocuğun ekrandaki ilk pikselleri hareket ettirdiği an başlar."'
draw.text((LX, curr_y), note_text, font=font_note, fill=INK_FAINT)
curr_y += 32
draw.text((LX, curr_y), '[Ozan Arda Özçelik — 3 Yaş & İlk Bilgisayar Deneyimi]', font=font_signature, fill=INK_FAINT)

# Multiply blend the text into the paper for authentic ink look
spread_arr = np.array(spread).astype(float)
t_arr = np.array(text_canvas).astype(float)
alpha = t_arr[:, :, 3] / 255.0

for c in range(3):
    spread_arr[:, :, c] = np.clip(
        spread_arr[:, :, c] * (1.0 - alpha) + (spread_arr[:, :, c] * t_arr[:, :, c] / 255.0) * alpha,
        0, 255
    )
spread = Image.fromarray(spread_arr.astype(np.uint8), 'RGBA')

# ==================== RIGHT PAGE: RETRO PHOTO PLATE ====================
photo = Image.open(SRC_PHOTO).convert('RGB')
p_arr = np.array(photo).astype(float)

# Retro film color grading (warm vintage aesthetic)
p_arr[:, :, 0] = np.clip(p_arr[:, :, 0] * 1.07 + 10, 0, 255) # Red channel boost
p_arr[:, :, 1] = np.clip(p_arr[:, :, 1] * 1.01 + 6, 0, 255)  # Green
p_arr[:, :, 2] = np.clip(p_arr[:, :, 2] * 0.90 + 4, 0, 255)  # Blue soften

# Subtle optical vignette
ph, pw = p_arr.shape[:2]
vx = cv2.getGaussianKernel(pw, pw * 0.6)
vy = cv2.getGaussianKernel(ph, ph * 0.6)
vignette = (vy * vx.T)
vignette = vignette / vignette.max()
vignette = 0.74 + 0.26 * vignette
p_arr = np.clip(p_arr * vignette[:, :, np.newaxis], 0, 255).astype(np.uint8)

retro_photo = Image.fromarray(p_arr)

# Polaroid / photographic print dimensions
card_w = 580
border_side = 14
photo_w = card_w - border_side * 2
photo_h = int(photo_w * (ph / pw))
retro_resized = retro_photo.resize((photo_w, photo_h), Image.Resampling.LANCZOS)

card_h = photo_h + border_side + 52 # 14 top, 52 bottom caption chin
photo_card = Image.new('RGBA', (card_w, card_h), (253, 251, 246, 255))
photo_card.paste(retro_resized, (border_side, border_side))

# Fine hairline inner border around photo
cd = ImageDraw.Draw(photo_card)
cd.rectangle(
    [border_side - 1, border_side - 1, border_side + photo_w, border_side + photo_h],
    outline=(205, 195, 180, 200), width=1
)

# Handwritten caption at bottom of Polaroid
font_caption = ImageFont.truetype(r'C:\Windows\Fonts\segoesc.ttf', 16)
cd.text((border_side + 10, border_side + photo_h + 15), '3 Yaşında İlk Bilgisayarım — Ozan Arda', font=font_caption, fill=(65, 52, 42, 240))

# Soft photorealistic drop shadow under photo card
pad = 32
card_canvas = Image.new('RGBA', (card_w + pad*2, card_h + pad*2), (0, 0, 0, 0))
shadow = Image.new('RGBA', (card_w, card_h), (35, 25, 18, 125))
card_canvas.paste(shadow, (pad + 6, pad + 8))
card_canvas = card_canvas.filter(ImageFilter.GaussianBlur(12))
card_canvas.paste(photo_card, (pad, pad), photo_card)

# Organic slight rotation (-1.4 degrees)
rotated_card = card_canvas.rotate(-1.4, expand=True, resample=Image.Resampling.BICUBIC)

# Centered placement on right page (X: 925 to 1645, Y: 285 to 945)
rx = 925 + (720 - rotated_card.width) // 2
ry = 285 + (660 - rotated_card.height) // 2 + 12

spread.paste(rotated_card, (rx, ry), rotated_card)

# Translucent washi / masking tape strips
def paste_tape(img, x, y, w, h, angle):
    tape = Image.new('RGBA', (w, h), (222, 208, 178, 185))
    td = ImageDraw.Draw(tape)
    td.rectangle([0, 0, w-1, h-1], outline=(185, 170, 140, 180), width=1)
    rot_tape = tape.rotate(angle, expand=True, resample=Image.Resampling.BICUBIC)
    img.paste(rot_tape, (x, y), rot_tape)

paste_tape(spread, rx + 45, ry + 16, 82, 26, -20)
paste_tape(spread, rx + rotated_card.width - 128, ry + 22, 82, 26, 18)

# Right page sketchbook title & annotations
rd = ImageDraw.Draw(spread)
font_header = ImageFont.truetype(r'C:\Windows\Fonts\georgiab.ttf', 23)
font_hand = ImageFont.truetype(r'C:\Windows\Fonts\segoesc.ttf', 15)

rd.text((965, 305), 'İLK KIVILCIM // SERÜVENİN BAŞLANGICI', font=font_header, fill=(45, 38, 30, 240))
rd.line([(965, 338), (1490, 338)], fill=(155, 100, 50, 180), width=2)
rd.text((965, 875), '✎ Casper CRT monitör & saf çocukluk merakı... Serüvenin başladığı an.', font=font_hand, fill=(75, 60, 48, 230))

# Save final spread
spread.save(OUT_FINAL)
print(f'[SUCCESS] Spread 01 (marina-bay-sands.png) saved to {OUT_FINAL} ({os.path.getsize(OUT_FINAL)} bytes)')
