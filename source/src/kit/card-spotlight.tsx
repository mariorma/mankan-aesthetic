/**
 * Aceternity UI — Card Spotlight
 * https://ui.aceternity.com/components/card-spotlight
 * Mouse-following radial mask. The optional three.js dot-matrix
 * (CanvasRevealEffect) is left out so the log does not ship Three.
 */
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { useState, type HTMLAttributes, type MouseEvent, type ReactNode } from "react";

export function CardSpotlight({
  children,
  radius = 280,
  color = "rgba(255, 70, 48, 0.38)",
  className = "",
  ...props
}: {
  radius?: number;
  color?: string;
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [hover, setHover] = useState(false);
  const mask = useMotionTemplate`radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 72%)`;

  function onMouseMove({ currentTarget, clientX, clientY }: MouseEvent<HTMLElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      {...props}
      className={`card-spot ${className}`.trim()}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="card-spot__body">{children}</div>
      <motion.div
        className="card-spot__light"
        aria-hidden="true"
        style={{
          background: color,
          opacity: hover ? 1 : 0,
          maskImage: mask,
          WebkitMaskImage: mask,
        }}
      />
    </div>
  );
}
