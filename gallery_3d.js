import * as THREE from 'three';

// 6 Core Domains matching user's real projects & experience
export const TOPICS_DATA = [
  {
    key: 'uav',
    code: '01 // UAV',
    titleTr: 'Savaşan SİHA Otonomisi',
    titleEn: 'Autonomous Combat UAV',
    subTr: 'Şahi Otonom SİHA Takımı · YOLOv8 & ArduPilot',
    subEn: 'Şahi UAV Team Lead · YOLOv8 & ArduPilot',
    countTr: '2 Proje',
    countEn: '2 Projects',
    tags: ['YOLOv8', 'ArduPilot', 'ROS 2', 'Gazebo'],
    accent: '#ff8c37'
  },
  {
    key: 'vision',
    code: '02 // VISION',
    titleTr: 'Endüstriyel Görü & İSG',
    titleEn: 'Computer Vision & OHS',
    subTr: 'Çözüm Makina ISEE Vision · İSG & Anomali',
    subEn: 'ISEE Vision · OHS Inspection & Anomaly',
    countTr: '2 Proje',
    countEn: '2 Projects',
    tags: ['İSG Kameraları', 'PatchCore', 'CUDA', 'C++'],
    accent: '#00d2ff'
  },
  {
    key: 'robotics',
    code: '03 // ROBOTICS',
    titleTr: 'Robotik, AMR & Simülasyon',
    titleEn: 'Robotics, AMR & Gazebo',
    subTr: 'ISEE Robotics · Robot Kol, M20 & Tron 1',
    subEn: 'Robotic Arm, M20 AMR & Tron 1 Platforms',
    countTr: '2 Proje',
    countEn: '2 Projects',
    tags: ['M20 AMR', 'Tron 1', 'Robot Kol', 'Gazebo Harmonic'],
    accent: '#2ecc71'
  },
  {
    key: 'agentic_ai',
    code: '04 // AGENTIC AI',
    titleTr: 'Kurumsal Yapay Zeka',
    titleEn: 'Enterprise Agentic AI',
    subTr: 'Martur Fompak · Multi-Agent LLM İş Akışları',
    subEn: 'Martur Fompak · Multi-Agent LLM Workflows',
    countTr: '1 Proje',
    countEn: '1 Project',
    tags: ['Agentic AI', 'Multi-Agent', 'RAG', 'PyTorch'],
    accent: '#c084fc'
  },
  {
    key: 'hmi',
    code: '05 // HMI & UI',
    titleTr: 'Arayüz Tasarımı & HMI',
    titleEn: 'Interface Design & HMI',
    subTr: 'Web Paneller & Endüstriyel Dokunmatik HMI',
    subEn: 'Web Dashboards & Touchscreen Industrial HMI',
    countTr: '2 Proje',
    countEn: '2 Projects',
    tags: ['Dokunmatik HMI', 'Web Panel', 'Telemetri', 'WebSocket'],
    accent: '#fbbf24'
  },
  {
    key: 'embedded',
    code: '06 // EMBEDDED',
    titleTr: 'Gömülü Sistemler & GNC',
    titleEn: 'Embedded Systems & GNC',
    subTr: 'ArduPilot MAVLink & Jetson CUDA Donanımı',
    subEn: 'ArduPilot MAVLink & Jetson CUDA Acceleration',
    countTr: '2 Proje',
    countEn: '2 Projects',
    tags: ['MAVLink', 'Jetson CUDA', 'UART', 'TensorRT'],
    accent: '#f472b6'
  }
];

// Helper to draw high-tech blueprint canvas texture for 3D ribbon panels
function createTopicPlateTexture(topic, isSelected, lang) {
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = 256;
  const ctx = c.getContext('2d');
  const isEn = (lang === 'en');

  // 1. Deep Technical Slate Background
  const bgGrad = ctx.createLinearGradient(0, 0, c.width, c.height);
  if (isSelected) {
    bgGrad.addColorStop(0, '#261b12');
    bgGrad.addColorStop(0.5, '#1b130c');
    bgGrad.addColorStop(1, '#110b06');
  } else {
    bgGrad.addColorStop(0, '#1a1916');
    bgGrad.addColorStop(0.5, '#131210');
    bgGrad.addColorStop(1, '#0d0c0a');
  }
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, c.width, c.height);

  // 2. Technical Blueprint Grid Lines
  ctx.strokeStyle = isSelected ? 'rgba(255, 140, 55, 0.16)' : 'rgba(255, 255, 255, 0.05)';
  ctx.lineWidth = 1;
  for (let x = 0; x < c.width; x += 24) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, c.height); ctx.stroke();
  }
  for (let y = 0; y < c.height; y += 24) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(c.width, y); ctx.stroke();
  }

  // 3. Cyber Outer Border
  ctx.strokeStyle = isSelected ? topic.accent : 'rgba(243, 236, 224, 0.35)';
  ctx.lineWidth = isSelected ? 3.5 : 1.5;
  ctx.strokeRect(6, 6, c.width - 12, c.height - 12);

  // Corner crosshairs
  ctx.fillStyle = topic.accent;
  ctx.fillRect(5, 5, 10, 2.5);
  ctx.fillRect(5, 5, 2.5, 10);
  ctx.fillRect(c.width - 15, 5, 10, 2.5);
  ctx.fillRect(c.width - 7.5, 5, 2.5, 10);
  ctx.fillRect(5, c.height - 7.5, 10, 2.5);
  ctx.fillRect(5, c.height - 15, 2.5, 10);
  ctx.fillRect(c.width - 15, c.height - 7.5, 10, 2.5);
  ctx.fillRect(c.width - 7.5, c.height - 15, 2.5, 10);

  // 4. Header Tag Bar
  ctx.fillStyle = isSelected ? 'rgba(255, 140, 55, 0.22)' : 'rgba(243, 236, 224, 0.08)';
  ctx.fillRect(14, 14, c.width - 28, 28);

  ctx.fillStyle = topic.accent;
  ctx.font = 'bold 13px "DM Mono", monospace';
  ctx.textAlign = 'left';
  ctx.fillText(topic.code, 24, 33);

  // Project count pill
  ctx.fillStyle = isSelected ? '#ffedd5' : '#cbd5e1';
  ctx.font = '600 11px "DM Mono", monospace';
  ctx.textAlign = 'right';
  ctx.fillText(isEn ? topic.countEn : topic.countTr, c.width - 24, 33);
  ctx.textAlign = 'left';

  // 5. Main Topic Title
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 22px "Chakra Petch", -apple-system, sans-serif';
  const title = isEn ? topic.titleEn : topic.titleTr;
  ctx.fillText(title, 22, 78);

  // 6. Subtitle / Domain Scope
  ctx.fillStyle = isSelected ? '#fed7aa' : '#b9b4ae';
  ctx.font = '12px "DM Mono", monospace';
  const sub = isEn ? topic.subEn : topic.subTr;
  ctx.fillText(sub.length > 44 ? sub.substring(0, 44) + '…' : sub, 22, 108);

  // 7. Tech Pills
  let pillX = 22;
  const pillY = 136;
  topic.tags.slice(0, 4).forEach(t => {
    ctx.font = '500 10.5px "DM Mono", monospace';
    const textW = ctx.measureText(t).width;
    ctx.fillStyle = isSelected ? 'rgba(255, 140, 55, 0.18)' : 'rgba(43, 39, 33, 0.85)';
    ctx.fillRect(pillX, pillY, textW + 12, 22);
    ctx.strokeStyle = isSelected ? topic.accent : 'rgba(243, 236, 224, 0.25)';
    ctx.lineWidth = 1;
    ctx.strokeRect(pillX, pillY, textW + 12, 22);
    ctx.fillStyle = isSelected ? '#fff' : '#ece7dc';
    ctx.fillText(t, pillX + 6, pillY + 15);
    pillX += textW + 16;
  });

  // 8. Bottom Action / Status Strip
  ctx.fillStyle = isSelected ? 'rgba(255, 140, 55, 0.28)' : 'rgba(15, 14, 12, 0.85)';
  ctx.fillRect(14, 186, c.width - 28, 46);
  ctx.strokeStyle = isSelected ? topic.accent : 'rgba(243, 236, 224, 0.15)';
  ctx.lineWidth = 1;
  ctx.strokeRect(14, 186, c.width - 28, 46);

  if (isSelected) {
    ctx.fillStyle = '#ff8c37';
    ctx.beginPath();
    ctx.arc(32, 209, 5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 12px "DM Mono", monospace';
    ctx.fillText(isEn ? 'ACTIVE TOPIC // VIEWING ON LEFT' : 'SEÇİLİ ALAN // SOL PANELDE AÇIK', 46, 213);

    ctx.fillStyle = '#ff8c37';
    ctx.textAlign = 'right';
    ctx.fillText('● AÇIK', c.width - 24, 213);
  } else {
    ctx.fillStyle = '#94a3b8';
    ctx.font = '500 11.5px "DM Mono", monospace';
    ctx.fillText(isEn ? 'CLICK TO INSPECT TOPIC' : 'KONUYU İNCELEMEK İÇİN TIKLA', 24, 213);

    ctx.fillStyle = topic.accent;
    ctx.textAlign = 'right';
    ctx.fillText('SEÇ ↗', c.width - 24, 213);
  }
  ctx.textAlign = 'left';

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.generateMipmaps = false;
  return { texture: tex, canvas: c };
}

// MAIN EXPORT: 3D Rotating Downward Topic Stream
export function initTopics3DStream(canvasId = 'topics-3d-canvas') {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const host = canvas.parentElement;
  if (!host) return;

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
  } catch (err) {
    console.error('Three.js topics stream WebGL init error:', err);
    return;
  }

  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 80);
  camera.position.set(0, 0, 16.5);

  const gallery = new THREE.Group();
  scene.add(gallery);

  // Exact curved cylindrical panel geometry: balanced radius & arc for comfortable viewing distance
  const geometry = new THREE.CylinderGeometry(3.8, 3.8, 1.38, 48, 1, true, -Math.PI * 0.20, Math.PI * 0.40);

  // 12 Panels: Two cycles of the 6 topics for a seamless infinite vertical loop
  const totalPanels = 12;
  const spacingY = 1.48;
  const totalSpan = totalPanels * spacingY;
  const halfSpan = totalSpan / 2;

  let currentSelectedKey = 'uav';
  let currentLang = document.documentElement.lang || 'tr';

  const panels = [];

  // Build panels
  for (let i = 0; i < totalPanels; i++) {
    const topic = TOPICS_DATA[i % TOPICS_DATA.length];
    const isSel = (topic.key === currentSelectedKey);
    const { texture } = createTopicPlateTexture(topic, isSel, currentLang);

    const material = new THREE.MeshBasicMaterial({
      map: texture,
      opacity: isSel ? 1.0 : 0.88,
      side: THREE.DoubleSide,
      toneMapped: false,
      transparent: true
    });

    const panel = new THREE.Mesh(geometry, material);
    panel.rotation.y = (i / totalPanels) * Math.PI * 2;
    panel.position.y = (i - totalPanels / 2) * spacingY;
    panel.userData = {
      index: i,
      topicKey: topic.key,
      topic: topic
    };

    gallery.add(panel);
    panels.push(panel);
  }

  function refreshPanelTextures() {
    panels.forEach(p => {
      const isSel = (p.userData.topicKey === currentSelectedKey);
      const { texture } = createTopicPlateTexture(p.userData.topic, isSel, currentLang);
      p.material.map.dispose();
      p.material.map = texture;
      p.material.opacity = isSel ? 1.0 : 0.88;
      p.material.needsUpdate = true;
    });
  }

  // Animation & Drag state
  let running = false;
  let rafId = 0;
  let elapsed = 0;
  let previousTime = 0;
  let isDragging = false;
  let startX = 0, startY = 0;
  let totalDragDist = 0;
  let dragRotY = 0, targetDragRotY = 0;
  let dragScrollY = 0, targetDragScrollY = 0;
  let hoveredPanel = null;
  let isHostVisible = true;

  const raycaster = new THREE.Raycaster();
  const mouseVec = new THREE.Vector2(-999, -999);

  // Resize Handler
  function resize() {
    if (!canvas || !host) return;
    const w = host.clientWidth || 360;
    const h = host.clientHeight || 560;
    renderer.setSize(w, h, false);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    const aspect = w / h;
    camera.aspect = aspect;

    // Responsive camera distance: comfortably framed with margins on both desktop and mobile
    const targetZ = aspect < 0.82 ? 16.0 + (0.82 - aspect) * 7.5 : 15.2;
    camera.position.set(0, 0, targetZ);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  }

  // Select a topic cleanly
  function selectTopic(key) {
    if (!key) return;
    currentSelectedKey = key;
    refreshPanelTextures();
    if (typeof window.__renderCurrentTopic === 'function') {
      window.__renderCurrentTopic(key);
    }
  }

  // Pointer Events on canvas
  canvas.addEventListener('pointerdown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    totalDragDist = 0;
    try { canvas.setPointerCapture(e.pointerId); } catch (err) {}
  });

  window.addEventListener('pointermove', (e) => {
    const rect = canvas.getBoundingClientRect();
    if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom) {
      mouseVec.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseVec.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    } else {
      mouseVec.x = -999;
      mouseVec.y = -999;
    }

    if (!isDragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    startX = e.clientX;
    startY = e.clientY;
    totalDragDist += Math.hypot(dx, dy);

    targetDragRotY += dx * 0.0055;
    targetDragScrollY += dy * 0.009;
  });

  function onPointerUp(e) {
    if (!isDragging) return;
    isDragging = false;
    try { canvas.releasePointerCapture(e.pointerId); } catch (err) {}

    // Tap / Click detection: moved less than 7px
    if (totalDragDist < 7) {
      const rect = canvas.getBoundingClientRect();
      const clickVec = new THREE.Vector2(
        ((e.clientX - rect.left) / rect.width) * 2 - 1,
        -((e.clientY - rect.top) / rect.height) * 2 + 1
      );
      raycaster.setFromCamera(clickVec, camera);
      const hits = raycaster.intersectObjects(panels);
      if (hits.length > 0) {
        const hitPanel = hits[0].object;
        if (hitPanel.userData && hitPanel.userData.topicKey) {
          selectTopic(hitPanel.userData.topicKey);
        }
      }
    }
  }

  canvas.addEventListener('pointerup', onPointerUp);
  canvas.addEventListener('pointercancel', () => { isDragging = false; });

  // Main Render Loop
  function tick(time = performance.now()) {
    if (!running) return;
    rafId = requestAnimationFrame(tick);

    if (previousTime) {
      const dt = Math.min((time - previousTime) / 1000, 0.05);
      elapsed += dt;
    }
    previousTime = time;

    // Smooth drag lerping
    dragRotY += (targetDragRotY - dragRotY) * 0.12;
    dragScrollY += (targetDragScrollY - dragScrollY) * 0.12;

    // Continuous Horizontal Orbital Rotation
    gallery.rotation.y = -elapsed * 0.24 + dragRotY;

    // Downward Waterfall Flow
    const moveY = (elapsed * 1.15) + dragScrollY;
    panels.forEach((panel) => {
      const basePos = (panel.userData.index - totalPanels / 2) * spacingY;
      const rawY = basePos - moveY;
      const wrappedY = ((rawY + halfSpan) % totalSpan + totalSpan) % totalSpan - halfSpan;
      panel.position.y = wrappedY;
    });

    // Raycast for Hover
    if (mouseVec.x > -10 && mouseVec.x < 10) {
      raycaster.setFromCamera(mouseVec, camera);
      const hits = raycaster.intersectObjects(panels);
      if (hits.length > 0) {
        const hit = hits[0].object;
        if (hoveredPanel !== hit) {
          if (hoveredPanel) {
            hoveredPanel.scale.set(1, 1, 1);
            hoveredPanel.material.opacity = (hoveredPanel.userData.topicKey === currentSelectedKey) ? 1.0 : 0.88;
          }
          hoveredPanel = hit;
          hoveredPanel.scale.set(1.04, 1.04, 1.04);
          hoveredPanel.material.opacity = 1.0;
          canvas.style.cursor = 'pointer';
        }
      } else {
        if (hoveredPanel) {
          hoveredPanel.scale.set(1, 1, 1);
          hoveredPanel.material.opacity = (hoveredPanel.userData.topicKey === currentSelectedKey) ? 1.0 : 0.88;
          hoveredPanel = null;
          canvas.style.cursor = 'grab';
        }
      }
    }

    renderer.render(scene, camera);
  }

  function start() {
    if (running) return;
    running = true;
    previousTime = performance.now();
    rafId = requestAnimationFrame(tick);
  }

  function stop() {
    running = false;
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = 0;
    }
  }

  // Lifecycle & Intersection Observer
  const resizeObserver = new ResizeObserver(() => resize());
  resizeObserver.observe(host);

  const intersectionObserver = new IntersectionObserver(([entry]) => {
    isHostVisible = entry?.isIntersecting ?? false;
    if (isHostVisible && !document.hidden) {
      resize();
      start();
    } else {
      stop();
    }
  }, { threshold: 0.05, rootMargin: '120px' });
  intersectionObserver.observe(host);

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && isHostVisible) start();
    else stop();
  });

  // Global hooks for language and external selection
  window.__updateTopics3DSelection = (key) => {
    currentSelectedKey = key;
    refreshPanelTextures();
  };

  window.__updateTopics3DLang = (lang) => {
    currentLang = lang;
    refreshPanelTextures();
  };

  resize();
  start();

  return {
    selectTopic,
    destroy() {
      stop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      geometry.dispose();
      panels.forEach(p => {
        p.material.map.dispose();
        p.material.dispose();
      });
      renderer.dispose();
    }
  };
}
