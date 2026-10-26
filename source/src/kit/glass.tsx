/**
 * Liquid Glass — liquid-glass-react (MIT)
 * https://github.com/rdev/liquid-glass-react
 * SVG displacement + backdrop blur. The library centers itself with a -50%
 * translate, so the parent slot must be position: relative and sized.
 */
import LiquidGlass from "liquid-glass-react";
import type { ReactNode, RefObject } from "react";
import { useReducedMotion } from "./reduced";

export function Glass({
  children,
  className = "",
  radius = 28,
  mouseContainer = null,
  elasticity = 0.32,
}: {
  children: ReactNode;
  className?: string;
  radius?: number;
  mouseContainer?: RefObject<HTMLElement | null> | null;
  elasticity?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <LiquidGlass
      displacementScale={reduced ? 24 : 78}
      blurAmount={0.16}
      saturation={170}
      aberrationIntensity={reduced ? 0 : 3}
      elasticity={reduced ? 0 : elasticity}
      cornerRadius={radius}
      padding="0"
      mode="standard"
      mouseContainer={mouseContainer}
      className={`lg-root ${className}`.trim()}
      style={{ position: "absolute", top: "50%", left: "50%" }}
    >
      {children}
    </LiquidGlass>
  );
}
