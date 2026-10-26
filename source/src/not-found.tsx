import { pageHref } from "./paths";
import { UvStack } from "./kit/controls";
import { AnimatedShinyText } from "./kit/shiny-text";
import { mount, Shell } from "./Shell";

function NotFound() {
  return (
    <Shell page="missing">
      <header className="missing">
        <AnimatedShinyText className="eyebrow">404</AnimatedShinyText>
        <h1 className="display">这一页不在笔记里</h1>
        <p className="deck">这一页已经不在了。从这里回去就好。</p>
        <p className="missing-links">
          <UvStack href={pageHref("missing", "home")}>回首页</UvStack>
          <UvStack href={pageHref("missing", "log")}>去积累</UvStack>
        </p>
      </header>
    </Shell>
  );
}

mount(<NotFound />);
