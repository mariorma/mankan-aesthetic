/**
 * Motion Primitives — Animated Background
 * https://motion-primitives.com/docs/animated-background (MIT)
 * The highlight shares a layoutId and slides between menu items.
 */
import { AnimatePresence, motion, type Transition } from "motion/react";
import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useId,
  useState,
  type ReactNode,
} from "react";

type ItemProps = {
  "data-id": string;
  "data-checked"?: "true" | "false";
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export function AnimatedBackground({
  children,
  defaultValue,
  onValueChange,
  className = "",
  transition,
  enableHover = false,
}: {
  children: ReactNode;
  defaultValue?: string;
  onValueChange?: (newActiveId: string | null) => void;
  className?: string;
  transition?: Transition;
  enableHover?: boolean;
}) {
  const [activeId, setActiveId] = useState<string | null>(defaultValue ?? null);
  const uniqueId = useId();

  useEffect(() => {
    if (defaultValue !== undefined) setActiveId(defaultValue);
  }, [defaultValue]);

  function handleSetActiveId(id: string | null) {
    setActiveId(id);
    onValueChange?.(id);
  }

  return Children.map(children, (child) => {
    if (!isValidElement<ItemProps>(child)) return child;
    const id = child.props["data-id"];
    const interaction = enableHover
      ? {
          onMouseEnter: () => handleSetActiveId(id),
          onMouseLeave: () => handleSetActiveId(null),
        }
      : {
          onClick: () => handleSetActiveId(id),
        };

    return cloneElement(
      child,
      {
        className: `ab-item ${child.props.className ?? ""}`.trim(),
        "data-checked": activeId === id ? "true" : "false",
        ...interaction,
      } as Partial<ItemProps>,
      <>
        <AnimatePresence initial={false}>
          {activeId === id && (
            <motion.div
              layoutId={`background-${uniqueId}`}
              className={`ab-pill ${className}`.trim()}
              transition={transition}
              initial={{ opacity: defaultValue ? 1 : 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
        </AnimatePresence>
        <span className="ab-label">{child.props.children}</span>
      </>,
    );
  });
}
