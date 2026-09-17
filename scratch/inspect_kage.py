import re

with open('public/landing-pages/kage.html', 'r', encoding='utf-8') as f:
    html = f.read()

sections = re.findall(r'<section[^>]*id=[\'"]([^\'"]+)[\'"]', html)
print('Kage Sections:', sections)

scripts = re.findall(r'<script([^>]*)>([\s\S]*?)</script>', html)
print(f'Script tags count: {len(scripts)}')
for i, (attrs, body) in enumerate(scripts):
    print(f'Script {i} attrs: {attrs.strip()}, length: {len(body)}')
    # find scroll or scene keywords
    scroll_terms = [m for m in ['scroll', 'Scene', 'camera', 'stage', 'timeline', 'progress'] if m in body]
    print(f'  contains: {scroll_terms}')
