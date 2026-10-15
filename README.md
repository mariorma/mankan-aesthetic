# 慢看

用看图学审美。主线是构图、光影与气质。没有赞助，没有课程售卖，也不收集邮箱。

线上地址：<https://mariorma.github.io/mankan-aesthetic/>

仓库根目录是已经构建好的静态站点，GitHub Pages 从 `main` 分支的根目录直接托管：`index.html`、`about/`、`entries/`、`assets/`。

示例图在 `source/public/images/`：多数是为本站生成的示意，负空间那一条是 Pexels 照片（Thanh Truc Ho）。署名和撤下说明在关于页。

源码在 `source/`，是 Vite + React + TypeScript 的多页静态站。本地重建：

```bash
cd source
npm install
npm run build
cp -a dist/. ..
```

再把根目录的构建结果提交到 `main`。
