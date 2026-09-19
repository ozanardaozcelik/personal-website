import * as THREE from 'three';
import { vertexShader, fluidFragmentShader, displayFragmentShader } from './shaders.js';
import { initTopics3DStream } from './gallery_3d.js';
import { initRibbonFieldBackground } from './src/shaders/ribbon-field/ribbonField.js';

const CONFIG = {
  // Simulation render-target size (optimized 256 for silky smooth 60+ FPS without GPU stalls)
  simSize: 256,
  // Trail mask falloff
  decay: 0.97,
  lineWidth: 0.055,
  perFrameIntensity: 0.35,
  // Reveal threshold (display shader)
  revealThreshold: 0.02,
  edgeWidthBase: 0.004,
  // Soft gray halo overlay (display shader)
  haloUpperMul: 2.0,
  haloMixStrength: 0.35,
  haloGray: [0.12, 0.12, 0.12],
  // Idle auto-trail
  idleThresholdMs: 1200,
  idleEaseInMs: 900,
  autoLerp: 0.08,
  // Mouse stop detection
  stopAfterMs: 50,
};

function startHeroFluid() {
  const canvas = document.querySelector('#hero-fluid-canvas') || document.querySelector('.hero-home canvas') || document.querySelector('.hero canvas');
  if (!canvas) {
    // Retry once on next frame in case DOM is still parsing
    requestAnimationFrame(() => {
      const c = document.querySelector('#hero-fluid-canvas') || document.querySelector('.hero-home canvas') || document.querySelector('.hero canvas');
      if (c) {
        initHeroFluid(c);
      } else {
        console.warn('Portrait hero canvas is inactive / not found in DOM.');
      }
    });
    return;
  }
  initHeroFluid(canvas);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startHeroFluid);
} else {
  startHeroFluid();
}

function initHeroFluid(canvas) {
  let heroActive = true;
  let heroAnimId = null;

  // 2. Create WebGLRenderer — mobile gets lighter settings to prevent GPU stalls
  const isMobile = window.innerWidth < 768 || navigator.maxTouchPoints > 1;
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: !isMobile,
    alpha: true,
    powerPreference: isMobile ? 'low-power' : 'high-performance',
    precision: isMobile ? 'mediump' : 'highp'
  });
  const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.0 : 1.25);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(dpr);

  // 3. THREE.Scene and OrthographicCamera (-1, 1, 1, -1, 0, 1)
  const scene = new THREE.Scene();
  const simScene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  // 4. Two ping-pong WebGLRenderTargets
  const renderTargetOptions = {
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
    format: THREE.RGBAFormat,
    type: THREE.HalfFloatType || THREE.FloatType
  };

  const pingPong = [
    new THREE.WebGLRenderTarget(CONFIG.simSize, CONFIG.simSize, renderTargetOptions),
    new THREE.WebGLRenderTarget(CONFIG.simSize, CONFIG.simSize, renderTargetOptions)
  ];

  // Clear both once at startup
  renderer.setRenderTarget(pingPong[0]);
  renderer.clearColor();
  renderer.setRenderTarget(pingPong[1]);
  renderer.clearColor();
  renderer.setRenderTarget(null);

  let currentTarget = 0;

  // 5. Mouse states
  const mouse = new THREE.Vector2(0.5, 0.5);
  const prevMouse = new THREE.Vector2(0.5, 0.5);
  let isMoving = false;
  let lastMoveTime = performance.now();

  // 6. Fast 1x1 placeholder texture
  function createPlaceholderTexture(color) {
    const c = document.createElement('canvas');
    c.width = 2;
    c.height = 2;
    const ctx = c.getContext('2d');
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 2, 2);
    const tex = new THREE.CanvasTexture(c);
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    return tex;
  }

  const placeholderTop = createPlaceholderTexture('#2b2721');
  const placeholderBottom = createPlaceholderTexture('#00e5ff');

  // Uniforms
  const trailsUniforms = {
    uPrevTrails: { value: pingPong[0].texture },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    uPrevMouse: { value: new THREE.Vector2(0.5, 0.5) },
    uResolution: { value: new THREE.Vector2(CONFIG.simSize, CONFIG.simSize) },
    uDecay: { value: CONFIG.decay },
    uLineWidth: { value: CONFIG.lineWidth },
    uIsMoving: { value: false }
  };

  const displayUniforms = {
    uFluid: { value: pingPong[0].texture },
    uTopTexture: { value: placeholderTop },
    uBottomTexture: { value: placeholderBottom },
    uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    uTopTextureSize: { value: new THREE.Vector2(1920, 1080) },
    uBottomTextureSize: { value: new THREE.Vector2(1920, 1080) },
    uDpr: { value: dpr }
  };

  // 7. PlaneGeometry(2, 2) full-screen quad & ShaderMaterials
  const quadGeom = new THREE.PlaneGeometry(2, 2);

  const trailsMaterial = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader: fluidFragmentShader,
    uniforms: trailsUniforms,
    depthTest: false,
    depthWrite: false
  });

  const displayMaterial = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader: displayFragmentShader,
    uniforms: displayUniforms,
    depthTest: false,
    depthWrite: false
  });

  const simMesh = new THREE.Mesh(quadGeom, trailsMaterial);
  simScene.add(simMesh);

  const displayMesh = new THREE.Mesh(quadGeom, displayMaterial);
  scene.add(displayMesh);

  // 8. Direct, resilient texture loader with multi-path resolution
  const basePath = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL)
    ? import.meta.env.BASE_URL
    : './';
  const cleanBase = basePath.endsWith('/') ? basePath : basePath + '/';

  function loadPortraitTexture(filename, onLoaded) {
    const candidates = [
      cleanBase + filename,
      './' + filename,
      '/' + filename,
      filename
    ];
    const unique = Array.from(new Set(candidates));
    let idx = 0;

    function tryCandidate() {
      if (idx >= unique.length) {
        // Fallback: try .png versions
        const pngCandidates = unique.map(u => u.replace(/\.jpg$/, '.png'));
        let pIdx = 0;
        function tryPng() {
          if (pIdx >= pngCandidates.length) {
            console.error('Failed to load portrait texture:', filename);
            return;
          }
          const pUrl = pngCandidates[pIdx++];
          const img = new Image();
          if (pUrl.startsWith('http://') || pUrl.startsWith('https://')) {
            img.crossOrigin = 'Anonymous';
          }
          img.decoding = 'async';
          img.onload = () => {
            const tex = new THREE.Texture(img);
            tex.colorSpace = THREE.SRGBColorSpace;
            tex.minFilter = THREE.LinearFilter;
            tex.magFilter = THREE.LinearFilter;
            tex.generateMipmaps = false;
            tex.flipY = true;
            tex.needsUpdate = true;
            const w = img.naturalWidth || img.width || 1920;
            const h = img.naturalHeight || img.height || 1080;
            onLoaded(tex, w, h);
          };
          img.onerror = tryPng;
          img.src = pUrl;
        }
        tryPng();
        return;
      }

      const url = unique[idx++];
      const img = new Image();
      // Only set crossOrigin for remote absolute URLs to avoid CORS failures on static hosting
      if (url.startsWith('http://') || url.startsWith('https://')) {
        img.crossOrigin = 'Anonymous';
      }
      img.decoding = 'async';
      img.onload = () => {
        const tex = new THREE.Texture(img);
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.minFilter = THREE.LinearFilter;
        tex.magFilter = THREE.LinearFilter;
        tex.generateMipmaps = false;
        tex.flipY = true;
        tex.needsUpdate = true;
        const w = img.naturalWidth || img.width || 1920;
        const h = img.naturalHeight || img.height || 1080;
        onLoaded(tex, w, h);
      };
      img.onerror = tryCandidate;
      img.src = url;
    }

    tryCandidate();
  }

  // Load portrait_top first for instant display
  loadPortraitTexture('portrait_top.jpg', (tex, w, h) => {
    displayUniforms.uTopTexture.value = tex;
    displayUniforms.uTopTextureSize.value.set(w, h);
    displayMaterial.uniforms.uTopTexture.value = tex;
    displayMaterial.uniforms.uTopTextureSize.value.set(w, h);
    displayMaterial.needsUpdate = true;
    placeholderTop.dispose(); // Free GPU memory

    // Load portrait_bottom right after
    loadPortraitTexture('portrait_bottom.jpg', (botTex, bw, bh) => {
      displayUniforms.uBottomTexture.value = botTex;
      displayUniforms.uBottomTextureSize.value.set(bw, bh);
      displayMaterial.uniforms.uBottomTexture.value = botTex;
      displayMaterial.uniforms.uBottomTextureSize.value.set(bw, bh);
      displayMaterial.needsUpdate = true;
      placeholderBottom.dispose(); // Free GPU memory
    });
  });

  // State for Idle Auto-Trail
  const autoMouse = new THREE.Vector2(0.5, 0.5);
  const prevAutoMouse = new THREE.Vector2(0.5, 0.5);

  // Input handlers
  function updatePointerPos(clientX, clientY) {
    const rect = canvas.getBoundingClientRect();
    const inside = (
      clientX >= rect.left &&
      clientX <= rect.right &&
      clientY >= rect.top &&
      clientY <= rect.bottom
    );

    const now = performance.now();
    if (inside) {
      prevMouse.copy(mouse);
      const normX = (clientX - rect.left) / rect.width;
      const normY = 1.0 - (clientY - rect.top) / rect.height;
      mouse.set(normX, normY);
      isMoving = true;
      lastMoveTime = now;
    } else {
      isMoving = false;
    }
  }

  window.addEventListener('mousemove', (e) => {
    updatePointerPos(e.clientX, e.clientY);
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches.length > 0) {
      const t = e.touches[0];
      const rect = canvas.getBoundingClientRect();
      if (
        t.clientX >= rect.left &&
        t.clientX <= rect.right &&
        t.clientY >= rect.top &&
        t.clientY <= rect.bottom
      ) {
        e.preventDefault();
        updatePointerPos(t.clientX, t.clientY);
      }
    }
  }, { passive: false });

  window.addEventListener('resize', () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const currentDpr = Math.min(window.devicePixelRatio || 1, 1.25);
    renderer.setSize(w, h);
    renderer.setPixelRatio(currentDpr);
    displayUniforms.uResolution.value.set(w, h);
    displayUniforms.uDpr.value = currentDpr;
    displayMaterial.uniforms.uResolution.value.set(w, h);
    displayMaterial.uniforms.uDpr.value = currentDpr;
  });

  // Render loop with idle pause (saves GPU when user isn't interacting)
  let idlePauseMs = 3500; // Stop rendering after 3.5s of no mouse activity
  let renderPaused = false;

  function wakeRenderer() {
    if (!heroActive) return;
    if (renderPaused) {
      renderPaused = false;
      lastMoveTime = performance.now();
      if (!heroAnimId) {
        heroAnimId = requestAnimationFrame(animate);
      }
    }
  }

  // Wake on pointer movement only if hero is active
  window.addEventListener('pointermove', wakeRenderer, { passive: true });

  const heroObserver = new IntersectionObserver(([entry]) => {
    heroActive = entry ? entry.isIntersecting : true;
    if (!heroActive) {
      if (heroAnimId) {
        cancelAnimationFrame(heroAnimId);
        heroAnimId = null;
      }
    } else {
      if (!heroAnimId && !renderPaused) {
        lastMoveTime = performance.now();
        heroAnimId = requestAnimationFrame(animate);
      }
    }
  }, { threshold: 0.02 });
  heroObserver.observe(canvas);

  function animate() {
    heroAnimId = null;
    if (!heroActive) return;

    const now = performance.now();
    const idleTime = now - lastMoveTime;

    // Stop rendering after idle period to save GPU
    if (idleTime > idlePauseMs && !isMoving) {
      renderPaused = true;
      return; // Don't schedule next frame
    }

    heroAnimId = requestAnimationFrame(animate);

    if (isMoving && (now - lastMoveTime > CONFIG.stopAfterMs)) {
      isMoving = false;
    }

    // Swap ping-pong
    const prevTarget = pingPong[currentTarget];
    currentTarget = (currentTarget + 1) % 2;
    const writeTarget = pingPong[currentTarget];

    trailsMaterial.uniforms.uPrevTrails.value = prevTarget.texture;

    const autoActive = idleTime > CONFIG.idleThresholdMs;
    if (autoActive) {
      const easeIn = Math.min(1, (idleTime - CONFIG.idleThresholdMs) / CONFIG.idleEaseInMs);
      const t = now * 0.001;
      const targetX = 0.5 + 0.30 * Math.sin(t * 0.41) + 0.12 * Math.sin(t * 0.93 + 1.3);
      const targetY = 0.5 + 0.28 * Math.cos(t * 0.37 + 0.5) + 0.10 * Math.cos(t * 1.11 + 2.7);

      prevAutoMouse.copy(autoMouse);
      autoMouse.x += (targetX - autoMouse.x) * 0.05 * easeIn;
      autoMouse.y += (targetY - autoMouse.y) * 0.05 * easeIn;

      trailsMaterial.uniforms.uMouse.value.copy(autoMouse);
      trailsMaterial.uniforms.uPrevMouse.value.copy(prevAutoMouse);
      trailsMaterial.uniforms.uIsMoving.value = true;

      mouse.copy(autoMouse);
      prevMouse.copy(prevAutoMouse);
    } else {
      trailsMaterial.uniforms.uMouse.value.copy(mouse);
      trailsMaterial.uniforms.uPrevMouse.value.copy(prevMouse);
      trailsMaterial.uniforms.uIsMoving.value = isMoving;
      autoMouse.copy(mouse);
      prevAutoMouse.copy(mouse);
    }

    renderer.setRenderTarget(writeTarget);
    renderer.render(simScene, camera);

    displayMaterial.uniforms.uFluid.value = writeTarget.texture;
    renderer.setRenderTarget(null);
    renderer.render(scene, camera);
  }

  function handleHeroVisibility() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
    const shouldBeActive = scrollY < window.innerHeight * 1.1;
    if (shouldBeActive && !heroActive) {
      heroActive = true;
      if (!heroAnimId) {
        heroAnimId = requestAnimationFrame(animate);
      }
    } else if (!shouldBeActive && heroActive) {
      heroActive = false;
      if (heroAnimId) {
        cancelAnimationFrame(heroAnimId);
        heroAnimId = null;
      }
    }
  }

  window.addEventListener('scroll', handleHeroVisibility, { passive: true });

  // START RENDER LOOP ON INIT
  animate();
}

// Initialize 3D Rotating Downward Topic Stream in Projects section
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('topics-3d-canvas')) {
      initTopics3DStream('topics-3d-canvas');
    }
  });
} else {
  if (document.getElementById('topics-3d-canvas')) {
    initTopics3DStream('topics-3d-canvas');
  }
}

// Initialize ThreeUI PredictiveArcCanvas (Ribbon Field) on Hikayem scroll background
function setupHikayemRibbonField() {
  const container = document.getElementById('flowRibbonFieldLayer');
  if (container) {
    initRibbonFieldBackground(container, {
      speed: 1.00,
      pointerAmount: 1.00,
      smoothing: 0.035,
      hue: 0,
      saturation: 1.00,
      brightness: 1.00,
      opacity: 1.00
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupHikayemRibbonField);
} else {
  setupHikayemRibbonField();
}

