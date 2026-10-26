/**
 * Magic UI — Marquee
 * https://magicui.design/docs/components/marquee (MIT)
 * Repeats the children and translates each copy by its own width.
 */
import type { ComponentPropsWithoutRef, CSSProperties, ReactNode } from "react";

export function Marquee({
  className = "",
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: ReactNode;
  vertical?: boolean;
  repeat?: number;
} & Omit<ComponentPropsWithoutRef<"div">, "children" | "className">) {
  return (
    <div
      {...props}
      className={`marquee ${className}`.trim()}
      data-vertical={vertical ? "true" : "false"}
      data-reverse={reverse ? "true" : "false"}
      data-pause={pauseOnHover ? "true" : "false"}
      style={
        {
          "--duration": vertical ? "28s" : "36s",
          "--gap": "2.4rem",
          ...props.style,
        } as CSSProperties
      }
    >
      {Array.from({ length: repeat }, (_, index) => (
        <div className="marquee__track" key={index}>
          {children}
        </div>
      ))}
    </div>
  );
}
