import os
from PIL import Image, ImageDraw, ImageFont

font_kicker = ImageFont.truetype(r'C:\Windows\Fonts\georgiab.ttf', 13)
font_title = ImageFont.truetype(r'C:\Windows\Fonts\georgiab.ttf', 26)
font_sub = ImageFont.truetype(r'C:\Windows\Fonts\georgiai.ttf', 16)
font_body = ImageFont.truetype(r'C:\Windows\Fonts\georgia.ttf', 18)
font_italic = ImageFont.truetype(r'C:\Windows\Fonts\georgiai.ttf', 16)
font_note = ImageFont.truetype(r'C:\Windows\Fonts\georgiai.ttf', 14)

def wrap_text(text, font, max_width, draw):
    lines = []
    paragraphs = text.split('\n')
    for p in paragraphs:
        if not p.strip():
            lines.append('')
            continue
        words = p.split(' ')
        current_line = words[0]
        for w in words[1:]:
            test_line = current_line + ' ' + w
            bbox = draw.textbbox((0, 0), test_line, font=font)
            if bbox[2] - bbox[0] <= max_width:
                current_line = test_line
            else:
                lines.append(current_line)
                current_line = w
        lines.append(current_line)
    return lines

dummy = Image.new('RGBA', (1760, 1240))
draw = ImageDraw.Draw(dummy)
MAX_W = 660

from build_all_spreads_v2 import spreads_data

for i, s in enumerate(spreads_data):
    LY = 285
    curr_y = LY + 102
    for line in wrap_text(s['lead'], font_italic, MAX_W, draw):
        curr_y += 24 if line else 8
    curr_y += 20 # rule + gap
    for line in wrap_text(s['body'], font_body, MAX_W, draw):
        curr_y += 26 if line else 10
    curr_y += 18
    curr_y += 20 # note
    curr_y += 20 # signature
    print(f"Spread {i+1} final Y: {curr_y} (limit ~950)")
