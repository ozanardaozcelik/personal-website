const fs = require('fs');

const html = fs.readFileSync('public/landing-pages/complete-shelf-v2.html', 'utf8');
console.log('HTML total length:', html.length);

const scriptMatches = [...html.matchAll(/<script[^>]+src=["']([^"']+)["']/gi)].map(m => m[1]);
console.log('External script tags:', scriptMatches);

const linkMatches = [...html.matchAll(/<link[^>]+href=["']([^"']+)["']/gi)].map(m => m[1]);
console.log('Link tags:', linkMatches);

const assetRegex = /["']([^"']+\.(?:png|jpg|jpeg|webp|woff2|woff|ttf|json|glb|gltf|hdr))["']/gi;
const assetMatches = [...new Set([...html.matchAll(assetRegex)].map(m => m[1]))];
console.log('Asset matches:', assetMatches);
