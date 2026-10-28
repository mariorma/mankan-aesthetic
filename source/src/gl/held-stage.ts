/**
 * 封面的 WebGL2 舞台：一张图默认「敛」着（压暗，冷青/琥珀分离色调），
 * 鼠标处像台灯，照到的地方颜色回来。换图时用 fbm 噪声做墨渗过渡，整屏有胶片颗粒。
 * 不依赖 three.js；一个全屏三角形 + 一个片元着色器。
 */

const VERT = `#version 300 es
in vec2 aPos;
out vec2 vUv;
void main() {
  vUv = aPos * 0.5 + 0.5;
  gl_Position = vec4(aPos, 0.0, 1.0);
}`;

const FRAG = `#version 300 es
precision highp float;
in vec2 vUv;
out vec4 outColor;

uniform sampler2D uA;
uniform sampler2D uB;
uniform vec2 uSizeA;
uniform vec2 uSizeB;
uniform vec2 uRes;
uniform float uMix;
uniform vec2 uPointer;
uniform float uLamp;
uniform float uTime;
uniform float uHeld;
uniform vec3 uShadow;
uniform vec3 uHigh;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p = p * 2.03 + 17.0;
    a *= 0.5;
  }
  return v;
}

vec2 cover(vec2 uv, vec2 img, float zoom) {
  float rc = uRes.x / uRes.y;
  float ri = img.x / max(img.y, 1.0);
  vec2 s = rc > ri ? vec2(1.0, ri / rc) : vec2(rc / ri, 1.0);
  s /= zoom;
  vec2 focus = vec2(0.5, ri < 0.95 ? 0.64 : 0.5);
  vec2 halfSize = s * 0.5;
  vec2 c = clamp(focus, halfSize, 1.0 - halfSize);
  return c + (uv - 0.5) * s;
}

float luma(vec3 c) {
  return dot(c, vec3(0.2126, 0.7152, 0.0722));
}

vec3 sampleImage(sampler2D tex, vec2 size, vec2 uv) {
  float zoom = 1.06 + 0.015 * sin(uTime * 0.11);
  vec2 par = (uPointer - 0.5) * 0.018;
  vec2 st = cover(uv - par * 0.4, size, zoom);
  float depth = luma(texture(tex, st).rgb);
  st += par * (depth - 0.45) * 0.7;
  return texture(tex, st).rgb;
}

vec3 hold(vec3 c) {
  float l = luma(c);
  vec3 tone = mix(uShadow, uHigh, smoothstep(0.08, 0.92, l));
  vec3 duo = tone * (0.25 + l * 1.25);
  return mix(c, duo, uHeld) * mix(1.0, 0.58, uHeld);
}

vec3 lit(vec3 raw, vec2 uv) {
  vec2 asp = vec2(uRes.x / uRes.y, 1.0);
  float d = length((uv - uPointer) * asp);
  float r = 0.3;
  float lamp = uLamp * smoothstep(r, r * 0.12, d);
  vec3 col = mix(hold(raw), raw * 1.05, lamp);
  col += uHigh * 0.05 * uLamp * smoothstep(r * 1.5, r * 0.5, d) * (1.0 - lamp);
  return col;
}

void main() {
  vec3 a = lit(sampleImage(uA, uSizeA, vUv), vUv);
  vec3 col = a;
  if (uMix > 0.0) {
    vec3 b = lit(sampleImage(uB, uSizeB, vUv), vUv);
    float n = fbm(vUv * 3.2 + vec2(0.0, uTime * 0.04));
    float t = uMix * 1.24 - 0.12;
    float keepA = smoothstep(t - 0.05, t + 0.05, n);
    col = mix(b, a, keepA);
    float edge = 1.0 - smoothstep(0.0, 0.045, abs(n - t));
    col = mix(col, vec3(0.015, 0.02, 0.02), edge * 0.9 * (1.0 - step(0.999, uMix)));
  }
  float vig = smoothstep(1.3, 0.3, length((vUv - vec2(0.56, 0.52)) * vec2(1.0, 1.15)));
  col *= mix(0.42, 1.0, vig);
  float g = hash(gl_FragCoord.xy * 0.73 + fract(uTime * 6.1) * 91.0) - 0.5;
  col += g * 0.05;
  outColor = vec4(col, 1.0);
}`;

type Tex = { tex: WebGLTexture; w: number; h: number };

export type StageOptions = {
  shadow?: [number, number, number];
  high?: [number, number, number];
  held?: number;
};

function compile(gl: WebGL2RenderingContext, type: number, src: string) {
  const shader = gl.createShader(type)!;
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const log = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error(log ?? "shader compile failed");
  }
  return shader;
}

const ease = (t: number) => 1 - Math.pow(1 - t, 3);

export class HeldStage {
  private gl: WebGL2RenderingContext;
  private program: WebGLProgram;
  private uniforms: Record<string, WebGLUniformLocation | null> = {};
  private cache = new Map<string, Promise<Tex>>();
  private current: Tex | null = null;
  private next: Tex | null = null;
  private mix = 0;
  private mixStart = 0;
  private readonly mixDuration = 1900;
  private pointer = { x: 0.62, y: 0.55 };
  private target = { x: 0.62, y: 0.55 };
  private lamp = 0;
  private lampTarget = 0.55;
  private manual = false;
  private frame = 0;
  private running = false;
  private start = performance.now();
  private resizeObserver: ResizeObserver;
  private options: Required<StageOptions>;

  constructor(private canvas: HTMLCanvasElement, options: StageOptions = {}) {
    const gl = canvas.getContext("webgl2", { antialias: false, alpha: false, premultipliedAlpha: false });
    if (!gl) throw new Error("no webgl2");
    this.gl = gl;
    this.options = {
      shadow: options.shadow ?? [0.11, 0.2, 0.19],
      high: options.high ?? [0.86, 0.66, 0.38],
      held: options.held ?? 0.88,
    };
    const program = gl.createProgram()!;
    gl.attachShader(program, compile(gl, gl.VERTEX_SHADER, VERT));
    gl.attachShader(program, compile(gl, gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(program) ?? "link failed");
    this.program = program;
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(program, "aPos");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    for (const name of ["uA", "uB", "uSizeA", "uSizeB", "uRes", "uMix", "uPointer", "uLamp", "uTime", "uHeld", "uShadow", "uHigh"]) {
      this.uniforms[name] = gl.getUniformLocation(program, name);
    }
    gl.uniform1i(this.uniforms.uA, 0);
    gl.uniform1i(this.uniforms.uB, 1);

    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(canvas);
    this.resize();
  }

  private resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
    const w = Math.max(1, Math.round(this.canvas.clientWidth * dpr));
    const h = Math.max(1, Math.round(this.canvas.clientHeight * dpr));
    if (this.canvas.width !== w || this.canvas.height !== h) {
      this.canvas.width = w;
      this.canvas.height = h;
    }
    this.gl.viewport(0, 0, w, h);
  }

  private load(src: string): Promise<Tex> {
    const hit = this.cache.get(src);
    if (hit) return hit;
    const promise = new Promise<Tex>((resolve, reject) => {
      const img = new Image();
      img.decoding = "async";
      img.onload = () => {
        const gl = this.gl;
        const tex = gl.createTexture()!;
        gl.bindTexture(gl.TEXTURE_2D, tex);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
        gl.generateMipmap(gl.TEXTURE_2D);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        resolve({ tex, w: img.naturalWidth, h: img.naturalHeight });
      };
      img.onerror = () => reject(new Error(`image failed: ${src}`));
      img.src = src;
    });
    this.cache.set(src, promise);
    return promise;
  }

  preload(srcs: string[]) {
    srcs.forEach((src) => void this.load(src).catch(() => undefined));
  }

  async show(src: string): Promise<void> {
    const tex = await this.load(src);
    if (!this.current) {
      this.current = tex;
      return;
    }
    if (this.mix > 0 && this.next) {
      this.current = this.next;
    }
    this.next = tex;
    this.mix = 0.0001;
    this.mixStart = performance.now();
  }

  setPointer(x: number, y: number) {
    this.manual = true;
    this.target = { x, y };
    this.lampTarget = 1;
  }

  releasePointer() {
    this.manual = false;
    this.lampTarget = 0.55;
  }

  play() {
    if (this.running) return;
    this.running = true;
    const tick = (now: number) => {
      if (!this.running) return;
      this.draw(now);
      this.frame = requestAnimationFrame(tick);
    };
    this.frame = requestAnimationFrame(tick);
  }

  pause() {
    this.running = false;
    cancelAnimationFrame(this.frame);
  }

  private draw(now: number) {
    const gl = this.gl;
    const time = (now - this.start) / 1000;
    if (!this.manual) {
      this.target = { x: 0.6 + Math.sin(time * 0.23) * 0.2, y: 0.55 + Math.sin(time * 0.31 + 1.3) * 0.18 };
    }
    this.pointer.x += (this.target.x - this.pointer.x) * 0.075;
    this.pointer.y += (this.target.y - this.pointer.y) * 0.075;
    this.lamp += (this.lampTarget - this.lamp) * 0.05;

    if (this.mix > 0 && this.next) {
      const t = Math.min(1, (now - this.mixStart) / this.mixDuration);
      this.mix = ease(t);
      if (t >= 1) {
        this.current = this.next;
        this.next = null;
        this.mix = 0;
      }
    }

    const a = this.current;
    if (!a) {
      gl.clearColor(0.043, 0.051, 0.051, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      return;
    }
    const b = this.next ?? a;
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, a.tex);
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, b.tex);
    gl.uniform2f(this.uniforms.uSizeA, a.w, a.h);
    gl.uniform2f(this.uniforms.uSizeB, b.w, b.h);
    gl.uniform2f(this.uniforms.uRes, this.canvas.width, this.canvas.height);
    gl.uniform1f(this.uniforms.uMix, this.next ? this.mix : 0);
    gl.uniform2f(this.uniforms.uPointer, this.pointer.x, this.pointer.y);
    gl.uniform1f(this.uniforms.uLamp, this.lamp);
    gl.uniform1f(this.uniforms.uTime, time);
    gl.uniform1f(this.uniforms.uHeld, this.options.held);
    gl.uniform3fv(this.uniforms.uShadow, this.options.shadow);
    gl.uniform3fv(this.uniforms.uHigh, this.options.high);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }

  destroy() {
    this.pause();
    this.resizeObserver.disconnect();
    for (const promise of this.cache.values()) {
      promise.then(({ tex }) => this.gl.deleteTexture(tex)).catch(() => undefined);
    }
    this.cache.clear();
    this.gl.deleteProgram(this.program);
  }
}

export function webgl2Available(): boolean {
  try {
    return Boolean(document.createElement("canvas").getContext("webgl2"));
  } catch {
    return false;
  }
}
