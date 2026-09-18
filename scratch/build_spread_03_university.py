import os
from PIL import Image, ImageDraw, ImageFont
import numpy as np

SPREAD_BASE = r'scratch/clean_paper_spread.png'
OUT_FINAL = r'public/landing-pages/meng-to-sketchbook/merlion.png'
ILLUS_PATH = r'C:\Users\dloozi\.gemini\antigravity-cli\brain\af0d76d1-4e98-4245-9246-8ea4316a204d\plate02_university_1789635671917.jpg'

spread = Image.open(SPREAD_BASE).convert('RGBA')
spread_arr = np.array(spread)
alpha_orig = spread_arr[:, :, 3]

# Crisp, elegant typography
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

canvas = Image.new('RGBA', (1760, 1240), (0, 0, 0, 0))
draw = ImageDraw.Draw(canvas)

LX = 145
LY = 285
MAX_W = 670

# 1. Kicker & Plate Number
draw.text((LX, LY), 'BÖLÜM 03 // LİSANS EĞİTİMİ · TEKİRDAĞ NKÜ', font=font_kicker, fill=EARTH)
draw.text((LX + MAX_W - 70, LY), 'LEVHA 03', font=font_kicker, fill=INK_FAINT)
draw.line([(LX, LY + 24), (LX + MAX_W, LY + 24)], fill=RULE_COLOR, width=1)

# 2. Title & Subtitle
draw.text((LX, LY + 36), 'Mühendislik Temeli & Akademik Disiplin', font=font_title, fill=INK_DEEP)
draw.text((LX, LY + 76), 'Tekirdağ Namık Kemal Üniversitesi — Bilgisayar Mühendisliği', font=font_sub, fill=EARTH)
draw.line([(LX, LY + 112), (LX + 140, LY + 112)], fill=EARTH, width=1)

# 3. Main Body Text
# Omitted the previous lead with 'yüksek onur'
# Removed 'amfilerde' from the second sentence
body_text = (
    'Veri yapıları, algoritmalar, ayrık matematik, işletim sistemleri ve sistem mimarileri '
    'üzerine inşa edilen bu dönem; teorik hesaplama prensiplerini pratik mühendislik çözümlerine '
    'dönüştürme vizyonumu güçlendirdi. Matematiksel temelleri araştırma-geliştirme disipliniyle harmanladım.'
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

curr_y = LY + 138
for line in wrap_text(body_text, font_body, MAX_W, draw):
    draw.text((LX, curr_y), line, font=font_body, fill=INK_DEEP)
    curr_y += 34

curr_y += 28
note_text = '✦ "Temel matematik ve veri yapıları ne kadar sağlam olursa, inşa edilen otonom mimari o kadar yüksek irtifalara ulaşır."'
for line in wrap_text(note_text, font_note, MAX_W, draw):
    draw.text((LX, curr_y), line, font=font_note, fill=INK_FAINT)
    curr_y += 24

curr_y += 18
signature_text = '[Tekirdağ Namık Kemal Üniversitesi — Bilgisayar Mühendisliği]'
draw.text((LX, curr_y), signature_text, font=font_signature, fill=INK_FAINT)

# 4. Right Page Illustration (University campus and robotics/logic plate)
if os.path.exists(ILLUS_PATH):
    im_illus = Image.open(ILLUS_PATH).convert('RGBA')
    im_resized = im_illus.resize((720, 660), Image.Resampling.LANCZOS)
    canvas.paste(im_resized, (925, 285))

# 5. Composite with Multiply Blend
canvas_arr = np.array(canvas)
out_arr = np.zeros_like(spread_arr)

base_rgb = spread_arr[:, :, :3].astype(float)
canvas_rgb = canvas_arr[:, :, :3].astype(float)
canvas_alpha = canvas_arr[:, :, 3].astype(float) / 255.0

for c in range(3):
    out_arr[:, :, c] = np.clip(
        base_rgb[:, :, c] * (1.0 - canvas_alpha) + (base_rgb[:, :, c] * canvas_rgb[:, :, c] / 255.0) * canvas_alpha,
        0, 255
    ).astype(np.uint8)

out_arr[:, :, 3] = alpha_orig

res = Image.fromarray(out_arr, 'RGBA')
res.save(OUT_FINAL)
print(f'SUCCESS! Spread 03 (merlion.png) saved to {OUT_FINAL} ({os.path.getsize(OUT_FINAL)} bytes)')
