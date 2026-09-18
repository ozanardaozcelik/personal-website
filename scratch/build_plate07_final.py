import os
import math
import numpy as np
import cv2
from PIL import Image, ImageDraw, ImageFont

p4_path = r'C:\Users\dloozi\.gemini\antigravity-cli\brain\af0d76d1-4e98-4245-9246-8ea4316a204d\plate04_robotics_1789635708664.jpg'
clean_paper_path = r'scratch/clean_paper_spread.png'

im_p4 = cv2.imread(p4_path)
H, W = im_p4.shape[:2] # 896, 1200

# 1. Seamless Clean Paper Insertion on Right Page (x: 575 to 1155, y: 38 to 858)
clean = cv2.imread(clean_paper_path)
pw = 1155 - 575 # 580
ph = 858 - 38   # 820

paper_crop = clean[310:930, 950:1610]
clean_resized = cv2.resize(paper_crop, (pw, ph))

bg_sample = im_p4[200:300, 480:520]
ratio = np.mean(bg_sample, axis=(0,1)) / (np.mean(clean_resized, axis=(0,1)) + 1e-5)
matched = np.clip(clean_resized * ratio, 0, 255).astype(np.uint8)

res = im_p4.copy()
res[38:858, 575:1155] = matched

plate_rgb = cv2.cvtColor(res, cv2.COLOR_BGR2RGB)
canvas_img = Image.fromarray(plate_rgb)
draw = ImageDraw.Draw(canvas_img)

# Fonts
font_head = ImageFont.truetype(r'C:\Windows\Fonts\georgiab.ttf', 13)
font_sec_head = ImageFont.truetype(r'C:\Windows\Fonts\georgiab.ttf', 11)
font_sub = ImageFont.truetype(r'C:\Windows\Fonts\georgiai.ttf', 10)
font_label = ImageFont.truetype(r'C:\Windows\Fonts\georgia.ttf', 10)
font_label_b = ImageFont.truetype(r'C:\Windows\Fonts\georgiab.ttf', 10)
font_italic = ImageFont.truetype(r'C:\Windows\Fonts\georgiai.ttf', 9)
font_mono = ImageFont.truetype(r'C:\Windows\Fonts\consola.ttf', 9)
font_mono_b = ImageFont.truetype(r'C:\Windows\Fonts\consolab.ttf', 10)
font_small = ImageFont.truetype(r'C:\Windows\Fonts\georgia.ttf', 8)
font_mini = ImageFont.truetype(r'C:\Windows\Fonts\georgia.ttf', 7)

# Colors matching Da Vinci aged sketchbook ink
INK_DEEP = (38, 30, 24)
INK_MED = (75, 60, 48)
INK_LIGHT = (120, 95, 75)
INK_FAINT = (165, 140, 115)
ACCENT_BLUE = (35, 70, 105)
ACCENT_GREEN = (40, 95, 45)
ACCENT_RED = (145, 45, 35)

# =====================================================================
# A. TOP HEADER OF RIGHT PAGE
# =====================================================================
draw.text((588, 48), "ÇÖZÜM MAKİNA AR-GE // ISEE ROBOTICS DİNAMİK SİSTEMLER", font=font_head, fill=INK_DEEP)
draw.line([(588, 68), (1145, 68)], fill=INK_MED, width=1)
draw.line([(588, 71), (1145, 71)], fill=INK_FAINT, width=1)

# Page number at top right
draw.text((1122, 48), "38", font=font_head, fill=INK_MED)

# Left page remains pristine and untouched


# =====================================================================
# C. SECTION 1: TRON 1 DİNAMİK ROBOTİK PLATFORMU (Top-Left of Right Page)
# X: 588 to 855, Y: 78 to 480
# =====================================================================
draw.text((588, 78), "TRON 1 DİNAMİK ROBOTİK", font=font_sec_head, fill=INK_DEEP)
draw.text((588, 93), "Biped / Hibrit Tekerlekli Denge", font=font_sub, fill=INK_LIGHT)

# Draw Tron 1 Elevation Blueprint
tx, ty = 740, 126  # center anchor for Tron 1

# Torso / Upper Body with Da Vinci sepia wash
draw.rounded_rectangle([(tx - 26, ty), (tx + 26, ty + 66)], radius=6, outline=INK_DEEP, fill=(235, 226, 210), width=2)
# Internal cross-hatching ribs
for ry in range(ty + 12, ty + 56, 6):
    draw.line([(tx - 20, ry), (tx + 20, ry)], fill=INK_LIGHT, width=1)
# Head / Depth Camera unit
draw.rounded_rectangle([(tx - 16, ty - 15), (tx + 16, ty)], radius=3, outline=INK_DEEP, fill=(225, 215, 195), width=2)
draw.ellipse([(tx - 9, ty - 11), (tx - 2, ty - 4)], outline=ACCENT_BLUE, width=2) # RGB lens
draw.ellipse([(tx + 2, ty - 11), (tx + 9, ty - 4)], outline=INK_MED, width=1) # Depth IR
draw.text((tx - 24, ty - 26), "RGB-D GÖRÜ", font=font_mono, fill=ACCENT_BLUE)

# Core IMU & Computer label
draw.rectangle([(tx - 18, ty + 20), (tx + 18, ty + 44)], outline=INK_MED, fill=(245, 238, 225), width=1)
draw.text((tx - 15, ty + 23), "INTEL/IMU", font=font_mono_b, fill=INK_DEEP)
draw.text((tx - 15, ty + 34), "ROS 2 DDS", font=font_mono, fill=ACCENT_BLUE)

# Left Leg (Point-foot stance)
# Hip joint J1
draw.ellipse([(tx - 32, ty + 62), (tx - 14, ty + 80)], outline=INK_DEEP, fill=(230, 220, 205), width=2)
draw.ellipse([(tx - 26, ty + 68), (tx - 20, ty + 74)], fill=INK_MED)
# Thigh link with architectural shading
draw.polygon([(tx - 26, ty + 76), (tx - 16, ty + 76), (tx - 32, ty + 152), (tx - 42, ty + 152)], outline=INK_DEEP, fill=(240, 232, 218), width=1)
# Knee actuator (Large circular modular motor with gear hatching)
draw.ellipse([(tx - 46, ty + 146), (tx - 22, ty + 170)], outline=INK_DEEP, fill=(228, 218, 202), width=2)
draw.ellipse([(tx - 38, ty + 154), (tx - 30, ty + 162)], fill=INK_MED)
for ang in range(0, 360, 45):
    rad = math.radians(ang)
    x1 = tx - 34 + int(6 * math.cos(rad))
    y1 = ty + 158 + int(6 * math.sin(rad))
    x2 = tx - 34 + int(10 * math.cos(rad))
    y2 = ty + 158 + int(10 * math.sin(rad))
    draw.line([(x1, y1), (x2, y2)], fill=INK_MED, width=1)
# Shank link
draw.line([(tx - 36, ty + 166), (tx - 26, ty + 236)], fill=INK_DEEP, width=3)
draw.line([(tx - 32, ty + 166), (tx - 22, ty + 236)], fill=INK_LIGHT, width=1)
# Point-foot ball
draw.ellipse([(tx - 32, ty + 235), (tx - 16, ty + 251)], outline=INK_DEEP, fill=INK_LIGHT, width=2)
draw.line([(tx - 42, ty + 251), (tx - 6, ty + 251)], fill=INK_FAINT, width=1)

# Right Leg (Active wheeled foot mode)
# Hip joint J2
draw.ellipse([(tx + 14, ty + 62), (tx + 32, ty + 80)], outline=INK_DEEP, fill=(230, 220, 205), width=2)
draw.ellipse([(tx + 20, ty + 68), (tx + 26, ty + 74)], fill=INK_MED)
# Thigh link
draw.polygon([(tx + 16, ty + 76), (tx + 26, ty + 76), (tx + 42, ty + 152), (tx + 32, ty + 152)], outline=INK_DEEP, fill=(240, 232, 218), width=1)
# Knee actuator
draw.ellipse([(tx + 22, ty + 146), (tx + 46, ty + 170)], outline=INK_DEEP, fill=(228, 218, 202), width=2)
draw.ellipse([(tx + 30, ty + 154), (tx + 38, ty + 162)], fill=INK_MED)
for ang in range(0, 360, 45):
    rad = math.radians(ang)
    x1 = tx + 34 + int(6 * math.cos(rad))
    y1 = ty + 158 + int(6 * math.sin(rad))
    x2 = tx + 34 + int(10 * math.cos(rad))
    y2 = ty + 158 + int(10 * math.sin(rad))
    draw.line([(x1, y1), (x2, y2)], fill=INK_MED, width=1)
# Shank link
draw.line([(tx + 36, ty + 166), (tx + 30, ty + 232)], fill=INK_DEEP, width=3)
# Wheeled foot module
draw.rounded_rectangle([(tx + 18, ty + 228), (tx + 42, ty + 238)], radius=2, outline=INK_DEEP, fill=(230, 220, 205), width=2)
draw.ellipse([(tx + 16, ty + 234), (tx + 44, ty + 254)], outline=INK_DEEP, fill=(242, 235, 222), width=2)
draw.ellipse([(tx + 24, ty + 240), (tx + 36, ty + 248)], fill=INK_MED)
draw.line([(tx + 8, ty + 254), (tx + 52, ty + 254)], fill=INK_FAINT, width=1)

# Annotations for Tron 1 (Clean Left Column)
draw.line([(tx - 26, ty + 32), (tx - 55, ty + 32)], fill=INK_MED, width=1)
draw.text((588, ty + 20), "• 48V Yüksek Tork", font=font_label_b, fill=INK_DEEP)
draw.text((588, ty + 32), "  80 Nm Aktüatör", font=font_mini, fill=INK_LIGHT)

draw.line([(tx - 46, ty + 158), (tx - 65, ty + 158)], fill=INK_MED, width=1)
draw.text((588, ty + 146), "• Harmonik Sürücü", font=font_label_b, fill=INK_DEEP)
draw.text((588, ty + 158), "  Diz Eklemi (J3)", font=font_mini, fill=INK_LIGHT)

draw.text((588, ty + 250), "• 3'ü 1 Arada Ayak:", font=font_label_b, fill=INK_DEEP)
draw.text((588, ty + 262), "  Nokta Ayak & Tekerlek", font=font_small, fill=ACCENT_BLUE)

draw.text((588, ty + 282), "✦ Sim2Real RL Denge", font=font_label_b, fill=INK_DEEP)
draw.text((588, ty + 295), "  Boy: 845mm · Ağırlık: 20kg", font=font_mini, fill=INK_MED)
draw.text((588, ty + 310), "τ = M(q)q̈ + C(q,q̇)q̇ + g(q)", font=font_mono, fill=INK_LIGHT)

# =====================================================================
# D. SECTION 2: M20 OTONOM MOBİL ROBOT / AMR (Top-Right of Right Page)
# X: 865 to 1145, Y: 78 to 480
# =====================================================================
draw.text((865, 78), "M20 OTONOM MOBİL ROBOT (AMR)", font=font_sec_head, fill=INK_DEEP)
draw.text((865, 93), "Endüstriyel LiDAR SLAM & Yük Taşıma", font=font_sub, fill=INK_LIGHT)

# Draw M20 Elevation / 3D Isometric View
mx, my = 1005, 172  # center anchor for M20

# Top Mounting Deck with sepia wash
draw.polygon([(mx - 85, my), (mx + 35, my - 24), (mx + 88, my), (mx - 32, my + 24)], outline=INK_DEEP, fill=(242, 235, 218), width=2)

# Chassis Body Box with hatching
draw.polygon([(mx - 85, my), (mx - 32, my + 24), (mx - 32, my + 90), (mx - 85, my + 66)], outline=INK_DEEP, fill=(236, 227, 210), width=2)
draw.polygon([(mx - 32, my + 24), (mx + 88, my), (mx + 88, my + 66), (mx - 32, my + 90)], outline=INK_DEEP, fill=(245, 238, 222), width=2)

# Protective Rubber Bumper at bottom of chassis
draw.line([(mx - 85, my + 62), (mx - 32, my + 86), (mx + 88, my + 62)], fill=INK_MED, width=3)

# 360° LiDAR Turret on top deck
lx_c, ly_c = mx - 12, my - 8
draw.rectangle([(lx_c - 13, ly_c - 26), (lx_c + 13, ly_c)], outline=INK_DEEP, fill=(230, 220, 205), width=2)
draw.ellipse([(lx_c - 13, ly_c - 32), (lx_c + 13, ly_c - 20)], outline=INK_DEEP, fill=(238, 230, 216), width=2)
draw.ellipse([(lx_c - 9, ly_c - 18), (lx_c + 9, ly_c - 10)], outline=ACCENT_GREEN, width=1) # Laser mirror
# LiDAR Scan Rays (Radial Fan)
for sang in range(-35, 45, 8):
    srad = math.radians(sang)
    sx_end = lx_c + int(60 * math.cos(srad))
    sy_end = (ly_c - 15) + int(32 * math.sin(srad))
    draw.line([(lx_c, ly_c - 15), (sx_end, sy_end)], fill=ACCENT_GREEN, width=1)
draw.text((lx_c + 18, ly_c - 33), "360° LiDAR SLAM", font=font_mono_b, fill=ACCENT_GREEN)

# Emergency Stop Button on Top Deck
draw.ellipse([(mx + 42, my - 8), (mx + 56, my + 2)], outline=ACCENT_RED, fill=ACCENT_RED, width=2)
draw.text((mx + 40, my + 5), "E-STOP", font=font_mono, fill=ACCENT_RED)

# Wheels of M20
# Front Right Drive Wheel
wx1, wy1 = mx - 18, my + 86
draw.ellipse([(wx1 - 17, wy1 - 17), (wx1 + 17, wy1 + 17)], outline=INK_DEEP, fill=(225, 215, 198), width=2)
draw.ellipse([(wx1 - 9, wy1 - 9), (wx1 + 9, wy1 + 9)], fill=INK_MED)
for a in range(0, 360, 40):
    ar = math.radians(a)
    draw.line([(wx1 + int(11*math.cos(ar)), wy1 + int(11*math.sin(ar))),
               (wx1 + int(17*math.cos(ar)), wy1 + int(17*math.sin(ar)))], fill=INK_DEEP, width=2)

# Rear Right Drive Wheel
wx2, wy2 = mx + 66, my + 64
draw.ellipse([(wx2 - 15, wy2 - 15), (wx2 + 15, wy2 + 15)], outline=INK_DEEP, fill=(225, 215, 198), width=2)
draw.ellipse([(wx2 - 7, wy2 - 7), (wx2 + 7, wy2 + 7)], fill=INK_MED)

# Front Left Caster Wheel
wx3, wy3 = mx - 70, my + 68
draw.ellipse([(wx3 - 11, wy3 - 11), (wx3 + 11, wy3 + 11)], outline=INK_DEEP, width=1)

# Ground Plane Line
draw.line([(mx - 90, my + 104), (mx + 98, my + 83)], fill=INK_FAINT, width=1)

# Status Panel on Chassis
draw.rectangle([(mx - 22, my + 42), (mx + 22, my + 70)], outline=INK_MED, fill=(245, 238, 225), width=1)
draw.text((mx - 18, my + 45), "IP66 / 48V", font=font_mono_b, fill=INK_DEEP)
draw.text((mx - 18, my + 56), "BATTERY BAY", font=font_mono, fill=INK_LIGHT)

# Annotations for M20
ay = my + 115
draw.text((865, ay), "• 360° LiDAR & 3D Nokta Bulutu", font=font_label_b, fill=INK_DEEP)
draw.text((865, ay + 14), "  Milisaniyelik SLAM Haritalama", font=font_small, fill=INK_LIGHT)

draw.text((865, ay + 30), "• Yüksek Torklu Hibrit / Omni Çekiş", font=font_label_b, fill=INK_DEEP)
draw.text((865, ay + 44), "  Fabrika zemininde pürüzsüz rota seyri", font=font_small, fill=INK_LIGHT)

draw.text((865, ay + 60), "• Endüstriyel IP66 & 40 kg Taşıma", font=font_label_b, fill=INK_DEEP)
draw.text((865, ay + 74), "  Nav2 otonom rota & dinamik engel aşma", font=font_small, fill=INK_LIGHT)

draw.text((865, ay + 90), "• Odometri: [ẋ ẏ θ̇]ᵀ = J · [ω_R ω_L]ᵀ", font=font_mono, fill=INK_LIGHT)

# Divider line between top and bottom sections
draw.line([(588, 482), (1145, 482)], fill=INK_MED, width=1)
draw.line([(588, 485), (1145, 485)], fill=INK_FAINT, width=1)

# =====================================================================
# E. SECTION 3: ROBOT KONTROL VE TELEMETRİ TAKİP ARAYÜZÜ (HMI DASHBOARD)
# Spans X: 588 to 1145, Y: 494 to 846
# =====================================================================
# Outer Monitor Frame / Industrial Touch Panel
draw.rounded_rectangle([(588, 496), (1145, 846)], radius=8, outline=INK_DEEP, width=2)
# Corner Allen Bolts
for bx, by in [(596, 504), (1137, 504), (596, 838), (1137, 838)]:
    draw.ellipse([(bx - 3, by - 3), (bx + 3, by + 3)], outline=INK_MED, width=1)
    draw.line([(bx - 2, by), (bx + 2, by)], fill=INK_MED, width=1)

# Screen Bezel
draw.rectangle([(602, 514), (1131, 830)], outline=INK_MED, fill=(244, 237, 222), width=1)

# Monitor Header Bar
draw.rectangle([(602, 514), (1131, 538)], fill=(225, 214, 196), outline=INK_MED, width=1)
draw.text((612, 520), "ISEE ROBOTICS // KONTROL & TELEMETRİ TAKİP ARAYÜZÜ", font=font_mono_b, fill=INK_DEEP)
draw.text((955, 520), "DURUM: AKTİF [ONLINE]", font=font_mono_b, fill=ACCENT_GREEN)
draw.text((1085, 520), "3.2 ms", font=font_mono, fill=ACCENT_BLUE)

# Subpanel 1: 2D SLAM & Waypoint Takip Haritası (X: 610 to 775, Y: 544 to 822)
draw.rectangle([(610, 544), (775, 822)], outline=INK_MED, width=1)
draw.text((616, 549), "2D SLAM & ROTA TAKİBİ", font=font_mono_b, fill=INK_DEEP)
# Grid lines for map
for gx in range(625, 770, 20):
    draw.line([(gx, 566), (gx, 796)], fill=(220, 210, 195), width=1)
for gy in range(566, 800, 20):
    draw.line([(615, gy), (770, gy)], fill=(220, 210, 195), width=1)

# Obstacle walls
draw.line([(630, 580), (680, 580)], fill=INK_DEEP, width=2)
draw.line([(680, 580), (680, 620)], fill=INK_DEEP, width=2)
draw.line([(715, 665), (760, 665)], fill=INK_DEEP, width=2)
draw.rectangle([(640, 675), (665, 700)], outline=INK_MED, fill=(210, 198, 180), width=1) # Station

# Smooth Waypoints & Planned Spline Path
waypoints = [(628, 770), (645, 735), (680, 700), (715, 630), (745, 595)]
for i in range(len(waypoints) - 1):
    draw.line([waypoints[i], waypoints[i+1]], fill=ACCENT_BLUE, width=2)
for i, wp in enumerate(waypoints):
    draw.ellipse([(wp[0]-3, wp[1]-3), (wp[0]+3, wp[1]+3)], fill=ACCENT_RED if i == len(waypoints)-1 else ACCENT_BLUE)
    draw.text((wp[0]+5, wp[1]-6), f"WP{i+1}", font=font_small, fill=INK_DEEP)

# Current Robot Position Icon (at WP2)
rx_cur, ry_cur = 645, 735
draw.ellipse([(rx_cur-6, ry_cur-6), (rx_cur+6, ry_cur+6)], outline=ACCENT_GREEN, width=2)
draw.line([(rx_cur, ry_cur), (rx_cur+10, ry_cur-10)], fill=ACCENT_GREEN, width=2) # heading
draw.arc([(rx_cur-22, ry_cur-22), (rx_cur+22, ry_cur+22)], start=-60, end=30, fill=ACCENT_GREEN)

# Map Status text
draw.text((616, 804), "Pose: (6.4m, 3.2m) | Rota: AKTİF", font=font_mono, fill=INK_MED)

# Subpanel 2: Gerçek Zamanlı Telemetri Grafikleri (X: 785 to 980, Y: 544 to 822)
draw.rectangle([(785, 544), (980, 822)], outline=INK_MED, width=1)
draw.text((792, 549), "KİNEMATİK & HIZ TELEMETRİSİ", font=font_mono_b, fill=INK_DEEP)

# Waveform Screen 1: Velocity v(t)
draw.rectangle([(792, 566), (972, 626)], outline=INK_FAINT, fill=(238, 230, 215), width=1)
draw.text((796, 570), "Hız v(t) [m/s]", font=font_mono, fill=ACCENT_BLUE)
pts_v = []
for idx, x in enumerate(range(795, 970, 4)):
    val = math.sin(idx * 0.25) * 14 + math.cos(idx * 0.1) * 5
    pts_v.append((x, int(600 - val)))
for i in range(len(pts_v)-1):
    draw.line([pts_v[i], pts_v[i+1]], fill=ACCENT_BLUE, width=1)
draw.text((920, 612), "1.25 m/s", font=font_mono_b, fill=ACCENT_BLUE)

# Waveform Screen 2: Joint Torques tau(t)
draw.rectangle([(792, 634), (972, 694)], outline=INK_FAINT, fill=(238, 230, 215), width=1)
draw.text((796, 638), "Eklem Torku τ_J [Nm]", font=font_mono, fill=INK_DEEP)
pts_tau = []
for idx, x in enumerate(range(795, 970, 4)):
    val = math.sin(idx * 0.4) * 11 + math.sin(idx * 0.7) * 7
    pts_tau.append((x, int(668 - val)))
for i in range(len(pts_tau)-1):
    draw.line([pts_tau[i], pts_tau[i+1]], fill=INK_DEEP, width=1)
draw.text((920, 680), "24.6 Nm", font=font_mono_b, fill=INK_DEEP)

# Telemetry Sensors Stats
draw.text((792, 705), "• Pil Voltajı: 48.4 V ( %96 )", font=font_mono, fill=INK_DEEP)
draw.text((792, 719), "• Motor Sıcaklığı: 38.2 °C (Normal)", font=font_mono, fill=INK_DEEP)
draw.text((792, 733), "• Gazebo Harmonic Fizik: SENKRON (%100)", font=font_mono, fill=ACCENT_BLUE)
draw.text((792, 747), "• İletişim: 100 Hz MQTT & DDS Köprüsü", font=font_mono, fill=ACCENT_GREEN)
draw.text((792, 761), "• Aktif Topic: /cmd_vel, /odom, /tf", font=font_mono, fill=INK_LIGHT)
draw.text((792, 779), "• DART Fizik Motoru Dijital İkiz Doğrulama", font=font_small, fill=INK_MED)
draw.text((792, 802), "✦ Telemetri & Veri Akışı Kusursuz", font=font_label_b, fill=ACCENT_GREEN)

# Subpanel 3: Operatör Kontrol Paneli (X: 990 to 1122, Y: 544 to 822)
draw.rectangle([(990, 544), (1122, 822)], outline=INK_MED, width=1)
draw.text((996, 549), "KONTROL & MOD", font=font_mono_b, fill=INK_DEEP)

# Mode Selector Buttons
draw.rounded_rectangle([(996, 568), (1116, 592)], radius=3, outline=ACCENT_GREEN, fill=(225, 238, 225), width=2)
draw.text((1004, 575), "● OTONOM GÖREV", font=font_mono_b, fill=ACCENT_GREEN)

draw.rounded_rectangle([(996, 598), (1116, 622)], radius=3, outline=INK_MED, fill=None, width=1)
draw.text((1004, 605), "○ MANUEL TELEOP", font=font_mono, fill=INK_MED)

draw.rounded_rectangle([(996, 628), (1116, 652)], radius=3, outline=INK_MED, fill=None, width=1)
draw.text((1004, 635), "○ GAZEBO SİMÜLE", font=font_mono, fill=INK_MED)

# Virtual D-Pad / Directional Controller
cx_dp, cy_dp = 1056, 704
draw.rectangle([(cx_dp - 9, cy_dp - 26), (cx_dp + 9, cy_dp - 10)], outline=INK_MED, fill=(230, 220, 205), width=1) # Up
draw.rectangle([(cx_dp - 9, cy_dp + 10), (cx_dp + 9, cy_dp + 26)], outline=INK_MED, fill=(230, 220, 205), width=1) # Down
draw.rectangle([(cx_dp - 26, cy_dp - 9), (cx_dp - 10, cy_dp + 9)], outline=INK_MED, fill=(230, 220, 205), width=1) # Left
draw.rectangle([(cx_dp + 10, cy_dp - 9), (cx_dp + 26, cy_dp + 9)], outline=INK_MED, fill=(230, 220, 205), width=1) # Right
draw.ellipse([(cx_dp - 7, cy_dp - 7), (cx_dp + 7, cy_dp + 7)], outline=INK_DEEP, fill=INK_LIGHT, width=1) # Center
draw.text((cx_dp - 24, cy_dp + 29), "YÖN KONTROLÜ", font=font_small, fill=INK_LIGHT)

# Emergency Stop Tactile Button (Red E-Stop)
draw.rounded_rectangle([(996, 765), (1116, 805)], radius=5, outline=ACCENT_RED, fill=(245, 225, 225), width=2)
draw.ellipse([(1004, 775), (1022, 793)], fill=ACCENT_RED)
draw.text((1028, 777), "ACİL STOP", font=font_mono_b, fill=ACCENT_RED)
draw.text((1028, 788), "[E-STOP]", font=font_mono, fill=ACCENT_RED)

# Save result
out_plate_path = r'scratch/plate07_robotics_final.jpg'
canvas_img.save(out_plate_path, quality=95)
print(f"Refined Plate 07 successfully saved to {out_plate_path}!")
