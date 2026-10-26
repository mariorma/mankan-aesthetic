import { useLayoutEffect, useRef, type ReactNode } from "react";

const reduceMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = () => window.matchMedia("(hover: hover) and (pointer: fine)").matches;

const cardSelector = ".ref, .su-fig";

export function Depth() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el || reduceMotion() || !finePointer()) return;

    let raf = 0;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;
    const host = document.documentElement;

    const tick = () => {
      raf = 0;
      cx += (tx - cx) * 0.14;
      cy += (ty - cy) * 0.14;
      host.style.setProperty("--px", cx.toFixed(4));
      host.style.setProperty("--py", cy.toFixed(4));
      host.style.setProperty("--lx", `${(50 + cx * 42).toFixed(2)}%`);
      host.style.setProperty("--ly", `${(22 + cy * 32).toFixed(2)}%`);
      if (Math.abs(tx - cx) > 0.0015 || Math.abs(ty - cy) > 0.0015) {
        raf = requestAnimationFrame(tick);
      }
    };

    const onMove = (event: PointerEvent) => {
      tx = event.clientX / window.innerWidth - 0.5;
      ty = event.clientY / window.innerHeight - 0.5;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
      host.style.removeProperty("--px");
      host.style.removeProperty("--py");
      host.style.removeProperty("--lx");
      host.style.removeProperty("--ly");
    };
  }, []);

  return (
    <div className="depth" ref={root} aria-hidden="true">
      <div className="depth-far" />
      <div className="depth-near" />
      <div className="depth-grain" />
    </div>
  );
}

function stamp(node: HTMLElement, wave: number) {
  node.style.setProperty("--d", `${Math.min(wave, 6) * 55}ms`);
  node.classList.add("in");
}

export function Stage({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;

    const nodes = [...root.querySelectorAll<HTMLElement>(".reveal")];
    const reduce = reduceMotion();
    if (reduce || typeof IntersectionObserver === "undefined") {
      nodes.forEach((node) => node.classList.add("in"));
      return () => {
        nodes.forEach((node) => node.classList.remove("in"));
      };
    }

    const pending = new Set<HTMLElement>();
    const view = window.innerHeight * 0.98;
    let wave = 0;
    nodes.forEach((node) => {
      if (node.getBoundingClientRect().top < view) {
        stamp(node, wave);
        wave += 1;
      } else {
        node.classList.add("hold");
        pending.add(node);
      }
    });

    let reset = 0;
    let seen = 0;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const node = entry.target as HTMLElement;
          if (!pending.has(node)) continue;
          pending.delete(node);
          stamp(node, seen);
          seen += 1;
          io.unobserve(node);
          window.clearTimeout(reset);
          reset = window.setTimeout(() => {
            seen = 0;
          }, 420);
        }
      },
      { rootMargin: "0px 0px -4% 0px", threshold: 0 },
    );
    pending.forEach((node) => io.observe(node));

    const safety = window.setTimeout(() => {
      pending.forEach((node) => {
        node.classList.add("in");
        io.unobserve(node);
      });
      pending.clear();
    }, 2400);

    const onFocus = (event: FocusEvent) => {
      const card = (event.target as Element | null)?.closest<HTMLElement>(".reveal");
      if (!card || !root.contains(card)) return;
      card.classList.add("in");
      pending.delete(card);
      io.unobserve(card);
    };
    root.addEventListener("focusin", onFocus);

    const canLight = finePointer();
    let active: HTMLElement | null = null;
    const clear = (node: HTMLElement | null) => {
      if (!node) return;
      node.classList.remove("lit");
      node.style.removeProperty("--sx");
      node.style.removeProperty("--sy");
      node.style.removeProperty("--rx");
      node.style.removeProperty("--ry");
    };
    const onMove = (event: PointerEvent) => {
      const card = (event.target as Element | null)?.closest<HTMLElement>(cardSelector);
      const next = card && root.contains(card) ? card : null;
      if (active && active !== next) clear(active);
      active = next;
      if (!next) return;
      const rect = next.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      const px = ((event.clientX - rect.left) / rect.width) * 100;
      const py = ((event.clientY - rect.top) / rect.height) * 100;
      next.classList.add("lit");
      next.style.setProperty("--sx", `${px}%`);
      next.style.setProperty("--sy", `${py}%`);
      next.style.setProperty("--rx", `${((py - 50) / 50) * -1.6}deg`);
      next.style.setProperty("--ry", `${((px - 50) / 50) * 1.8}deg`);
    };
    const onLeave = () => {
      clear(active);
      active = null;
    };
    if (canLight) {
      root.addEventListener("pointermove", onMove);
      root.addEventListener("pointerleave", onLeave);
    }

    return () => {
      io.disconnect();
      window.clearTimeout(reset);
      window.clearTimeout(safety);
      root.removeEventListener("focusin", onFocus);
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeave);
      clear(active);
      nodes.forEach((node) => {
        node.classList.remove("in");
        node.classList.remove("hold");
      });
    };
  }, []);

  return (
    <div className="face-motion" ref={ref}>
      {children}
    </div>
  );
}

export function IssueTitle({ text }: { text: string }) {
  const chars = Array.from(text);
  return (
    <h1>
      <span className="sr-only">{text}</span>
      <span className="title-shine" aria-hidden="true">
        {chars.map((char, index) => (
          <span
            key={`${char}-${index}`}
            className="title-char"
            style={{ animationDelay: `${80 + index * 58}ms` }}
          >
            {char}
          </span>
        ))}
      </span>
    </h1>
  );
}
