import os
import cv2
import numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageFilter

SPREAD_BASE = r'scratch/clean_paper_spread.png'
PLATE_ORIG = r'scratch/test_poisson_clean.jpg'
OUT_FINAL = r'public/landing-pages/meng-to-sketchbook/gardens-by-the-bay.png'

spread = Image.open(SPREAD_BASE).convert('RGBA')

# Typography
font_kicker = ImageFont.truetype(r'C:\Windows\Fonts\georgiab.ttf', 13)
font_title = ImageFont.truetype(r'C:\Windows\Fonts\georgiab.ttf', 27)
font_sub = ImageFont.truetype(r'C:\Windows\Fonts\georgiai.ttf', 17)
font_italic = ImageFont.truetype(r'C:\Windows\Fonts\georgiai.ttf', 17)
font_body = ImageFont.truetype(r'C:\Windows\Fonts\georgia.ttf', 19)
font_note = ImageFont.truetype(r'C:\Windows\Fonts\georgiai.ttf', 14)
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
draw.text((LX, LY), 'BÖLÜM 02 // LİSE DÖNEMİ · KIRIMLI FAZİLET OLCAY A.L.', font=font_kicker, fill=EARTH)
draw.text((LX + MAX_W - 70, LY), 'LEVHA 02', font=font_kicker, fill=INK_FAINT)
draw.line([(LX, LY + 22), (LX + MAX_W, LY + 22)], fill=RULE_COLOR, width=1)

# 2. Title & Subtitle
draw.text((LX, LY + 32), 'Makinelerin Derin Yeteneklerini Keşfetmek', font=font_title, fill=INK_DEEP)
draw.text((LX, LY + 68), 'Kırımlı Fazilet Olcay Anadolu Lisesi · Pendik, İstanbul', font=font_sub, fill=EARTH)

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

lead_text = 'Bilgisayarın sadece bir oyun aracı değil; arkasında dünyayı dönüştürebilecek çok daha derin yetenekler barındırdığını lisede keşfettim.'
curr_y = LY + 102
for line in wrap_text(lead_text, font_italic, MAX_W, draw):
    draw.text((LX, curr_y), line, font=font_italic, fill=EARTH)
    curr_y += 24

curr_y += 10
draw.line([(LX, curr_y), (LX + 120, curr_y)], fill=EARTH, width=1)
curr_y += 14

body_text = 'Kırımlı Fazilet Olcay Anadolu Lisesi sıralarındayken kod yazmanın, algoritmaların ve mantıksal düşüncenin gücüyle tanıştım. Karmaşık problemleri mantık adımlarına bölüp rasyonel biçimde çözebilmenin getirdiği özgürlük hayata ve olaylara bakışımı kökten değiştirdi. Bilgisayar artık bir merak değil; hayatımı adayacağım bir mühendislik ideali haline geldi.'
for line in wrap_text(body_text, font_body, MAX_W, draw):
    draw.text((LX, curr_y), line, font=font_body, fill=INK_DEEP)
    curr_y += 27

curr_y += 16
note_text = '✦ "Algoritmik düşünce bir programlama becerisinden öte; dünyayı rasyonel anlama felsefesidir."'
draw.text((LX, curr_y), note_text, font=font_note, fill=INK_FAINT)
curr_y += 20

signature_text = '[Kırımlı Fazilet Olcay Anadolu Lisesi — Ozan Arda Özçelik]'
draw.text((LX, curr_y), signature_text, font=font_signature, fill=INK_FAINT)

# Multiply blend text onto spread paper
spread_arr = np.array(spread).astype(float)
t_arr = np.array(text_canvas).astype(float)
alpha = t_arr[:, :, 3] / 255.0

for c in range(3):
    spread_arr[:, :, c] = np.clip(
        spread_arr[:, :, c] * (1.0 - alpha) + (spread_arr[:, :, c] * t_arr[:, :, c] / 255.0) * alpha,
        0, 255
    )

# Multiply blend the background sketch plate (school building & flowcharts)
plate_orig = Image.open(PLATE_ORIG).convert('RGBA')
im_resized = plate_orig.resize((720, 660), Image.Resampling.LANCZOS)
plate_arr = np.array(im_resized).astype(float)

# Right page bounds on spread: X: 925 to 1645, Y: 285 to 945
rx1, ry1 = 925, 285
rx2, ry2 = rx1 + 720, ry1 + 660

for c in range(3):
    spread_arr[ry1:ry2, rx1:rx2, c] = np.clip(
        spread_arr[ry1:ry2, rx1:rx2, c] * (plate_arr[:, :, c] / 255.0),
        0, 255
    )

spread = Image.fromarray(spread_arr.astype(np.uint8), 'RGBA')

# ==================== RIGHT PAGE: 2020s MODERN WORKSTATION POLAROID ====================
scale_x = 720 / 1200 # 0.60
scale_y = 660 / 896  # ~0.7366

desk_photo = Image.open('scratch/modern_desk_3.jpg').convert('RGB')
dw, dh = desk_photo.size
desk_crop = desk_photo.crop((int(dw * 0.05), int(dh * 0.02), int(dw * 0.85), int(dh * 0.95)))

card_w = int(490 * scale_x) # 294
border_side = 9
photo_w = card_w - border_side * 2
aspect = desk_crop.height / desk_crop.width
photo_h = int(photo_w * aspect)

card_h = photo_h + border_side + 36
card = Image.new('RGBA', (card_w, card_h), (253, 251, 246, 255))
card.paste(desk_crop.resize((photo_w, photo_h), Image.Resampling.LANCZOS), (border_side, border_side))

cd = ImageDraw.Draw(card)
cd.rectangle([border_side - 1, border_side - 1, border_side + photo_w, border_side + photo_h], outline=(200, 190, 175, 220), width=1)

font_caption = ImageFont.truetype(r'C:\Windows\Fonts\segoesc.ttf', 11)
cd.text((border_side + 8, border_side + photo_h + 10), "2020'ler · Modern IDE & Algoritmalar", font=font_caption, fill=(50, 40, 30, 240))

# Drop shadow
pad = 20
card_canvas = Image.new('RGBA', (card_w + pad*2, card_h + pad*2), (0, 0, 0, 0))
shadow = Image.new('RGBA', (card_w, card_h), (30, 22, 15, 125))
card_canvas.paste(shadow, (pad + 3, pad + 4))
card_canvas = card_canvas.filter(ImageFilter.GaussianBlur(8))
card_canvas.paste(card, (pad, pad), card)

rotated = card_canvas.rotate(-1.6, expand=True, resample=Image.Resampling.BICUBIC)

# Exact position covering the old macintosh:
card_px = rx1 + int(42 * scale_x) - pad
card_py = ry1 + int(405 * scale_y) - pad

spread.paste(rotated, (card_px, card_py), rotated)

# Washi tape strips
def paste_tape(img, x, y, w, h, angle):
    tape = Image.new('RGBA', (w, h), (225, 210, 180, 205))
    td = ImageDraw.Draw(tape)
    td.rectangle([0, 0, w-1, h-1], outline=(185, 170, 140, 190), width=1)
    rot_tape = tape.rotate(angle, expand=True, resample=Image.Resampling.BICUBIC)
    img.paste(rot_tape, (x, y), rot_tape)

paste_tape(spread, card_px + pad + 15, card_py + pad - 6, 56, 18, -20)
paste_tape(spread, card_px + pad + card_w - 65, card_py + pad - 4, 56, 18, 16)

spread.save(OUT_FINAL)
print(f'SUCCESS! Spread 02 (gardens-by-the-bay.png) saved to {OUT_FINAL} ({os.path.getsize(OUT_FINAL)} bytes)')
