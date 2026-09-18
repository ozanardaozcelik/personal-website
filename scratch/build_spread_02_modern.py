import os
import cv2
import numpy as np
from PIL import Image, ImageDraw, ImageFont

SPREAD_BASE = r'scratch/clean_paper_spread.png'
OUT_FINAL = r'public/landing-pages/meng-to-sketchbook/gardens-by-the-bay.png'

# 1. Load clean paper spread
spread = Image.open(SPREAD_BASE).convert('RGBA')
sw_w, sw_h = spread.size

# ==================== LEFT PAGE: TYPOGRAPHY ====================
text_canvas = Image.new('RGBA', spread.size, (0, 0, 0, 0))
draw = ImageDraw.Draw(text_canvas)

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

LX = 145
LY = 285
MAX_W = 670

# Kicker & Plate Number
draw.text((LX, LY), 'BÖLÜM 02 // LİSE DÖNEMİ · KIRIMLI FAZİLET OLCAY A.L.', font=font_kicker, fill=EARTH)
draw.text((LX + MAX_W - 70, LY), 'LEVHA 02', font=font_kicker, fill=INK_FAINT)
draw.line([(LX, LY + 22), (LX + MAX_W, LY + 22)], fill=RULE_COLOR, width=1)

# Title & Subtitle
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

# Multiply blend text onto left page
spread_arr = np.array(spread).astype(float)
t_arr = np.array(text_canvas).astype(float)
alpha = t_arr[:, :, 3] / 255.0

for c in range(3):
    spread_arr[:, :, c] = np.clip(
        spread_arr[:, :, c] * (1.0 - alpha) + (spread_arr[:, :, c] * t_arr[:, :, c] / 255.0) * alpha,
        0, 255
    )

# ==================== RIGHT PAGE: UNIFIED VINTAGE SKETCH ====================
# 1. Load original high school plate
plate_bgr = cv2.imread(r'C:\Users\dloozi\.gemini\antigravity-cli\brain\af0d76d1-4e98-4245-9246-8ea4316a204d\plate01_highschool_1789635648017.jpg')
ph, pw = plate_bgr.shape[:2] # 896, 1200

# Extract clean ink line art
gray_plate = cv2.cvtColor(plate_bgr, cv2.COLOR_BGR2GRAY)
bg_estimate = cv2.GaussianBlur(gray_plate, (101, 101), 0)
plate_norm = (gray_plate.astype(float) / np.maximum(bg_estimate.astype(float), 1.0)) * 255.0
plate_lines = np.clip((plate_norm - 215) * (255.0 / (255.0 - 215)), 0, 255)
plate_lines = np.where(plate_norm < 205, (plate_norm / 205.0) ** 1.25 * 205.0, 255.0)
plate_lines = np.clip(plate_lines, 0, 255).astype(np.uint8)

# Erase old 1984 Macintosh cleanly
mask_old_mac = np.zeros((ph, pw), dtype=np.uint8)
pts_mac = np.array([
    [20, 440],
    [335, 440],
    [380, 520],
    [485, 540],
    [495, 875],
    [20, 875]
], dtype=np.int32)
cv2.fillPoly(mask_old_mac, [pts_mac], 255)
mask_feather = cv2.GaussianBlur(mask_old_mac.astype(float), (21, 21), 0) / 255.0
plate_clean = (plate_lines.astype(float) * (1.0 - mask_feather) + 255.0 * mask_feather).astype(np.uint8)

# 2. Build 2018–2020 Modern Computer Setup with algorithm code on screen
desk = cv2.imread('scratch/modern_pc_desk.jpg')
sx1, sy1 = 295, 55
sx2, sy2 = 1065, 565
sw, sh = sx2 - sx1, sy2 - sy1

# Render crisp code inside screen
code_img = Image.new('RGB', (sw, sh), (255, 255, 255))
d = ImageDraw.Draw(code_img)

font_mono = ImageFont.truetype(r'C:\Windows\Fonts\consola.ttf', 16)
font_mono_b = ImageFont.truetype(r'C:\Windows\Fonts\consolab.ttf', 17)

# Header
d.rectangle([0, 0, sw, 34], fill=(238, 238, 238))
d.text((16, 8), 'o o o  algoritma_gelistirme.py -- Modern IDE', font=font_mono_b, fill=(45, 45, 45))

code_lines = [
    '# --- Kirimli Fazilet Olcay A.L. // Kodlama & Algoritma ---',
    '',
    'def ikili_arama(dizi, hedef):',
    '    sol = 0',
    '    sag = len(dizi) - 1',
    '    ',
    '    while sol <= sag:',
    '        orta = (sol + sag) // 2',
    '        if dizi[orta] == hedef:',
    '            return orta  # Hedef indeks bulundu',
    '        elif dizi[orta] < hedef:',
    '            sol = orta + 1',
    '        else:',
    '            sag = orta - 1',
    '            ',
    '    return -1  # Mantiksal analiz tamamlandi',
    '',
    '# Karmasiklik: O(log N) -- Sirali Arama Algoritmasi',
    '# Rasyonel Algoritmik Dusunce Modeli'
]

cy = 50
for i, line in enumerate(code_lines):
    d.text((18, cy), f'{i+1:2d}', font=font_mono, fill=(160, 160, 160))
    d.text((58, cy), line, font=font_mono, fill=(20, 20, 20))
    cy += 24

desk_screen = desk.copy()
desk_screen[sy1:sy2, sx1:sx2] = np.array(code_img)[:, :, ::-1]

# Crop tightly around monitor, keyboard, mouse (clean of extraneous peripheral clutter on left)
# x: 285..1280 (removes saucer & phone), y: 35..870
crop_desk = desk_screen[35:870, 285:1280]

gray_pc = cv2.cvtColor(crop_desk, cv2.COLOR_BGR2GRAY)
smooth_pc = cv2.bilateralFilter(gray_pc, 7, 50, 50)
inv_pc = 255 - smooth_pc
blur_pc = cv2.GaussianBlur(inv_pc, (15, 15), 0)
sketch_pc = cv2.divide(smooth_pc, 255 - blur_pc, scale=256)
canny_pc = cv2.Canny(smooth_pc, 45, 130)
sketch_lines_pc = cv2.min(sketch_pc, 255 - canny_pc)

# Pure white background adjustment
s_float = sketch_lines_pc.astype(float)
s_res = np.where(s_float > 190, 255.0, (s_float / 190.0) ** 1.35 * 255.0)
s_res = np.clip(s_res, 0, 255).astype(np.uint8)

# Resize to fit seamlessly into bottom-left plate area
target_w = 410
pch, pcw = s_res.shape[:2]
target_h = int(target_w * (pch / pcw))
pc_resized = cv2.resize(s_res, (target_w, target_h), interpolation=cv2.INTER_AREA)

# Place into plate
bx = 60
by = 485
roi = plate_clean[by:by+target_h, bx:bx+target_w]
plate_clean[by:by+target_h, bx:bx+target_w] = np.minimum(roi, pc_resized)

# 3. Add Leonardo da Vinci sketchbook handwritten annotations
plate_pil = Image.fromarray(plate_clean).convert('RGB')
draw_plate = ImageDraw.Draw(plate_pil)

font_anno_title = ImageFont.truetype(r'C:\Windows\Fonts\georgiab.ttf', 12)
font_anno_hand = ImageFont.truetype(r'C:\Windows\Fonts\segoesc.ttf', 11)
font_anno_sub = ImageFont.truetype(r'C:\Windows\Fonts\georgiai.ttf', 10)

INK_LABEL = (42, 34, 25)
INK_MUTED = (90, 75, 60)
LINE_COLOR = (140, 115, 90)

# Annotation above monitor
draw_plate.text((bx + 8, by - 22), "MODERN ÇALIŞMA ALANI // 2018–2020", font=font_anno_title, fill=INK_LABEL)
draw_plate.line([(bx + 8, by - 6), (bx + 265, by - 6)], fill=LINE_COLOR, width=1)

# Annotations under keyboard (using standard ASCII/serif characters)
draw_plate.text((bx + 15, by + target_h + 10), "Algoritmalar & Mantıksal Çözümleme — Kırımlı Fazilet Olcay A.L.", font=font_anno_hand, fill=INK_LABEL)
draw_plate.text((bx + 15, by + target_h + 28), "İnce çerçeveli ekran, mekanik klavye & Python geliştirme ortamı", font=font_anno_sub, fill=INK_MUTED)

# Connecting arrow to logic flowchart
draw_plate.line([(bx + target_w - 20, by + 100), (bx + target_w + 35, by + 100)], fill=LINE_COLOR, width=1)
draw_plate.line([(bx + target_w + 35, by + 100), (bx + target_w + 35, 540)], fill=LINE_COLOR, width=1)
draw_plate.polygon([(bx + target_w + 32, 540), (bx + target_w + 38, 540), (bx + target_w + 35, 546)], fill=LINE_COLOR)
draw_plate.text((bx + target_w - 18, by + 86), "mantık akışı ->", font=font_anno_sub, fill=INK_LABEL)

# ==================== BLEND FULL SKETCH ONTO RIGHT PAGE ====================
pw_target, ph_target = 720, 660
plate_final_resized = plate_pil.resize((pw_target, ph_target), Image.Resampling.LANCZOS)
p_final_arr = np.array(plate_final_resized).astype(float)

rx1, ry1 = 925, 285
rx2, ry2 = rx1 + pw_target, ry1 + ph_target

# Deep sepia ink color for rich Leonardo da Vinci sketch feel
ink_sepia = np.array([28.0, 20.0, 14.0])

for c in range(3):
    p_chan = p_final_arr[:, :, c] / 255.0
    p_contrasted = p_chan ** 1.2
    factor = 1.0 - (1.0 - p_contrasted) * (1.0 - ink_sepia[c] / 255.0)
    spread_arr[ry1:ry2, rx1:rx2, c] = np.clip(spread_arr[ry1:ry2, rx1:rx2, c] * factor, 0, 255)

# Save result
final_spread = Image.fromarray(spread_arr.astype(np.uint8), 'RGBA')
final_spread.save(OUT_FINAL)

# Also overwrite scratch/build_spread_02_modern.py so the script pipeline is in sync
print(f'SUCCESS! Updated gardens-by-the-bay.png saved to {OUT_FINAL} ({os.path.getsize(OUT_FINAL)} bytes)')
