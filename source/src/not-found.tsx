import { pageHref } from "./paths";
import { mount, Shell } from "./Shell";

function NotFound() {
  return (
    <Shell page="missing">
      <header className="mast">
        <p className="eyebrow">404</p>
        <h1>这一页不在笔记里</h1>
        <p className="deck">这一页已经不在了。从这里回去就好。</p>
      </header>
      <p className="missing-links">
        <a className="go" href={pageHref("missing", "home")}>
          回首页
          <span className="go-arrow" aria-hidden="true" />
        </a>
        <a className="go" href={pageHref("missing", "log")}>
          去积累
          <span className="go-arrow" aria-hidden="true" />
        </a>
      </p>
    </Shell>
  );
}

mount(<NotFound />);
