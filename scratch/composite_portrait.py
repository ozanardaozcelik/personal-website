import os
import cv2
import numpy as np
import torch
import torchvision
from torchvision import transforms
from PIL import Image, ImageFilter, ImageEnhance

def get_refined_mask(image_path):
    print("Segmenting human from:", image_path)
    img_bgr = cv2.imread(image_path)
    h, w = img_bgr.shape[:2]

    # Convert to RGB for DeepLabV3
    img_rgb = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2RGB)
    pil_img = Image.fromarray(img_rgb)

    model = torchvision.models.segmentation.deeplabv3_mobilenet_v3_large(weights='DEFAULT').eval()

    preprocess = transforms.Compose([
        transforms.Resize((1024, int(1024 * h / w))),
        transforms.ToTensor(),
        transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
    ])

    input_tensor = preprocess(pil_img).unsqueeze(0)

    with torch.no_grad():
        output = model(input_tensor)['out'][0]
    preds = output.argmax(0).byte().cpu().numpy()

    # Person class is 15
    mask = (preds == 15).astype(np.uint8) * 255
    mask = cv2.resize(mask, (w, h), interpolation=cv2.INTER_LINEAR)

    # Keep only largest connected component
    num_labels, labels, stats, centroids = cv2.connectedComponentsWithStats(mask)
    if num_labels > 1:
        largest_idx = 1 + np.argmax(stats[1:, cv2.CC_STAT_AREA])
        clean_mask = (labels == largest_idx).astype(np.uint8) * 255
    else:
        clean_mask = mask

    # Fill internal holes (e.g. inside clothes/necklace)
    contours, _ = cv2.findContours(clean_mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    cv2.drawContours(clean_mask, contours, -1, 255, thickness=cv2.FILLED)

    # Clean morphological smoothing
    kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (7, 7))
    clean_mask = cv2.morphologyEx(clean_mask, cv2.MORPH_CLOSE, kernel)
    
    # Feather edges cleanly with bilateral/guided blur
    mask_blurred = cv2.GaussianBlur(clean_mask, (9, 9), 0)

    return pil_img, Image.fromarray(mask_blurred).convert("L")

def build_hero_portraits():
    src_photo = r"C:\Users\dloozi\Desktop\WhatsApp Image 2026-09-17 at 11.09.29.jpeg"
    bg_photo = r"C:\Users\dloozi\.gemini\antigravity-cli\brain\af0d76d1-4e98-4245-9246-8ea4316a204d\robotics_lab_close_workbench_1789743343333.jpg"

    ozan_pil, mask_pil = get_refined_mask(src_photo)
    bg_pil = Image.open(bg_photo).convert("RGB")
    bg_w, bg_h = bg_pil.size # 1920 x 1080

    # Scale Ozan to natural foreground proportions
    ozan_w, ozan_h = ozan_pil.size
    target_h = int(bg_h * 1.12)
    scale = target_h / ozan_h
    new_w = int(ozan_w * scale)
    new_h = target_h

    ozan_res = ozan_pil.resize((new_w, new_h), Image.Resampling.LANCZOS)
    mask_res = mask_pil.resize((new_w, new_h), Image.Resampling.LANCZOS)

    # Color match Ozan slightly: rich contrast, deep obsidian blacks
    ozan_np = np.array(ozan_res, dtype=np.float32)
    ozan_np[:, :, 0] = np.clip(ozan_np[:, :, 0] * 0.96, 0, 255) # Red
    ozan_np[:, :, 1] = np.clip(ozan_np[:, :, 1] * 0.98, 0, 255) # Green
    ozan_np[:, :, 2] = np.clip(ozan_np[:, :, 2] * 1.04, 0, 255) # Blue
    ozan_np = ozan_np.astype(np.uint8)

    pos_x = int(bg_w * 0.30)
    pos_y = bg_h - new_h

    # ==========================================
    # 1. TOP LAYER: 100% Real Authentic Portrait
    # ==========================================
    top_comp = bg_pil.copy()

    # Soft ambient drop shadow under Ozan
    shadow_layer = Image.new("RGBA", (bg_w, bg_h), (0, 0, 0, 0))
    shadow_mask = mask_res.filter(ImageFilter.GaussianBlur(18))
    shadow_layer.paste((0, 0, 0, 160), (pos_x, pos_y + 10), shadow_mask)
    top_comp.paste(shadow_layer, (0, 0), shadow_layer)

    # Paste Ozan
    top_comp.paste(Image.fromarray(ozan_np), (pos_x, pos_y), mask_res)
    top_comp.save("public/portrait_top.jpg", quality=96)
    print("Generated public/portrait_top.jpg")

    # ==========================================
    # 2. BOTTOM LAYER: Machine Perception HUD
    # ==========================================
    bot_comp = top_comp.copy()
    bot_np = np.array(bot_comp)
    overlay = np.zeros_like(bot_np)

    # Exact lens coordinates
    lens_l_x = pos_x + int(new_w * (574 / ozan_w))
    lens_r_x = pos_x + int(new_w * (794 / ozan_w))
    lens_y = pos_y + int(new_h * (866 / ozan_h))
    face_cx = pos_x + int(new_w * ((378 + 613/2) / ozan_w))
    face_cy = pos_y + int(new_h * ((591 + 613/2) / ozan_h))

    # A. Drone Target Box (Left)
    cv2.rectangle(overlay, (20, 240), (460, 750), (0, 210, 255), 2)
    cv2.putText(overlay, "SHAHI_UAV_AUTONOMOUS // STEREO_POD_ACTIVE", (25, 230),
                cv2.FONT_HERSHEY_SIMPLEX, 0.52, (0, 210, 255), 1, cv2.LINE_AA)

    # B. KUKA Robotic Arm Box (Center-Left)
    cv2.rectangle(overlay, (490, 80), (880, 680), (255, 140, 55), 2)
    cv2.putText(overlay, "KINEMATICS: 6-DOF KUKA // 120 FPS", (495, 70),
                cv2.FONT_HERSHEY_SIMPLEX, 0.52, (255, 140, 55), 1, cv2.LINE_AA)

    # C. Real-Time Monitor Point Cloud (Right)
    cv2.rectangle(overlay, (980, 150), (1890, 620), (0, 210, 255), 1)
    cv2.putText(overlay, "CV_ENGINE: OPENCV + TENSORRT // SPATIAL_SLAM", (985, 140),
                cv2.FONT_HERSHEY_SIMPLEX, 0.52, (0, 210, 255), 1, cv2.LINE_AA)

    # D. Ozan Face Detection Bounding Box
    fb_w = int(new_w * (613 / ozan_w) * 0.72)
    fb_h = int(new_h * (613 / ozan_h) * 0.82)
    cv2.rectangle(overlay, (face_cx - fb_w//2, face_cy - fb_h//2), 
                  (face_cx + fb_w//2, face_cy + fb_h//2), (0, 210, 255), 2)
    cv2.putText(overlay, "ENGINEER: OZAN ARDA // PERCEPTION_MATRIX", 
                (face_cx - fb_w//2, face_cy - fb_h//2 - 12),
                cv2.FONT_HERSHEY_SIMPLEX, 0.55, (0, 210, 255), 1, cv2.LINE_AA)

    # Precision corner brackets
    c_len = 24
    fx1, fy1 = face_cx - fb_w//2, face_cy - fb_h//2
    fx2, fy2 = face_cx + fb_w//2, face_cy + fb_h//2
    for px, py in [(fx1, fy1), (fx2, fy1), (fx1, fy2), (fx2, fy2)]:
        dx = c_len if px == fx1 else -c_len
        dy = c_len if py == fy1 else -c_len
        cv2.line(overlay, (px, py), (px + dx, py), (255, 140, 55), 3)
        cv2.line(overlay, (px, py), (px, py + dy), (255, 140, 55), 3)

    # E. Sleek Circular Camera Aperture Reticles on Sunglasses Lenses
    for lx in [lens_l_x, lens_r_x]:
        # Outer HUD ring
        cv2.circle(overlay, (lx, lens_y), 34, (0, 210, 255), 2, cv2.LINE_AA)
        cv2.circle(overlay, (lx, lens_y), 24, (255, 140, 55), 1, cv2.LINE_AA)
        cv2.circle(overlay, (lx, lens_y), 6, (0, 210, 255), -1, cv2.LINE_AA)
        # Reticle Crosshairs
        cv2.line(overlay, (lx - 42, lens_y), (lx + 42, lens_y), (0, 210, 255), 1, cv2.LINE_AA)
        cv2.line(overlay, (lx, lens_y - 42), (lx, lens_y + 42), (0, 210, 255), 1, cv2.LINE_AA)
        # Small corner ticks
        tlen = 6
        cv2.line(overlay, (lx - 26, lens_y - 26), (lx - 26 + tlen, lens_y - 26), (255, 140, 55), 2)
        cv2.line(overlay, (lx + 26, lens_y - 26), (lx + 26 - tlen, lens_y - 26), (255, 140, 55), 2)
        cv2.line(overlay, (lx - 26, lens_y + 26), (lx - 26 + tlen, lens_y + 26), (255, 140, 55), 2)
        cv2.line(overlay, (lx + 26, lens_y + 26), (lx + 26 - tlen, lens_y + 26), (255, 140, 55), 2)

    # F. Elegant Facial Contour Landmark Points (Face Oval & Jawline Keypoints)
    # Jawline contour points
    for step in np.linspace(-0.8, 0.8, 17):
        jx = int(face_cx + step * (fb_w * 0.46))
        jy = int(face_cy + (fb_h * 0.42) - (1 - abs(step)**1.8) * 15 + (abs(step)**2) * 20)
        cv2.circle(overlay, (jx, jy), 2, (0, 210, 255), -1, cv2.LINE_AA)

    # Forehead contour points
    for step in np.linspace(-0.7, 0.7, 13):
        fx_pt = int(face_cx + step * (fb_w * 0.42))
        fy_pt = int(face_cy - (fb_h * 0.38) + (abs(step)**2) * 15)
        cv2.circle(overlay, (fx_pt, fy_pt), 2, (255, 140, 55), -1, cv2.LINE_AA)

    # Add Gaussian glow / bloom
    overlay_blur = cv2.GaussianBlur(overlay, (11, 11), 0)
    final_bot = cv2.addWeighted(bot_np, 1.0, overlay, 0.95, 0)
    final_bot = cv2.addWeighted(final_bot, 1.0, overlay_blur, 0.40, 0)

    Image.fromarray(final_bot).save("public/portrait_bottom.jpg", quality=96)
    print("Generated public/portrait_bottom.jpg")

if __name__ == "__main__":
    build_hero_portraits()
