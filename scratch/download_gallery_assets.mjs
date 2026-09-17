import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const dir = 'public/assets/gallery';
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

async function downloadAssets() {
  for (let i = 1; i <= 5; i++) {
    const url = 'https://threeui.com/shaders/gallery/assets/gallery-' + i + '.webp';
    const res = await fetch(url);
    const buf = Buffer.from(await res.arrayBuffer());
    const filePath = path.join(dir, 'gallery-' + i + '.webp');
    fs.writeFileSync(filePath, buf);
    const hash = crypto.createHash('sha256').update(buf).digest('hex');
    console.log('Saved', filePath, 'Bytes:', buf.length, 'SHA-256:', hash);
  }
}
downloadAssets();
