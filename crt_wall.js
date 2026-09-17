// ═══════════════════════════════════════════════════════════════════════════
// MIRA SOLVANG RETRO CRT MONITOR WALL — SECTION 05 CONTACT & TRANSMISSION
// High-performance canvas phosphor animations with synthetic audio feedback
// ═══════════════════════════════════════════════════════════════════════════

export function initCrtWall() {
  const container = document.getElementById('crtWallContainer');
  if (!container) return;

  // 1. Synthetic Web Audio API Sound Effects (Zero external audio files)
  let audioCtx = null;
  function getAudioContext() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) audioCtx = new AudioContext();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playCrtClick(type = 'click') {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;
      if (type === 'beep') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, now);
        osc.frequency.exponentialRampToValueAtTime(1760, now + 0.08);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
      } else if (type === 'degauss') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(140, now);
        osc.frequency.exponentialRampToValueAtTime(40, now + 0.25);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.25);
      } else {
        // Crisp tactile CRT toggle click
        osc.type = 'square';
        osc.frequency.setValueAtTime(1200, now);
        osc.frequency.exponentialRampToValueAtTime(200, now + 0.03);
        gain.gain.setValueAtTime(0.03, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
        osc.start(now);
        osc.stop(now + 0.03);
      }
    } catch (e) {}
  }

  // 2. Canvases & Animation State
  const canvasLinkedin = document.getElementById('crt-canvas-linkedin');
  const canvasGithub = document.getElementById('crt-canvas-github');
  const canvasEmail = document.getElementById('crt-canvas-email');

  let isVisible = false;
  let animId = 0;
  let startTime = performance.now();

  // Helper to init high-DPI canvas
  function setupCanvas(c) {
    if (!c) return null;
    const ctx = c.getContext('2d');
    c.width = 360;
    c.height = 220;
    return { canvas: c, ctx };
  }

  const sLinkedin = setupCanvas(canvasLinkedin);
  const sGithub = setupCanvas(canvasGithub);
  const sEmail = setupCanvas(canvasEmail);

  // ── TV 1: LINKEDIN (Electric Blue Network Constellation) ────────────────────
  const netNodes = Array.from({ length: 14 }, () => ({
    x: Math.random() * 320 + 20,
    y: Math.random() * 180 + 20,
    vx: (Math.random() - 0.5) * 0.6,
    vy: (Math.random() - 0.5) * 0.6,
    size: Math.random() * 2 + 2
  }));

  function drawLinkedin(t) {
    if (!sLinkedin) return;
    const { ctx } = sLinkedin;
    ctx.fillStyle = 'rgba(5, 12, 28, 0.4)';
    ctx.fillRect(0, 0, 360, 220);

    // Update and draw network links
    ctx.strokeStyle = 'rgba(0, 160, 255, 0.25)';
    ctx.lineWidth = 1;
    for (let i = 0; i < netNodes.length; i++) {
      const a = netNodes[i];
      a.x += a.vx; a.y += a.vy;
      if (a.x < 15 || a.x > 345) a.vx *= -1;
      if (a.y < 15 || a.y > 205) a.vy *= -1;

      for (let j = i + 1; j < netNodes.length; j++) {
        const b = netNodes[j];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist < 85) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    // Draw nodes
    netNodes.forEach((n, i) => {
      ctx.fillStyle = i === 0 ? '#00e5ff' : '#0099ff';
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2);
      ctx.fill();
    });

    // Center badge
    const pulse = (Math.sin(t * 3) + 1) * 0.5;
    ctx.fillStyle = 'rgba(0, 140, 255, 0.15)';
    ctx.fillRect(50, 75, 260, 70);
    ctx.strokeStyle = 'rgba(0, 229, 255, ' + (0.5 + pulse * 0.4) + ')';
    ctx.strokeRect(50, 75, 260, 70);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 18px "Chakra Petch", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('LINKEDIN PROTOCOL', 180, 104);

    ctx.fillStyle = '#00e5ff';
    ctx.font = '11px "DM Mono", monospace';
    ctx.fillText('● STATUS: ACTIVE NODE // OPEN TO ROLES', 180, 126);
    ctx.textAlign = 'left';
  }

  // ── TV 2: GITHUB (Emerald Matrix Terminal & Commit Stream) ─────────────────
  const codeLines = [
    'INIT ros2_ws/src/uav_control',
    'YOLOv8 target acquired: id_04',
    'Kalman predict: [x: 42.8, y: 19.3]',
    'MAVLink telemetry: 120 FPS lock',
    'CUDA stream: latency 1.84 ms',
    'POST /api/v1/agent/orchestrate',
    'Status: 200 OK — Ready for task',
    'Commit 9f24acb -> pushed'
  ];

  function drawGithub(t) {
    if (!sGithub) return;
    const { ctx } = sGithub;
    ctx.fillStyle = 'rgba(4, 18, 10, 0.4)';
    ctx.fillRect(0, 0, 360, 220);

    // Matrix grid background
    ctx.fillStyle = 'rgba(0, 255, 136, 0.04)';
    for (let x = 10; x < 350; x += 20) {
      for (let y = 15; y < 210; y += 16) {
        if (Math.sin(x + y + t) > 0.6) {
          ctx.fillText(String.fromCharCode(48 + Math.floor(Math.random() * 10)), x, y);
        }
      }
    }

    // Terminal lines
    ctx.font = '12px "DM Mono", monospace';
    const offset = Math.floor(t * 2.5);
    for (let i = 0; i < 6; i++) {
      const line = codeLines[(offset + i) % codeLines.length];
      ctx.fillStyle = i === 5 ? '#00ff88' : 'rgba(0, 255, 136, 0.7)';
      ctx.fillText('> ' + line, 24, 45 + i * 26);
    }

    // Blinking cursor
    if (Math.floor(t * 3) % 2 === 0) {
      ctx.fillStyle = '#00ff88';
      ctx.fillRect(24, 182, 9, 14);
    }
  }

  // ── TV 3: EMAIL TRANSMITTER (Amber Phosphor Signal Radar) ─────────────────
  function drawEmail(t) {
    if (!sEmail) return;
    const { ctx } = sEmail;
    ctx.fillStyle = 'rgba(24, 12, 4, 0.4)';
    ctx.fillRect(0, 0, 360, 220);

    // Expanding broadcast waves
    ctx.lineWidth = 1.5;
    for (let i = 0; i < 4; i++) {
      const radius = ((t * 40 + i * 40) % 120) + 10;
      const alpha = Math.max(0, 1 - radius / 130);
      ctx.strokeStyle = `rgba(255, 140, 0, ${alpha})`;
      ctx.beginPath();
      ctx.arc(180, 95, radius, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Center Transmitter Icon
    ctx.fillStyle = '#ff8800';
    ctx.beginPath();
    ctx.arc(180, 95, 16, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 15px "DM Mono", monospace';
    ctx.textAlign = 'center';
    ctx.fillText('ozan.a.ozcelik@gmail.com', 180, 155);

    ctx.fillStyle = '#ffaa33';
    ctx.font = '10px "DM Mono", monospace';
    ctx.fillText('DISPATCH READY // CLICK TO TRANSMIT', 180, 178);
    ctx.textAlign = 'left';
  }

  // 3. Render Loop (Only runs when section is visible!)
  function render(time) {
    if (!isVisible) return;
    const t = (time - startTime) * 0.001;

    drawLinkedin(t);
    drawGithub(t);
    drawEmail(t);

    animId = requestAnimationFrame(render);
  }

  function start() {
    if (!animId && isVisible) {
      startTime = performance.now();
      animId = requestAnimationFrame(render);
    }
  }

  function stop() {
    if (animId) {
      cancelAnimationFrame(animId);
      animId = 0;
    }
  }

  // 4. Interactive CRT Monitors (Click & Hover Audio/Visual Effects)
  const crtMonitors = container.querySelectorAll('.crt-tv-unit');
  crtMonitors.forEach((unit) => {
    unit.addEventListener('mouseenter', () => {
      playCrtClick('click');
      unit.classList.add('is-focused');
    });

    unit.addEventListener('mouseleave', () => {
      unit.classList.remove('is-focused');
    });

    unit.addEventListener('click', () => {
      playCrtClick('degauss');
      unit.classList.add('flash-degauss');
      setTimeout(() => unit.classList.remove('flash-degauss'), 400);

      const targetUrl = unit.getAttribute('data-action-url');
      if (targetUrl) {
        if (targetUrl.startsWith('mailto:')) {
          window.location.href = targetUrl;
        } else {
          window.open(targetUrl, '_blank', 'noopener,noreferrer');
        }
      }
    });
  });

  // 5. Channel Quick Switcher Buttons
  const chButtons = container.querySelectorAll('.crt-ch-btn');
  chButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      playCrtClick('beep');
      chButtons.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      const targetId = btn.getAttribute('data-target-unit');
      const targetUnit = document.getElementById(targetId);
      if (targetUnit) {
        crtMonitors.forEach((m) => m.classList.remove('is-highlighted'));
        targetUnit.classList.add('is-highlighted');
        targetUnit.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  });

  // 6. IntersectionObserver: Only render when Section 05 is in viewport!
  const observer = new IntersectionObserver(
    ([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) start();
      else stop();
    },
    { threshold: 0.05, rootMargin: '200px' }
  );

  observer.observe(container);

  return () => {
    stop();
    observer.disconnect();
  };
}
