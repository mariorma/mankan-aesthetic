import { pageHref } from "./paths";
import { mount, Shell } from "./Shell";

function NotFound() {
  return (
    <Shell page="missing">
      <header className="mast">
        <p className="eyebrow">404</p>
        <h1>这一页不在笔记里</h1>
        <p className="deck">十二条条目都收在目录中。从这里回去就好。</p>
      </header>
      <p className="missing-links">
        <a className="go" href={pageHref("missing", "home")}>
          回首页
          <span className="go-arrow" aria-hidden="true" />
        </a>
        <a className="go" href={pageHref("missing", "entries")}>
          去条目
          <span className="go-arrow" aria-hidden="true" />
        </a>
      </p>
    </Shell>
  );
}

mount(<NotFound />);
