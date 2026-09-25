import { RIBBON_FIELD_FRAGMENT_SHADER, RIBBON_FIELD_VERTEX_SHADER } from './ribbonFieldShaders';

export const RIBBON_FIELD_DEFAULTS = {
  speed: 1.0,
  pointerAmount: 1.0,
  smoothing: 0.035,
  brightness: 1.0,
  opacity: 1.0,
  hue: 0,
  saturation: 1.0
};

function compile(gl, type, source) {
  const shader = gl.createShader(type);
  if (!shader) throw new Error("Unable to create Axiom shader");
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw new Error(gl.getShaderInfoLog(shader) ?? "Axiom shader compilation failed");
  }
  return shader;
}

/**
 * Initializes the ThreeUI PredictiveArcCanvas (variant: ribbon-field) WebGL shader
 * on the specified container element.
 *
 * @param {HTMLElement} hostElement - The parent container element.
 * @param {Object} [customOptions] - Custom configuration props.
 * @returns {Function} cleanup - Function to cleanly dispose WebGL resources and listeners.
 */
export function initRibbonFieldBackground(hostElement, customOptions = {}) {
  if (!hostElement) return () => {};

  const options = { ...RIBBON_FIELD_DEFAULTS, ...customOptions };

  // Ensure host styling
  hostElement.classList.add('threeui-background', 'ribbon-field');

  let canvas = hostElement.querySelector('canvas.ribbon-field-canvas');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.className = 'ribbon-field-canvas';
    canvas.style.position = 'absolute';
    canvas.style.inset = '0';
    canvas.style.display = 'block';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.opacity = String(options.opacity);
    canvas.style.filter = `hue-rotate(${options.hue}deg) saturate(${options.saturation}) brightness(${options.brightness})`;
    hostElement.insertBefore(canvas, hostElement.firstChild);
  }

  const gl = canvas.getContext("webgl", {
    alpha: true,
    antialias: false,
    premultipliedAlpha: false
  });
  if (!gl) {
    console.warn("WebGL not available for RibbonFieldBackground");
    return () => {};
  }

  const vertex = compile(gl, gl.VERTEX_SHADER, RIBBON_FIELD_VERTEX_SHADER);
  const fragment = compile(gl, gl.FRAGMENT_SHADER, RIBBON_FIELD_FRAGMENT_SHADER);
  const program = gl.createProgram();
  if (!program) return () => {};

  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw new Error(gl.getProgramInfoLog(program) ?? "Axiom program link failed");
  }
  gl.useProgram(program);

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
    gl.STATIC_DRAW
  );
  const position = gl.getAttribLocation(program, "position");
  gl.enableVertexAttribArray(position);
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

  const resolution = gl.getUniformLocation(program, "resolution");
  const time = gl.getUniformLocation(program, "time");
  const pointerUniform = gl.getUniformLocation(program, "pointer");

  let mouseX = 0.72, mouseY = 0.42, targetX = 0.72, targetY = 0.42, frame = 0, visible = false;
  const startedAt = performance.now();

  const pointer = (event) => {
    const bounds = hostElement.getBoundingClientRect();
    targetX = 0.72 + (((event.clientX - bounds.left) / Math.max(bounds.width, 1)) - 0.72) * options.pointerAmount;
    targetY = 0.42 + ((1 - (event.clientY - bounds.top) / Math.max(bounds.height, 1)) - 0.42) * options.pointerAmount;
  };

  const resize = () => {
    const bounds = hostElement.getBoundingClientRect();
    const rfMobile = window.innerWidth < 768 || navigator.maxTouchPoints > 1;
    const ratio = Math.min(window.devicePixelRatio || 1, rfMobile ? 0.75 : 1.0);
    canvas.width = Math.max(1, Math.floor(bounds.width * ratio));
    canvas.height = Math.max(1, Math.floor(bounds.height * ratio));
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.uniform2f(resolution, canvas.width, canvas.height);
  };

  const render = (now) => {
    if (!visible || document.hidden) {
      frame = 0;
      return;
    }
    mouseX += (targetX - mouseX) * options.smoothing;
    mouseY += (targetY - mouseY) * options.smoothing;
    gl.uniform1f(time, (now - startedAt) * 0.001 * options.speed);
    gl.uniform2f(pointerUniform, mouseX, mouseY);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    frame = requestAnimationFrame(render);
  };

  const resizeObserver = new ResizeObserver(resize);
  const intersection = new IntersectionObserver(([entry]) => {
    visible = entry ? entry.isIntersecting : false;
    if (visible && !frame && !document.hidden) {
      frame = requestAnimationFrame(render);
    } else if (!visible && frame) {
      cancelAnimationFrame(frame);
      frame = 0;
    }
  }, { threshold: 0.05 });

  resizeObserver.observe(hostElement);
  intersection.observe(hostElement);
  hostElement.addEventListener("pointermove", pointer, { passive: true });
  resize();
  // Do NOT start frame eagerly — let intersection observer start it when actually visible

  return () => {
    if (frame) cancelAnimationFrame(frame);
    resizeObserver.disconnect();
    intersection.disconnect();
    hostElement.removeEventListener("pointermove", pointer);
    gl.deleteBuffer(buffer);
    gl.deleteShader(vertex);
    gl.deleteShader(fragment);
    gl.deleteProgram(program);
  };
}
