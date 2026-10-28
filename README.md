# 敛色 · Held Colour

颜色收住，目光不躲。四条线每天更新：**品味、压抑、一人、美人**。

线上：<https://mariorma.github.io/mankan-aesthetic/>（仓库 slug 暂时沿用旧名）

气质、色板、选图门槛见 [`docs/charter.md`](docs/charter.md)。

---

## 日更：改数据就上线

**整站只有一个内容源：`content/daily.json`。** 首页和日更页都在浏览器里直接读它，不需要构建，也不需要开云端。

日常只动两处：

| 改什么 | 放哪 |
|--------|------|
| 新条目 | `content/daily.json` 的 `entries` 数组**最上面** |
| 配图 | `images/`（建议 webp，长边 1600 以内） |

提交到 `main`（或合并 PR）后，GitHub Pages 约一分钟重新发布，首页和日更页就是新内容。

### 一条日更长这样

```json
{
  "id": "hopper-sunday",
  "date": "2026-10-29",
  "line": "repression",
  "title": "Edward Hopper · Sunday",
  "note": "一个人坐在空街边，店都关着。",
  "why": "可选。两三句为什么好看。",
  "steal": "可选。可偷的一句。",
  "source": "Phillips Collection · Sunday · 1926",
  "href": "https://原帖或馆藏页",
  "image": {
    "file": "hopper-sunday.webp",
    "alt": "一句话描述画面",
    "width": 1600,
    "height": 1100
  }
}
```

记得和下一条之间加逗号。

### 字段

| 字段 | 必填 | 说明 |
|------|------|------|
| `id` | 是 | 全站唯一，小写英文、数字、连字符。**打分按 id 记**，改 id 会丢掉这条已有的分 |
| `date` | 是 | `YYYY-MM-DD`。最新日期就是「今日」 |
| `line` | 是 | `taste` 品味 / `repression` 压抑 / `tension` 一人 / `beauty` 美人 |
| `title` | 是 | 谁 · 什么 |
| `note` | 建议 | 一句话判断，60 字内。首页、日更都显示 |
| `why` | 否 | 为什么好看，两三句 |
| `body` | 否 | 更长的赏析，字符串数组，一段一个 |
| `steal` | 否 | 可偷的一句。品味线的会进首页「可偷的一句」栏 |
| `source` | 有图时必填 | 短来源：谁 / 哪 / 什么 |
| `href` | 建议 | 原帖。点图打开它；B站 / YouTube / Vimeo 播放页会自动出「在站内看」（官方播放器） |
| `image` | 否 | `file` 是 `images/` 里的文件名；`alt` 一句话描述；`width` / `height` 可不填，跑 `npm run fix` 自动补 |
| `more` | 否 | 第二张起的图，格式同 `image` |
| `pick` | 否 | `true` = 精选，首页抽到的概率 ×2 |
| `off` | 否 | `true` = 撤下但留着记录 |

在 VS Code 等编辑器里打开 `content/daily.json` 会按 `content/daily.schema.json` 自动提示字段。

### 选图和来源

- 只用原图；抓不到就不配图（条目照样能上，只是不进首页的图位）。不用 AI 图凑数。
- 每张图写 `source` 和 `href`。全站页脚统一写了免责声明（学习记录、无商业用途、侵权即删）。
- 视频只链官方播放页。
- 压抑 ≠ 血腥色情；一人 ≠ 双人黏腻；美人走亚洲审美。细则见宪章第 3 节。

### 改完自查（可选，但推荐）

本机有 Node 就能跑，零依赖：

```bash
node source/scripts/check-daily.mjs         # 检查 JSON 语法、必填字段、id 重复、图片是否存在
node source/scripts/check-daily.mjs --fix   # 同上，并自动补上图片 width / height
```

JSON 写坏（少逗号、多逗号）时会指出第几行；页面上也会提示「日更没读出来」而不是白屏。单条缺字段只跳过那一条。仓库里的 GitHub Actions 也会在每次推送时跑这个检查。

### 条目多了以后

把旧条目挪到 `content/` 下别的文件（例如 `daily-2026-10.json`，结构同样是 `{ "entries": [...] }`），在 `daily.json` 顶层写 `"archives": ["daily-2026-10.json"]`，页面会一起读。

---

## 首页怎么吃日更

首页没有自己的素材，所有图和字都在打开页面时从 `content/daily.json` 抽：

- **封面**：第一张固定是**最新一天**里权重最高的一条（品味 / 压抑 / 一人优先；那天只有美人就用美人）。所以加一条新日期的日更，首页封面立刻就是它。后面五张按权重随机。
- **今日条**：最新一天的全部条目，一条不漏。
- **四间房**：品味 6 张 + 4 句可偷、压抑 3 张、一人 5 张、美人 6 张，各自按权重随机抽；每间房有「换一批」。

权重（`source/src/data/weights.ts`）：

| 因素 | 倍数 |
|------|------|
| 打了「好」 | ×4 |
| 打了「差」 | ×0（不上） |
| 最新一天 / 两天内 / 一周内 | ×3 / ×1.8 / ×1.2 |
| `pick: true` | ×2 |

## 打分：好 / 中 / 差

- 首页和日更页的每条都能打分。默认是「中」。
- **差**：立刻从全站撤下（首页、日更都不显示），底部提示条可以「撤销」；「已下架」抽屉里能逐条「放回」。
- **好**：首页抽到的概率变成 4 倍。
- 分只存在这台浏览器的 `localStorage`（key：`lianse-marks`），**不进仓库**。第一次打开新站时，会把旧站两个 key（`mankan-li-marks`、`mankan-biao-marks`）里的分自动迁过来。
- 「复制打分」导出 JSON：`good` / `bad` 两个清单带标题和来源，`notInDaily` 是已经不在日更里的 id。

日更维护者拿到导出后：

1. `bad` 里的条目从 `daily.json` 删掉或加 `"off": true`，图可以先留在 `images/`。
2. 看 `good` 和 `bad` 各是哪一路，调整之后的搜集方向（宪章第 3 节记着目前的多跟 / 少跟）。
3. 分本身不要写进仓库。

---

## 开发与发布（改版式时才需要）

源码在 `source/`：Vite + React + TypeScript，两个页面（首页 `index.html`、日更 `daily/index.html`）。

```bash
cd source
npm install
npm run dev      # http://localhost:5173 ，content/ 和 images/ 直接读根目录
npm run pages    # 校验日更 + 类型检查 + 构建 + 把产物同步到仓库根目录
npm run preview  # 按 Pages 的路径在本地托管根目录：http://localhost:4173/mankan-aesthetic/
```

`npm run pages` 只替换根目录的构建产物（`assets/`、`index.html`、`daily/`、`log/`、`404.html`、`favicon.svg` 等），不碰 `content/`、`images/`、`docs/`、`source/`。把根目录的变化一起提交到 `main` 即可。

目录：

```
content/daily.json        唯一内容源（日更只改这里）
content/daily.schema.json 字段说明
images/                   全部配图
docs/charter.md           气质宪章
source/src/data/          读取、加权、打分
source/src/gl/            封面 WebGL2 着色器
source/src/ui/            组件（敛色图、放大镜、台灯、磁吸、好中差……）
source/src/pages/         首页、日更页
source/scripts/           校验、同步、本地预览
```

## 零成本与版权

- 只用 GitHub Pages 静态托管：没有后端、统计、广告、付费 Key。不卖课，不收邮箱，不对外推广。
- 字体：思源宋体（Noto Serif SC）与 Instrument Serif，均为 SIL OFL 1.1，许可证在 `source/src/fonts/*/OFL.txt`。
- 图与封面只作个人学习与品味记录，版权归原作者，每张写明出处并链回原页；无商业用途，侵权联系即删。`images/pd-*` 是 The Met 与 SMK（丹麦国家美术馆）开放资料中的公有领域作品。
- 动效参考：Aceternity UI（Lamp、Focus Cards）、Magic UI（Lens）、Motion Primitives（Magnetic、Text Effect、Progressive Blur）、React Bits（Noise、Scroll Reveal）、Uiverse（单选点、叠层按钮）、Animista（text-focus-in）。均为改写，出处写在对应源码注释里。
