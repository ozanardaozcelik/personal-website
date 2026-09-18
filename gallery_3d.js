import * as THREE from 'three';

// 16 Flagship & Live GitHub Projects for the Cylindrical Ribbon Gallery
const DEFAULT_PROJECTS = [
  {
    id: 'sahi-uav',
    name: 'Şahi Otonom Savaşan SİHA',
    repoName: 'Sahi-Otonom-Savasan-IHA',
    tag: 'TEKNOFEST // SAVAŞAN İHA',
    desc: 'YOLOv8 + ByteTrack + Kalman filtreleme ile 120 FPS gerçek zamanlı hava hedef takibi ve MAVLink otonom güdüm.',
    category: 'uav',
    lang: 'C++ / Python',
    tech: ['YOLOv8', 'ByteTrack', 'Kalman', 'MAVLink'],
    stars: 18,
    forks: 6,
    url: 'https://github.com/ozanardaozcelik'
  },
  {
    id: 'isee-vision',
    name: 'Çözüm Makina: ISEE Vision',
    repoName: 'ISEE-Vision-Core',
    tag: 'ENDÜSTRİYEL AR-GE',
    desc: 'Endüstriyel üretim hatları için mikron hassasiyetinde optik kalite kontrol ve yüzey hata tespit mimarisi.',
    category: 'vision',
    lang: 'C++',
    tech: ['OpenCV', 'CUDA', 'Optik Muayene', 'C++'],
    stars: 14,
    forks: 4,
    url: 'https://github.com/ozanardaozcelik'
  },
  {
    id: 'gazebo-digital-twin',
    name: 'Gazebo Harmonic 3D Digital Twin',
    repoName: 'Gazebo-ROS2-DigitalTwin',
    tag: 'ROBOTİK SİMÜLASYONU',
    desc: 'ROS 2 entegrasyonlu 3D fizik simülasyonu, LiDAR nokta bulutu haritalama ve otonom navigasyon test ortamı.',
    category: 'robotics',
    lang: 'C++',
    tech: ['Gazebo', 'ROS 2', 'LiDAR 3D', 'Nav2'],
    stars: 12,
    forks: 3,
    url: 'https://github.com/ozanardaozcelik'
  },
  {
    id: 'martur-ai',
    name: 'Martur AI: Çoklu-Ajan Orkestrasyonu',
    repoName: 'Martur-AI-Agent-Orchestrator',
    tag: 'KURUMSAL YAPAY ZEKA',
    desc: 'Otomotiv parça üretim hatları için RAG destekli, mikroservis mimarili otonom LLM ajan karar destek sistemi.',
    category: 'ai',
    lang: 'Python',
    tech: ['LangChain', 'RAG', 'FastAPI', 'PostgreSQL'],
    stars: 16,
    forks: 5,
    url: 'https://github.com/ozanardaozcelik'
  },
  {
    id: 'uav-gcs',
    name: 'SİHA Telemetri & Yer Kontrol İstasyonu',
    repoName: 'UAV-GroundControl-Station',
    tag: 'TELEMETRİ & GCS',
    desc: '433/868 MHz RF telemetri veri ayrıştırma, gerçek zamanlı yapay ufuk ve MAVLink telemetri arayüzü.',
    category: 'uav',
    lang: 'Qt / C++',
    tech: ['Qt/C++', 'MAVLink', 'RF Telemetry', 'Python'],
    stars: 9,
    forks: 2,
    url: 'https://github.com/ozanardaozcelik'
  },
  {
    id: 'cuda-optical-flow',
    name: 'CUDA Hızlandırmalı Optik Akış',
    repoName: 'ArduPilot-MAVLink-GNC-Bridge',
    tag: 'GPGPU HIZLANDIRMA',
    desc: 'NVIDIA Jetson mimarisinde sıfır gecikmeli Lucas-Kanade optik akış ve hareket vektör kestirimi.',
    category: 'vision',
    lang: 'CUDA C++',
    tech: ['CUDA C++', 'Jetson Orin', 'TensorRT', 'OpenCV'],
    stars: 16,
    forks: 4,
    url: 'https://github.com/ozanardaozcelik'
  },
  {
    id: 'turtle-aimbot',
    name: 'TurtleAimBot: Realtime CV Tracking',
    repoName: 'TurtleAimBot',
    tag: 'BİLGİSAYARLI GÖRÜ',
    desc: 'Ekran görüntüsü ayrıştırma ve gerçek zamanlı hedef tespiti yapan otonom görüş algoritması.',
    category: 'vision',
    lang: 'Python',
    tech: ['OpenCV', 'PyAutoGUI', 'Win32API'],
    stars: 1,
    forks: 0,
    url: 'https://github.com/ozanardaozcelik/TurtleAimBot'
  },
  {
    id: 'sawblades',
    name: 'SAWBLADES: Industrial Edge AI',
    repoName: 'SAWBLADES',
    tag: 'ENDÜSTRİYEL YAPAY ZEKA',
    desc: 'Sensör verileri üzerinden endüstriyel testere ve kesici uç aşınma tespiti yapan uç bilişim modeli.',
    category: 'ai',
    lang: 'Python',
    tech: ['PyTorch', 'Edge AI', 'Signal Processing'],
    stars: 1,
    forks: 0,
    url: 'https://github.com/ozanardaozcelik/SAWBLADES'
  },
  {
    id: 'tensile-forge',
    name: 'TensileForge: Material Simulation',
    repoName: 'TensileForge',
    tag: 'MALZEME SİMÜLASYONU',
    desc: 'Metallerin çekme deneyi gerilim-şekil değiştirme eğrilerini hesaplayan sonlu elemanlar simülasyonu.',
    category: 'embedded',
    lang: 'Python',
    tech: ['NumPy', 'SciPy', 'FEM', 'Matplotlib'],
    stars: 0,
    forks: 0,
    url: 'https://github.com/ozanardaozcelik/TensileForge'
  },
  {
    id: 'comp2laint-box',
    name: 'Comp2laintBox: NLP Sentiment Engine',
    repoName: 'Comp2laintBox',
    tag: 'DOĞAL DİL İŞLEME',
    desc: 'Müşteri geri bildirimlerini çok sınıflı duygu analizine tabi tutan BERT tabanlı NLP mimarisi.',
    category: 'ai',
    lang: 'Python',
    tech: ['Transformers', 'BERT', 'FastAPI'],
    stars: 1,
    forks: 0,
    url: 'https://github.com/ozanardaozcelik/Comp2laintBox'
  },
  {
    id: 'employee-loss',
    name: 'EmployeeLoss: Retention Forecasting',
    repoName: 'EmployeeLoss',
    tag: 'MAKİNE ÖĞRENMESİ',
    desc: 'Çalışan ayrılma olasılıklarını öngören açıklanabilir yapay zeka ve Random Forest modeli.',
    category: 'ai',
    lang: 'Python',
    tech: ['Scikit-Learn', 'XGBoost', 'SHAP'],
    stars: 1,
    forks: 0,
    url: 'https://github.com/ozanardaozcelik/EmployeeLoss'
  },
  {
    id: 'hand-detector',
    name: 'Hand-Detector: MediaPipe Landmark Fusion',
    repoName: 'Hand-Detector-',
    tag: 'BİLGİSAYARLI GÖRÜ',
    desc: 'Gerçek zamanlı 21-eklem el haritalama ve temassız hareket tabanlı kontrol arayüzü.',
    category: 'vision',
    lang: 'Python',
    tech: ['MediaPipe', 'OpenCV', 'Landmarks'],
    stars: 0,
    forks: 0,
    url: 'https://github.com/ozanardaozcelik/Hand-Detector-'
  },
  {
    id: 'akilli-takvim',
    name: 'Akıllı Takvim: Autonomous Planner',
    repoName: 'akilli-takvim',
    tag: 'YAZILIM MİMARİSİ',
    desc: 'Zaman kısıtlarını optimize ederek otonom takvim ve etkinlik dağıtımı yapan planlama algoritması.',
    category: 'ai',
    lang: 'JavaScript',
    tech: ['Node.js', 'Algorithms', 'Full-Stack'],
    stars: 0,
    forks: 0,
    url: 'https://github.com/ozanardaozcelik/akilli-takvim'
  },
  {
    id: 'mavlink-bridge',
    name: 'MAVLink Autonomous GNC Bridge',
    repoName: 'ArduPilot-MAVLink-GNC-Bridge',
    tag: 'OTONOM SİHA / UAV',
    desc: 'Uçuş kontrol bilgisayarı ile görev işlemcisi arasında sıfır kayıplı telemetri ve rota köprüsü.',
    category: 'uav',
    lang: 'C++',
    tech: ['MAVLink', 'ArduPilot', 'POSIX C++'],
    stars: 8,
    forks: 2,
    url: 'https://github.com/ozanardaozcelik'
  },
  {
    id: 'yolo-uav-tracker',
    name: 'Realtime Aerial Target Tracker',
    repoName: 'Sahi-Otonom-Savasan-IHA',
    tag: 'DERİN ÖĞRENME',
    desc: 'Geniş açı kamera görüntülerinde minyatür İHA hedeflerini yüksek doğrulukla tespit ve takip eden model.',
    category: 'uav',
    lang: 'Python / CUDA',
    tech: ['PyTorch', 'TensorRT', 'Kalman'],
    stars: 12,
    forks: 3,
    url: 'https://github.com/ozanardaozcelik'
  },
  {
    id: 'swarm-ai',
    name: 'Distributed Multi-Agent Swarm Logic',
    repoName: 'Martur-AI-Agent-Orchestrator',
    tag: 'DAĞITIK SİSTEMLER',
    desc: 'Birden fazla otonom ajanın ortak görev hedefinde dinamik rol paylaşımı yapmasını sağlayan konsensüs mimarisi.',
    category: 'ai',
    lang: 'Python / ROS 2',
    tech: ['Multi-Agent', 'ROS 2', 'ZeroMQ'],
    stars: 15,
    forks: 4,
    url: 'https://github.com/ozanardaozcelik'
  }
];

export function initProjectsGallery() {
  const canvas = document.getElementById('gallery-3d-canvas');
  if (!canvas) return;

  const host = canvas.parentElement;
  if (!host) return;

  // ThreeUI Perspective Setup
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance'
  });
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
  camera.position.z = 18;

  const gallery = new THREE.Group();
  scene.add(gallery);

  // Exact Symmetrical ThreeUI Gallery Geometry: Symmetrically centered arc
  const geometry = new THREE.CylinderGeometry(5, 5, 1.8, 64, 1, true, -Math.PI * 0.2, Math.PI * 0.4);

  const projects = [...DEFAULT_PROJECTS];
  const panels = [];
  const materials = [];
  const textures = [];

  // Helper to draw editorial technical project plate canvas texture (512 x 256 px - optimal power-of-two)
  function createProjectCanvasTexture(item, index) {
    const c = document.createElement('canvas');
    c.width = 512;
    c.height = 256;
    const ctx = c.getContext('2d');

    // 1. Deep Technical Slate Background
    const bgGrad = ctx.createLinearGradient(0, 0, c.width, c.height);
    bgGrad.addColorStop(0, '#1c1b18');
    bgGrad.addColorStop(0.5, '#141310');
    bgGrad.addColorStop(1, '#0e0d0b');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, c.width, c.height);

    // 2. Blueprint Grid Lines
    ctx.strokeStyle = 'rgba(217, 107, 39, 0.08)';
    ctx.lineWidth = 1;
    const gridSize = 24;
    for (let x = 0; x < c.width; x += gridSize) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, c.height); ctx.stroke();
    }
    for (let y = 0; y < c.height; y += gridSize) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(c.width, y); ctx.stroke();
    }

    // 3. Cyber Gold Accent Outer Border
    ctx.strokeStyle = 'rgba(217, 107, 39, 0.55)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(6, 6, c.width - 12, c.height - 12);

    // Corner crosshairs
    ctx.fillStyle = '#d96b27';
    ctx.fillRect(5, 5, 8, 2);
    ctx.fillRect(5, 5, 2, 8);
    ctx.fillRect(c.width - 13, 5, 8, 2);
    ctx.fillRect(c.width - 7, 5, 2, 8);
    ctx.fillRect(5, c.height - 7, 8, 2);
    ctx.fillRect(5, c.height - 13, 2, 8);
    ctx.fillRect(c.width - 13, c.height - 7, 8, 2);
    ctx.fillRect(c.width - 7, c.height - 13, 2, 8);

    // 4. Header Bar
    const numStr = (index + 1 < 10 ? '0' : '') + (index + 1);
    ctx.fillStyle = 'rgba(217, 107, 39, 0.18)';
    ctx.fillRect(14, 14, c.width - 28, 26);

    ctx.fillStyle = '#d96b27';
    ctx.font = '600 12px "DM Mono", monospace';
    ctx.fillText(`PROJ // ${numStr}`, 22, 31);

    ctx.fillStyle = '#f4eee6';
    ctx.font = '500 10px "DM Mono", monospace';
    ctx.textAlign = 'right';
    ctx.fillText(item.tag || 'GITHUB REPO', c.width - 22, 31);
    ctx.textAlign = 'left';

    // 5. Large Project Title
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 20px "Chakra Petch", sans-serif';
    ctx.fillText(item.name.length > 32 ? item.name.substring(0, 32) + '…' : item.name, 22, 72);

    // 6. Project Description (2 lines wrapped)
    ctx.fillStyle = '#b9b4ae';
    ctx.font = '11px "DM Mono", monospace';
    const words = item.desc.split(' ');
    let line1 = '', line2 = '';
    for (let w of words) {
      if ((line1 + w).length < 44) line1 += w + ' ';
      else if ((line2 + w).length < 44) line2 += w + ' ';
    }
    ctx.fillText(line1.trim(), 22, 102);
    if (line2) ctx.fillText(line2.trim() + (words.length > 14 ? '…' : ''), 22, 120);

    // 7. Tech Pills
    let pillX = 22;
    const pillY = 150;
    (item.tech || [item.lang || 'Code']).slice(0, 4).forEach(t => {
      ctx.font = '500 10px "DM Mono", monospace';
      const textW = ctx.measureText(t).width;
      ctx.fillStyle = 'rgba(43, 39, 33, 0.85)';
      ctx.fillRect(pillX, pillY, textW + 12, 20);
      ctx.strokeStyle = 'rgba(217, 107, 39, 0.4)';
      ctx.strokeRect(pillX, pillY, textW + 12, 20);
      ctx.fillStyle = '#ece7dc';
      ctx.fillText(t, pillX + 6, pillY + 14);
      pillX += textW + 20;
    });

    // 8. Bottom Stats Strip (Stars & Forks & GitHub Link)
    ctx.fillStyle = 'rgba(15, 14, 12, 0.9)';
    ctx.fillRect(14, 196, c.width - 28, 42);
    ctx.strokeStyle = 'rgba(217, 107, 39, 0.2)';
    ctx.strokeRect(14, 196, c.width - 28, 42);

    ctx.fillStyle = '#f1c40f';
    ctx.font = 'bold 12px "DM Mono", monospace';
    ctx.fillText(`★ ${item.stars || 0} Stars`, 24, 222);

    ctx.fillStyle = '#9b59b6';
    ctx.fillText(`⑂ ${item.forks || 0} Forks`, 116, 222);

    ctx.fillStyle = '#d96b27';
    ctx.font = '600 11px "DM Mono", monospace';
    ctx.textAlign = 'right';
    ctx.fillText(`GitHub ↗`, c.width - 24, 222);
    ctx.textAlign = 'left';

    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.generateMipmaps = false;
    return { texture: tex, canvas: c };
  }

  // Generate 16 Panels along Cylindrical Rail (Evenly distributed around cylinder)
  projects.slice(0, 16).forEach((item, index) => {
    const { texture } = createProjectCanvasTexture(item, index);
    textures.push(texture);

    const material = new THREE.MeshBasicMaterial({
      map: texture,
      opacity: 0.90,
      side: THREE.DoubleSide,
      toneMapped: false,
      transparent: true
    });
    materials.push(material);

    const panel = new THREE.Mesh(geometry, material);
    panel.position.y = (index - 8) * 2.4;
    panel.rotation.y = (index / 16) * Math.PI * 4;
    panel.userData = { project: item, index, baseIndex: index };

    gallery.add(panel);
    panels.push(panel);
  });

  // State
  let disposed = false;
  let frame = 0;
  let elapsed = 0;
  let previousTime = 0;
  let hostVisible = true;
  let documentVisible = !document.hidden;
  let speedMultiplier = 1.0;
  let isAutoOrbit = true;

  let isDragging = false;
  let startPointerX = 0;
  let startPointerY = 0;
  let dragRotY = 0;
  let targetDragRotY = 0;
  let dragScrollY = 0;
  let targetDragScrollY = 0;

  let hoveredPanel = null;
  const raycaster = new THREE.Raycaster();
  const mouseVec = new THREE.Vector2(-999, -999);

  // HUD Elements
  const spotlightCard = document.getElementById('gallerySpotlightCard');
  const gscTag = document.getElementById('gscTag');
  const gscStars = document.getElementById('gscStars');
  const gscTitle = document.getElementById('gscTitle');
  const gscDesc = document.getElementById('gscDesc');
  const gscLink = document.getElementById('gscLink');
  const btnGalleryAuto = document.getElementById('btnGalleryAuto');
  const btnGallerySpeed = document.getElementById('btnGallerySpeed');

  function updateSpotlight(item) {
    if (!spotlightCard || !item) return;
    if (gscTag) gscTag.textContent = item.tag || 'GITHUB';
    if (gscStars) gscStars.textContent = `★ ${item.stars || 0}  ⑂ ${item.forks || 0}`;
    if (gscTitle) gscTitle.textContent = item.name;
    if (gscDesc) gscDesc.textContent = item.desc;
    if (gscLink) {
      gscLink.href = item.url || 'https://github.com/ozanardaozcelik';
      gscLink.textContent = `GitHub (${item.lang || 'Code'}) ↗`;
    }
    spotlightCard.style.opacity = '1';
    spotlightCard.style.transform = 'translateY(0)';
  }

  // Show initial flagship in spotlight
  updateSpotlight(projects[0]);

  // Render Loop
  const render = (time = performance.now()) => {
    if (previousTime) {
      const dt = Math.min((time - previousTime) / 1000, 0.05);
      if (isAutoOrbit) {
        elapsed += dt * speedMultiplier;
      }
    }
    previousTime = time;

    // Smooth drag interpolation
    dragRotY += (targetDragRotY - dragRotY) * 0.1;
    dragScrollY += (targetDragScrollY - dragScrollY) * 0.1;

    // Horizontal rotation (Natural direction)
    gallery.rotation.y = -elapsed * 0.18 + dragRotY;

    // Downward waterfall flow of panels ("aşşağı doğru geçsin")
    const totalSpan = 16 * 2.4; // 38.4
    panels.forEach((panel) => {
      const basePos = (panel.userData.baseIndex - 8) * 2.4;
      const moveY = (elapsed * 1.25) + dragScrollY;
      const rawY = basePos - moveY;
      const wrappedY = ((rawY + 19.2) % totalSpan + totalSpan) % totalSpan - 19.2;
      panel.position.y = wrappedY;
    });

    // Raycast for hover & focus
    if (hostVisible) {
      raycaster.setFromCamera(mouseVec, camera);
      const intersects = raycaster.intersectObjects(panels);

      if (intersects.length > 0) {
        const hit = intersects[0].object;
        if (hoveredPanel !== hit) {
          if (hoveredPanel) {
            hoveredPanel.material.opacity = 0.88;
            hoveredPanel.scale.set(1, 1, 1);
          }
          hoveredPanel = hit;
          hoveredPanel.material.opacity = 1.0;
          hoveredPanel.scale.set(1.04, 1.04, 1.04);
          canvas.style.cursor = 'pointer';
          updateSpotlight(hit.userData.project);
        }
      } else {
        if (hoveredPanel) {
          hoveredPanel.material.opacity = 0.88;
          hoveredPanel.scale.set(1, 1, 1);
          hoveredPanel = null;
          canvas.style.cursor = isDragging ? 'grabbing' : 'grab';
        }
      }
    }

    renderer.render(scene, camera);
  };

  const tick = (time) => {
    if (disposed || !hostVisible || !documentVisible) {
      frame = 0;
      previousTime = 0;
      return;
    }
    render(time);
    frame = window.requestAnimationFrame(tick);
  };

  const start = () => {
    if (!frame && hostVisible && documentVisible) {
      previousTime = performance.now();
      frame = window.requestAnimationFrame(tick);
    }
  };

  const stop = () => {
    if (frame) window.cancelAnimationFrame(frame);
    frame = 0;
    previousTime = 0;
  };

  const resize = () => {
    const bounds = host.getBoundingClientRect();
    const width = Math.max(1, Math.round(bounds.width));
    const height = Math.max(1, Math.round(bounds.height));
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.25));
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    render();
  };

  // Pointer & Drag Interactions
  function getPointerPos(e) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
      y: -(((e.clientY - rect.top) / rect.height) * 2 - 1),
      clientX: e.clientX,
      clientY: e.clientY
    };
  }

  canvas.addEventListener('pointerdown', (e) => {
    isDragging = true;
    startPointerX = e.clientX;
    startPointerY = e.clientY;
    canvas.setPointerCapture(e.pointerId);
    canvas.style.cursor = 'grabbing';
  });

  canvas.addEventListener('pointermove', (e) => {
    const pos = getPointerPos(e);
    mouseVec.x = pos.x;
    mouseVec.y = pos.y;

    if (isDragging) {
      const dx = e.clientX - startPointerX;
      const dy = e.clientY - startPointerY;
      targetDragRotY += dx * 0.005;
      targetDragScrollY += dy * 0.02;
      startPointerX = e.clientX;
      startPointerY = e.clientY;
    }
  });

  canvas.addEventListener('pointerup', (e) => {
    if (isDragging) {
      const dist = Math.hypot(e.clientX - startPointerX, e.clientY - startPointerY);
      isDragging = false;
      canvas.releasePointerCapture(e.pointerId);
      canvas.style.cursor = hoveredPanel ? 'pointer' : 'grab';

      // Click detected
      if (dist < 5 && hoveredPanel && hoveredPanel.userData.project) {
        const url = hoveredPanel.userData.project.url;
        if (url) window.open(url, '_blank', 'noopener,noreferrer');
      }
    }
  });

  canvas.addEventListener('pointerleave', () => {
    mouseVec.set(-999, -999);
  });

  // HUD Controls
  if (btnGalleryAuto) {
    btnGalleryAuto.addEventListener('click', () => {
      isAutoOrbit = !isAutoOrbit;
      btnGalleryAuto.classList.toggle('is-active', isAutoOrbit);
    });
  }

  if (btnGallerySpeed) {
    btnGallerySpeed.addEventListener('click', () => {
      if (speedMultiplier === 1.0) {
        speedMultiplier = 2.0;
        btnGallerySpeed.querySelector('span').textContent = 'Hız: 2.0x';
      } else if (speedMultiplier === 2.0) {
        speedMultiplier = 0.5;
        btnGallerySpeed.querySelector('span').textContent = 'Hız: 0.5x';
      } else {
        speedMultiplier = 1.0;
        btnGallerySpeed.querySelector('span').textContent = 'Hız: 1.0x';
      }
    });
  }

  // Live GitHub Hydration
  async function hydrateFromGitHub() {
    try {
      const res = await fetch('https://api.github.com/users/ozanardaozcelik/repos?per_page=100');
      if (!res.ok) return;
      const repos = await res.json();
      if (!Array.isArray(repos)) return;

      repos.forEach(repo => {
        panels.forEach(p => {
          if (p.userData && p.userData.project) {
            const pr = p.userData.project;
            if (
              pr.repoName === repo.name ||
              pr.name.toLowerCase().includes(repo.name.toLowerCase()) ||
              repo.name.toLowerCase().includes(pr.name.toLowerCase())
            ) {
              pr.stars = repo.stargazers_count;
              pr.forks = repo.forks_count;
              pr.url = repo.html_url;

              // Redraw texture with live GitHub data
              const { texture } = createProjectCanvasTexture(pr, p.userData.index);
              p.material.map.dispose();
              p.material.map = texture;
              p.material.needsUpdate = true;
            }
          }
        });
      });
    } catch (e) {
      console.log('GitHub live hydration fallback active.');
    }
  }

  hydrateFromGitHub();

  // Observers
  const resizeObserver = new ResizeObserver(resize);
  const intersectionObserver = new IntersectionObserver(([entry]) => {
    hostVisible = entry?.isIntersecting ?? false;
    if (hostVisible) {
      resize();
      start();
    } else {
      stop();
    }
  }, { threshold: 0.02, rootMargin: '120px' });

  const handleVisibility = () => {
    documentVisible = !document.hidden;
    if (documentVisible && hostVisible) start();
    else stop();
  };

  resizeObserver.observe(host);
  intersectionObserver.observe(host);
  document.addEventListener('visibilitychange', handleVisibility);

  resize();
  start();

  return () => {
    disposed = true;
    stop();
    resizeObserver.disconnect();
    intersectionObserver.disconnect();
    document.removeEventListener('visibilitychange', handleVisibility);
    gallery.clear();
    geometry.dispose();
    materials.forEach((m) => m.dispose());
    textures.forEach((t) => t.dispose());
    renderer.dispose();
  };
}
