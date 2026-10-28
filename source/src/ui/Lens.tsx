/**
 * Lens — after Magic UI · Lens (MIT) https://magicui.design/docs/components/lens
 * 圆形放大镜跟着鼠标走。镜片里是不「敛」的原色：凑近看，颜色才回来。
 * 图是 object-fit: cover，这里按实际显示区域算放大位置。
 */
import { useRef, useState, type CSSProperties, type ReactNode } from "react";

export function Lens({
  src,
  natural,
  children,
  zoom = 2.2,
  size = 190,
}: {
  src: string;
  /** 图片本身的宽高比。 */
  natural: number;
  children: ReactNode;
  zoom?: number;
  size?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number; w: number; h: number } | null>(null);

  let style: CSSProperties | undefined;
  if (pos) {
    const boxRatio = pos.w / pos.h;
    const shownW = natural > boxRatio ? pos.h * natural : pos.w;
    const shownH = natural > boxRatio ? pos.h : pos.w / natural;
    const offsetX = (pos.w - shownW) / 2;
    const offsetY = (pos.h - shownH) / 2;
    style = {
      width: size,
      height: size,
      left: pos.x - size / 2,
      top: pos.y - size / 2,
      backgroundImage: `url("${src}")`,
      backgroundSize: `${shownW * zoom}px ${shownH * zoom}px`,
      backgroundPosition: `${-((pos.x - offsetX) * zoom - size / 2)}px ${-((pos.y - offsetY) * zoom - size / 2)}px`,
    };
  }

  return (
    <div
      ref={ref}
      className="lens"
      onPointerMove={(event) => {
        if (event.pointerType !== "mouse") return;
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        setPos({ x: event.clientX - rect.left, y: event.clientY - rect.top, w: rect.width, h: rect.height });
      }}
      onPointerLeave={() => setPos(null)}
    >
      {children}
      {pos && <div className="lens-glass" style={style} aria-hidden="true" />}
    </div>
  );
}
