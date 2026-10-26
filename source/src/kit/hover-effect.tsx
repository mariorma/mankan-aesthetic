/**
 * Aceternity UI — Card Hover Effect
 * https://ui.aceternity.com/components/card-hover-effect
 * A shared layoutId wash follows whichever row the pointer is on.
 */
import { AnimatePresence, motion } from "motion/react";
import { useState, type ReactNode } from "react";
import { easeOutCubic } from "./reduced";

export function HoverEffect({
  items,
  className = "",
}: {
  items: { title: string; description: string; link: string }[];
  className?: string;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={`toc ${className}`.trim()}>
      {items.map((item, idx) => (
        <a
          href={item.link}
          key={item.link}
          className="toc-link"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="toc-wash"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                transition={{ duration: 0.45, ease: easeOutCubic }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </a>
      ))}
    </div>
  );
}

export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="toc-card">
      <div className="toc-card__inner">{children}</div>
    </div>
  );
}

export function CardTitle({ children }: { children: ReactNode }) {
  return <h3 className="toc-title">{children}</h3>;
}

export function CardDescription({ children }: { children: ReactNode }) {
  return <p className="toc-desc">{children}</p>;
}
