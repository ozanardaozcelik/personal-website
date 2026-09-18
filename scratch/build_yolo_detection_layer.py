import cv2
import numpy as np
from PIL import Image

def build_detection_layer():
    src_top = r"C:\Users\dloozi\.gemini\antigravity-cli\brain\af0d76d1-4e98-4245-9246-8ea4316a204d\ozan_lab_coat_top_1789743604323.jpg"
    
    # 1. Load and upscale to crisp 1920x1080
    top_img = Image.open(src_top).convert("RGB")
    top_1080 = top_img.resize((1920, 1080), Image.Resampling.LANCZOS)
    raw_bgr = cv2.cvtColor(np.array(top_1080), cv2.COLOR_RGB2BGR)

    h, w = raw_bgr.shape[:2] # 1080, 1920
    sx = 1920 / 1376
    sy = 1080 / 768

    def draw_yolo_box(img_layer, x1, y1, x2, y2, label, score, color=(0, 210, 255), header_bg=(0, 40, 60), tag_pos="top", show_crosshair=True):
        px1, py1 = int(x1 * sx), int(y1 * sy)
        px2, py2 = int(x2 * sx), int(y2 * sy)

        # Draw main rectangle
        cv2.rectangle(img_layer, (px1, py1), (px2, py2), color, 2, cv2.LINE_AA)

        # Corner precision brackets
        clen = min(22, (px2 - px1) // 4, (py2 - py1) // 4)
        cv2.line(img_layer, (px1, py1), (px1 + clen, py1), (255, 140, 55), 3, cv2.LINE_AA)
        cv2.line(img_layer, (px1, py1), (px1, py1 + clen), (255, 140, 55), 3, cv2.LINE_AA)
        cv2.line(img_layer, (px2, py1), (px2 - clen, py1), (255, 140, 55), 3, cv2.LINE_AA)
        cv2.line(img_layer, (px2, py1), (px2, py1 + clen), (255, 140, 55), 3, cv2.LINE_AA)
        cv2.line(img_layer, (px1, py2), (px1 + clen, py2), (255, 140, 55), 3, cv2.LINE_AA)
        cv2.line(img_layer, (px1, py2), (px1, py2 - clen), (255, 140, 55), 3, cv2.LINE_AA)
        cv2.line(img_layer, (px2, py2), (px2 - clen, py2), (255, 140, 55), 3, cv2.LINE_AA)
        cv2.line(img_layer, (px2, py2), (px2, py2 - clen), (255, 140, 55), 3, cv2.LINE_AA)

        # Label tag text
        tag_text = f"{label.upper()} // {score:.1f}%" if score is not None else label.upper()
        font = cv2.FONT_HERSHEY_SIMPLEX
        font_scale = 0.44
        thickness = 1
        (tw, th), baseline = cv2.getTextSize(tag_text, font, font_scale, thickness)

        # Tag placement
        if tag_pos == "top":
            tag_y1 = max(0, py1 - th - 8)
            tag_y2 = py1
            text_y = py1 - 4
        else: # bottom
            tag_y1 = py2
            tag_y2 = min(h, py2 + th + 8)
            text_y = py2 + th + 4

        cv2.rectangle(img_layer, (px1, tag_y1), (px1 + tw + 12, tag_y2), header_bg, -1)
        cv2.rectangle(img_layer, (px1, tag_y1), (px1 + tw + 12, tag_y2), color, 1, cv2.LINE_AA)
        cv2.putText(img_layer, tag_text, (px1 + 6, text_y), font, font_scale, color, thickness, cv2.LINE_AA)

        # Center tracking crosshair
        if show_crosshair:
            cx, cy = (px1 + px2) // 2, (py1 + py2) // 2
            cv2.drawMarker(img_layer, (cx, cy), color, cv2.MARKER_CROSS, 10, 1, cv2.LINE_AA)

    # =========================================================================
    # 1. TOP LAYER: Ozan with Permanent ENGINEER: OZAN ARDA OZCELIK Bounding Box
    # =========================================================================
    top_overlay = np.zeros_like(raw_bgr)
    # Permanent Engineer detection box
    draw_yolo_box(top_overlay, 770, 130, 1035, 410, "ENGINEER: OZAN ARDA OZCELIK", 100.0, color=(0, 210, 255), header_bg=(0, 40, 60), tag_pos="top")
    # Permanent Lab safety glasses box
    draw_yolo_box(top_overlay, 795, 205, 1010, 295, "LAB_SAFETY_GLASSES", 99.0, color=(255, 140, 55), header_bg=(60, 30, 0), tag_pos="top", show_crosshair=False)

    top_blur = cv2.GaussianBlur(top_overlay, (7, 7), 0)
    top_final = cv2.addWeighted(raw_bgr, 1.0, top_overlay, 0.95, 0)
    top_final = cv2.addWeighted(top_final, 1.0, top_blur, 0.40, 0)
    Image.fromarray(cv2.cvtColor(top_final, cv2.COLOR_BGR2RGB)).save("public/portrait_top.jpg", quality=96)
    print("Saved public/portrait_top.jpg with permanent Engineer Box (1920x1080)")

    # =========================================================================
    # 2. BOTTOM LAYER: Full Laboratory Spatial Perception Matrix
    # =========================================================================
    bot_overlay = np.zeros_like(raw_bgr)

    # 1. SİHA Drone (Left)
    draw_yolo_box(bot_overlay, 15, 160, 770, 580, "drone_siha_uav", 99.8, color=(0, 210, 255), header_bg=(0, 40, 60), tag_pos="top")

    # 2. Electro-Optical Gimbal Pod on Drone
    draw_yolo_box(bot_overlay, 480, 410, 600, 530, "eo_ir_gimbal_pod", 97.4, color=(255, 140, 55), header_bg=(60, 30, 0), tag_pos="top")

    # 3. Left Robot Arm
    draw_yolo_box(bot_overlay, 25, 360, 270, 740, "robot_arm_left", 98.6, color=(0, 210, 255), header_bg=(0, 40, 60), tag_pos="top")

    # 4. Right Robot Arm
    draw_yolo_box(bot_overlay, 1070, 270, 1360, 720, "robot_arm_right", 99.1, color=(255, 140, 55), header_bg=(60, 30, 0), tag_pos="top")

    # 5. Dual Telemetry Monitors
    draw_yolo_box(bot_overlay, 40, 610, 690, 760, "cv_telemetry_display", 98.9, color=(0, 210, 255), header_bg=(0, 40, 60), tag_pos="top")

    # 6. Embedded Compute Motherboard
    draw_yolo_box(bot_overlay, 430, 720, 740, 765, "embedded_compute", 99.2, color=(255, 140, 55), header_bg=(60, 30, 0), tag_pos="top")

    # 7. Lab Coat (Önlük)
    draw_yolo_box(bot_overlay, 660, 440, 1310, 765, "lab_coat_cleanroom", 98.5, color=(0, 210, 255), header_bg=(0, 40, 60), tag_pos="top", show_crosshair=False)

    # 8. Engineer Face Box
    draw_yolo_box(bot_overlay, 770, 130, 1035, 410, "ENGINEER: OZAN ARDA OZCELIK", 100.0, color=(0, 210, 255), header_bg=(0, 40, 60), tag_pos="top")

    # 9. Safety Glasses (Lab Gözlüğü)
    draw_yolo_box(bot_overlay, 795, 205, 1010, 295, "lab_safety_glasses", 99.0, color=(255, 140, 55), header_bg=(60, 30, 0), tag_pos="top")

    # 10. Left Eye & Right Eye Boxes
    draw_yolo_box(bot_overlay, 825, 220, 895, 280, "eye_left", 99.4, color=(255, 140, 55), header_bg=(60, 30, 0), tag_pos="bottom", show_crosshair=False)
    draw_yolo_box(bot_overlay, 915, 215, 985, 275, "eye_right", 99.2, color=(255, 140, 55), header_bg=(60, 30, 0), tag_pos="bottom", show_crosshair=False)

    # 11. Circular Camera Apertures on Eyes
    lex = int(860 * sx)
    ley = int(250 * sy)
    rex = int(950 * sx)
    rey = int(245 * sy)
    for ex, ey in [(lex, ley), (rex, rey)]:
        cv2.circle(bot_overlay, (ex, ey), 22, (0, 210, 255), 2, cv2.LINE_AA)
        cv2.circle(bot_overlay, (ex, ey), 14, (255, 140, 55), 1, cv2.LINE_AA)
        cv2.circle(bot_overlay, (ex, ey), 4, (0, 210, 255), -1, cv2.LINE_AA)
        cv2.line(bot_overlay, (ex - 28, ey), (ex + 28, ey), (0, 210, 255), 1, cv2.LINE_AA)
        cv2.line(bot_overlay, (ex, ey - 28), (ex, ey + 28), (0, 210, 255), 1, cv2.LINE_AA)

    # 12. Digital HUD LiDAR Point Scan Markers
    np.random.seed(42)
    for _ in range(70):
        lx = np.random.randint(40, w - 40)
        ly = np.random.randint(40, h - 40)
        cv2.circle(bot_overlay, (lx, ly), 1, (0, 210, 255), -1)

    bot_blur = cv2.GaussianBlur(bot_overlay, (7, 7), 0)
    bot_final = cv2.addWeighted(raw_bgr, 1.0, bot_overlay, 0.95, 0)
    bot_final = cv2.addWeighted(bot_final, 1.0, bot_blur, 0.40, 0)
    Image.fromarray(cv2.cvtColor(bot_final, cv2.COLOR_BGR2RGB)).save("public/portrait_bottom.jpg", quality=96)
    print("Saved public/portrait_bottom.jpg with full detection matrix (1920x1080)")

if __name__ == "__main__":
    build_detection_layer()
