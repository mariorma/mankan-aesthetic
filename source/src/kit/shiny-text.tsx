/**
 * Magic UI — Animated Shiny Text
 * https://magicui.design/docs/components/animated-shiny-text (MIT)
 */
import type { ComponentPropsWithoutRef, CSSProperties } from "react";

export function AnimatedShinyText({
  children,
  className = "",
  shimmerWidth = 120,
  ...props
}: {
  shimmerWidth?: number;
} & ComponentPropsWithoutRef<"span">) {
  return (
    <span
      {...props}
      style={{ "--shiny-width": `${shimmerWidth}px`, ...props.style } as CSSProperties}
      className={`shiny ${className}`.trim()}
    >
      {children}
    </span>
  );
}
