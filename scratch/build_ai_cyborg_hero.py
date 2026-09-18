import cv2
import numpy as np
from PIL import Image

ARTIFACT_DIR = r"C:\Users\dloozi\.gemini\antigravity-cli\brain\af0d76d1-4e98-4245-9246-8ea4316a204d"
OUT_DIR = r"C:\Users\dloozi\Desktop\codes\personal-website\public"

TOP_SRC = ARTIFACT_DIR + r"\ozan_cyborg_ai_top_1789746783353.jpg"
ROBOT_FACE_SRC = ARTIFACT_DIR + r"\ozan_robot_right_shifted_1789746501403.jpg"

TARGET_W, TARGET_H = 1920, 1080

# ── High-Tech Cyber BGR Colors ──
CYAN    = (255, 220, 0)     # #00dcff
AMBER   = (0, 160, 255)     # #ffa000
GREEN   = (80, 235, 80)     # #50eb50
WHITE   = (250, 250, 250)
DARK_BG = (10, 12, 16)

def build_composite_bottom():
    top = cv2.imread(TOP_SRC)
    bot_src = cv2.imread(ROBOT_FACE_SRC)
    h, w = top.shape[:2]

    # Shift robot skull from x=865 to x=690 (dx = -175, dy = -25)
    M = np.float32([[1, 0, -175], [0, 1, -25]])
    bot_aligned = cv2.warpAffine(bot_src, M, (w, h), borderMode=cv2.BORDER_REFLECT)

    # Smooth mask for robot head and skull
    mask = np.zeros((h, w), dtype=np.float32)
    cv2.ellipse(mask, (690, 260), (160, 230), 0, 0, 360, 1.0, -1)
    mask = cv2.GaussianBlur(mask, (35, 35), 0)
    mask_3ch = np.repeat(mask[:, :, np.newaxis], 3, axis=2)

    composite = (bot_aligned * mask_3ch + top * (1.0 - mask_3ch)).astype(np.uint8)
    return composite

def draw_cyber_box(overlay, px1, py1, px2, py2, label, score, primary=CYAN, accent=AMBER, class_id=None, glow=False, tag_pos="top", font_scale_custom=None):
    box_thick = 2 if glow else 1

    # Boundary box
    cv2.rectangle(overlay, (px1, py1), (px2, py2), primary, box_thick, cv2.LINE_AA)

    # Corner brackets
    clen = max(16, min(34, (px2 - px1) // 5, (py2 - py1) // 5))
    bracket_thick = 3 if glow else 2
    for cx, cy, dx, dy in [
        (px1, py1, 1, 1), (px2, py1, -1, 1),
        (px1, py2, 1, -1), (px2, py2, -1, -1)
    ]:
        cv2.line(overlay, (cx, cy), (cx + dx * clen, cy), accent, bracket_thick, cv2.LINE_AA)
        cv2.line(overlay, (cx, cy), (cx, cy + dy * clen), accent, bracket_thick, cv2.LINE_AA)

    # Tag label text
    tag_text = f"[{class_id}] {label} {score:.1f}%" if score is not None else f"[{class_id}] {label}"
    font = cv2.FONT_HERSHEY_SIMPLEX
    font_scale = font_scale_custom if font_scale_custom is not None else (0.44 if glow else 0.41)
    thickness = 1
    (tw, th), _ = cv2.getTextSize(tag_text, font, font_scale, thickness)

    tag_w = tw + 20
    tag_h = th + 12
    tag_x1 = max(4, min(px1, TARGET_W - tag_w - 4))
    tag_x2 = tag_x1 + tag_w

    if tag_pos == "bottom":
        tag_y1 = py2
        tag_y2 = min(TARGET_H - 4, py2 + tag_h)
        text_y = py2 + th + 4
    else:
        if py1 - tag_h > 4:
            tag_y1 = py1 - tag_h
            tag_y2 = py1
        else:
            tag_y1 = py1 + 2
            tag_y2 = py1 + tag_h + 2
        text_y = tag_y2 - 6

    # Dark background badge with cyber outline
    cv2.rectangle(overlay, (tag_x1, tag_y1), (tag_x2, tag_y2), DARK_BG, -1)
    cv2.rectangle(overlay, (tag_x1, tag_y1), (tag_x2, tag_y2), primary, 1, cv2.LINE_AA)
    cv2.putText(overlay, tag_text, (tag_x1 + 10, text_y), font, font_scale, WHITE, thickness, cv2.LINE_AA)

    # Center tracking reticle
    cx_center = (px1 + px2) // 2
    cy_center = (py1 + py2) // 2
    cv2.drawMarker(overlay, (cx_center, cy_center), primary, cv2.MARKER_CROSS, 10 if glow else 6, 1, cv2.LINE_AA)

def add_cyber_particles(overlay, count=70):
    np.random.seed(42)
    for _ in range(count):
        x = np.random.randint(20, TARGET_W - 20)
        y = np.random.randint(20, TARGET_H - 20)
        cv2.circle(overlay, (x, y), 1, CYAN, -1)

# Scaled boxes in 1920x1080
# Scaling factors from 1376x768 to 1920x1080: sx = 1920/1376 ~ 1.395, sy = 1080/768 = 1.40625
sx = 1920.0 / 1376.0
sy = 1080.0 / 768.0

BOX_SPECS = [
    # 1. Main Engineer Face Box (Head & Shoulders) — TAG AT BOTTOM FOR MAXIMUM READABILITY!
    (int(515 * sx), int(35 * sy), int(865 * sx), int(520 * sy), "ENGINEER: OZAN ARDA OZCELIK", 100.0, CYAN, AMBER, "AI:CYBORG", "bottom", 0.48),
    # 2. Cyber Visor / Optical HUD
    (int(535 * sx), int(210 * sy), int(845 * sx), int(325 * sy), "NEURAL_HUD_VISOR", 99.8, AMBER, CYAN, "OPTIC", "top", None),
    # 3. UR5 Robot Arm (Left)
    (int(15 * sx), int(220 * sy), int(420 * sx), int(585 * sy), "ROBOT_ARM_UR5", 98.8, CYAN, GREEN, "ACTUATOR", "top", None),
    # 4. UAV Drone (Right)
    (int(970 * sx), int(330 * sy), int(1365 * sx), int(615 * sy), "AUTONOMOUS_UAV", 99.4, CYAN, AMBER, "AERIAL", "top", None),
    # 5. Floating Circuit Hologram (Left-Center)
    (int(240 * sx), int(75 * sy), int(455 * sx), int(255 * sy), "SCHEMATIC_LOGIC", 99.1, CYAN, AMBER, "HOLO", "top", None),
    # 6. Telemetry Monitor (Top-Right)
    (int(1025 * sx), int(80 * sy), int(1235 * sx), int(200 * sy), "TELEMETRY_GCS", 98.4, GREEN, CYAN, "MONITOR", "top", None),
]

def generate():
    # 1. TOP LAYER: AI Cyborg Engineer (Clean, Futuristic, Cybernetic)
    top_raw = Image.open(TOP_SRC).convert("RGB")
    top_1080 = top_raw.resize((TARGET_W, TARGET_H), Image.Resampling.LANCZOS)
    top_bgr = cv2.cvtColor(np.array(top_1080), cv2.COLOR_RGB2BGR)

    top_overlay = np.zeros_like(top_bgr)
    for px1, py1, px2, py2, label, score, primary, accent, cid, tag_pos, fscale in BOX_SPECS:
        draw_cyber_box(top_overlay, px1, py1, px2, py2, label, score, primary, accent, cid, glow=False, tag_pos=tag_pos, font_scale_custom=fscale)

    add_cyber_particles(top_overlay, 50)
    top_blur = cv2.GaussianBlur(top_overlay, (5, 5), 0)
    top_final = cv2.addWeighted(top_bgr, 1.0, top_overlay, 0.95, 0)
    top_final = cv2.addWeighted(top_final, 1.0, top_blur, 0.35, 0)

    top_path = OUT_DIR + r"\portrait_top.jpg"
    Image.fromarray(cv2.cvtColor(top_final, cv2.COLOR_BGR2RGB)).save(top_path, quality=96)
    print(f"[OK] Saved {top_path}")

    # 2. BOTTOM LAYER: Full Terminator Robot Skull Reveal
    bot_composite_768 = build_composite_bottom()
    bot_raw = Image.fromarray(cv2.cvtColor(bot_composite_768, cv2.COLOR_BGR2RGB))
    bot_1080 = bot_raw.resize((TARGET_W, TARGET_H), Image.Resampling.LANCZOS)
    bot_bgr = cv2.cvtColor(np.array(bot_1080), cv2.COLOR_RGB2BGR)

    bot_overlay = np.zeros_like(bot_bgr)
    for px1, py1, px2, py2, label, score, primary, accent, cid, tag_pos, fscale in BOX_SPECS:
        draw_cyber_box(bot_overlay, px1, py1, px2, py2, label, score, primary, accent, cid, glow=True, tag_pos=tag_pos, font_scale_custom=fscale)

    add_cyber_particles(bot_overlay, 90)

    # Robot glowing optical iris aperture reticles
    # Eye positions on robot skull:
    left_eye = (int(630 * sx), int(298 * sy))
    right_eye = (int(750 * sx), int(294 * sy))
    for ex, ey in [left_eye, right_eye]:
        cv2.circle(bot_overlay, (ex, ey), 28, CYAN, 2, cv2.LINE_AA)
        cv2.circle(bot_overlay, (ex, ey), 18, AMBER, 1, cv2.LINE_AA)
        cv2.circle(bot_overlay, (ex, ey), 4, WHITE, -1, cv2.LINE_AA)
        cv2.line(bot_overlay, (ex - 36, ey), (ex - 20, ey), CYAN, 1, cv2.LINE_AA)
        cv2.line(bot_overlay, (ex + 20, ey), (ex + 36, ey), CYAN, 1, cv2.LINE_AA)
        cv2.line(bot_overlay, (ex, ey - 36), (ex, ey - 20), CYAN, 1, cv2.LINE_AA)
        cv2.line(bot_overlay, (ex, ey + 20), (ex, ey + 36), CYAN, 1, cv2.LINE_AA)

    bot_blur = cv2.GaussianBlur(bot_overlay, (7, 7), 0)
    bot_final = cv2.addWeighted(bot_bgr, 1.0, bot_overlay, 0.95, 0)
    bot_final = cv2.addWeighted(bot_final, 1.0, bot_blur, 0.50, 0)

    bot_path = OUT_DIR + r"\portrait_bottom.jpg"
    Image.fromarray(cv2.cvtColor(bot_final, cv2.COLOR_BGR2RGB)).save(bot_path, quality=96)
    print(f"[OK] Saved {bot_path}")

if __name__ == "__main__":
    generate()
    print("[DONE] AI Cyborg portraits generated successfully!")
