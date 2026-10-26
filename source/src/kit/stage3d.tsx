/**
 * WebGL gallery — three.js (MIT) https://github.com/mrdoob/three.js
 * Image planes in perspective plus a particle field. The camera chases the
 * pointer and the scroll through the hero, so the depth is obvious.
 */
import { useEffect, useState, type RefObject } from "react";
import {
  AmbientLight,
  BufferAttribute,
  BufferGeometry,
  FogExp2,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  PointLight,
  Points,
  PointsMaterial,
  Scene,
  SRGBColorSpace,
  TextureLoader,
  WebGLRenderer,
} from "three";
import type { Face } from "../flip";

export type StageShot = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const tintHex = { biao: 0xff3b24, li: 0xe6b15a } as const;
const fogHex = { biao: 0x0b0b0d, li: 0x120e0a } as const;

const slots = [
  { x: 2.2, y: 0.25, z: 0.55, ry: -0.48 },
  { x: 3.45, y: -0.95, z: -1.15, ry: -0.2 },
  { x: -2.85, y: 0.45, z: -0.35, ry: 0.52 },
  { x: 0.15, y: 1.45, z: -1.9, ry: 0.16 },
  { x: -0.85, y: -1.35, z: -2.45, ry: -0.28 },
];

function hasWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

export function useStageLive() {
  const [live, setLive] = useState(() => {
    if (typeof window === "undefined") return false;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const narrow = window.matchMedia("(max-width: 800px)").matches;
    return !reduced && !narrow && hasWebGL();
  });

  useEffect(() => {
    const reducedMedia = window.matchMedia("(prefers-reduced-motion: reduce)");
    const narrowMedia = window.matchMedia("(max-width: 800px)");
    const apply = () => setLive(!reducedMedia.matches && !narrowMedia.matches && hasWebGL());
    apply();
    reducedMedia.addEventListener("change", apply);
    narrowMedia.addEventListener("change", apply);
    return () => {
      reducedMedia.removeEventListener("change", apply);
      narrowMedia.removeEventListener("change", apply);
    };
  }, []);

  return live;
}

export function StageStill({ images }: { images: StageShot[] }) {
  return (
    <div className="stage-still" aria-hidden="true">
      {images.slice(0, 3).map((shot) => (
        <img key={shot.src} src={shot.src} alt="" width={shot.width} height={shot.height} />
      ))}
    </div>
  );
}

export function Stage3D({
  root,
  images,
  tint,
}: {
  root: RefObject<HTMLElement | null>;
  images: StageShot[];
  tint: Face;
}) {
  const signature = images.map((shot) => `${shot.src}:${shot.width}:${shot.height}`).join("|");

  useEffect(() => {
    const host = root.current?.querySelector<HTMLElement>(".expo-pin");
    const canvas = host?.querySelector("canvas");
    if (!host || !canvas) return;

    const renderer = new WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: "high-performance",
      preserveDrawingBuffer: true,
    });
    renderer.setClearColor(fogHex[tint], 1);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));

    const scene = new Scene();
    scene.fog = new FogExp2(fogHex[tint], 0.085);
    const camera = new PerspectiveCamera(40, 1, 0.1, 40);
    camera.position.set(0, 0, 7.2);

    scene.add(new AmbientLight(0xfff6ee, 1.35));
    const key = new PointLight(tintHex[tint], 28, 16);
    key.position.set(2.4, 1.2, 4);
    scene.add(key);
    const fill = new PointLight(0xfff1dc, 12, 14);
    fill.position.set(-3, -1, 2);
    scene.add(fill);

    const count = 240;
    const positions = new Float32Array(count * 3);
    for (let index = 0; index < count; index += 1) {
      positions[index * 3] = (Math.random() - 0.5) * 16;
      positions[index * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[index * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    const pointGeo = new BufferGeometry();
    pointGeo.setAttribute("position", new BufferAttribute(positions, 3));
    const pointMat = new PointsMaterial({
      color: tintHex[tint],
      size: 0.055,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
      depthWrite: false,
    });
    const points = new Points(pointGeo, pointMat);
    scene.add(points);

    const loader = new TextureLoader();
    const meshes: Mesh[] = [];
    let dead = false;

    images.slice(0, slots.length).forEach((shot, index) => {
      const slot = slots[index];
      const height = 2.15;
      const width = Math.min(3.5, height * (shot.width / shot.height));
      const geo = new PlaneGeometry(width, height);
      const material = new MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.62,
        metalness: 0.04,
      });
      const mesh = new Mesh(geo, material);
      mesh.position.set(slot.x, slot.y, slot.z);
      mesh.rotation.y = slot.ry;
      scene.add(mesh);
      meshes.push(mesh);
      loader.load(shot.src, (texture) => {
        if (dead) {
          texture.dispose();
          return;
        }
        texture.colorSpace = SRGBColorSpace;
        material.map = texture;
        material.needsUpdate = true;
      });
    });

    const pointer = { x: 0, y: 0 };
    const onPointer = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (event.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onPointer);

    const resize = () => {
      const width = host.clientWidth;
      const height = host.clientHeight;
      if (width === 0 || height === 0) return;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(host);

    let frame = 0;
    const clockStart = performance.now();
    const tick = (now: number) => {
      const time = (now - clockStart) / 1000;
      const rect = root.current?.getBoundingClientRect();
      const total = Math.max((root.current?.offsetHeight ?? 0) - window.innerHeight, 1);
      const passed = Math.min(Math.max(-(rect?.top ?? 0), 0), total);
      const progress = passed / total;

      camera.position.x += (pointer.x * 1.85 - camera.position.x) * 0.08;
      camera.position.y += (-pointer.y * 1.05 - camera.position.y) * 0.08;
      const targetZ = 7.4 - progress * 3.4;
      camera.position.z += (targetZ - camera.position.z) * 0.08;
      camera.lookAt(pointer.x * 0.35, -pointer.y * 0.2, 0);

      key.position.x = pointer.x * 3.2;
      key.position.y = -pointer.y * 2.1;
      points.rotation.y = time * 0.08 + pointer.x * 0.45;
      points.rotation.x = pointer.y * 0.2;

      meshes.forEach((mesh, index) => {
        const slot = slots[index];
        const depth = 1 + index * 0.22;
        mesh.position.x = slot.x + pointer.x * 0.85 * depth;
        mesh.position.y = slot.y + Math.sin(time * 0.7 + index) * 0.16 - pointer.y * 0.45 * depth;
        mesh.rotation.y = slot.ry + pointer.x * 0.62;
        mesh.rotation.x = pointer.y * 0.28;
      });

      renderer.render(scene, camera);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      dead = true;
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointer);
      observer.disconnect();
      meshes.forEach((mesh) => {
        mesh.geometry.dispose();
        const material = mesh.material;
        if (!Array.isArray(material)) {
          const map = "map" in material ? (material.map as { dispose: () => void } | null) : null;
          map?.dispose();
          material.dispose();
        }
      });
      pointGeo.dispose();
      pointMat.dispose();
      renderer.dispose();
    };
  }, [signature, root, tint]);

  return (
    <>
      <canvas className="stage3d" />
      <ul className="sr-only">
        {images.map((shot) => (
          <li key={shot.src}>{shot.alt}</li>
        ))}
      </ul>
    </>
  );
}
