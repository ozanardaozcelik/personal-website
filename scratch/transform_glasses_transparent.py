import cv2
import numpy as np
from PIL import Image

def make_glasses_transparent(raw_img_path):
    img = cv2.imread(raw_img_path) # 1591 x 1242
    h, w = img.shape[:2]

    # Exact glasses lenses bounding boxes in raw image
    # Left lens (from viewer perspective, his right eye): x: 330 to 580, y: 760 to 920
    # Right lens (from viewer perspective, his left eye): x: 670 to 960, y: 760 to 920

    # Create lens mask
    lens_mask = np.zeros((h, w), dtype=np.uint8)
    
    # Left lens polygon
    pts_left = np.array([[335, 785], [560, 775], [575, 875], [490, 930], [360, 920], [330, 840]], np.int32)
    cv2.fillPoly(lens_mask, [pts_left], 255)

    # Right lens polygon
    pts_right = np.array([[680, 775], [910, 790], [945, 845], [915, 920], [780, 930], [690, 880]], np.int32)
    cv2.fillPoly(lens_mask, [pts_right], 255)

    # Blur lens mask edges for seamless blending
    lens_mask_blur = cv2.GaussianBlur(lens_mask, (15, 15), 0) / 255.0

    # 1. Brighten and recover natural skin / eye tone under lenses
    # Skin color reference from forehead/cheek
    skin_ref = img[700:750, 580:650].mean(axis=(0, 1)) # BGR

    # Gamma correction and illumination boost in lens area
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV).astype(np.float32)
    
    # Boost V channel (brightness) in dark areas of lenses
    v_boost = hsv[:, :, 2].copy()
    # Lift dark areas to natural eye/skin level
    v_boost = np.where(v_boost < 120, v_boost * 2.8 + 35, v_boost)
    v_boost = np.clip(v_boost, 0, 255)
    
    # Boost S channel slightly to recover natural eye color
    s_boost = hsv[:, :, 1].copy()
    s_boost = np.clip(s_boost * 1.3, 0, 255)

    hsv_bright = hsv.copy()
    hsv_bright[:, :, 2] = v_boost
    hsv_bright[:, :, 1] = s_boost
    img_bright = cv2.cvtColor(hsv_bright.astype(np.uint8), cv2.COLOR_HSV2BGR)

    # Blend brightened eyes into the lens area
    for c in range(3):
        img[:, :, c] = img[:, :, c] * (1.0 - lens_mask_blur) + img_bright[:, :, c] * lens_mask_blur

    # 2. Add realistic transparent laboratory safety glasses frame & reflections
    # Outer frame rim (subtle clear acetate frame)
    cv2.polylines(img, [pts_left], True, (230, 245, 255), 2, cv2.LINE_AA)
    cv2.polylines(img, [pts_right], True, (230, 245, 255), 2, cv2.LINE_AA)

    # Top brow bar connecting frame (lab safety glasses style)
    cv2.line(img, (330, 775), (945, 780), (220, 240, 255), 3, cv2.LINE_AA)
    # Nose bridge
    cv2.line(img, (560, 780), (680, 780), (240, 245, 255), 3, cv2.LINE_AA)

    # Anti-reflective subtle glass sheen (diagonal specular highlight)
    specular = np.zeros_like(img)
    cv2.line(specular, (370, 800), (450, 880), (255, 255, 255), 3, cv2.LINE_AA)
    cv2.line(specular, (720, 800), (800, 880), (255, 255, 255), 3, cv2.LINE_AA)
    specular = cv2.GaussianBlur(specular, (7, 7), 0)
    
    img = cv2.addWeighted(img, 1.0, specular, 0.55, 0)

    cv2.imwrite('scratch/ozan_transparent_glasses.jpg', img)
    print("Saved scratch/ozan_transparent_glasses.jpg")
    return img

if __name__ == "__main__":
    make_glasses_transparent(r"C:\Users\dloozi\Desktop\WhatsApp Image 2026-09-17 at 11.09.29.jpeg")
