import cv2
import numpy as np
from PIL import Image

ARTIFACT_DIR = r"C:\Users\dloozi\.gemini\antigravity-cli\brain\af0d76d1-4e98-4245-9246-8ea4316a204d"
OUT_DIR = r"C:\Users\dloozi\Desktop\codes\personal-website\public"

# Source images: clean right-shifted face and matching robot cyborg reveal
TOP_SRC = ARTIFACT_DIR + r"\ozan_clean_right_shifted_1789746469446.jpg"
BOT_SRC = ARTIFACT_DIR + r"\ozan_robot_right_shifted_1789746501403.jpg"

TARGET_W, TARGET_H = 1920, 1080

# ── Color palette (BGR) ──
CYAN    = (255, 215, 0)     # #00d7ff
AMBER   = (0, 160, 255)     # #ffa000
GREEN   = (80, 230, 80)     # #50e650
WHITE   = (245, 245, 245)
DARK_BG = (10, 12, 16)

# ── Bounding box definitions in 1920x1080 coordinates ──
# (x1, y1, x2, y2, label, score, color_primary, color_accent, class_id)
BOXES = [
    # 1. Engineer face (shifted to right side: x=940 to 1480)
    (940, 48, 1470, 780, "ENGINEER: OZAN ARDA OZCELIK", 100.0, CYAN, AMBER, "ID:01"),
    # 2. Lab safety goggles
    (980, 350, 1460, 530, "LAB_SAFETY_GOGGLES", 99.4, AMBER, CYAN, "GEAR"),
    # 3. UR5 Robot Arm (left side)
    (30, 310, 600, 840, "ROBOT_ARM_UR5", 98.8, CYAN, GREEN, "ACTUATOR"),
    # 4. Autonomous Drone / UAV (right side)
    (1410, 470, 1900, 870, "AUTONOMOUS_UAV", 99.4, CYAN, AMBER, "AERIAL"),
    # 5. Circuit Whiteboard (left-center)
    (440, 295, 960, 615, "CIRCUIT_SCHEMATIC", 97.5, AMBER, CYAN, "DIAGRAM"),
    # 6. Telemetry Monitor (top-right)
    (1440, 115, 1730, 280, "TELEMETRY_GCS", 98.2, GREEN, CYAN, "MONITOR"),
    # 7. Code Terminal (top-far-right)
    (1740, 115, 1910, 275, "CODE_FEED", 96.8, GREEN, CYAN, "MONITOR"),
]

def load_and_resize(path):
    img = Image.open(path).convert("RGB")
    img = img.resize((TARGET_W, TARGET_H), Image.Resampling.LANCZOS)
    return cv2.cvtColor(np.array(img), cv2.COLOR_RGB2BGR)

def draw_box(overlay, box, glow=False):
    x1, y1, x2, y2, label, score, primary, accent, class_id = box

    px1, py1, px2, py2 = int(x1), int(y1), int(x2), int(y2)
    box_thick = 2 if glow else 1

    # Main rectangle
    cv2.rectangle(overlay, (px1, py1), (px2, py2), primary, box_thick, cv2.LINE_AA)

    # Corner brackets
    clen = max(16, min(32, (px2 - px1) // 5, (py2 - py1) // 5))
    bracket_thick = 3 if glow else 2
    for cx, cy, dx, dy in [
        (px1, py1, 1, 1), (px2, py1, -1, 1),
        (px1, py2, 1, -1), (px2, py2, -1, -1)
    ]:
        cv2.line(overlay, (cx, cy), (cx + dx * clen, cy), accent, bracket_thick, cv2.LINE_AA)
        cv2.line(overlay, (cx, cy), (cx, cy + dy * clen), accent, bracket_thick, cv2.LINE_AA)

    # Label tag text
    tag_text = f"[{class_id}] {label} {score:.1f}%" if score is not None else f"[{class_id}] {label}"
    font = cv2.FONT_HERSHEY_SIMPLEX
    font_scale = 0.44 if glow else 0.41
    thickness = 1
    (tw, th), _ = cv2.getTextSize(tag_text, font, font_scale, thickness)

    tag_w = tw + 16
    tag_h = th + 10
    tag_x1 = max(4, min(px1, TARGET_W - tag_w - 4))
    tag_x2 = tag_x1 + tag_w

    # Place tag cleanly above or inside
    if py1 - tag_h > 4:
        tag_y1 = py1 - tag_h
        tag_y2 = py1
    else:
        tag_y1 = py1 + 2
        tag_y2 = py1 + tag_h + 2
    text_y = tag_y2 - 6

    # Dark badge background + border + text
    cv2.rectangle(overlay, (tag_x1, tag_y1), (tag_x2, tag_y2), DARK_BG, -1)
    cv2.rectangle(overlay, (tag_x1, tag_y1), (tag_x2, tag_y2), primary, 1, cv2.LINE_AA)
    cv2.putText(overlay, tag_text, (tag_x1 + 8, text_y), font, font_scale, WHITE, thickness, cv2.LINE_AA)

    # Crosshair
    cx_center = (px1 + px2) // 2
    cy_center = (py1 + py2) // 2
    cv2.drawMarker(overlay, (cx_center, cy_center), primary, cv2.MARKER_CROSS, 10 if glow else 6, 1, cv2.LINE_AA)

def add_lidar_points(overlay, count=70):
    np.random.seed(42)
    for _ in range(count):
        x = np.random.randint(20, TARGET_W - 20)
        y = np.random.randint(20, TARGET_H - 20)
        cv2.circle(overlay, (x, y), 1, CYAN, -1)

def build_layers():
    # 1. TOP LAYER: Clean, smooth skin portrait with crisp engineer bounding box
    top_base = load_and_resize(TOP_SRC)
    top_overlay = np.zeros_like(top_base)

    for box in BOXES:
        draw_box(top_overlay, box, glow=False)

    add_lidar_points(top_overlay, 50)
    top_blur = cv2.GaussianBlur(top_overlay, (5, 5), 0)
    top_result = cv2.addWeighted(top_base, 1.0, top_overlay, 0.95, 0)
    top_result = cv2.addWeighted(top_result, 1.0, top_blur, 0.35, 0)

    top_out = OUT_DIR + r"\portrait_top.jpg"
    Image.fromarray(cv2.cvtColor(top_result, cv2.COLOR_BGR2RGB)).save(top_out, quality=96)
    print(f"[OK] Saved {top_out}")

    # 2. BOTTOM LAYER: Robot Cyborg Reveal with glowing bounding boxes & iris reticles
    bot_base = load_and_resize(BOT_SRC)
    bot_overlay = np.zeros_like(bot_base)

    for box in BOXES:
        draw_box(bot_overlay, box, glow=True)

    add_lidar_points(bot_overlay, 90)

    # Robot Eyes Glowing Target Reticles
    # Eye positions on the robot face:
    left_eye = (1128, 435)
    right_eye = (1328, 430)
    for ex, ey in [left_eye, right_eye]:
        cv2.circle(bot_overlay, (ex, ey), 26, CYAN, 2, cv2.LINE_AA)
        cv2.circle(bot_overlay, (ex, ey), 16, AMBER, 1, cv2.LINE_AA)
        cv2.circle(bot_overlay, (ex, ey), 4, WHITE, -1, cv2.LINE_AA)
        cv2.line(bot_overlay, (ex - 34, ey), (ex - 18, ey), CYAN, 1, cv2.LINE_AA)
        cv2.line(bot_overlay, (ex + 18, ey), (ex + 34, ey), CYAN, 1, cv2.LINE_AA)
        cv2.line(bot_overlay, (ex, ey - 34), (ex, ey - 18), CYAN, 1, cv2.LINE_AA)
        cv2.line(bot_overlay, (ex, ey + 18), (ex, ey + 34), CYAN, 1, cv2.LINE_AA)

    bot_blur = cv2.GaussianBlur(bot_overlay, (7, 7), 0)
    bot_result = cv2.addWeighted(bot_base, 1.0, bot_overlay, 0.95, 0)
    bot_result = cv2.addWeighted(bot_result, 1.0, bot_blur, 0.50, 0)

    bot_out = OUT_DIR + r"\portrait_bottom.jpg"
    Image.fromarray(cv2.cvtColor(bot_result, cv2.COLOR_BGR2RGB)).save(bot_out, quality=96)
    print(f"[OK] Saved {bot_out}")

if __name__ == "__main__":
    build_layers()
    print("[DONE] Both layers generated successfully!")
