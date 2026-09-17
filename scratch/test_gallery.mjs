// Test script to check Three.js Gallery imports and logic
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(35, 16/9, 0.1, 100);
camera.position.z = 18;

const gallery = new THREE.Group();
scene.add(gallery);

const geometry = new THREE.CylinderGeometry(5, 5, 1.8, 64, 1, true, 0, Math.PI * 0.4);

for (let i = 0; i < 16; i++) {
  const mat = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
  const panel = new THREE.Mesh(geometry, mat);
  panel.position.y = (i - 8) * 2.4;
  panel.rotation.y = (i / 16) * Math.PI * 4;
  gallery.add(panel);
}

console.log('Geometry & 16 Panels created successfully. Children count:', gallery.children.length);
