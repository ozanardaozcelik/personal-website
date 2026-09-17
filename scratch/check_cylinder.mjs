import * as THREE from 'three';

const geom = new THREE.CylinderGeometry(5, 5, 1.8, 8, 1, true, -Math.PI * 0.2, Math.PI * 0.4);
const pos = geom.attributes.position;
const uvs = geom.attributes.uv;

console.log('Vertex count:', pos.count);
for (let i = 0; i < pos.count; i++) {
  console.log('v' + i, 'x:', pos.getX(i).toFixed(2), 'y:', pos.getY(i).toFixed(2), 'z:', pos.getZ(i).toFixed(2), 'u:', uvs.getX(i).toFixed(2), 'v:', uvs.getY(i).toFixed(2));
}
