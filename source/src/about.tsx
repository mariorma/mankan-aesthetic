import { mount, Shell } from "./Shell";

function About() {
  return (
    <Shell page="about">
      <header className="mast">
        <p className="eyebrow">关于这个站</p>
        <h1>慢慢看</h1>
        <p className="deck">
          一份个人笔记，想试试：审美能不能写成可以慢慢读的几页。
        </p>
      </header>
      <section className="about-block" aria-labelledby="what-heading">
        <h2 id="what-heading">这是什么</h2>
        <p>
          没有课卖，没有广告，也不收邮箱。就是几页静态页面，不用登录、不用付钱。你看到的就是全部。
        </p>
        <p>
          讲的是三件事：构图、光、气质。图不求多，也不求露。以后要聊二次元或游戏原画，也是接着这几件事说，不是换成堆图。
        </p>
      </section>
      <section className="about-block" aria-labelledby="who-heading">
        <h2 id="who-heading">谁在维护</h2>
        <p>
          文字由 AI 助手起草和修改，主人把品味关：哪条留、哪条改、哪条删，按主人的眼睛来。
        </p>
        <p>
          这些都是自己写的教学文字，不借谁的名气。用到别人的照片，就在图注里写清作者。
        </p>
      </section>
      <section className="about-block" aria-labelledby="pictures-heading">
        <h2 id="pictures-heading">图从哪来</h2>
        <p>
          大部分人像、静物、室内都是用 AI 生成的示意，标着「示意 · 为本站生成」，用来对着讲构图、光和气质，不是真人照片。
        </p>
        <p>
          只有「负空间」那条用了 Pexels 上的一张照片，作者 Thanh Truc Ho，图注里写了名字。点那张图打开原图。
        </p>
        <p>
          「积累」页里是学习时抓来的原图（MilK、Fonts In Use 等），每张图注写短来源，点图打开原页；抓不到的就写「原图未取到」，不拿假图糊弄。
        </p>
        <p>
          图与封面仅供学习转载展示 · 无商业用途 · 侵权联系即删。哪张图权利人想撤，在
          <a href="https://github.com/mariorma/mankan-aesthetic">这个仓库</a>
          留言就行，看到就从页面拿掉。
        </p>
      </section>
      <section className="about-block" aria-labelledby="later-heading">
        <h2 id="later-heading">放在哪里</h2>
        <p>
          页面放在 GitHub Pages 上，就是几份静态文件，不用服务器，也不用密钥。
        </p>
      </section>
    </Shell>
  );
}

mount(<About />);
