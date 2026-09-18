import cv2
import numpy as np
from PIL import Image

def build_exact_face_portraits():
    src_img_path = r"C:\Users\dloozi\.gemini\antigravity-cli\brain\af0d76d1-4e98-4245-9246-8ea4316a204d\ozan_exact_face_lab_glasses_1789744118638.jpg"
    
    # 1. Upscale to 1920x1080
    raw_img = Image.open(src_img_path).convert("RGB")
    img_1080 = raw_img.resize((1920, 1080), Image.Resampling.LANCZOS)
    raw_bgr = cv2.cvtColor(np.array(img_1080), cv2.COLOR_RGB2BGR)

    h, w = raw_bgr.shape[:2] # 1080, 1920
    sx = 1920 / 1376
    sy = 1080 / 768

    # Colors in BGR
    CYAN = (255, 215, 0)       # #00d7ff
    AMBER = (0, 160, 255)      # #ffa000
    GREEN = (80, 230, 80)      # #50e650
    DARK_BG = (12, 12, 16)     # Deep dark badge
    WHITE = (245, 245, 245)

    def draw_yolo_box(img_layer, x1, y1, x2, y2, label, score=None, primary_color=CYAN, accent_color=AMBER, tag_pos="top", show_crosshair=True, class_id=None):
        px1, py1 = int(x1 * sx), int(y1 * sy)
        px2, py2 = int(x2 * sx), int(y2 * sy)

        # Draw main thin rectangle
        cv2.rectangle(img_layer, (px1, py1), (px2, py2), primary_color, 1, cv2.LINE_AA)

        # Corner precision brackets (thicker & high-tech)
        clen = max(12, min(24, (px2 - px1) // 5, (py2 - py1) // 5))
        for corner_x, corner_y, dx, dy in [
            (px1, py1, 1, 1),
            (px2, py1, -1, 1),
            (px1, py2, 1, -1),
            (px2, py2, -1, -1)
        ]:
            cv2.line(img_layer, (corner_x, corner_y), (corner_x + dx * clen, corner_y), accent_color, 2, cv2.LINE_AA)
            cv2.line(img_layer, (corner_x, corner_y), (corner_x, corner_y + dy * clen), accent_color, 2, cv2.LINE_AA)

        # Label tag text
        prefix = f"[{class_id}] " if class_id else ""
        if score is not None:
            tag_text = f"{prefix}{label.upper()} {score:.1f}%"
        else:
            tag_text = f"{prefix}{label.upper()}"

        font = cv2.FONT_HERSHEY_SIMPLEX
        font_scale = 0.42
        thickness = 1
        (tw, th), baseline = cv2.getTextSize(tag_text, font, font_scale, thickness)

        # Tag positioning clamped to screen bounds
        tag_w = tw + 14
        tag_h = th + 10
        tag_x1 = max(8, min(px1, w - tag_w - 8))
        tag_x2 = tag_x1 + tag_w

        if tag_pos == "top":
            if py1 - tag_h < 4:
                tag_y1 = py1 + 2
                tag_y2 = py1 + tag_h + 2
                text_y = tag_y2 - 6
            else:
                tag_y1 = py1 - tag_h
                tag_y2 = py1
                text_y = py1 - 5
        else: # bottom
            if py2 + tag_h > h - 4:
                tag_y1 = py2 - tag_h - 2
                tag_y2 = py2 - 2
                text_y = py2 - 6
            else:
                tag_y1 = py2
                tag_y2 = py2 + tag_h
                text_y = tag_y2 - 6

        # Draw solid dark pill badge with border
        cv2.rectangle(img_layer, (tag_x1, tag_y1), (tag_x2, tag_y2), DARK_BG, -1)
        cv2.rectangle(img_layer, (tag_x1, tag_y1), (tag_x2, tag_y2), primary_color, 1, cv2.LINE_AA)
        cv2.putText(img_layer, tag_text, (tag_x1 + 7, text_y), font, font_scale, WHITE, thickness, cv2.LINE_AA)

        # Center tracking reticle
        if show_crosshair:
            cx, cy = (px1 + px2) // 2, (py1 + py2) // 2
            cv2.drawMarker(img_layer, (cx, cy), primary_color, cv2.MARKER_CROSS, 8, 1, cv2.LINE_AA)

    # =========================================================================
    # 1. TOP LAYER: Exact Face with Permanent ENGINEER: OZAN ARDA ÖZÇELİK Box
    # =========================================================================
    top_overlay = np.zeros_like(raw_bgr)
    
    # Permanent Engineer Face Bounding Box
    draw_yolo_box(
        top_overlay, 500, 160, 926, 620,
        "ENGINEER: OZAN ARDA OZCELIK", 100.0,
        primary_color=CYAN, accent_color=AMBER,
        tag_pos="top", show_crosshair=True, class_id="ID:01"
    )
    
    # Permanent Lab Safety Glasses Box
    draw_yolo_box(
        top_overlay, 545, 275, 880, 410,
        "LAB_SAFETY_GLASSES", 99.4,
        primary_color=AMBER, accent_color=CYAN,
        tag_pos="top", show_crosshair=False, class_id="GEAR"
    )

    top_blur = cv2.GaussianBlur(top_overlay, (5, 5), 0)
    top_final = cv2.addWeighted(raw_bgr, 1.0, top_overlay, 0.95, 0)
    top_final = cv2.addWeighted(top_final, 1.0, top_blur, 0.35, 0)
    Image.fromarray(cv2.cvtColor(top_final, cv2.COLOR_BGR2RGB)).save("public/portrait_top.jpg", quality=96)
    print("Saved public/portrait_top.jpg (1920x1080)")

    # =========================================================================
    # 2. BOTTOM LAYER: Full Laboratory Computer Vision Detection Matrix
    # =========================================================================
    bot_overlay = np.zeros_like(raw_bgr)

    # A. UR5 Robotic Arm (Left)
    draw_yolo_box(bot_overlay, 110, 285, 460, 765, "ROBOT_ARM_UR5", 98.8, primary_color=CYAN, accent_color=AMBER, tag_pos="top", class_id="ACTUATOR")

    # B. Kinematics Whiteboard (Left)
    draw_yolo_box(bot_overlay, 8, 210, 320, 600, "KINEMATICS_DIAGRAM", 97.4, primary_color=AMBER, accent_color=CYAN, tag_pos="top", class_id="SCHEMATIC")

    # C. Drone Schematic Whiteboard (Right)
    draw_yolo_box(bot_overlay, 1080, 250, 1368, 600, "DRONE_TELEMETRY_BOARD", 98.1, primary_color=AMBER, accent_color=CYAN, tag_pos="top", class_id="SCHEMATIC")

    # D. Autonomous Hexacopter UAV Drone (Right)
    draw_yolo_box(bot_overlay, 850, 580, 1340, 765, "AUTONOMOUS_DRONE_UAV", 99.4, primary_color=CYAN, accent_color=GREEN, tag_pos="top", class_id="AERIAL_SYS")

    # E. Control Station 01 (Left)
    draw_yolo_box(bot_overlay, 395, 460, 530, 690, "GCS_TELEMETRY_01", 98.2, primary_color=GREEN, accent_color=CYAN, tag_pos="top", class_id="STATION")

    # F. Control Station 02 (Right)
    draw_yolo_box(bot_overlay, 875, 470, 1010, 690, "GCS_TELEMETRY_02", 98.5, primary_color=GREEN, accent_color=CYAN, tag_pos="top", class_id="STATION")

    # G. Handheld Ground Control Unit (Bottom Right)
    draw_yolo_box(bot_overlay, 1200, 650, 1360, 765, "GCS_TABLET_CONTROLLER", 97.8, primary_color=AMBER, accent_color=CYAN, tag_pos="top", class_id="HANDHELD")

    # H. Engineer Face Box
    draw_yolo_box(bot_overlay, 500, 160, 926, 620, "ENGINEER: OZAN ARDA OZCELIK", 100.0, primary_color=CYAN, accent_color=AMBER, tag_pos="top", class_id="ID:01")

    # I. Safety Glasses Box
    draw_yolo_box(bot_overlay, 545, 275, 880, 410, "LAB_SAFETY_GLASSES", 99.4, primary_color=AMBER, accent_color=CYAN, tag_pos="top", class_id="GEAR")

    # J. Left Eye & Right Eye Boxes
    draw_yolo_box(bot_overlay, 580, 305, 680, 375, "EYE_L", 99.5, primary_color=CYAN, accent_color=AMBER, tag_pos="bottom", show_crosshair=False, class_id="BIOMETRIC")
    draw_yolo_box(bot_overlay, 740, 305, 840, 375, "EYE_R", 99.3, primary_color=CYAN, accent_color=AMBER, tag_pos="bottom", show_crosshair=False, class_id="BIOMETRIC")

    # K. Circular Camera Apertures / Iris Tracking on Eyes
    lex = int(633 * sx)
    ley = int(338 * sy)
    rex = int(788 * sx)
    rey = int(334 * sy)
    for ex, ey in [(lex, ley), (rex, rey)]:
        cv2.circle(bot_overlay, (ex, ey), 22, CYAN, 1, cv2.LINE_AA)
        cv2.circle(bot_overlay, (ex, ey), 14, AMBER, 1, cv2.LINE_AA)
        cv2.circle(bot_overlay, (ex, ey), 3, WHITE, -1, cv2.LINE_AA)
        cv2.line(bot_overlay, (ex - 28, ey), (ex - 16, ey), CYAN, 1, cv2.LINE_AA)
        cv2.line(bot_overlay, (ex + 16, ey), (ex + 28, ey), CYAN, 1, cv2.LINE_AA)
        cv2.line(bot_overlay, (ex, ey - 28), (ex, ey - 16), CYAN, 1, cv2.LINE_AA)
        cv2.line(bot_overlay, (ex, ey + 16), (ex, ey + 28), CYAN, 1, cv2.LINE_AA)

    # L. Spatial LiDAR Cloud Points
    np.random.seed(42)
    for _ in range(80):
        lx = np.random.randint(40, w - 40)
        ly = np.random.randint(40, h - 40)
        cv2.circle(bot_overlay, (lx, ly), 1, CYAN, -1)

    bot_blur = cv2.GaussianBlur(bot_overlay, (5, 5), 0)
    bot_final = cv2.addWeighted(raw_bgr, 1.0, bot_overlay, 0.95, 0)
    bot_final = cv2.addWeighted(bot_final, 1.0, bot_blur, 0.35, 0)
    Image.fromarray(cv2.cvtColor(bot_final, cv2.COLOR_BGR2RGB)).save("public/portrait_bottom.jpg", quality=96)
    print("Saved public/portrait_bottom.jpg (1920x1080)")

if __name__ == "__main__":
    build_exact_face_portraits()

