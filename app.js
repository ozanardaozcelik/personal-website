/**
 * OZAN ARDA ÖZÇELİK — MASTER 3D PORTFOLIO & FLIGHT LOG ENGINE
 * 
 * Features:
 * 1. Lenis Smooth Scroll + GSAP ScrollTrigger Integration
 * 2. Signature "Zoom-In Through Letter's White to Zoom-Out into Next Scene" Transition Engine
 * 3. Three.js Hero 3D Avionic Space (Procedural UAV/SİHA with spinning prop, HUD rings, 3D particle constellation, mouse banking)
 * 4. Three.js Meng To 3D Sketchbook (Authentic 3D open book mesh, pointer-tilt, dynamic curled page-turn, draggable loupe, 5 plates)
 * 5. Three.js The Complete Shelf (3D wooden shelf, 5 clothbound books with gold-foil spines, raycasting hover pull-out & click inspection)
 * 6. Lenis.dev Style Horizontal Scroll Snapping Projects Deck (01, 02, 03, 04, 05)
 * 7. Interactive Terminal & Tactical Contact Console
 * 8. Bilingual Engine (TR / EN)
 * 9. Web Audio Tactical Feedback Sound Synthesis
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. STATE & GLOBAL CONFIGURATION
     ========================================================================== */
  const state = {
    lang: localStorage.getItem('ozan_portfolio_lang') || 'tr',
    currentPlate: 0,
    selectedVolume: 0,
    loupeActive: false,
    soundEnabled: true,
    isTransitioning: false
  };

  const isEn = () => state.lang === 'en';

  /* Synchronize HTML lang attribute */
  document.documentElement.setAttribute('lang', state.lang);

  /* Web Audio Synthesizer for Tactical Avionic Blips */
  const audioCtx = (function() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      return AudioContext ? new AudioContext() : null;
    } catch (e) {
      return null;
    }
  })();

  function playTacticalBlip(freq = 880, type = 'sine', duration = 0.04) {
    if (!state.soundEnabled || !audioCtx) return;
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {}
  }

  /* ==========================================================================
     2. LENIS SMOOTH SCROLL & GSAP SCROLLTRIGGER
     ========================================================================== */
  let lenis = null;
  if (typeof Lenis !== 'undefined') {
    try {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        smoothTouch: false,
      });
      window.__lenis = lenis;

      if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => lenis.raf(time * 1000));
        gsap.ticker.lagSmoothing(0);
      } else {
        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      }
    } catch (e) {
      console.warn('Lenis setup fallback:', e);
    }
  }

  /* Telemetry Clock & FPS Counter */
  const teleClock = document.getElementById('tele-clock');
  const teleFps = document.getElementById('tele-fps');
  let frameCount = 0, lastTime = performance.now();

  function updateTelemetryClock() {
    if (!teleClock) return;
    const now = new Date();
    const pad = (n) => String(n).padStart(2, '0');
    teleClock.textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())} UTC+3`;
  }
  updateTelemetryClock();
  setInterval(updateTelemetryClock, 1000);

  function fpsLoop(now) {
    frameCount++;
    if (now - lastTime >= 1000) {
      const fps = Math.round((frameCount * 1000) / (now - lastTime));
      if (teleFps) teleFps.textContent = `${fps} FPS // WEBGL 3D`;
      frameCount = 0;
      lastTime = now;
    }
    requestAnimationFrame(fpsLoop);
  }
  requestAnimationFrame(fpsLoop);

  /* Tactical SİHA Custom Cursor */
  (function initTacticalCursor() {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const cursorSiha = document.getElementById('cursor-siha');
    const cursorReticle = document.getElementById('cursor-reticle');
    if (!cursorSiha || !cursorReticle) return;

    let targetX = -100, targetY = -100;
    let posX = targetX, posY = targetY;

    window.addEventListener('mousemove', (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    }, { passive: true });

    document.querySelectorAll('a, button, input, .portal-glyph-container, .snap-project-card').forEach((el) => {
      el.addEventListener('mouseenter', () => {
        document.body.classList.add('cursor-active');
        playTacticalBlip(1200, 'triangle', 0.02);
      });
      el.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-active');
      });
    });

    function renderCursor() {
      posX += (targetX - posX) * 0.25;
      posY += (targetY - posY) * 0.25;
      cursorSiha.style.transform = `translate3d(${posX - 14}px, ${posY - 14}px, 0)`;
      cursorReticle.style.transform = `translate3d(${posX - 22}px, ${posY - 22}px, 0)`;
      requestAnimationFrame(renderCursor);
    }
    requestAnimationFrame(renderCursor);
  })();

  /* ==========================================================================
     3. THE SIGNATURE ZOOM-IN (INTO WHITE LETTER) -> ZOOM-OUT ENGINE
     "zoomin ile harfin beyazına zoomlayıp sonra o beyazdan zoomout yapıp yeni sayfaya geçiş"
     ========================================================================== */
  const whiteoutScreen = document.getElementById('whiteout-screen');

  function triggerCinematicLetterZoom(targetSelector, glyphEl) {
    if (state.isTransitioning) return;
    state.isTransitioning = true;
    playTacticalBlip(440, 'sawtooth', 0.15);

    const targetSection = document.querySelector(targetSelector);
    if (!targetSection) {
      state.isTransitioning = false;
      return;
    }

    const glyph = glyphEl || document.getElementById('portal-letter-zoom');

    // 1. Zoom aggressively into the white body of the letter
    if (typeof gsap !== 'undefined') {
      const tl = gsap.timeline({
        onComplete: () => {
          // Scroll immediately to target
          if (lenis) {
            lenis.scrollTo(targetSection, { immediate: true });
          } else {
            targetSection.scrollIntoView({ behavior: 'auto' });
          }

          // 2. Zoom-out from the white into the target scene
          gsap.fromTo(targetSection, 
            { scale: 2.2, filter: 'brightness(2.5)' },
            { scale: 1.0, filter: 'brightness(1)', duration: 0.8, ease: 'power3.out' }
          );

          // Fade out the white screen
          gsap.to(whiteoutScreen, {
            opacity: 0,
            duration: 0.5,
            ease: 'power2.out',
            onComplete: () => {
              state.isTransitioning = false;
              if (glyph) gsap.set(glyph, { scale: 1, clearProps: 'transform' });
            }
          });
        }
      });

      // Zoom glyph to 80x scale and flash screen white
      tl.to(glyph, {
        scale: 90,
        duration: 0.65,
        ease: 'power4.in',
        transformOrigin: '50% 50%'
      })
      .to(whiteoutScreen, {
        opacity: 1,
        duration: 0.35,
        ease: 'power2.in'
      }, '-=0.25');

    } else {
      // Fallback
      if (lenis) lenis.scrollTo(targetSection);
      else targetSection.scrollIntoView({ behavior: 'smooth' });
      state.isTransitioning = false;
    }
  }

  // Hook up portal glyph clicks
  const portalGlyph1 = document.getElementById('portal-glyph-1');
  if (portalGlyph1) {
    portalGlyph1.addEventListener('click', () => {
      triggerCinematicLetterZoom('#scene-sketchbook', document.getElementById('portal-letter-zoom'));
    });
  }

  const portalGlyph2 = document.getElementById('portal-glyph-2');
  if (portalGlyph2) {
    portalGlyph2.addEventListener('click', () => {
      triggerCinematicLetterZoom('#scene-shelf', portalGlyph2.querySelector('.portal-glyph-letter'));
    });
  }

  const portalGlyph3 = document.getElementById('portal-glyph-3');
  if (portalGlyph3) {
    portalGlyph3.addEventListener('click', () => {
      triggerCinematicLetterZoom('#scene-projects', portalGlyph3.querySelector('.portal-glyph-letter'));
    });
  }

  const portalGlyph4 = document.getElementById('portal-glyph-4');
  if (portalGlyph4) {
    portalGlyph4.addEventListener('click', () => {
      triggerCinematicLetterZoom('#scene-contact', portalGlyph4.querySelector('.portal-glyph-letter'));
    });
  }

  // Top Nav button transitions
  document.querySelectorAll('.nav-btn-link').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const targetId = btn.getAttribute('data-target');
      if (targetId) {
        triggerCinematicLetterZoom(targetId);
      }
    });
  });

  const navBrandBtn = document.getElementById('nav-brand-btn');
  if (navBrandBtn) {
    navBrandBtn.addEventListener('click', (e) => {
      e.preventDefault();
      triggerCinematicLetterZoom('#scene-hero');
    });
  }

  const backTopBtn = document.getElementById('btn-back-top');
  if (backTopBtn) {
    backTopBtn.addEventListener('click', () => {
      triggerCinematicLetterZoom('#scene-hero');
    });
  }

  /* Setup GSAP ScrollTrigger Continuous Zoom Scrubbing */
  if (typeof ScrollTrigger !== 'undefined') {
    // Portal 1: Hero to Sketchbook
    const p1Letter = document.getElementById('portal-letter-zoom');
    if (p1Letter) {
      ScrollTrigger.create({
        trigger: '#hero-zoom-portal',
        start: 'top 75%',
        end: 'bottom 20%',
        scrub: 1.5,
        onUpdate: (self) => {
          if (self.progress > 0.85 && !state.isTransitioning) {
            whiteoutScreen.style.opacity = (self.progress - 0.85) / 0.15;
          } else if (!state.isTransitioning) {
            whiteoutScreen.style.opacity = 0;
          }
        }
      });
    }
  }

  /* ==========================================================================
     4. THREE.JS SCENE 1: HERO 3D AVIONIC SİHA SPACE
     ========================================================================== */
  (function initHeroThreeScene() {
    const canvas = document.getElementById('hero-three-canvas');
    if (!canvas || typeof THREE === 'undefined') return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.set(0, 2, 14);

    // Lighting
    const ambLight = new THREE.AmbientLight(0x0a1428, 2.5);
    scene.add(ambLight);

    const cyanKey = new THREE.DirectionalLight(0x00e5ff, 3.5);
    cyanKey.position.set(8, 12, 10);
    scene.add(cyanKey);

    const orangeRim = new THREE.DirectionalLight(0xff7a45, 2.0);
    orangeRim.position.set(-10, -5, -8);
    scene.add(orangeRim);

    // Group for UAV / SİHA Aircraft
    const uavGroup = new THREE.Group();
    scene.add(uavGroup);

    // 1. Procedural Aerodynamic Fuselage (X-UAV / Talon Style)
    const fuselageGeom = new THREE.CylinderGeometry(0.55, 0.45, 5.5, 16);
    fuselageGeom.rotateX(Math.PI / 2);
    const fuselageMat = new THREE.MeshStandardMaterial({
      color: 0x0c1628,
      metalness: 0.8,
      roughness: 0.25,
      wireframe: false
    });
    const fuselage = new THREE.Mesh(fuselageGeom, fuselageMat);
    uavGroup.add(fuselage);

    // Fuselage Wireframe Accent Cage
    const wireGeom = new THREE.WireframeGeometry(fuselageGeom);
    const wireMat = new THREE.LineBasicMaterial({ color: 0x00e5ff, transparent: true, opacity: 0.35 });
    const wireMesh = new THREE.LineSegments(wireGeom, wireMat);
    uavGroup.add(wireMesh);

    // 2. Main Wings
    const wingGeom = new THREE.BoxGeometry(11, 0.08, 1.4);
    const wingMat = new THREE.MeshStandardMaterial({ color: 0x081020, metalness: 0.7, roughness: 0.3 });
    const wings = new THREE.Mesh(wingGeom, wingMat);
    wings.position.set(0, 0.2, -0.4);
    uavGroup.add(wings);

    // Wingtips Navigation Lights
    const portLight = new THREE.PointLight(0xff0044, 2, 4);
    portLight.position.set(-5.4, 0.2, -0.4);
    uavGroup.add(portLight);

    const stbdLight = new THREE.PointLight(0x00ff88, 2, 4);
    stbdLight.position.set(5.4, 0.2, -0.4);
    uavGroup.add(stbdLight);

    // 3. V-Tail Stabilizers
    const finGeom = new THREE.BoxGeometry(0.08, 1.5, 0.9);
    const finLeft = new THREE.Mesh(finGeom, wingMat);
    finLeft.position.set(-0.9, 0.8, -2.6);
    finLeft.rotation.z = -0.45;
    uavGroup.add(finLeft);

    const finRight = new THREE.Mesh(finGeom, wingMat);
    finRight.position.set(0.9, 0.8, -2.6);
    finRight.rotation.z = 0.45;
    uavGroup.add(finRight);

    // 4. Pusher Propeller (Tail)
    const propGroup = new THREE.Group();
    propGroup.position.set(0, 0, -2.85);
    const bladeGeom = new THREE.BoxGeometry(1.6, 0.08, 0.02);
    const bladeMat = new THREE.MeshBasicMaterial({ color: 0xff7a45 });
    const blade1 = new THREE.Mesh(bladeGeom, bladeMat);
    const blade2 = new THREE.Mesh(bladeGeom, bladeMat);
    blade2.rotation.z = Math.PI / 2;
    propGroup.add(blade1);
    propGroup.add(blade2);
    uavGroup.add(propGroup);

    // 5. Gimbal Camera on Nose
    const gimbalGeom = new THREE.SphereGeometry(0.35, 16, 16);
    const gimbalMat = new THREE.MeshStandardMaterial({ color: 0x00e5ff, metalness: 0.9, roughness: 0.1 });
    const gimbal = new THREE.Mesh(gimbalGeom, gimbalMat);
    gimbal.position.set(0, -0.25, 2.7);
    uavGroup.add(gimbal);

    // 6. Holographic Target Reticle Rings
    const ringGeom1 = new THREE.RingGeometry(3.6, 3.65, 48);
    const ringMat1 = new THREE.MeshBasicMaterial({ color: 0x00e5ff, side: THREE.DoubleSide, transparent: true, opacity: 0.4 });
    const ringMesh1 = new THREE.Mesh(ringGeom1, ringMat1);
    ringMesh1.rotation.x = Math.PI / 2;
    scene.add(ringMesh1);

    const ringGeom2 = new THREE.RingGeometry(5.2, 5.23, 64);
    const ringMat2 = new THREE.MeshBasicMaterial({ color: 0xff7a45, side: THREE.DoubleSide, transparent: true, opacity: 0.25 });
    const ringMesh2 = new THREE.Mesh(ringGeom2, ringMat2);
    ringMesh2.rotation.x = Math.PI / 2;
    scene.add(ringMesh2);

    // 7. 3D Particle Constellation / Altitude Stars
    const particleCount = 1200;
    const particleGeom = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 60;
      particlePositions[i + 1] = (Math.random() - 0.5) * 40;
      particlePositions[i + 2] = (Math.random() - 0.5) * 60;
    }
    particleGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x00e5ff,
      size: 0.14,
      transparent: true,
      opacity: 0.65
    });
    const particleField = new THREE.Points(particleGeom, particleMat);
    scene.add(particleField);

    // Aircraft Banking & Mouse Dynamics
    let mouseX = 0, mouseY = 0;
    window.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    }, { passive: true });

    // Resize Handler
    function onWindowResize() {
      if (!canvas) return;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    }
    window.addEventListener('resize', onWindowResize);

    // Render Animation Loop
    function animateHero(time) {
      requestAnimationFrame(animateHero);

      // Spin propeller rapidly
      propGroup.rotation.z += 0.85;

      // Aircraft banking & flight roll toward cursor
      const targetRoll = -mouseX * 0.45;
      const targetPitch = mouseY * 0.35;
      const targetYaw = mouseX * 0.3;

      uavGroup.rotation.z += (targetRoll - uavGroup.rotation.z) * 0.05;
      uavGroup.rotation.x += (targetPitch - uavGroup.rotation.x) * 0.05;
      uavGroup.rotation.y += (targetYaw - uavGroup.rotation.y) * 0.05;

      // Subtle aerodynamic altitude hover bob
      uavGroup.position.y = Math.sin(time * 0.002) * 0.25;

      // Spin HUD rings
      ringMesh1.rotation.z += 0.003;
      ringMesh2.rotation.z -= 0.002;

      // Drift particle field
      particleField.rotation.y += 0.0004;

      renderer.render(scene, camera);
    }
    requestAnimationFrame(animateHero);
  })();

  /* ==========================================================================
     5. THREE.JS SCENE 2: MENG TO 3D SKETCHBOOK ENGINE
     Reference: https://threeui.com/landing-pages/meng-to-sketchbook-landing-page
     ========================================================================== */
  const sketchbookData = [
    {
      kickerTr: "BÖLÜM 01 // AKADEMİK TEMELLER",
      kickerEn: "CHAPTER 01 // ACADEMIC FOUNDATIONS",
      titleTr: "Tekirdağ Namık Kemal Üniversitesi",
      titleEn: "Namık Kemal University, Computer Eng.",
      subTr: "Bilgisayar Mühendisliği (2022 – 2026) · 3.25 GPA",
      subEn: "Computer Engineering (2022 – 2026) · 3.25 GPA",
      bodyTr: "Mühendislik temellerimi veri yapıları, algoritmalar, gömülü sistemler ve yapay zeka mimarisi üzerine inşa ettim. Bölüm genelinde Yüksek Onur derecesiyle sürdürdüğüm eğitimimde teorik bilgiyi doğrudan saha projeleri ve İHA simülasyonlarıyla birleştirdim.",
      bodyEn: "Formed engineering foundations across data structures, algorithms, embedded systems, and machine learning architectures. Combining theoretical computer science with real UAV flight simulators and field testbeds with High Honor standing.",
      img: "1.jpg",
      specsTr: [
        { lbl: "ORTALAMA", val: "3.25 / 4.00" },
        { lbl: "DERECE", val: "Yüksek Onur" },
        { lbl: "ODAK", val: "Otonomi & CV" },
        { lbl: "TEZ", val: "Otonom SİHA Güdümü" }
      ],
      specsEn: [
        { lbl: "GPA", val: "3.25 / 4.00" },
        { lbl: "HONORS", val: "High Honors" },
        { lbl: "FOCUS", val: "Autonomy & CV" },
        { lbl: "THESIS", val: "Autonomous Guidance" }
      ],
      handwrittenTr: "“Algoritmayı donanıma yaklaştırdığın an gerçek otonomi başlar.”",
      handwrittenEn: "“True autonomy begins when algorithms merge directly with physical hardware.”"
    },
    {
      kickerTr: "BÖLÜM 02 // SAVAŞAN İHA LİDERLİĞİ",
      kickerEn: "CHAPTER 02 // COMBAT UAV LEADERSHIP",
      titleTr: "Şahi Otonom SİHA Takımı",
      titleEn: "Şahi Autonomous UAV Team",
      subTr: "Yazılım Ekip Lideri (2025 – Günümüz) · TEKNOFEST",
      subEn: "Software Team Lead (2025 – Present) · TEKNOFEST",
      bodyTr: "TEKNOFEST Savaşan İHA kategorisi için hava-hava it dalaşı (dogfight) ve kamikaze hedef vuruş kabiliyetlerine sahip sabit kanatlı SİHA yazılımını yönetiyorum. YOLOv8 ve ByteTrack ile rakip İHA tespitini, PyMAVLink ve ArduPilot ile seyrüsefer ve oransal güdüm algoritmalarını hayata geçirdik.",
      bodyEn: "Leading the software engineering division for TEKNOFEST Fighting UAV. Architected air-to-air dogfight tracking and kamikaze dive attack systems using YOLOv8, ByteTrack, PyMAVLink, ArduPilot GNC, and ROS 2 state-machine controllers.",
      img: "3.png",
      specsTr: [
        { lbl: "ROL", val: "Yazılım Ekip Lideri" },
        { lbl: "GÜDÜM", val: "Oransal Seyrüsefer" },
        { lbl: "HEDEF BULMA", val: "YOLOv8 + ByteTrack" },
        { lbl: "DONANIM", val: "ArduPilot + Companion PC" }
      ],
      specsEn: [
        { lbl: "ROLE", val: "Software Team Lead" },
        { lbl: "GUIDANCE", val: "Proportional Nav." },
        { lbl: "TARGET LOCK", val: "YOLOv8 + ByteTrack" },
        { lbl: "HARDWARE", val: "ArduPilot + Jetson" }
      ],
      handwrittenTr: "“Kamikaze dalış algoritmasında her milisaniye kritik koordinat düzeltmesidir.”",
      handwrittenEn: "“In kamikaze guidance, every single millisecond is critical trajectory correction.”"
    },
    {
      kickerTr: "BÖLÜM 03 // ENDÜSTRİYEL GÖRÜ & ROBOTİK",
      kickerEn: "CHAPTER 03 // INDUSTRIAL VISION & ROBOTICS",
      titleTr: "Çözüm Makina Ar-Ge",
      titleEn: "Çözüm Makina R&D Internship",
      subTr: "Ar-Ge Stajyeri (Temmuz 2026 – Ağustos 2026) · İstanbul",
      subEn: "R&D Intern (July 2026 – August 2026) · Istanbul",
      bodyTr: "isee vision ve isee robot ürün gamında endüstriyel üretim hatları için mikron düzeyinde PatchCore ve DINO tabanlı sıfır hata anomali segmentasyon modelleri geliştirdim. Yüksek hızlı PaddleOCR ile parça seri numarası okuma ve Gazebo/ROS 2 robot kol simülasyonları tasarladım.",
      bodyEn: "Developed zero-defect visual anomaly detection pipelines for isee vision and isee robot lines using PatchCore and DINO. Built ultra-fast PaddleOCR serial identification and validated industrial robot arms in Gazebo and ROS 2.",
      img: "1.jpg",
      specsTr: [
        { lbl: "PLATFORM", val: "isee vision & robot" },
        { lbl: "ANOMALİ", val: "PatchCore / DINO" },
        { lbl: "OCR", val: "PaddleOCR (12ms)" },
        { lbl: "SİMÜLASYON", val: "Gazebo & ROS 2" }
      ],
      specsEn: [
        { lbl: "PLATFORM", val: "isee vision & robot" },
        { lbl: "ANOMALY", val: "PatchCore / DINO" },
        { lbl: "OCR", val: "PaddleOCR (12ms)" },
        { lbl: "SIMULATION", val: "Gazebo & ROS 2" }
      ],
      handwrittenTr: "“Sub-milimetrik anomali tespiti, üretim bandının hatasız çalışmasını sağlar.”",
      handwrittenEn: "“Sub-millimeter anomaly detection guarantees flawless industrial manufacturing.”"
    },
    {
      kickerTr: "BÖLÜM 04 // AGENTIC AI & ENTERPRISE",
      kickerEn: "CHAPTER 04 // AGENTIC AI & ENTERPRISE",
      titleTr: "Martur Fompak International",
      titleEn: "Martur Fompak International",
      subTr: "Yapay Zeka Stajyeri (Haziran 2025 – Ağustos 2025)",
      subEn: "AI Intern (June 2025 – August 2025)",
      bodyTr: "Global otomotiv tedarikçisi bünyesinde Generative AI ve Agentic AI mimarileri geliştirdim. İş süreçlerini otonom alt görevlere ayıran çoklu ajan iş akışları, kurumsal LLM orkestrasyonu ve şirket içi veri analizine dayalı özel makine öğrenmesi modeli kurguladım.",
      bodyEn: "Developed Generative AI and multi-agent Agentic AI architectures inside a tier-1 global automotive manufacturer. Built autonomous LLM orchestration workflows and designed proprietary machine learning predictive models.",
      img: "4.jpg",
      specsTr: [
        { lbl: "MİMARİ", val: "Agentic AI Multi-Agent" },
        { lbl: "KÜTÜPHANE", val: "LangChain & PyTorch" },
        { lbl: "MODEL", val: "Custom Predictive ML" },
        { lbl: "ALAN", val: "Kurumsal Süreç Otonomisi" }
      ],
      specsEn: [
        { lbl: "ARCHITECTURE", val: "Agentic AI Multi-Agent" },
        { lbl: "FRAMEWORK", val: "LangChain & PyTorch" },
        { lbl: "MODEL", val: "Custom Predictive ML" },
        { lbl: "FIELD", val: "Enterprise Automation" }
      ],
      handwrittenTr: "“Ajanların iş birliği, insan verimliliğini üstel olarak artırır.”",
      handwrittenEn: "“Autonomous agent collaboration exponentially scales human engineering output.”"
    },
    {
      kickerTr: "BÖLÜM 05 // YAZILIM YÖNETİMİ & TOPLULUK",
      kickerEn: "CHAPTER 05 // LEADERSHIP & ARCHITECTURE",
      titleTr: "Huawei Student Developers",
      titleEn: "Huawei Student Developers",
      subTr: "Yazılım Komitesi Lideri (Eylül 2025 – Ocak 2026)",
      subEn: "Software Committee Lead (Sep 2025 – Jan 2026)",
      bodyTr: "Öğrenci geliştirici topluluğunda ortak yazılım geliştirme standartlarını oluşturdum. Git branching modelleri, mimari incelemeler (code reviews) ve teknik atölyeler düzenleyerek onlarca genç mühendisin üretim süreçlerine liderlik ettim.",
      bodyEn: "Standardized team software workflows across the student developer ecosystem. Conducted code reviews, architecture decision records, git branching protocols, and hands-on workshops in machine learning and cloud architectures.",
      img: "2.png",
      specsTr: [
        { lbl: "POZİSYON", val: "Komite Lideri" },
        { lbl: "KAPSAM", val: "Mimari & Git Workflow" },
        { lbl: "ATÖLYELER", val: "Python, AI, Cloud" },
        { lbl: "KOD İNCELEME", val: "GitHub Pull Requests" }
      ],
      specsEn: [
        { lbl: "POSITION", val: "Committee Lead" },
        { lbl: "SCOPE", val: "Architecture & Git" },
        { lbl: "WORKSHOPS", val: "Python, AI, Cloud" },
        { lbl: "CODE REVIEW", val: "GitHub Pull Requests" }
      ],
      handwrittenTr: "“Temiz mimari ve takım kültürü, her büyük yazılımın omurgasıdır.”",
      handwrittenEn: "“Clean architecture and team culture are the backbone of extraordinary software.”"
    }
  ];

  function renderSketchbookPlate(idx) {
    state.currentPlate = (idx + sketchbookData.length) % sketchbookData.length;
    const data = sketchbookData[state.currentPlate];

    // Indicator
    const curIdxEl = document.getElementById('sb-cur-idx');
    if (curIdxEl) curIdxEl.textContent = String(state.currentPlate + 1).padStart(2, '0');

    // Tabs Tray
    document.querySelectorAll('.sb-tab-pill').forEach((pill, i) => {
      pill.classList.toggle('active', i === state.currentPlate);
    });

    const leftContainer = document.getElementById('sb-left-content');
    const rightContainer = document.getElementById('sb-right-content');
    if (!leftContainer || !rightContainer) return;

    const en = isEn();
    const kicker = en ? data.kickerEn : data.kickerTr;
    const title = en ? data.titleEn : data.titleTr;
    const sub = en ? data.subEn : data.subTr;
    const body = en ? data.bodyEn : data.bodyTr;
    const specs = en ? data.specsEn : data.specsTr;
    const handwritten = en ? data.handwrittenEn : data.handwrittenTr;

    // Left Page Markup (Editorial & Blueprint Frame)
    leftContainer.innerHTML = `
      <div>
        <div class="plate-kicker">
          <span>${kicker}</span>
          <span>PLATE [ 0${state.currentPlate + 1} ]</span>
        </div>
        <h3 class="plate-heading">${title}</h3>
        <p style="font-family:var(--font-mono);font-size:11px;color:#8C7B6B;margin-bottom:12px;">// ${sub}</p>
        <p class="plate-prose">${body}</p>
      </div>
      <div class="plate-handwritten-note">${handwritten}</div>
    `;

    // Right Page Markup (Blueprint Graphic, Tech Specs & Telemetry)
    let specsHtml = '';
    specs.forEach((s) => {
      specsHtml += `<div class="plate-spec-item"><b>${s.lbl}:</b> ${s.val}</div>`;
    });

    rightContainer.innerHTML = `
      <div>
        <div class="plate-kicker">
          <span>SCHEMATICS &amp; FIELD BLUEPRINT</span>
          <span>FIG. 3-${state.currentPlate + 1}</span>
        </div>
        <div class="plate-blueprint-frame">
          <img src="${data.img}" alt="${title}" onerror="this.src='3.png'" />
          <div class="blueprint-grid-watermark"></div>
        </div>
        <div class="plate-specs-grid">
          ${specsHtml}
        </div>
      </div>
      <div style="font-family:var(--font-mono);font-size:9.5px;color:#8C7B6B;display:flex;justify-content:space-between;border-top:1px dashed #D6CDBD;padding-top:8px;">
        <span>OZAN ARDA FLIGHT LOG // AUTHORIZED ENTRY</span>
        <span>VERIFIED IN PRODUCTION</span>
      </div>
    `;

    playTacticalBlip(800, 'sine', 0.03);
  }

  // Hook up prev/next and tabs
  const sbPrevBtn = document.getElementById('sb-dock-prev');
  const sbNextBtn = document.getElementById('sb-dock-next');
  if (sbPrevBtn) sbPrevBtn.addEventListener('click', () => {
    animatePageTurn(-1);
  });
  if (sbNextBtn) sbNextBtn.addEventListener('click', () => {
    animatePageTurn(1);
  });

  document.querySelectorAll('.sb-tab-pill').forEach((pill) => {
    pill.addEventListener('click', () => {
      const p = parseInt(pill.getAttribute('data-plate'), 10);
      animatePageTurn(p - state.currentPlate);
    });
  });

  // Animated 3D Page Turn with Curled Curtain
  function animatePageTurn(dir) {
    const curtain = document.getElementById('sb-turn-curtain');
    if (typeof gsap !== 'undefined' && curtain) {
      gsap.timeline()
        .to(curtain, {
          opacity: 1,
          rotateY: -60,
          scaleX: 0.9,
          duration: 0.2,
          ease: 'power2.in',
          onComplete: () => {
            renderSketchbookPlate(state.currentPlate + dir);
          }
        })
        .to(curtain, {
          rotateY: 0,
          scaleX: 1,
          opacity: 0,
          duration: 0.25,
          ease: 'power2.out'
        });
    } else {
      renderSketchbookPlate(state.currentPlate + dir);
    }
  }

  // Pointer-Tilt effect for the Sketchbook (Meng To signature effect)
  const sbFrame = document.getElementById('sb-book-frame');
  const sbOverlay = document.getElementById('sb-desk-overlay');
  if (sbOverlay && sbFrame) {
    sbOverlay.addEventListener('mousemove', (e) => {
      const rect = sbOverlay.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      sbFrame.style.transform = `rotateX(${-y * 12}deg) rotateY(${x * 14}deg) translateZ(10px)`;
    });

    sbOverlay.addEventListener('mouseleave', () => {
      sbFrame.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0)';
    });
  }

  // Interactive Loupe (Magnifier Tool)
  const loupeEl = document.getElementById('sb-loupe-element');
  const loupeToggleBtn = document.getElementById('sb-toggle-loupe');
  if (loupeToggleBtn && loupeEl) {
    loupeToggleBtn.addEventListener('click', () => {
      state.loupeActive = !state.loupeActive;
      loupeEl.classList.toggle('active', state.loupeActive);
      playTacticalBlip(950, 'sine', 0.05);
    });

    if (sbFrame) {
      sbFrame.addEventListener('mousemove', (e) => {
        if (!state.loupeActive) return;
        const rect = sbFrame.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        loupeEl.style.left = `${mouseX}px`;
        loupeEl.style.top = `${mouseY}px`;
      });
    }
  }

  // Render initial sketchbook plate
  renderSketchbookPlate(0);

  /* ==========================================================================
     6. THREE.JS SCENE 3: THE COMPLETE SHELF ENGINE
     Reference: https://threeui.com/hero/complete-shelf-landing-page
     ========================================================================== */
  const shelfData = [
    {
      volTr: "CİLT I // BİLGİSAYARLI GÖRÜ",
      volEn: "VOLUME I // COMPUTER VISION",
      titleTr: "BİLGİSAYARLI GÖRÜ & DERİN ÖĞRENME",
      titleEn: "COMPUTER VISION & DEEP LEARNING",
      descTr: "TEKNOFEST Savaşan İHA ve Çözüm Makina Ar-Ge projelerinde gerçek zamanlı hava-hava hedef tespiti, ByteTrack çoklu hedef izleme, PatchCore anomali tespiti ve yüksek hızlı PaddleOCR.",
      descEn: "Real-time air-to-air target acquisition, ByteTrack multi-target trajectory estimation, PatchCore zero-defect anomaly detection, and high-speed PaddleOCR for SİHA and industrial robots.",
      skills: ["YOLOv8 & YOLOv11", "ByteTrack", "OpenCV", "PatchCore / DINO", "PaddleOCR", "CUDA & TensorRT", "MediaPipe 21-pt"],
      metrics: [
        { name: "Inference Latency (YOLOv8 Edge)", val: "14 ms // Real-time" },
        { name: "Air-to-Air Target Lock Accuracy", val: "94.8% mAP@50" },
        { name: "Industrial Defect Segmentation", val: "Sub-millimeter (99.1%)" },
        { name: "OCR Serial Read Speed", val: "12 ms / frame" }
      ],
      color: 0x1a365d,
      foilText: "COMPUTER VISION"
    },
    {
      volTr: "CİLT II // OTONOMİ & ROS 2",
      volEn: "VOLUME II // AUTONOMY & ROS 2",
      titleTr: "OTONOM UÇUŞ & ROBOTİK SEYRÜSEFER",
      titleEn: "AUTONOMOUS FLIGHT & GNC ROBOTICS",
      descTr: "Şahi SİHA takımında ArduPilot, PyMAVLink ve ROS 2 Humble ile görev planlama, kamikaze dalış oransal seyrüsefer güdümü, durum makineleri ve Gazebo simülasyonları.",
      descEn: "Full UAV autonomy stack using ArduPilot, PyMAVLink, and ROS 2 Humble. Proportional navigation kamikaze dive guidance, state-machine fail-safes, and Gazebo flight validation.",
      skills: ["ArduPilot / SITL", "PyMAVLink", "ROS 2 Humble", "Gazebo Sim", "Proportional Nav.", "QGroundControl", "Mission Planner"],
      metrics: [
        { name: "Guidance Loop Rate", val: "50 Hz / PyMAVLink" },
        { name: "Kamikaze Trajectory Error", val: "< 1.2 meters CEP" },
        { name: "Simulation Hours (Gazebo)", val: "250+ Hours" },
        { name: "Fail-safe Response Time", val: "< 80 ms" }
      ],
      color: 0x14532d,
      foilText: "AUTONOMY & ROS"
    },
    {
      volTr: "CİLT III // YAPAY ZEKA SİSTEMLERİ",
      volEn: "VOLUME III // ARTIFICIAL INTELLIGENCE",
      titleTr: "AGENTIC AI & KURUMSAL LLM MİMARİSİ",
      titleEn: "AGENTIC AI & ENTERPRISE LLMS",
      descTr: "Martur Fompak International bünyesinde Generative AI, çoklu ajan (multi-agent) otomasyonu, RAG mimarileri ve şirket içi özel makine öğrenmesi tahmin modelleri.",
      descEn: "Enterprise Generative AI workflows, multi-agent Agentic AI orchestration, retrieval augmented generation (RAG), and proprietary ML models built during tier-1 automotive internship.",
      skills: ["Agentic AI", "LangChain", "Transformers", "PyTorch", "RAG Pipelines", "Prompt Engineering", "Custom ML Models"],
      metrics: [
        { name: "Multi-Agent Automation Flow", val: "Autonomous Exec." },
        { name: "Model Accuracy (Predictive ML)", val: "91.4% F1-Score" },
        { name: "Context Retrieval Speed", val: "180 ms" },
        { name: "Task Decomposition Depth", val: "5-Tier Hierarchy" }
      ],
      color: 0x7f1d1d,
      foilText: "ARTIFICIAL INT."
    },
    {
      volTr: "CİLT IV // SİSTEMLER & GÖMÜLÜ",
      volEn: "VOLUME IV // SYSTEMS & EMBEDDED",
      titleTr: "GÖMÜLÜ SİSTEMLER & DEVOPS ALTYAPISI",
      titleEn: "EMBEDDED COMPUTING & INFRASTRUCTURE",
      descTr: "NVIDIA Jetson platformu, Linux RT çekirdeği, Docker konteynerleri, Git iş akışları ve uç cihazlarda optimize edilmiş yapay zeka çıkarım hatları.",
      descEn: "NVIDIA Jetson edge deployment, Linux RT environments, Docker containerization, robust Git workflows, and low-latency C++/Python hardware bridging.",
      skills: ["Python", "C / C++", "NVIDIA Jetson Orin", "Docker", "Git / GitHub", "Linux RT", "MAVLink Protocol"],
      metrics: [
        { name: "Edge Container Deploy", val: "Dockerized ARM64" },
        { name: "Companion PC Uptime", val: "99.9% Nominal" },
        { name: "Thermal Throttling Control", val: "Active Governor" },
        { name: "Code Coverage & CI/CD", val: "Automated Testing" }
      ],
      color: 0x374151,
      foilText: "SYSTEMS & DEVOPS"
    },
    {
      volTr: "CİLT V // LİDERLİK & STRATEJİ",
      volEn: "VOLUME V // LEADERSHIP & STRATEGY",
      titleTr: "MÜHENDİSLİK LİDERLİĞİ & YÖNETİM",
      titleEn: "ENGINEERING LEADERSHIP & STRATEGY",
      descTr: "Şahi SİHA yazılım ekip liderliği ve Huawei Student Developers komite başkanlığı: Mimari kararlar, çevik proje yönetimi (Agile/Scrum), kod inceleme standartları ve genç mühendis mentörlüğü.",
      descEn: "Leading the software engineering division at Şahi UAV and directing Huawei Student Developers software committee. Technical roadmap planning, Agile sprints, and code review leadership.",
      skills: ["Team Leadership", "Agile / Scrum", "Architecture Decision (ADR)", "Code Review Mentorship", "Technical Roadmaps"],
      metrics: [
        { name: "Team Engineers Led", val: "12+ Engineers" },
        { name: "Sprint Delivery Rate", val: "95% On-Time" },
        { name: "Community Workshops Held", val: "8 Technical Sessions" },
        { name: "Competition Readiness", val: "TEKNOFEST Verified" }
      ],
      color: 0x4c1d95,
      foilText: "LEADERSHIP"
    }
  ];

  function renderShelfDetail(volIdx) {
    state.selectedVolume = volIdx;
    const vol = shelfData[volIdx];
    const en = isEn();

    // Volume Picker Buttons
    document.querySelectorAll('.vol-pick-btn').forEach((btn, i) => {
      btn.classList.toggle('active', i === volIdx);
    });

    const volTagEl = document.getElementById('drawer-vol-tag');
    const titleEl = document.getElementById('drawer-title');
    const descEl = document.getElementById('drawer-desc');
    const skillsListEl = document.getElementById('drawer-skills-list');
    const telemetryRowsEl = document.getElementById('drawer-telemetry-rows');

    if (volTagEl) volTagEl.textContent = en ? vol.volEn : vol.volTr;
    if (titleEl) titleEl.textContent = en ? vol.titleEn : vol.titleTr;
    if (descEl) descEl.textContent = en ? vol.descEn : vol.descTr;

    if (skillsListEl) {
      let badgesHtml = '';
      vol.skills.forEach((skill) => {
        badgesHtml += `<span class="skill-chip-pill">${skill}</span>`;
      });
      skillsListEl.innerHTML = badgesHtml;
    }

    if (telemetryRowsEl) {
      let rowsHtml = '';
      vol.metrics.forEach((m) => {
        rowsHtml += `
          <div class="tele-metric-row">
            <div class="tele-metric-labels">
              <span class="metric-name">${m.name}</span>
              <span class="metric-val">${m.val}</span>
            </div>
            <div class="tele-metric-bar">
              <div class="tele-metric-fill" style="width: 85%;"></div>
            </div>
          </div>
        `;
      });
      telemetryRowsEl.innerHTML = rowsHtml;
    }

    playTacticalBlip(750, 'sine', 0.04);
  }

  // Hook up prev/next drawer buttons
  const drawerPrev = document.getElementById('drawer-btn-prev');
  const drawerNext = document.getElementById('drawer-btn-next');
  if (drawerPrev) drawerPrev.addEventListener('click', () => {
    const nextIdx = (state.selectedVolume - 1 + shelfData.length) % shelfData.length;
    renderShelfDetail(nextIdx);
    if (window.__select3DBook) window.__select3DBook(nextIdx);
  });
  if (drawerNext) drawerNext.addEventListener('click', () => {
    const nextIdx = (state.selectedVolume + 1) % shelfData.length;
    renderShelfDetail(nextIdx);
    if (window.__select3DBook) window.__select3DBook(nextIdx);
  });

  // Hook up direct volume picker buttons
  document.querySelectorAll('.vol-pick-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-vol'), 10);
      renderShelfDetail(idx);
      if (window.__select3DBook) window.__select3DBook(idx);
    });
  });

  // Three.js Complete Shelf 3D Canvas
  (function initCompleteShelfThree() {
    const canvas = document.getElementById('shelf-three-canvas');
    if (!canvas || typeof THREE === 'undefined') return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.set(0, 1.2, 10.5);

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambient);

    const shelfSpot = new THREE.SpotLight(0xfff3db, 3.2, 25, Math.PI / 4, 0.4);
    shelfSpot.position.set(0, 8, 7);
    scene.add(shelfSpot);

    const shelfAccent = new THREE.PointLight(0x00e5ff, 2.0, 15);
    shelfAccent.position.set(0, -2, 4);
    scene.add(shelfAccent);

    // Bookshelf Wooden Geometry
    const shelfGroup = new THREE.Group();
    scene.add(shelfGroup);

    const woodMat = new THREE.MeshStandardMaterial({ color: 0x17120e, roughness: 0.85, metalness: 0.1 });
    
    // Bottom Ledge
    const ledgeGeom = new THREE.BoxGeometry(11, 0.4, 3.2);
    const ledge = new THREE.Mesh(ledgeGeom, woodMat);
    ledge.position.set(0, -1.8, 0);
    shelfGroup.add(ledge);

    // Top Board
    const topGeom = new THREE.BoxGeometry(11, 0.4, 3.2);
    const topBoard = new THREE.Mesh(topGeom, woodMat);
    topBoard.position.set(0, 2.6, 0);
    shelfGroup.add(topBoard);

    // Back Panel
    const backGeom = new THREE.BoxGeometry(11, 4.4, 0.3);
    const backPanel = new THREE.Mesh(backGeom, woodMat);
    backPanel.position.set(0, 0.4, -1.4);
    shelfGroup.add(backPanel);

    // Five 3D Clothbound Books
    const books = [];
    const bookGeom = new THREE.BoxGeometry(0.85, 3.6, 2.2);

    shelfData.forEach((vol, i) => {
      // Create Spine Texture with Canvas
      const textCanvas = document.createElement('canvas');
      textCanvas.width = 128;
      textCanvas.height = 512;
      const ctx = textCanvas.getContext('2d');
      ctx.fillStyle = '#' + vol.color.toString(16).padStart(6, '0');
      ctx.fillRect(0, 0, 128, 512);

      // Gold Foil Text
      ctx.fillStyle = '#E5C158';
      ctx.font = 'bold 22px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.save();
      ctx.translate(64, 256);
      ctx.rotate(-Math.PI / 2);
      ctx.fillText(vol.foilText, 0, 8);
      ctx.restore();

      ctx.fillText(`VOL. ${i + 1}`, 64, 460);

      const spineTex = new THREE.CanvasTexture(textCanvas);

      const materials = [
        new THREE.MeshStandardMaterial({ color: vol.color, roughness: 0.7 }), // Right side
        new THREE.MeshStandardMaterial({ color: vol.color, roughness: 0.7 }), // Left side
        new THREE.MeshStandardMaterial({ color: 0xF4EFE7, roughness: 0.9 }), // Top pages
        new THREE.MeshStandardMaterial({ color: 0xF4EFE7, roughness: 0.9 }), // Bottom
        new THREE.MeshStandardMaterial({ map: spineTex, roughness: 0.5, metalness: 0.3 }), // Front (Spine)
        new THREE.MeshStandardMaterial({ color: vol.color, roughness: 0.7 })  // Back
      ];

      const bookMesh = new THREE.Mesh(bookGeom, materials);
      const spacing = 1.35;
      const startX = -2.7;
      bookMesh.position.set(startX + i * spacing, 0.1, 0);
      bookMesh.userData = { index: i, initialZ: 0, targetZ: 0, targetRotY: 0 };
      shelfGroup.add(bookMesh);
      books.push(bookMesh);
    });

    // Raycasting for Mouse Hover & Selection
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-100, -100);

    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    });

    canvas.addEventListener('click', () => {
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(books);
      if (intersects.length > 0) {
        const hitBook = intersects[0].object;
        const idx = hitBook.userData.index;
        renderShelfDetail(idx);
        select3DBook(idx);
      }
    });

    function select3DBook(idx) {
      books.forEach((b, i) => {
        if (i === idx) {
          b.userData.targetZ = 1.2;
          b.userData.targetRotY = 0.25;
        } else {
          b.userData.targetZ = 0;
          b.userData.targetRotY = 0;
        }
      });
    }
    window.__select3DBook = select3DBook;

    // Resize
    window.addEventListener('resize', () => {
      if (!canvas) return;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    });

    // Animation Loop
    function animateShelf() {
      requestAnimationFrame(animateShelf);

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(books);
      const hoveredIdx = intersects.length > 0 ? intersects[0].object.userData.index : -1;

      books.forEach((b, i) => {
        const isHovered = (i === hoveredIdx);
        const isSelected = (i === state.selectedVolume);

        const currentZTarget = isSelected ? 1.4 : (isHovered ? 0.6 : 0);
        const currentRotTarget = isSelected ? 0.35 : (isHovered ? 0.15 : 0);

        b.position.z += (currentZTarget - b.position.z) * 0.1;
        b.rotation.y += (currentRotTarget - b.rotation.y) * 0.1;
      });

      renderer.render(scene, camera);
    }
    requestAnimationFrame(animateShelf);

    // Initial select
    select3DBook(0);
  })();

  renderShelfDetail(0);

  /* ==========================================================================
     7. SCENE 4: LENIS HORIZONTAL SCROLL SNAPPING PROJECTS SHOWCASE
     Reference: https://lenis.dev/ & https://lenis.dev/snap
     ========================================================================== */
  const snapTrack = document.getElementById('snap-cards-track');
  const snapCurrDigit = document.getElementById('snap-curr-digit');
  const snapProgressBar = document.getElementById('snap-track-progress');
  const snapCards = document.querySelectorAll('.snap-project-card');

  if (snapTrack && snapCards.length > 0) {
    snapTrack.addEventListener('scroll', () => {
      const cardWidth = snapCards[0].offsetWidth + 24;
      const scrollLeft = snapTrack.scrollLeft;
      const activeIdx = Math.min(snapCards.length - 1, Math.round(scrollLeft / cardWidth));

      if (snapCurrDigit) {
        snapCurrDigit.textContent = String(activeIdx + 1).padStart(2, '0');
      }

      if (snapProgressBar) {
        const progress = ((activeIdx + 1) / snapCards.length) * 100;
        snapProgressBar.style.width = `${progress}%`;
      }
    }, { passive: true });

    const arrowPrev = document.getElementById('snap-arrow-prev');
    const arrowNext = document.getElementById('snap-arrow-next');

    if (arrowPrev) {
      arrowPrev.addEventListener('click', () => {
        const cardWidth = snapCards[0].offsetWidth + 24;
        snapTrack.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        playTacticalBlip(700, 'triangle', 0.03);
      });
    }

    if (arrowNext) {
      arrowNext.addEventListener('click', () => {
        const cardWidth = snapCards[0].offsetWidth + 24;
        snapTrack.scrollBy({ left: cardWidth, behavior: 'smooth' });
        playTacticalBlip(700, 'triangle', 0.03);
      });
    }

    // Direct plate jumper buttons on project cards
    document.querySelectorAll('[data-jump-plate]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const plate = parseInt(btn.getAttribute('data-jump-plate'), 10);
        triggerCinematicLetterZoom('#scene-sketchbook');
        setTimeout(() => {
          renderSketchbookPlate(plate);
        }, 600);
      });
    });
  }

  /* Dynamic GitHub Repositories Fetch & Fallback */
  (function fetchGitHubRepos() {
    const container = document.getElementById('gh-cards-carousel');
    const statusText = document.getElementById('gh-status-text');
    if (!container) return;

    fetch('https://api.github.com/users/ozanardaozcelik/repos?sort=updated&per_page=4')
      .then((res) => res.json())
      .then((repos) => {
        if (Array.isArray(repos) && repos.length > 0) {
          if (statusText) statusText.textContent = `${repos.length} REPOSITORIES SYNCED`;
          container.innerHTML = '';
          repos.forEach((repo) => {
            const el = document.createElement('a');
            el.href = repo.html_url;
            el.target = '_blank';
            el.rel = 'noopener noreferrer';
            el.className = 'gh-repo-pill';
            el.innerHTML = `
              <div class="gh-repo-name">${repo.name} ↗</div>
              <div class="gh-repo-desc">${repo.description || 'Autonomous robotics / Python machine learning repository.'}</div>
              <div class="gh-repo-meta">
                <span>★ ${repo.stargazers_count}</span>
                <span>${repo.language || 'Python'}</span>
              </div>
            `;
            container.appendChild(el);
          });
        } else {
          fallbackRepos();
        }
      })
      .catch(() => {
        fallbackRepos();
      });

    function fallbackRepos() {
      if (statusText) statusText.textContent = 'CACHED REPOSITORIES';
      container.innerHTML = `
        <a href="https://github.com/ozanardaozcelik" target="_blank" rel="noopener noreferrer" class="gh-repo-pill">
          <div class="gh-repo-name">HandDetector ↗</div>
          <div class="gh-repo-desc">21-Keypoint MediaPipe contactless gesture recognition and tracking in Python OpenCV.</div>
          <div class="gh-repo-meta"><span>Python</span><span>Computer Vision</span></div>
        </a>
        <a href="https://github.com/ozanardaozcelik" target="_blank" rel="noopener noreferrer" class="gh-repo-pill">
          <div class="gh-repo-name">Autonomous-UAV-Guidance ↗</div>
          <div class="gh-repo-desc">TEKNOFEST Savaşan İHA air-to-air dogfight navigation and proportional guidance algorithms.</div>
          <div class="gh-repo-meta"><span>Python</span><span>ArduPilot / ROS 2</span></div>
        </a>
        <a href="https://github.com/ozanardaozcelik" target="_blank" rel="noopener noreferrer" class="gh-repo-pill">
          <div class="gh-repo-name">ZeroDefect-Vision ↗</div>
          <div class="gh-repo-desc">Industrial PatchCore sub-millimeter anomaly detection and PaddleOCR reading.</div>
          <div class="gh-repo-meta"><span>PyTorch</span><span>PaddleOCR</span></div>
        </a>
      `;
    }
  })();

  /* ==========================================================================
     8. SCENE 5: CONTACT CONSOLE & INTERACTIVE TERMINAL
     ========================================================================== */
  // Email Copy Bar
  const emailCopyBar = document.getElementById('email-copy-bar');
  const emailClickBtn = document.getElementById('email-click-btn');
  const emailToast = document.getElementById('email-copy-toast');

  function copyEmail() {
    navigator.clipboard.writeText('ozan.a.ozcelik@gmail.com').then(() => {
      if (emailToast) {
        emailToast.classList.add('show');
        setTimeout(() => emailToast.classList.remove('show'), 2400);
      }
      playTacticalBlip(1300, 'sine', 0.08);
    }).catch(() => {});
  }

  if (emailClickBtn) emailClickBtn.addEventListener('click', copyEmail);
  if (emailCopyBar) emailCopyBar.addEventListener('click', copyEmail);

  // Interactive Terminal
  const termBody = document.getElementById('terminal-body');
  const termInput = document.getElementById('terminal-input');

  const termResponses = {
    help: "Available commands: 'skills', 'siha', 'experience', 'cv', 'contact', 'clear'",
    skills: "CORE STACK: Python, Computer Vision (YOLOv8/v11, ByteTrack, OpenCV), ROS 2 Humble, Gazebo, ArduPilot, PyMAVLink, Agentic AI, LangChain, PyTorch, Docker, Linux RT.",
    siha: "ŞAHİ OTONOM SİHA: Software Team Lead for TEKNOFEST Fighting UAV. Autonomous target tracking, proportional navigation kamikaze dive guidance, state machine controllers.",
    experience: "EXPERIENCE: (1) Şahi SİHA Team Lead (2025-Now), (2) Çözüm Makina Ar-Ge Vision Intern (2026), (3) Martur Fompak AI Intern (2025), (4) Huawei Student Dev Lead.",
    cv: "CV DOCUMENT: 'OzanArdaOZCELIK_CV.pdf' available in root. Click top CV.PDF button to download.",
    contact: "CONTACT: Email: ozan.a.ozcelik@gmail.com | Phone: +90 537 614 41 56 | Location: Istanbul & Tekirdağ",
    whoami: "Ozan Arda Özçelik — Autonomous UAV Software Team Lead & AI Engineer (NKÜ 4th Year)."
  };

  function appendTerminalLine(text, isUser = false) {
    if (!termBody) return;
    const line = document.createElement('div');
    line.className = 'terminal-line';
    if (isUser) {
      line.innerHTML = `<span class="t-accent">&gt;&gt; ${text}</span>`;
    } else {
      line.innerHTML = `<span class="t-dim">${text}</span>`;
    }
    termBody.appendChild(line);
    termBody.scrollTop = termBody.scrollHeight;
  }

  if (termInput) {
    termInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const cmd = termInput.value.trim().toLowerCase();
        if (!cmd) return;
        appendTerminalLine(cmd, true);
        termInput.value = '';

        if (cmd === 'clear') {
          termBody.innerHTML = '';
        } else if (termResponses[cmd]) {
          appendTerminalLine(termResponses[cmd]);
          playTacticalBlip(900, 'sine', 0.04);
        } else {
          appendTerminalLine(`Command not found: '${cmd}'. Type 'help' for command list.`);
          playTacticalBlip(300, 'sawtooth', 0.06);
        }
      }
    });
  }

  document.querySelectorAll('.t-shortcut-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-cmd');
      if (cmd === 'clear') {
        termBody.innerHTML = '';
      } else if (termResponses[cmd]) {
        appendTerminalLine(cmd, true);
        appendTerminalLine(termResponses[cmd]);
        playTacticalBlip(900, 'sine', 0.04);
      }
    });
  });

  /* ==========================================================================
     9. HERO TYPING EFFECT & BILINGUAL TOGGLE
     ========================================================================== */
  const typingTarget = document.getElementById('hero-typing-target');
  const typingPhrasesTr = [
    "Otonom Uçuş & Hedef Güdüm Sistemleri",
    "YOLOv8 + ByteTrack ile Hava-Hava Kilitleme",
    "ROS 2, Gazebo & ArduPilot Simülasyonları",
    "Endüstriyel Görü & Agentic AI Mimarisi"
  ];
  const typingPhrasesEn = [
    "Autonomous Flight & Combat Guidance Systems",
    "Air-to-Air Target Lock with YOLOv8 & ByteTrack",
    "ROS 2, Gazebo & ArduPilot Mission Simulators",
    "Industrial Vision & Agentic AI Architectures"
  ];

  let phraseIdx = 0, charIdx = 0, isDeleting = false;

  function typeLoop() {
    if (!typingTarget) return;
    const phrases = isEn() ? typingPhrasesEn : typingPhrasesTr;
    const currentPhrase = phrases[phraseIdx % phrases.length];

    if (isDeleting) {
      charIdx--;
      typingTarget.textContent = currentPhrase.substring(0, charIdx);
    } else {
      charIdx++;
      typingTarget.textContent = currentPhrase.substring(0, charIdx);
    }

    let delay = isDeleting ? 30 : 65;

    if (!isDeleting && charIdx === currentPhrase.length) {
      delay = 2200;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      phraseIdx++;
      delay = 400;
    }

    setTimeout(typeLoop, delay);
  }
  typeLoop();

  // Bilingual Language Toggle
  const langToggleBtn = document.getElementById('btn-lang-toggle');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      state.lang = state.lang === 'tr' ? 'en' : 'tr';
      document.documentElement.setAttribute('lang', state.lang);
      localStorage.setItem('ozan_portfolio_lang', state.lang);

      renderSketchbookPlate(state.currentPlate);
      renderShelfDetail(state.selectedVolume);
      playTacticalBlip(1100, 'triangle', 0.05);
    });
  }

})();
