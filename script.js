import * as THREE from 'three';
import { vertexShader, fluidFragmentShader, displayFragmentShader } from './shaders.js';

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

// 1. Select <canvas> from the DOM
const canvas = document.querySelector('#hero-fluid-canvas') || document.querySelector('.hero-home canvas') || document.querySelector('.hero canvas');
if (!canvas) {
  console.log('Portrait hero canvas is inactive.');
} else {
  initHeroFluid(canvas);
}

function initHeroFluid(canvas) {
  // 2. Create WebGLRenderer with optimal settings
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: false,
    alpha: true,
    powerPreference: 'high-performance',
    precision: 'mediump'
  });
  const dpr = Math.min(window.devicePixelRatio || 1, 1.0);
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
  let lastMoveTime = 0;

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
    uTopTextureSize: { value: new THREE.Vector2(1600, 1200) },
    uBottomTextureSize: { value: new THREE.Vector2(1600, 1200) },
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

  // 8. Direct, high-speed texture loader (Zero-memory-copy pipeline)
  function loadTextureDirect(url, onLoaded) {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.decoding = 'async';
    img.onload = () => {
      const tex = new THREE.Texture(img);
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      tex.flipY = true;
      tex.needsUpdate = true;
      const w = img.naturalWidth || img.width || 1600;
      const h = img.naturalHeight || img.height || 1200;
      onLoaded(tex, w, h);
    };
    img.onerror = () => {
      // Fallback to png if jpg not present
      if (url.endsWith('.jpg')) {
        loadTextureDirect(url.replace('.jpg', '.png'), onLoaded);
      }
    };
    img.src = url;
  }

  // Load portrait_top first for instant display
  loadTextureDirect('/portrait_top.jpg', (tex, w, h) => {
    displayUniforms.uTopTexture.value = tex;
    displayUniforms.uTopTextureSize.value.set(w, h);
    displayMaterial.uniforms.uTopTexture.value = tex;
    displayMaterial.uniforms.uTopTextureSize.value.set(w, h);
    displayMaterial.needsUpdate = true;

    // Load portrait_bottom right after
    loadTextureDirect('/portrait_bottom.jpg', (botTex, bw, bh) => {
      displayUniforms.uBottomTexture.value = botTex;
      displayUniforms.uBottomTextureSize.value.set(bw, bh);
      displayMaterial.uniforms.uBottomTexture.value = botTex;
      displayMaterial.uniforms.uBottomTextureSize.value.set(bw, bh);
      displayMaterial.needsUpdate = true;
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
    const currentDpr = Math.min(window.devicePixelRatio || 1, 1.0);
    renderer.setSize(w, h);
    renderer.setPixelRatio(currentDpr);
    displayUniforms.uResolution.value.set(w, h);
    displayUniforms.uDpr.value = currentDpr;
    displayMaterial.uniforms.uResolution.value.set(w, h);
    displayMaterial.uniforms.uDpr.value = currentDpr;
  });

  let isHeroVisible = true;
  let isAnimating = false;

  function checkHeroVisibility() {
    const visible = window.scrollY < window.innerHeight * 1.05;
    if (visible !== isHeroVisible) {
      isHeroVisible = visible;
      if (isHeroVisible && !isAnimating) {
        isAnimating = true;
        lastMoveTime = performance.now();
        requestAnimationFrame(animate);
      }
    }
  }
  window.addEventListener('scroll', checkHeroVisibility, { passive: true });

  // Render loop
  function animate() {
    if (!isHeroVisible) {
      isAnimating = false;
      return;
    }
    isAnimating = true;
    requestAnimationFrame(animate);

    const now = performance.now();
    if (isMoving && now - lastMoveTime > CONFIG.stopAfterMs) {
      isMoving = false;
    }

    const idleTime = now - lastMoveTime;
    const autoActive = idleTime > CONFIG.idleThresholdMs;

    // Swap ping-pong
    const prevTarget = pingPong[currentTarget];
    currentTarget = (currentTarget + 1) % 2;
    const writeTarget = pingPong[currentTarget];

    trailsMaterial.uniforms.uPrevTrails.value = prevTarget.texture;

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

  // START RENDER LOOP ON INIT
  animate();
}

// 3D Projects Cylindrical Ribbon Gallery: Lazy loaded on scroll near #projects-section
const projSection = document.getElementById('projects-section');
if (projSection && 'IntersectionObserver' in window) {
  const projObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      projObserver.disconnect();
      import('./gallery_3d.js').then(({ initProjectsGallery }) => {
        initProjectsGallery();
      }).catch(err => {
        console.log('3D Projects Gallery init deferred or skipped:', err);
      });
    }
  }, { rootMargin: '350px' });
  projObserver.observe(projSection);
} else {
  // Graceful fallback for non-IO environments
  setTimeout(() => {
    import('./gallery_3d.js').then(({ initProjectsGallery }) => {
      initProjectsGallery();
    }).catch(() => {});
  }, 2500);
}

// Retro CRT Monitor Wall (Section 05 Contact): Lazy loaded on scroll near #contact
const contactSection = document.getElementById('contact');
if (contactSection && 'IntersectionObserver' in window) {
  const contactObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      contactObserver.disconnect();
      import('./crt_wall.js').then(({ initCrtWall }) => {
        initCrtWall();
      }).catch(err => {
        console.log('CRT Wall init deferred or skipped:', err);
      });
    }
  }, { rootMargin: '350px' });
  contactObserver.observe(contactSection);
} else {
  setTimeout(() => {
    import('./crt_wall.js').then(({ initCrtWall }) => {
      initCrtWall();
    }).catch(() => {});
  }, 3000);
}

