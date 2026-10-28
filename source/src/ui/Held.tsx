/**
 * 「敛色」图：默认压暗、降饱和；鼠标停上去，或在手机上滚到视线中间，颜色慢慢回来。
 * 点图进原帖。可选 Lens（放大镜）。
 */
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { imageHref, imageSrc, videoOf, type DailyEntry, type DailyImage } from "../data/daily";
import { Lens } from "./Lens";
import { openVideo } from "./VideoDialog";

const touchLike = typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;

function useCenterSeen<T extends HTMLElement>(enabled: boolean) {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!enabled || !node || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([entry]) => setSeen(entry.isIntersecting), {
      rootMargin: "-32% 0px -32% 0px",
    });
    io.observe(node);
    return () => io.disconnect();
  }, [enabled]);
  return { ref, seen };
}

export function Held({
  entry,
  image = entry.image,
  className = "",
  priority = false,
  lens = false,
  slow = false,
  link = true,
  ratio,
  sizes,
  children,
}: {
  entry: DailyEntry;
  image?: DailyImage;
  className?: string;
  priority?: boolean;
  lens?: boolean;
  slow?: boolean;
  /** 外层已经是链接时关掉，避免链接套链接。 */
  link?: boolean;
  /** 强制画框比例（宽/高）；不给就用图片本身的比例。 */
  ratio?: number;
  sizes?: string;
  children?: ReactNode;
}) {
  const { ref, seen } = useCenterSeen<HTMLDivElement>(touchLike);
  const imgRef = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);
  const src = image ? imageSrc(image) : "";

  useEffect(() => {
    const node = imgRef.current;
    if (node?.complete && node.naturalWidth > 0) setLoaded(true);
  }, [src]);

  if (!image) return null;
  const href = link ? imageHref(entry, image) : undefined;
  const video = link && image === entry.image ? videoOf(entry.href) : null;
  const natural = image.width && image.height ? image.width / image.height : 4 / 5;
  const style = { "--ratio": ratio ?? natural } as CSSProperties;

  const img = (
    <img
      ref={imgRef}
      src={src}
      alt={image.alt || entry.title}
      width={image.width}
      height={image.height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      sizes={sizes}
      onLoad={() => setLoaded(true)}
    />
  );

  const media =
    lens && !touchLike ? (
      <Lens src={src} natural={natural}>
        {img}
      </Lens>
    ) : (
      img
    );

  return (
    <div
      ref={ref}
      className={`held ${slow ? "is-slow" : ""} ${loaded ? "is-loaded" : ""} ${className}`.trim()}
      data-seen={seen ? "true" : undefined}
      style={style}
    >
      {href ? (
        <a className="held-link" href={href} target="_blank" rel="noreferrer" aria-label={`打开原帖：${entry.title}`}>
          {media}
        </a>
      ) : (
        media
      )}
      {video && (
        <button
          type="button"
          className="held-play glass"
          onClick={() => openVideo(video, entry.title, entry.href)}
          aria-label={`在站内播放：${entry.title}`}
        >
          <span aria-hidden="true">▶</span> 在站内看
        </button>
      )}
      {children}
    </div>
  );
}
