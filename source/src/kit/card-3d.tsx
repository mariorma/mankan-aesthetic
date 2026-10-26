/**
 * Aceternity UI — 3D Card
 * https://ui.aceternity.com/components/3d-card-effect
 * The container tilts toward the pointer; CardItem children lift on Z while hovered.
 */
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { useReducedMotion } from "./reduced";

const MouseEnterContext = createContext<[boolean, (value: boolean) => void] | undefined>(undefined);

export function CardContainer({
  children,
  className = "",
  containerClassName = "",
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  const reduced = useReducedMotion();

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (reduced || !containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (event.clientX - left - width / 2) / 18;
    const y = (event.clientY - top - height / 2) / 18;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  }

  function handleMouseLeave() {
    setIsMouseEntered(false);
    if (containerRef.current) containerRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
  }

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div className={`card3d-scene ${containerClassName}`.trim()} style={{ perspective: "1000px" }}>
        <div
          ref={containerRef}
          className={`card3d ${className}`.trim()}
          style={{ transformStyle: "preserve-3d" }}
          onMouseEnter={() => setIsMouseEntered(true)}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
}

export function CardBody({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`card3d-body ${className}`.trim()} style={{ transformStyle: "preserve-3d" }}>
      {children}
    </div>
  );
}

export function CardItem({
  children,
  className = "",
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: {
  children: ReactNode;
  className?: string;
  translateX?: number;
  translateY?: number;
  translateZ?: number;
  rotateX?: number;
  rotateY?: number;
  rotateZ?: number;
} & HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null);
  const [isMouseEntered] = useMouseEnter();
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!ref.current) return;
    if (!reduced && isMouseEntered) {
      ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    } else {
      ref.current.style.transform = "translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)";
    }
  }, [isMouseEntered, reduced, translateX, translateY, translateZ, rotateX, rotateY, rotateZ]);

  return (
    <div ref={ref} className={`card3d-item ${className}`.trim()} {...rest}>
      {children}
    </div>
  );
}

function useMouseEnter() {
  const context = useContext(MouseEnterContext);
  if (!context) throw new Error("CardItem 必须放在 CardContainer 里");
  return context;
}
