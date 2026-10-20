import { StrictMode, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { pageHref, type PageId } from "./paths";
import "./styles.css";

const nav = [
  { id: "home", label: "首页" },
  { id: "entries", label: "条目" },
  { id: "archive", label: "往期" },
  { id: "about", label: "关于" },
] as const;

export function Shell({
  page,
  children,
  bleed = false,
}: {
  page: PageId;
  children: ReactNode;
  bleed?: boolean;
}) {
  return (
    <div className="site">
      <a className="skip" href="#content">
        跳到正文
      </a>
      <header className="site-header">
        <div className="wrap header-inner">
          <a className="brand" href={pageHref(page, "home")}>
            慢看
            <span className="brand-sub">用看图学审美</span>
          </a>
          <nav className="nav" aria-label="页面">
            {nav.map((item) => (
              <a
                key={item.id}
                href={pageHref(page, item.id)}
                aria-current={page === item.id ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}
            <a
              className="nav-log"
              href={pageHref(page, "log")}
              aria-current={page === "log" ? "page" : undefined}
            >
              积累
            </a>
          </nav>
        </div>
      </header>
      <main id="content" className={bleed ? "bleed" : "wrap"}>
        {children}
      </main>
      <footer className="site-footer">
        <div className="wrap footer-inner">
          <p>慢看 · 用看图学审美</p>
          <p>零成本试跑。不设赞助、课程售卖或邮箱收集。</p>
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
