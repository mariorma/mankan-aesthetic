import { StrictMode, useEffect, useRef, useState, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { ToastHost } from "./toast";
import { VideoDialog } from "./VideoDialog";
import "../styles/index.css";

type Page = "home" | "daily";

function hrefTo(from: Page, to: Page) {
  const up = from === "daily" ? "../" : "./";
  return to === "home" ? up : `${up}daily/`;
}

/** 看导航条下面压着哪一段，切导航的明暗和房间名。 */
function useSectionUnderNav(watch: string) {
  const [label, setLabel] = useState<string | null>(null);
  useEffect(() => {
    const nodes = [...document.querySelectorAll<HTMLElement>("[data-tone]")];
    if (nodes.length === 0 || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const node = entry.target as HTMLElement;
          document.body.dataset.tone = node.dataset.tone;
          setLabel(node.dataset.roomLabel ?? null);
        }
      },
      { rootMargin: "-36px 0px -92% 0px" },
    );
    nodes.forEach((node) => io.observe(node));
    return () => io.disconnect();
  }, [watch]);
  return label;
}

export function Shell({
  page,
  children,
  footer,
  watch = "",
}: {
  page: Page;
  children: ReactNode;
  footer?: ReactNode;
  /** 页面段落变了（比如数据读完）就换一个值，让导航重新认段落。 */
  watch?: string;
}) {
  const label = useSectionUnderNav(watch);
  const navRef = useRef<HTMLElement>(null);

  return (
    <div className="site">
      <a className="skip" href="#content">
        跳到正文
      </a>
      <header className="nav-dock">
        <nav
          ref={navRef}
          className="nav glass"
          aria-label="页面"
          onPointerMove={(event) => {
            const rect = navRef.current?.getBoundingClientRect();
            if (!rect) return;
            navRef.current?.style.setProperty("--mx", `${((event.clientX - rect.left) / rect.width) * 100}%`);
          }}
        >
          <a className="nav-brand" href={hrefTo(page, "home")}>
            <span className="nav-mark">敛色</span>
            <span className="nav-sub">Held Colour</span>
          </a>
          <span className="nav-room" aria-live="polite">
            {label}
          </span>
          <span className="nav-links">
            <a href={hrefTo(page, "home")} aria-current={page === "home" ? "page" : undefined}>
              首页
            </a>
            <a href={hrefTo(page, "daily")} aria-current={page === "daily" ? "page" : undefined}>
              日更
            </a>
          </span>
        </nav>
      </header>
      <main id="content">{children}</main>
      <footer className="site-footer" data-tone="night">
        <div className="footer-inner">
          <p className="footer-brand">
            <span>敛色</span> <i>Held Colour</i>
          </p>
          <p className="footer-tag">颜色收住，目光不躲。</p>
          {footer}
          <p className="footer-small">零额外成本：GitHub Pages 静态托管，没有后端、统计和广告。不卖课，不收邮箱。</p>
          <p className="footer-small">
            图与封面只作个人学习与品味记录，版权归原作者，每张都写了出处、点图进原帖；无商业用途，侵权联系即删。公有领域作品注明馆藏。
          </p>
        </div>
      </footer>
      <div className="grain" aria-hidden="true" />
      <ToastHost />
      <VideoDialog />
    </div>
  );
}

export function mount(node: ReactNode) {
  const root = document.getElementById("root");
  if (!root) throw new Error("缺少 #root");
  createRoot(root).render(<StrictMode>{node}</StrictMode>);
}

export function LoadState({ state }: { state: { status: "loading" } | { status: "error"; message: string } }) {
  if (state.status === "loading") {
    return (
      <div className="load-state" data-tone="night">
        <p className="load-mark">敛色</p>
        <p>正在取日更……</p>
      </div>
    );
  }
  return (
    <div className="load-state is-error" data-tone="night">
      <p className="load-mark">敛色</p>
      <p>日更没读出来：{state.message}</p>
      <p className="load-hint">维护者：在 source/ 下跑 npm run check，按提示改 content/daily.json。</p>
    </div>
  );
}
