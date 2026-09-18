import cv2
import numpy as np
from PIL import Image, ImageFilter

ARTIFACT_DIR = r"C:\Users\dloozi\.gemini\antigravity-cli\brain\af0d76d1-4e98-4245-9246-8ea4316a204d"
OUT_DIR = r"C:\Users\dloozi\Desktop\codes\personal-website\public"

# Source images
TOP_SRC = ARTIFACT_DIR + r"\ozan_exact_angle_lab_1789744856602.jpg"
BOT_SRC = ARTIFACT_DIR + r"\ozan_robot_exact_angle_1789744889979.jpg"

TARGET_W, TARGET_H = 1920, 1080

# ── Color palette (BGR) ──
CYAN    = (255, 215, 0)     # #00d7ff
AMBER   = (0, 160, 255)     # #ffa000
GREEN   = (80, 230, 80)     # #50e650
WHITE   = (245, 245, 245)
DARK_BG = (12, 12, 16)

# ── Bounding box definitions (in normalized 0-1 coords) ──
# Each: (x1, y1, x2, y2, label, score, color_primary, color_accent, class_id)
BOXES = [
    # Engineer face (center)
    (0.30, 0.05, 0.70, 0.85, "ENGINEER: OZAN ARDA OZCELIK", 100.0, CYAN, AMBER, "ID:01"),
    # Lab safety goggles
    (0.36, 0.28, 0.64, 0.48, "LAB_SAFETY_GOGGLES", 99.4, AMBER, CYAN, "GEAR"),
    # Robot arm (left)
    (0.00, 0.10, 0.28, 0.90, "ROBOT_ARM", 98.8, CYAN, GREEN, "ACTUATOR"),
    # UAV drone (right)
    (0.62, 0.25, 0.92, 0.75, "UAV", 99.4, CYAN, AMBER, "AERIAL"),
    # Left whiteboard
    (0.02, 0.02, 0.30, 0.55, "ENGINEERING_SCHEMATIC", 97.4, AMBER, CYAN, "DIAGRAM"),
    # Right whiteboard
    (0.68, 0.02, 0.98, 0.55, "CIRCUIT_DIAGRAM", 98.1, AMBER, CYAN, "DIAGRAM"),
    # Code monitor (top-left)
    (0.12, 0.00, 0.35, 0.18, "CODE_TERMINAL", 96.5, GREEN, CYAN, "MONITOR"),
    # Telemetry monitor (top-right)
    (0.72, 0.00, 0.95, 0.18, "TELEMETRY_DISPLAY", 97.8, GREEN, CYAN, "MONITOR"),
]


def load_and_resize(path):
    """Load image and resize to TARGET_W x TARGET_H."""
    img = Image.open(path).convert("RGB")
    img = img.resize((TARGET_W, TARGET_H), Image.Resampling.LANCZOS)
    return cv2.cvtColor(np.array(img), cv2.COLOR_RGB2BGR)


def draw_box(overlay, box, glow=False):
    """Draw a single YOLO-style bounding box with optional glow effect."""
    x1_n, y1_n, x2_n, y2_n, label, score, primary, accent, class_id = box

    px1 = int(x1_n * TARGET_W)
    py1 = int(y1_n * TARGET_H)
    px2 = int(x2_n * TARGET_W)
    py2 = int(y2_n * TARGET_H)

    # Box thickness based on glow mode
    box_thick = 2 if glow else 1

    # Main rectangle
    cv2.rectangle(overlay, (px1, py1), (px2, py2), primary, box_thick, cv2.LINE_AA)

    # Corner brackets
    clen = max(14, min(30, (px2 - px1) // 6, (py2 - py1) // 6))
    bracket_thick = 3 if glow else 2
    for cx, cy, dx, dy in [
        (px1, py1, 1, 1), (px2, py1, -1, 1),
        (px1, py2, 1, -1), (px2, py2, -1, -1)
    ]:
        cv2.line(overlay, (cx, cy), (cx + dx * clen, cy), accent, bracket_thick, cv2.LINE_AA)
        cv2.line(overlay, (cx, cy), (cx, cy + dy * clen), accent, bracket_thick, cv2.LINE_AA)

    # Label tag
    tag_text = f"[{class_id}] {label} {score:.1f}%"
    font = cv2.FONT_HERSHEY_SIMPLEX
    font_scale = 0.45 if glow else 0.40
    thickness = 1
    (tw, th), _ = cv2.getTextSize(tag_text, font, font_scale, thickness)

    tag_w = tw + 14
    tag_h = th + 10
    tag_x1 = max(4, min(px1, TARGET_W - tag_w - 4))
    tag_x2 = tag_x1 + tag_w

    # Place tag above box, or inside if no room
    if py1 - tag_h > 4:
        tag_y1 = py1 - tag_h
        tag_y2 = py1
    else:
        tag_y1 = py1 + 2
        tag_y2 = py1 + tag_h + 2
    text_y = tag_y2 - 5

    # Dark pill badge
    cv2.rectangle(overlay, (tag_x1, tag_y1), (tag_x2, tag_y2), DARK_BG, -1)
    cv2.rectangle(overlay, (tag_x1, tag_y1), (tag_x2, tag_y2), primary, 1, cv2.LINE_AA)
    cv2.putText(overlay, tag_text, (tag_x1 + 7, text_y), font, font_scale, WHITE, thickness, cv2.LINE_AA)

    # Center crosshair/reticle
    cx_center = (px1 + px2) // 2
    cy_center = (py1 + py2) // 2
    r = 6 if glow else 4
    cv2.drawMarker(overlay, (cx_center, cy_center), primary, cv2.MARKER_CROSS, r * 2, 1, cv2.LINE_AA)


def add_lidar_points(overlay, count=60):
    """Add scattered LiDAR-style dots."""
    np.random.seed(42)
    for _ in range(count):
        x = np.random.randint(30, TARGET_W - 30)
        y = np.random.randint(30, TARGET_H - 30)
        cv2.circle(overlay, (x, y), 1, CYAN, -1)


def build_top_layer():
    """Build the top (default/human) layer with subtle bounding boxes."""
    base = load_and_resize(TOP_SRC)
    overlay = np.zeros_like(base)

    for box in BOXES:
        draw_box(overlay, box, glow=False)

    add_lidar_points(overlay, 50)

    # Subtle blend
    blur = cv2.GaussianBlur(overlay, (5, 5), 0)
    result = cv2.addWeighted(base, 1.0, overlay, 0.85, 0)
    result = cv2.addWeighted(result, 1.0, blur, 0.25, 0)

    out_path = OUT_DIR + r"\portrait_top.jpg"
    Image.fromarray(cv2.cvtColor(result, cv2.COLOR_BGR2RGB)).save(out_path, quality=96)
    print(f"[OK] Saved {out_path} ({TARGET_W}x{TARGET_H})")


def build_bottom_layer():
    """Build the bottom (robot reveal) layer with glowing bounding boxes."""
    base = load_and_resize(BOT_SRC)
    overlay = np.zeros_like(base)

    for box in BOXES:
        draw_box(overlay, box, glow=True)

    add_lidar_points(overlay, 90)

    # Add extra glow on eyes (robot eyes should glow)
    eye_cx1 = int(0.44 * TARGET_W)
    eye_cy1 = int(0.38 * TARGET_H)
    eye_cx2 = int(0.56 * TARGET_W)
    eye_cy2 = int(0.36 * TARGET_H)
    for ex, ey in [(eye_cx1, eye_cy1), (eye_cx2, eye_cy2)]:
        cv2.circle(overlay, (ex, ey), 24, CYAN, 1, cv2.LINE_AA)
        cv2.circle(overlay, (ex, ey), 15, AMBER, 1, cv2.LINE_AA)
        cv2.circle(overlay, (ex, ey), 3, WHITE, -1, cv2.LINE_AA)
        # Crosshair lines
        cv2.line(overlay, (ex - 30, ey), (ex - 18, ey), CYAN, 1, cv2.LINE_AA)
        cv2.line(overlay, (ex + 18, ey), (ex + 30, ey), CYAN, 1, cv2.LINE_AA)
        cv2.line(overlay, (ex, ey - 30), (ex, ey - 18), CYAN, 1, cv2.LINE_AA)
        cv2.line(overlay, (ex, ey + 18), (ex, ey + 30), CYAN, 1, cv2.LINE_AA)

    # Stronger glow blend for the reveal layer
    blur = cv2.GaussianBlur(overlay, (9, 9), 0)
    result = cv2.addWeighted(base, 1.0, overlay, 0.95, 0)
    result = cv2.addWeighted(result, 1.0, blur, 0.50, 0)

    out_path = OUT_DIR + r"\portrait_bottom.jpg"
    Image.fromarray(cv2.cvtColor(result, cv2.COLOR_BGR2RGB)).save(out_path, quality=96)
    print(f"[OK] Saved {out_path} ({TARGET_W}x{TARGET_H})")


if __name__ == "__main__":
    build_top_layer()
    build_bottom_layer()
    print("\n[DONE] Both hero layers generated successfully!")
