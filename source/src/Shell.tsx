import { StrictMode, useLayoutEffect, type ReactElement, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import type { Face } from "./flip";
import { AnimatedBackground } from "./kit/animated-background";
import { UvFace } from "./kit/controls";
import { Glass } from "./kit/glass";
import { easeOutCubic } from "./kit/reduced";
import { pageHref, type PageId } from "./paths";
import "./styles.css";

const nav = [
  { id: "home", label: "首页" },
  { id: "log", label: "积累" },
] as const;

export function Shell({
  page,
  face = "biao",
  onFlip,
  children,
  footerNote,
}: {
  page: PageId;
  face?: Face;
  onFlip?: () => void;
  children: ReactNode;
  footerNote?: ReactNode;
}) {
  useLayoutEffect(() => {
    document.documentElement.dataset.face = face;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", face === "li" ? "#120e0a" : "#0b0b0d");
    document.querySelector('meta[name="color-scheme"]')?.setAttribute("content", "dark");
  }, [face]);

  const links = nav.map((item) => (
    <a
      key={item.id}
      data-id={item.id}
      href={pageHref(page, item.id)}
      aria-current={page === item.id ? "page" : undefined}
    >
      {item.label}
    </a>
  )) as ReactElement[];

  return (
    <div className="site">
      <a className="skip" href="#content">
        跳到正文
      </a>
      <div className="nav-dock">
        <div className="nav-slot">
          <Glass radius={999} elasticity={0.7}>
            <div className="nav-row">
              <a className="brand" href={pageHref(page, "home")}>
                <span className="brand-name">慢看</span>
                <span className="brand-sub">用看图学审美</span>
              </a>
              <nav className="nav-links" aria-label="页面">
                <AnimatedBackground
                  defaultValue={page === "missing" ? undefined : page}
                  transition={{ duration: 0.45, ease: [...easeOutCubic] }}
                >
                  {links}
                </AnimatedBackground>
              </nav>
              {onFlip && <UvFace face={face} onFlip={onFlip} />}
            </div>
          </Glass>
        </div>
      </div>
      <main id="content" className="issue-main">
        {children}
      </main>
      <footer className="site-footer">
        <div className="footer-inner">
          <p>慢看 · 用看图学审美</p>
          <p>零成本试跑。不设赞助、课程售卖或邮箱收集。</p>
          {footerNote}
          <p className="footer-repro">图与封面仅供学习转载展示 · 无商业用途 · 侵权联系即删</p>
        </div>
      </footer>
    </div>
  );
}

export function mount(node: ReactNode) {
  const root = document.getElementById("root");
  if (!root) throw new Error("缺少 #root");
  createRoot(root).render(<StrictMode>{node}</StrictMode>);
}
