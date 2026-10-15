# 慢看

用看图学审美。主线是构图、光影与气质。没有赞助，没有课程售卖，也不收集邮箱。

线上地址：<https://mariorma.github.io/mankan-aesthetic/>

仓库根目录是已经构建好的静态站点，GitHub Pages 从 `main` 分支的根目录直接托管：`index.html`、`about/`、`entries/`、`archive/`（往期）、`log/`（积累）、`notes/`、`assets/`。

## 两块结构

- **网站（整体）**：慢看是一个整体，表达积累之后想呈现的品味，以后每一「期」都可以大变样。期次数据在 `source/src/issues.ts`，`current: true` 标当前期；`archive/`（往期）页能回溯每一期做了什么、相比上一期改了什么。
- **积累 log（只给主人翻）**：导航末尾小号「积累」进入。原文要点 + 可点外链 + 配图，按日期倒序。数据在 `source/src/learning-log.ts`。

### 加下一天 log

在 `source/src/learning-log.ts` 数组最前面复制一个日期对象（日期新的在上）。配图规则：尽量把外链里的原图下载到 `source/public/images/` 本地引用，`credit` 写「来源 + 无商业用途·侵权立删」并用 `creditHref` 链回原页；抓不到（反爬/登录墙）就用 `imageNote` 写「原图未取到」并保留外链，别拿假图糊弄。

### 加新一期（往期）

在 `source/src/issues.ts`：先把当前期的 `current` 去掉、补一个 `snapshotHref`（指向那一期的静态快照，暂时可留空），再复制一个 `Issue` 放到数组最前面，`current: true`，写上这期相比上期改了什么（`changes`）。然后按新一期重新设计首页与条目，旧期仍能从「往期」翻到。

## 图片来源

示例图在 `source/public/images/`：多数标「示意 · 为本站生成」。负空间那一条是 Pexels 照片（Thanh Truc Ho）；积累 log 里的 `log-*` 是学习时抓来的原图（MilK、Fonts In Use 等），图注都带来源 +「无商业用途·侵权立删」。署名在关于页。「审美提升」三篇提炼笔记（`source/src/notes.ts`）已归入往期存档，不再新增。

源码在 `source/`，是 Vite + React + TypeScript 的多页静态站。本地重建：

```bash
cd source
npm install
npm run build
cp -a dist/. ..
```

再把根目录的构建结果提交到 `main`。
