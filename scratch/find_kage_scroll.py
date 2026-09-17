import re

with open('public/landing-pages/kage.html', 'r', encoding='utf-8') as f:
    html = f.read()

scripts = re.findall(r'<script([^>]*)>([\s\S]*?)</script>', html)
script_body = scripts[1][1]

lines = script_body.split('\n')
print(f"Total lines in script: {len(lines)}")
for i, line in enumerate(lines):
    if any(k in line for k in ['addEventListener("scroll"', 'addEventListener(\'scroll\'', 'window.scrollY', 'pageYOffset', 'scrollProgress', 'targetScroll']):
        print(f"L{i}: {line[:120]}")
