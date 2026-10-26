# 慢看

用看图学审美。主线是构图、光影与气质。没有赞助，没有课程售卖，也不收集邮箱。

线上地址：<https://mariorma.github.io/mankan-aesthetic/>

仓库根目录是已经构建好的静态站点，GitHub Pages 从 `main` 分支的根目录直接托管：`index.html`、`log/`（积累）、`assets/`。

## 两面

导航只有「首页」和「积累」。两页都在顶栏用「表／裏」换面：表是漆红近黑，裏是暖金近黑。封面是 three.js 的可交互画面（跟鼠标和滚动走），有官方播放页的片子用哔哩哔哩或 YouTube 的播放器嵌在页里。手机和减少动效时退回静态拼贴。两面各写各的，不互相跳。

- **首页**：表是这一期的审美积累，裏是美女赏析（好／中／差）。
- **积累 `/log/`**：表是品味，每条一张图加一两句；裏是美女积累，每条一张图加短说明。页头 `noindex`，只给自己翻。

### 加一条积累

在 `source/src/learning-log.ts` 里，品味 prepend 到 `tasteLog`，美女 prepend 到 `beautyLog`（日期新的在上）。配图下到 `source/public/images/` 本地引用，`credit` 只写短来源（谁 / 哪 / 什么），`creditHref` 链回原页、由图打开。转载声明只在页脚。抓不到就写 `imageNote`「原图未取到」并留 `href`，别拿假图糊弄，也不要写回长摘要。

## 图片来源

图在 `source/public/images/`。首页裏侧 `li-*` 是喜欢名单；首页表侧和积累里的 `log-*` 是学习时抓来的原图。图注只写短来源。转载声明在页脚：无商业用途，侵权联系即删。

源码在 `source/`，是 Vite + React + TypeScript 的多页静态站。本地重建：

```bash
cd source
npm install
npm run build
cp -a dist/. ..
```

再把根目录的构建结果提交到 `main`。条目、往期、关于、笔记页已下线。
