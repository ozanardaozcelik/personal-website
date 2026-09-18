import os
from PIL import Image, ImageDraw, ImageFont
import numpy as np

SPREAD_BASE = r'scratch/clean_paper_spread.png'
OUT_FINAL = r'public/landing-pages/meng-to-sketchbook/buddha-tooth.png'
ILLUS_PATH = r'C:\Users\dloozi\.gemini\antigravity-cli\brain\af0d76d1-4e98-4245-9246-8ea4316a204d\plate07_martur_ai_1789635782335.jpg'

spread = Image.open(SPREAD_BASE).convert('RGBA')
spread_arr = np.array(spread)
alpha_orig = spread_arr[:, :, 3]

# Crisp, elegant typography
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

canvas = Image.new('RGBA', (1760, 1240), (0, 0, 0, 0))
draw = ImageDraw.Draw(canvas)

LX = 145
LY = 285
MAX_W = 670

# 1. Kicker & Plate Number
draw.text((LX, LY), 'BÖLÜM 04 // KURUMSAL AR-GE · MARTUR FOMPAK', font=font_kicker, fill=EARTH)
draw.text((LX + MAX_W - 70, LY), 'LEVHA 04', font=font_kicker, fill=INK_FAINT)
draw.line([(LX, LY + 22), (LX + MAX_W, LY + 22)], fill=RULE_COLOR, width=1)

# 2. Title & Subtitle
draw.text((LX, LY + 32), 'Şirket İçi Kurumsal Yapay Zeka', font=font_title, fill=INK_DEEP)
draw.text((LX, LY + 68), 'Martur Fompak International Stajı & Projeleri', font=font_sub, fill=EARTH)

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

# Lead text: 'otomotiv devi' changed to 'otomotiv fabrikası'
lead_text = 'Otomotiv fabrikası Martur Fompak International bünyesinde şirket içi yapay zeka sistemleri ve karar mimarileri geliştirdim.'
curr_y = LY + 102
for line in wrap_text(lead_text, font_italic, MAX_W, draw):
    draw.text((LX, curr_y), line, font=font_italic, fill=EARTH)
    curr_y += 24

curr_y += 10
draw.line([(LX, curr_y), (LX + 120, curr_y)], fill=EARTH, width=1)
curr_y += 14

# Body text: Department needs, Agentic AI, and learning dynamic business life
body_text = (
    'Şirket içindeki farklı departmanların operasyonel ihtiyaçları doğrultusunda yapay zeka modelleri '
    'geliştirdim. Üretim süreçlerini ve operasyonel verimliliği artıran LLM destekli çoklu ajan '
    '(Agentic AI) otomasyon iş akışlarını hayata geçirdim. Bu süreç benim için kurumsal şirket dinamiklerini '
    'sahada deneyimlediğim ve dinamik iş hayatını öğrendiğim güçlü bir başlangıç oldu.'
)

for line in wrap_text(body_text, font_body, MAX_W, draw):
    draw.text((LX, curr_y), line, font=font_body, fill=INK_DEEP)
    curr_y += 27

curr_y += 16
note_text = '✦ "Endüstriyel süreçlerde otonomi: Veri akışlarının kurumsal çoklu ajan mimarileriyle hızlandırılması."'
draw.text((LX, curr_y), note_text, font=font_note, fill=INK_FAINT)
curr_y += 20

signature_text = '[Martur Fompak International — Kurumsal Yapay Zeka Stajı & Projeleri]'
draw.text((LX, curr_y), signature_text, font=font_signature, fill=INK_FAINT)

# 3. Right Page: Plate 07 Martur AI Multi-Agent & Factory assembly
if os.path.exists(ILLUS_PATH):
    im_illus = Image.open(ILLUS_PATH).convert('RGBA')
    im_resized = im_illus.resize((720, 660), Image.Resampling.LANCZOS)
    canvas.paste(im_resized, (925, 285))

# 4. Multiply Blend onto spread paper
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
print(f'SUCCESS! Spread 04 (buddha-tooth.png) saved to {OUT_FINAL} ({os.path.getsize(OUT_FINAL)} bytes)')
