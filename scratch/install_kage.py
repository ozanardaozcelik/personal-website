import json, os, urllib.request, hashlib

raw_path = r'C:\Users\dloozi\.gemini\antigravity-cli\brain\af0d76d1-4e98-4245-9246-8ea4316a204d\.system_generated\steps\1202\content.md'
with open(raw_path, 'r', encoding='utf-8') as f:
    text = f.read()

json_start = text.index('{')
data = json.loads(text[json_start:])
base_url = 'https://threeui.com'

# 1. Write or download text files
for file_info in data['files']:
    dest = os.path.normpath(file_info['path'])
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    if 'code' in file_info:
        content = file_info['code'].encode('utf-8')
    else:
        url = base_url + file_info['sourceUrl']
        print(f"Fetching {url}...")
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        content = urllib.request.urlopen(req).read()
    
    computed_hash = hashlib.sha256(content).hexdigest()
    expected_hash = file_info['sha256']
    with open(dest, 'wb') as out:
        out.write(content)
    print(f'Wrote {dest} ({len(content)} bytes, sha256 match: {computed_hash == expected_hash})')

# 2. Download binary assets
binary_assets = [
    ('public/landing-pages/secret-pathways-assets/generated/kage-sanmon-preview.webp', '23937f8c8350c55730c3bd17066a250548b2d29aad0e6ffb96218c1354b6db43', 186398),
    ('public/landing-pages/secret-pathways-assets/generated/kage-approach.webp', '39ff338936097e1bde0c4eadcf09805b9890862703186e67314942de7e0bc36c', 180064),
    ('public/landing-pages/secret-pathways-assets/generated/kage-lantern-court.webp', 'c0a6ff7da1cd6909d66e2f3f690b0d524a693e01d2222ab846d0074a90f47471', 197940),
    ('public/landing-pages/secret-pathways-assets/generated/kage-moonwater.webp', 'b8c8060c51c87a103bae619b3a4cc8b8b80632649d83f1f2c2299051e7f9b400', 102234),
    ('public/landing-pages/secret-pathways-assets/foreground/png/temple-wall.webp', '41c00f017e4ecf2147ee468d74da955bb4e2dad773f75a575022842eaf7609ce', 86466),
    ('public/landing-pages/secret-pathways-assets/foreground/png/pine-tree.webp', '79b233716d067bbc64c1507f79e4a30ba5f445995158c78562cc5b81f607ede7', 195918),
    ('public/landing-pages/secret-pathways-assets/foreground/png/tall-grass.webp', '8db0b5fbd160a7225391a6283a99681e346e205f24191031657285ef85ef12d2', 351644),
    ('public/landing-pages/secret-pathways-assets/foreground/png/sakura-branch.webp', '48564194d40496090dbf3bba2a68785cf91fafb655dc8d43ac16f6678aff196d', 252528),
    ('public/landing-pages/secret-pathways-assets/foreground/png/maple-leaves.webp', '35a90fec62c1a6bbfbbe73cd5d7b1acb889e80546d404182ef9a45fe417b531f', 178208),
    ('public/landing-pages/secret-pathways-assets/foreground/png/stone-lantern.webp', 'd5f3c881bc9d92b72eaaff2b709614d66e21a19e14025d2b9b16a15ab52df3bc', 150108),
    ('public/landing-pages/secret-pathways-assets/foreground/png/garden-bush.webp', '707e2516ebc0108041fe0ddc26d8bff0a69dc9700641f837765018b64e9ff15e', 286406),
    ('public/landing-pages/secret-pathways-assets/foreground/png/basalt-stones.webp', '150f1c87e181d651c318168c271bb65c9c8abac6dea6f2421fdd081c5b740471', 167866),
    ('public/landing-pages/secret-pathways-assets/foreground/png/hill.webp', 'ffba816244bcba98e4e33c6ee56165edfe4048db4af122ef3f5822180a85edbc', 84142),
    ('public/landing-pages/secret-pathways-assets/foreground/png/shrine-ruins.webp', '77006e58f2066e6fa9bfc504df396db49b1c7977858fa52d34dd2dad5feced77', 145814)
]

for rel_path, exp_hash, exp_bytes in binary_assets:
    url = base_url + '/' + rel_path.replace('public/', '')
    dest = os.path.normpath(rel_path)
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    data_bin = urllib.request.urlopen(req).read()
    h = hashlib.sha256(data_bin).hexdigest()
    with open(dest, 'wb') as f_bin:
        f_bin.write(data_bin)
    print(f'Asset {os.path.basename(dest)}: {len(data_bin)} bytes, match: {h == exp_hash}')

print('ALL ASSETS AND REGISTERED FILES PROCESSED SUCCESSFULLY!')
