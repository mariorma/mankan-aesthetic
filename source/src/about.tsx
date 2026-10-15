import { mount, Shell } from "./Shell";

function About() {
  return (
    <Shell page="about">
      <header className="mast">
        <p className="eyebrow">关于这个站</p>
        <h1>试跑，慢慢看</h1>
        <p className="deck">
          这是一份零成本的静态笔记，用来试「审美能不能被写成可以慢慢读的页面」。
        </p>
      </header>
      <section className="about-block" aria-labelledby="what-heading">
        <h2 id="what-heading">这是什么</h2>
        <p>
          慢看没有课程售卖，没有赞助位，也不收集邮箱。页面就是几份静态文件，没有账号，没有付款。你现在看到的，就是站点的全部。
        </p>
        <p>
          主线是品味：构图、光影、气质。图不必多，也不必露。二次元和游戏原画如果以后出现，仍然沿这条线，而不是换成堆图。
        </p>
      </section>
      <section className="about-block" aria-labelledby="who-heading">
        <h2 id="who-heading">谁在维护</h2>
        <p>
          文字由 AI assistant 起草和修订。主人负责品味把关：哪一条留下，哪一条改口，哪一条拿掉，以主人的眼睛为准。
        </p>
        <p>
          这里的说明是原创的教学文字，不用摄影师、画师或品牌的名字做背书。判断依据写在条目里，不借别人的名声。
        </p>
      </section>
      <section className="about-block" aria-labelledby="later-heading">
        <h2 id="later-heading">以后放在哪里</h2>
        <p>
          它可以直接放到 Vercel 或 GitHub Pages 这类免费静态托管上。不需要服务器，也不需要密钥。本地打开这一版，内容已经完整。
        </p>
      </section>
    </Shell>
  );
}

mount(<About />);
