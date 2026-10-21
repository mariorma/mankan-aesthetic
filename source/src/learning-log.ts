import type { Figure } from "./entries";
import { weekRefs } from "./week-refs";

export type LogLink = {
  label: string;
  href: string;
};

export type LogItem = {
  heading: string;
  href?: string;
  points: string[];
  steal?: string;
  links?: LogLink[];
  figures?: Figure[];
  imageNote?: string;
};

export type LogSection = {
  id: string;
  label: string;
  intro?: string;
  items: LogItem[];
};

export type LogDay = {
  date: string;
  title: string;
  summary?: string;
  sections: LogSection[];
};

// 配图规则：尽量把外链里的原图抓下来放 public/images 本地引用，credit 写「来源 + 无商业用途·侵权立删」。
// 抓不到（反爬 / 登录墙）就用 imageNote 诚实写「原图未取到」并保留外链，别拿假图糊弄。
// 以后加一天：复制一个 LogDay 对象放到数组最前面，日期新的在上面。
export const learningLog: LogDay[] = [
  {
    date: "2026-10-21",
    title: "例行：视频批 · YouTube/Vimeo + B站",
    summary:
      "今日批次：海外批 C（YouTube/Vimeo）· 中文批 2（B站）。海外深挖 Mishi 的 art direction / 字阶讲解，以及 Hometown 在 Vimeo 上《HOW TO MAKE A MAGAZINE》成刊过程片；中文深挖「审美积累｜Ryo Nakajima」摄影师蒙太奇，以及灵感系列 VOL.255 Victionary 书封面排版。主人种子 BV1Aepi6KErg 仅作正例对照，不重拆。早间周改素材池不重抄。",
    sections: [
      {
        id: "routine-2026-10-21",
        label: "例行 · 下午 14:00",
        intro:
          "刻意换视频批。关键词钉「审美积累」；外链一律官方播放页（YouTube watch / Vimeo / bilibili BV），不热链原片。",
        items: [
          {
            heading: "YouTube · Mastering Art Direction（Mishi）",
            href: "https://www.youtube.com/watch?v=oXnHkmIrgDQ",
            points: [
              "Mishi Designs Studio：把 art direction 拆成字阶、负空间、图文节奏等可跟动作——导演视角，不是年度刊面合集。",
              "相对早间 Yes I'm a Designer「Best Magazine Layouts」的巡礼角，这是「怎么指挥层级」的增量。",
              "学判断句式与层级，不学软件菜单；官方 watch 外链。",
            ],
            steal:
              "视频栏要同时有巡礼角与导演角；表侧可偷字阶指挥，别只堆合集。",
            links: [
              {
                label: "Mastering Art Direction｜Typography & Editorial Design",
                href: "https://www.youtube.com/watch?v=oXnHkmIrgDQ",
              },
            ],
            figures: [
              {
                file: "log-yt-mishi-artdirection.webp",
                alt: "YouTube 封面：Mastering Art Direction 讲解片",
                width: 1200,
                height: 675,
                caption: "Art direction / 字阶指挥——导演视角补巡礼缺口。",
                credit:
                  "原图 · YouTube · Mishi Designs Studio · Art Direction / Editorial · 无商业用途·侵权立删",
                creditHref: "https://www.youtube.com/watch?v=oXnHkmIrgDQ",
              },
            ],
          },
          {
            heading: "Vimeo · HOW TO MAKE A MAGAZINE（Hometown）",
            href: "https://vimeo.com/732690625",
            points: [
              "Hometown Journal Ep.3 配套成片：印刷 / 装订 / 胶片质感，把成刊过程拍成影像散文。",
              "对抗互联网「永动刷新」；工艺名词（印刷机、装订、校色）可当条目节奏。",
              "片与购买页分离——慢看外链只挂官方 Vimeo 页，不热链原片文件。",
            ],
            steal:
              "成刊过程本身可拍成慢看气质内容；条目写工艺名词，不只写氛围形容词。",
            links: [
              {
                label: "HOW TO MAKE A MAGAZINE",
                href: "https://vimeo.com/732690625",
              },
            ],
            figures: [
              {
                file: "log-vimeo-hometown-magazine.webp",
                alt: "Vimeo 封面：HOW TO MAKE A MAGAZINE",
                width: 1200,
                height: 675,
                caption: "印刷装订成刊过程当影像散文。",
                credit:
                  "原图 · Vimeo · Hometown · HOW TO MAKE A MAGAZINE · 无商业用途·侵权立删",
                creditHref: "https://vimeo.com/732690625",
              },
            ],
          },
          {
            heading: "B站 · 审美积累｜Ryo Nakajima",
            href: "https://www.bilibili.com/video/BV1v3zeBnEnK/",
            points: [
              "与主人种子同关键词「审美积累」，换成单摄影师作品蒙太奇（简洁构图、淡雅冷暖、治愈留白）。",
              "练色温/留白/边距，不是剧情剪辑；约三分钟级、字幕克制。",
              "人物气质偏裏侧素材池——表侧只偷构图与色课，不把人像墙搬进雅栏。",
            ],
            steal:
              "「审美积累」标签可跟系列；选片标准＝有判断的剪辑/色调，避开 AI prompt 营销刷屏。",
            links: [
              {
                label: "审美积累｜Ryo Nakajima",
                href: "https://www.bilibili.com/video/BV1v3zeBnEnK/",
              },
              {
                label: "主人种子对照 BV1Aepi6KErg",
                href: "https://www.bilibili.com/video/BV1Aepi6KErg/",
              },
            ],
            figures: [
              {
                file: "log-bili-ryo-nakajima.webp",
                alt: "B站封面：审美积累｜Ryo Nakajima",
                width: 1200,
                height: 675,
                caption: "同关键词摄影师蒙太奇；表侧偷色与留白。",
                credit:
                  "原图 · B站 · 审美积累｜Ryo Nakajima · 无商业用途·侵权立删",
                creditHref: "https://www.bilibili.com/video/BV1v3zeBnEnK/",
              },
            ],
          },
          {
            heading: "B站 · 灵感系列 VOL.255 Victionary",
            href: "https://www.bilibili.com/video/BV1wjqRBDEZq/",
            points: [
              "灵感系列对准香港设计出版社 Victionary 的书封面/画册排版。",
              "刊名/副题/作者行怎么压在图上；翻页疏密比情绪 BGM 墙更贴表侧「字/排版」。",
              "可与早间云展「七种杂志调」文对照：一文定调，一视频扫封面实物。",
            ],
            steal:
              "中文书封面灵感有专列；表侧「字」栏可链此类，裏侧仍留给人物赏析。",
            links: [
              {
                label: "灵感系列 VOL.255 Victionary",
                href: "https://www.bilibili.com/video/BV1wjqRBDEZq/",
              },
            ],
            figures: [
              {
                file: "log-bili-victionary-255.webp",
                alt: "B站封面：Victionary 书封面灵感 VOL.255",
                width: 1200,
                height: 675,
                caption: "出版物封面字阶巡礼，贴表侧字/排版。",
                credit:
                  "原图 · B站 · 灵感系列 VOL.255 Victionary · 无商业用途·侵权立删",
                creditHref: "https://www.bilibili.com/video/BV1wjqRBDEZq/",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    date: "2026-10-21",
    title: "审美积累 · 本周十一条",
    summary:
      "表侧这一期用的就是这十一条：字、刊面、留白，一句判断，写清谁出的。含主人推荐的 B 站 BV1Aepi6KErg。外链走官方页或播放页，不嵌视频。原图取到的才放。",
    sections: [
      {
        id: "week-2026-10-21",
        label: "审美积累",
        intro: "和首页表面同一份。抓不到原图的写在下面，不拿别的图顶。",
        items: weekRefs.map((ref) => ({
          heading: `${ref.no} ${ref.title}`,
          href: ref.href,
          points: [ref.judgment, ...ref.points],
          steal: ref.steal,
          figures: ref.figure ? [ref.figure] : undefined,
          imageNote: ref.imageNote,
        })),
      },
    ],
  },
  {
    date: "2026-10-20",
    title: "例行：Loose Joints + Perimeter Books",
    summary:
      "下午例行新开了 Loose Joints Publishing 和 Perimeter Books。LJ 单书页规格极密（plates 分色、mm、LJ 编号、Designed/Edited/Text by）；Perimeter 是书店+自有 Editions，Vendor 行分流，文末一行规格，Retracer 还有可移位的 unbound 文本。X 上 presentcorrect 有增量（秋彩票换旁白 4 新图）；出版社官号多停更，Loose Joints 无可靠 X 官号。",
    sections: [
      {
        id: "routine-2026-10-20",
        label: "例行 · 下午 14:00",
        intro:
          "新开 Loose Joints（书名网格 + 规格块）和 Perimeter Books（Vendor 行 + Program 活动栏）。X：presentcorrect 秋彩票增量；出版社 X 多停更。",
        items: [
          {
            heading: "Loose Joints Publishing（新开）",
            href: "https://loosejoints.biz/",
            points: [
              "马赛店 + 伦敦通信地址；首页作者–书名–欧元价大图网格；集合分流 Current / Forthcoming / Out of print / Signed。",
              "Don't Worry Boys（Stanley Stellar）：192pp / 45 colour + 55 duotone plates / 219×290 mm / quarterbound hardcover / LJ227 September 2026。",
              "Frozen Features（Jason Fulford）：104pp / 54 colour plates / 240×300 mm / paper hardcover + double silkscreen + loose insert / LJ226。",
              "In the Beginning（Roe Ethridge）：三册 facsimile + rubber band；各册分行写页数装帧（36 / 88 / 16pp，皆 200×250 mm）；LJ218 February 2026。",
            ],
            steal:
              "规格可写 plates 分色种与内部编号；lede 一句判断压在长文前；多卷书每册分行。",
            links: [
              {
                label: "Don't Worry Boys",
                href: "https://loosejoints.biz/products/dont-worry-boys",
              },
              {
                label: "Frozen Features",
                href: "https://loosejoints.biz/products/frozen-features",
              },
              {
                label: "In the Beginning",
                href: "https://loosejoints.biz/products/in-the-beginning",
              },
            ],
            figures: [
              {
                file: "log-lj-dont-worry-boys.webp",
                alt: "Stanley Stellar Don't Worry Boys 书页静物",
                width: 1200,
                height: 788,
                caption: "LJ 规格块：plates 分色 + mm + quarterbound + LJ227。",
                credit:
                  "原图 · Loose Joints · Don't Worry Boys / Stanley Stellar · 无商业用途·侵权立删",
                creditHref: "https://loosejoints.biz/products/dont-worry-boys",
              },
              {
                file: "log-lj-frozen-features.webp",
                alt: "Jason Fulford Frozen Features 书封面静物",
                width: 1200,
                height: 788,
                caption: "silkscreen + loose insert 写进规格；lede 讲 montage。",
                credit:
                  "原图 · Loose Joints · Frozen Features / Jason Fulford · 无商业用途·侵权立删",
                creditHref: "https://loosejoints.biz/products/frozen-features",
              },
              {
                file: "log-lj-in-the-beginning.webp",
                alt: "Roe Ethridge In the Beginning 三册套装",
                width: 1200,
                height: 788,
                caption: "多卷书分行规格：三册 facsimile + rubber band。",
                credit:
                  "原图 · Loose Joints · In the Beginning / Roe Ethridge · 无商业用途·侵权立删",
                creditHref: "https://loosejoints.biz/products/in-the-beginning",
              },
            ],
            imageNote:
              "Loose Joints 出版社无可靠 X 官号（@loosejoints / @loose_joints 皆非本社）；学站不学帖。",
          },
          {
            heading: "Perimeter Books（新开）",
            href: "https://www.perimeterbooks.com/",
            points: [
              "墨尔本书店 + 分销 + Perimeter Editions；首页新品网格（含大量 LJ 分销）+ Program 活动 + 15 年海报 + 自有书列。",
              "Retracer（Karl Halliday / June Meadow）：120 pages / 21×27 cm / Swiss-bound softcover；Paul Boyé 文本 loose unbound 可夹进不同章节。",
              "Some Voices Carry（Arini Byng / Perimeter Editions）：80 pages / 24×32 cm / OTA-bind softcover with flaps；Special Edition 30 册含签名印。",
              "Direct Bodily Empathy：160 pages / 24×16 cm / OTA flaps；联名馆名写进规格行。",
            ],
            steal:
              "Vendor 行分流出版方；文末一行规格够短；编辑装置（unbound insert）可写进商品说明。",
            links: [
              {
                label: "Retracer",
                href: "https://www.perimeterbooks.com/products/karl-halliday-retracer",
              },
              {
                label: "Some Voices Carry",
                href: "https://www.perimeterbooks.com/products/arini-byng-some-voices-carry",
              },
              {
                label: "Direct Bodily Empathy",
                href: "https://www.perimeterbooks.com/products/direct-bodily-empathy-sensing-sound",
              },
            ],
            figures: [
              {
                file: "log-perimeter-retracer.webp",
                alt: "Karl Halliday Retracer 书与内页",
                width: 1000,
                height: 750,
                caption: "Swiss-bound；文案写 unbound 文本可移位。",
                credit:
                  "原图 · Perimeter Books · Retracer / Karl Halliday · 无商业用途·侵权立删",
                creditHref:
                  "https://www.perimeterbooks.com/products/karl-halliday-retracer",
              },
              {
                file: "log-perimeter-byng.webp",
                alt: "Arini Byng Some Voices Carry 书封面",
                width: 1000,
                height: 750,
                caption: "OTA flaps + Special Edition 签名印尺寸写进文案。",
                credit:
                  "原图 · Perimeter Editions · Some Voices Carry / Arini Byng · 无商业用途·侵权立删",
                creditHref:
                  "https://www.perimeterbooks.com/products/arini-byng-some-voices-carry",
              },
            ],
          },
          {
            heading: "X · @presentcorrect（增量）",
            points: [
              "@presentcorrect 增量：2026-10-19 18:51 UTC（上海 10-20 02:51）「Autumn, through the medium of mid century Japanese lottery tickets」4 新图——同系列换旁白。",
              "@aperturefnd / @photobookstore 无新于既有结论。",
              "@PerimeterBooks ≈2023 停更；Loose Joints 出版社无可靠官号；@MacGuffinMag / @magculture 本轮无增量。",
            ],
            steal:
              "系列续更可靠换一句旁白，不必换物类。",
            figures: [
              {
                file: "log-pc-autumn-lottery-1.webp",
                alt: "日本中世纪彩票秋色静物新帖图一",
                width: 1199,
                height: 654,
                caption: "同系列换旁白：Autumn, through the medium of…",
                credit:
                  "Present & Correct / X @presentcorrect · autumn JP lottery · 无商业用途·侵权立删",
                creditHref: "https://x.com/i/status/2112255225419419970",
              },
              {
                file: "log-pc-autumn-lottery-2.webp",
                alt: "日本中世纪彩票秋色静物新帖图二",
                width: 1199,
                height: 629,
                caption: "同帖四连图之二。",
                credit:
                  "Present & Correct / X @presentcorrect · autumn JP lottery · 无商业用途·侵权立删",
                creditHref: "https://x.com/i/status/2112255225419419970",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    date: "2026-10-19",
    title: "例行：SPBH Editions + TBW Books",
    summary:
      "下午例行新开了 SPBH Editions 和 TBW Books。SPBH 官网 Launching Soon 空壳，改从 MACK 分销页挖 Glazzard / Chronograph 的规格行与判断文案；TBW 商品页规格更密（plates、tip-in、edition、afterword）。X 上 presentcorrect 有日彩票秋色和办公文具增量；新跟安静号 Bintphotobooks（人名–书名单封面模板，账号已停更）。",
    sections: [
      {
        id: "routine-2026-10-19",
        label: "例行 · 下午 14:00",
        intro:
          "新开 SPBH Editions（官网空壳 → MACK 分销页）和 TBW Books（规格块 / tip-in）。X：presentcorrect 增量静物；Bintphotobooks 安静模板。",
        items: [
          {
            heading: "SPBH Editions（新开·官网空壳）",
            href: "https://spbheditions.com/",
            points: [
              "官网 GoDaddy「Launching Soon」，无商品/书目——今天不学官网信息架构。",
              "新品挂 MACK，标 SPBH Editions；与昨天 Aperture 短名单闭环。",
              "The Sound of Dirt and Beauty（Jesse Glazzard）：Paperback 21×29.7 cm / 168 pages / August 2026；正文写装帧像他自己以前的 stapled zine。",
              "Chronograph（Nick Haymes）：Paperback with dustjacket 20.3×27 cm / 448 pages；Signed on press；页脚外刊评语墙（W / Guardian / Observer…）。",
              "Printed Matter 有 SPBH 出版社目录；The Drawer 封面 CDN 只有约 240px，不够上站。",
            ],
            steal:
              "官网空壳就换分销页；装帧动机写进正文一句；外刊评语可成「别人怎么说」区块。",
            links: [
              {
                label: "Glazzard on MACK",
                href: "https://mackbooks.co.uk/products/the-sound-of-dirt-and-beauty-jesse-glazzard",
              },
              {
                label: "Chronograph on MACK",
                href: "https://mackbooks.co.uk/products/chronograph-nick-haymes",
              },
              {
                label: "SPBH @ Printed Matter",
                href: "https://www.printedmatter.org/catalog/publisher/12147",
              },
            ],
            figures: [
              {
                file: "log-spbh-glazzard.webp",
                alt: "Jesse Glazzard The Sound of Dirt and Beauty 书封面",
                width: 1400,
                height: 1339,
                caption: "SPBH 挂 MACK：规格行完整；装帧动机写进判断文案。",
                credit:
                  "原图 · SPBH Editions / MACK · Jesse Glazzard · 无商业用途·侵权立删",
                creditHref:
                  "https://mackbooks.co.uk/products/the-sound-of-dirt-and-beauty-jesse-glazzard",
              },
              {
                file: "log-spbh-chronograph.webp",
                alt: "Nick Haymes Chronograph 书封面",
                width: 1400,
                height: 1339,
                caption: "同印记另一本：dustjacket 写进规格；评语墙当外部判断。",
                credit:
                  "原图 · SPBH Editions / MACK · Chronograph / Nick Haymes · 无商业用途·侵权立删",
                creditHref:
                  "https://mackbooks.co.uk/products/chronograph-nick-haymes",
              },
            ],
            imageNote:
              "Printed Matter · Vince Aletti The Drawer 封面 CDN≈240px，原图不够上站；外链 https://www.printedmatter.org/catalog/61582 留着。",
          },
          {
            heading: "TBW Books（新开）",
            href: "https://tbwbooks.com/",
            points: [
              "Oakland 摄影书社；首页 Pre-order 列表 + 短句推介（backdrop tip-in 一句说清）。",
              "Sheila（John Divola）：Hardcover / 86 pages, 51 plates / 10.5×9 in / mm 对照；私人肖像与同期 Zuma 等代表作并置叙述。",
              "California Anonymous（Ken Light）：Hardcover with original cloth backdrop tip-in and printed edges / Edition of 748——限量与实物碎片写进规格。",
              "Ken Graves Was a Genius.：Clothbound + printed edges / With an afterword by Emily Keegin——贡献者行对照昨天 MACK 的 With new texts by…。",
            ],
            steal:
              "规格可含 plates、双单位、tip-in、edition；私人∥代表作是编辑结构。",
            links: [
              {
                label: "Sheila",
                href: "https://tbwbooks.com/products/shelia",
              },
              {
                label: "California Anonymous",
                href: "https://tbwbooks.com/products/california-anonymous",
              },
              {
                label: "Ken Graves Was a Genius.",
                href: "https://tbwbooks.com/products/ken-graves-was-a-genius",
              },
            ],
            figures: [
              {
                file: "log-tbw-sheila.webp",
                alt: "John Divola Sheila 书封面",
                width: 1080,
                height: 1260,
                caption: "规格块：页数·plates·寸/毫米；私人与代表作同页。",
                credit:
                  "原图 · TBW Books · Sheila / John Divola · 无商业用途·侵权立删",
                creditHref: "https://tbwbooks.com/products/shelia",
              },
              {
                file: "log-tbw-california.webp",
                alt: "Ken Light California Anonymous 书封面",
                width: 1080,
                height: 1260,
                caption: "tip-in 原背景布碎片写进规格；Edition of 748。",
                credit:
                  "原图 · TBW Books · California Anonymous / Ken Light · 无商业用途·侵权立删",
                creditHref: "https://tbwbooks.com/products/california-anonymous",
              },
            ],
          },
          {
            heading: "X · @presentcorrect / @Bintphotobooks",
            points: [
              "@presentcorrect 增量：10-03 日彩票秋色 3 图；10-02 办公文具 60s–90s 4 图；10-09 彩票#30 仍最新原创。",
              "@photobookstore 无新帖；补 Saul Leiter Selected Works（caption 写 Benrido collotype 尺寸）。",
              "@Bintphotobooks（新安静号）：「人名 – 书名」+ 单封面；2019 起停更——学模板。",
              "@dashwoodbooks / @foam_amsterdam / @printedmatter 近帖停更或为空。",
            ],
            steal:
              "同系列换一个季节词继续；书店帖可写印刷工艺；人名–书名单封面极简。",
            figures: [
              {
                file: "log-pc-jp-lottery-1.webp",
                alt: "日本中世纪彩票秋色静物",
                width: 960,
                height: 1200,
                caption: "同系列换季节：文案只写 Mid century Japanese lottery · Autumn。",
                credit:
                  "Present & Correct / X @presentcorrect · JP lottery autumn · 无商业用途·侵权立删",
                creditHref: "https://x.com/i/status/2106380573006553466",
              },
              {
                file: "log-pc-office-1.webp",
                alt: "1960–1990 年代办公文具静物",
                width: 1200,
                height: 900,
                caption: "年代并置：60s / 90s / 80s office wares，零形容词。",
                credit:
                  "Present & Correct / X @presentcorrect · office wares · 无商业用途·侵权立删",
                creditHref: "https://x.com/i/status/2105351726748373033",
              },
              {
                file: "log-bint-leiter.webp",
                alt: "Saul Leiter 摄影书封面帖",
                width: 1200,
                height: 812,
                caption: "安静号模板：人名 – 书名 + 单封面。",
                credit:
                  "Bint photoBooks / X @Bintphotobooks · Saul Leiter · 无商业用途·侵权立删",
                creditHref: "https://x.com/i/status/1180119246640168960",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    date: "2026-10-18",
    title: "例行：MACK 官网 + Buffalo Zine",
    summary:
      "下午例行新开了 MACK 官网和 Buffalo Zine。MACK 商品页用规格行和封面 credit 当编辑摘要；Buffalo 首页把文字做成图物件，Issue 22 把纸重装订写进规格。X 上 presentcorrect 无增量新帖，补下了更早的彩票和 diary 静物；Aperture 短名单文跟 MACK/SPBH 新品闭环；新跟安静号 photobookstore。",
    sections: [
      {
        id: "routine-2026-10-18",
        label: "例行 · 下午 14:00",
        intro:
          "新开 MACK Books 官网（规格行 / 封面 credit）和 Buffalo Zine（文字当图 · Issue 22）。The Plant / Present & Correct 站页太薄，今日不深挖。X：presentcorrect / aperturefnd 无新帖；补静物旧图；安静号 @photobookstore。",
        items: [
          {
            heading: "MACK Books 官网（新开）",
            href: "https://mackbooks.co.uk/",
            points: [
              "昨天只挖了离 X 的 @MACK_books；今天挖官网。New Books 几乎是人名/书名列表，极简。",
              "Faces and Phases（Zanele Muholi）：书名→作者→金句→一段判断→Cover photograph：人名, 地点, 年. © → 规格一行 Debossed leather hardcover with tipped-in image / 17×24 cm / 464 pages / October 2026 / ISBN。",
              "American Teen（Joseph Szabo）同模板：Debossed linen hardcover with tipped-in image / 25×25 cm / 240 pages / August 2026；With new texts by Sofia Coppola and Kim Gordon。",
              "Bounty（Steve McQueen，Irma Boom 设计）：Debossed hardcover / 24×24 cm / 132 pages / March 2026。文案是判断不是卖点堆砌。",
            ],
            steal:
              "条目 meta 偷规格行；封面 credit 写谁·地点·年·©；贡献者可写 With new texts by…。",
            links: [
              {
                label: "New Books",
                href: "https://mackbooks.co.uk/collections/new-books",
              },
              {
                label: "Faces and Phases",
                href: "https://mackbooks.co.uk/products/faces-and-phases-zanele-muholi",
              },
              {
                label: "American Teen",
                href: "https://mackbooks.co.uk/products/american-teen-joseph-szabo",
              },
              {
                label: "Bounty",
                href: "https://mackbooks.co.uk/products/bounty",
              },
            ],
            figures: [
              {
                file: "log-mack-faces-phases.webp",
                alt: "Zanele Muholi Faces and Phases 书封面",
                width: 1599,
                height: 1529,
                caption: "封面 credit 写完整：谁、地点、年、©。规格行在文末一行收束。",
                credit:
                  "原图 · MACK · Faces and Phases / Zanele Muholi · 无商业用途·侵权立删",
                creditHref:
                  "https://mackbooks.co.uk/products/faces-and-phases-zanele-muholi",
              },
              {
                file: "log-mack-american-teen.webp",
                alt: "Joseph Szabo American Teen 书封面",
                width: 1599,
                height: 1529,
                caption: "同站规格模板：装帧·尺寸·页数·月份·ISBN；另有 With new texts by…。",
                credit:
                  "原图 · MACK · American Teen / Joseph Szabo · 无商业用途·侵权立删",
                creditHref:
                  "https://mackbooks.co.uk/products/american-teen-joseph-szabo",
              },
            ],
          },
          {
            heading: "Buffalo Zine（新开）",
            href: "https://www.buffalozine.com/",
            points: [
              "首页大量 BZ22_TEXT_*.jpg——文字排成视觉物件，不是无限电商卡。",
              "Issue 22 SS’26：白话写「真有关系的人」、第一人称、社区；造型是本人衣服不是强加。",
              "规格硬信息：300 pages · 100gsm uncoated · wire bound · 17×24 cm · 0.7 kg。",
            ],
            steal:
              "文字可当图物件；纸重/装订写进 meta；人物条目写本人穿着比氛围感造型老实。",
            links: [
              {
                label: "Issue 22",
                href: "https://www.buffalozine.com/products/issue-22",
              },
            ],
            figures: [
              {
                file: "log-bz22-covers-1.webp",
                alt: "Buffalo Zine 第 22 期多封面拼图",
                width: 1600,
                height: 1142,
                caption: "多封面并置：看裁切和字让路，不看电商促销条。",
                credit:
                  "原图 · Buffalo Zine Issue 22 covers · 无商业用途·侵权立删",
                creditHref: "https://www.buffalozine.com/products/issue-22",
              },
              {
                file: "log-bz22-text-1a.webp",
                alt: "Buffalo Zine 首页文字排成图物件",
                width: 726,
                height: 1024,
                caption: "首页课：文字即视觉块，不是导航副标题。",
                credit:
                  "原图 · Buffalo Zine homepage text-as-image · 无商业用途·侵权立删",
                creditHref: "https://www.buffalozine.com/",
              },
            ],
          },
          {
            heading: "Aperture 短名单（机构向增量）",
            href: "https://aperture.org/editorial/announcing-the-2026-photobook-awards-shortlist/",
            points: [
              "列表格式固定：作者·书名·出版社·Design by…；封面组图摄影 Daniel Salemi。",
              "短名单含 MACK 的 Sohrab Hura Snow、Keisha Scarville Passports；SPBH 的 Jesse Glazzard、Nick Haymes Chronograph——和今天官网新品线闭环。",
              "@aperturefnd 自 10-08 短名单帖后无新帖。",
            ],
            steal: "条目 meta 学 Design by 一行；短名单当下周找图书单，不学奖赛官腔。",
            links: [
              {
                label: "2026 PhotoBook Awards Shortlist",
                href: "https://aperture.org/editorial/announcing-the-2026-photobook-awards-shortlist/",
              },
            ],
            figures: [
              {
                file: "log-aperture-2026-shortlist.webp",
                alt: "Aperture 2026 摄影书奖短名单封面组图",
                width: 1024,
                height: 682,
                caption: "短名单页头图：书脊/封面并置，看序列不看奖杯。",
                credit:
                  "原图 · Aperture · 2026 PhotoBook Awards / photo Daniel Salemi · 无商业用途·侵权立删",
                creditHref:
                  "https://aperture.org/editorial/announcing-the-2026-photobook-awards-shortlist/",
              },
            ],
          },
          {
            heading: "X · @presentcorrect / @photobookstore",
            points: [
              "@presentcorrect 自 10-09 彩票#30 后再无新帖；补下 09-23 彩票 27&28、09-17 多国 diary 静物、1932 eclipse viewers。",
              "@photobookstore（新安静号）：书店更新帖 = 书名串 + 封面/内页组图；例 Mark Steinmetz Rivers & Towns。",
              "@MACK_books 已离 X，今日以官网为准。theplantmag 用户名不存在。",
            ],
            steal:
              "静物继续同系列并置、文案只写年代/物名；书店更新帖比奖赛征稿安静。",
            figures: [
              {
                file: "log-pc-lottery-27.webp",
                alt: "1955 年彩票收藏静物",
                width: 1080,
                height: 1350,
                caption: "图注只写年代和物名，零形容词。",
                credit:
                  "Present & Correct / X @presentcorrect · lottery 1955 #27 · 无商业用途·侵权立删",
                creditHref: "https://x.com/i/status/2102816209075093510",
              },
              {
                file: "log-pc-diaries-intl-1.webp",
                alt: "多国手账本静物棚拍",
                width: 1600,
                height: 1200,
                caption: "同功能物件成组：日本/法国/意大利/波兰 diary。",
                credit:
                  "Present & Correct / X @presentcorrect · diaries · 无商业用途·侵权立删",
                creditHref: "https://x.com/i/status/2100648388870001139",
              },
              {
                file: "log-pbs-steinmetz.webp",
                alt: "Mark Steinmetz Rivers and Towns 摄影书页",
                width: 1440,
                height: 1009,
                caption: "书店帖：书名 + 翻页组图，学序列和纸白。",
                credit:
                  "Photobookstore / X @photobookstore · Mark Steinmetz · 无商业用途·侵权立删",
                creditHref: "https://x.com/i/status/1821457712917401790",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    date: "2026-10-17",
    title: "例行：The Gentlewoman + Fantastic Man",
    summary:
      "下午例行新开了 The Gentlewoman 和 Fantastic Man。一个用 Library 判断副题收人物长访，一个用 A–Z 索引加封面一人。MACK 正确号是 MACK_books，离 X 前的摄影书组图也下了。能下到的原图放在对应条目下。",
    sections: [
      {
        id: "routine-2026-10-17",
        label: "例行 · 下午 14:00",
        intro:
          "新开 The Gentlewoman（Library）和 Fantastic Man（姐妹刊）。X 上 @thegentlewoman / @fantasticman 偏旧；纠正 @MACK_books；@lensculture 奖赛多；presentcorrect / aperturefnd 无增量新帖。",
        items: [
          {
            heading: "The Gentlewoman（新开）",
            href: "https://thegentlewoman.co.uk/",
            points: [
              "Gert Jonkers & Jop van Bennekom 系，主编 Penny Martin，半年刊。官网 thegentlewoman.co.uk（thegentlewoman.com 会跳过去）。",
              "首页：大封面 splash + 极短眉题（如 Tough）+ 人名/合作一句 deck。几乎无导航噪音，无卡片堆。",
              "Library 收 n°1–34 共 160+ 人物。列表用一句判断副题 + 姓名：Cheerful undertaker、Lichenology 101、On what listening looks like。",
              "单篇 Autumn Durald Arkapaw（n°34）：顶栏姓名 → Interview by / Portraits by → Issue nº；开篇先钉住人再进长访；文末贡献者小传分栏 + Styling/Hair/Make-up。",
              "纸刊（magCulture 细读 #12）：Parts 全页分章扉 + 粗网点；篇末 References 双页当标点；时装故事用地名当标题。Futura 常作刊头锚。",
            ],
            steal:
              "TOC/条目标题改成判断副题；credit 按 Interview / Photo / Styling 分行；章与章用扉页或细线，别用卡片。",
            links: [
              {
                label: "Library",
                href: "https://thegentlewoman.co.uk/library",
              },
              {
                label: "Autumn Durald Arkapaw",
                href: "https://thegentlewoman.co.uk/library/autumn-durald-arkapaw",
              },
              {
                label: "magCulture · Gentlewoman #12 结构",
                href: "https://magculture.com/blogs/journal/details-the-gentlewoman-12",
              },
            ],
            figures: [
              {
                file: "log-tgw-34-cover.webp",
                alt: "The Gentlewoman 第 34 期封面 splash",
                width: 1155,
                height: 1500,
                caption: "n°34 封面：人像占满，刊名很小，首页 splash 就这一张。",
                credit: "原图 · The Gentlewoman n°34 cover · 无商业用途·侵权立删",
                creditHref: "https://thegentlewoman.co.uk/",
              },
              {
                file: "log-tgw-autumn-durald.webp",
                alt: "Autumn Durald Arkapaw 横向肖像",
                width: 1400,
                height: 583,
                caption: "Library 内页用图：宽画幅人像，图注写穿什么比写氛围感有用。",
                credit:
                  "原图 · The Gentlewoman Library · Autumn Durald Arkapaw · 无商业用途·侵权立删",
                creditHref:
                  "https://thegentlewoman.co.uk/library/autumn-durald-arkapaw",
              },
            ],
          },
          {
            heading: "Fantastic Man（新开）",
            href: "https://www.fantasticman.com/",
            points: [
              "同团队男刊。首页 = 刊头 + 当期一句 + A–Z Index（The Top 100 greatest hits），档案导航，不是无限 feed。",
              "封面课：一人特写占满 + 刊名/期号极小。例：Lev Tanju n°38、Armani n°37（Alasdair McLellan）、Ocean Vuong n°34（Collier Schorr，主题 ON WRITING）。",
              "内页 Giorgio Armani：眉题一句判断；署名 From Fantastic Man n°37 — Text by … Photography by …；小标题 BLAZER REVOLUTION 等分段。",
            ],
            steal:
              "hero 一人 + 极小字；期主题可以是动作词（ON WRITING）；长文用全大写短章名打断。",
            links: [
              {
                label: "Giorgio Armani 文",
                href: "https://www.fantasticman.com/article/giorgio-armani",
              },
              {
                label: "Index",
                href: "https://www.fantasticman.com/article/index",
              },
            ],
            figures: [
              {
                file: "log-fm-38-lev-tanju.webp",
                alt: "Fantastic Man 第 38 期 Lev Tanju 封面",
                width: 1376,
                height: 1701,
                caption: "封面：一人占满，身份判断写在文案里，刊名让路。",
                credit:
                  "Fantastic Man / X @fantasticman · n°38 Lev Tanju · 无商业用途·侵权立删",
                creditHref: "https://x.com/i/status/1778447409288188408",
              },
              {
                file: "log-fm-37-armani.webp",
                alt: "Fantastic Man 第 37 期 Giorgio Armani 封面",
                width: 1376,
                height: 1701,
                caption: "Armani 封面：近景肖像，摄影 Alasdair McLellan。",
                credit:
                  "Fantastic Man / X @fantasticman · n°37 Armani · 无商业用途·侵权立删",
                creditHref: "https://x.com/i/status/1714949852222697562",
              },
            ],
          },
          {
            heading: "X · @MACK_books",
            href: "https://x.com/MACK_books",
            points: [
              "昨天 mackbooks 解析到空号；正确是 MACK_books。账号已于 2024-11 离开 X，历史帖仍有摄影书内页。",
              "典型帖：书名 + 一句判断 + 📸 作者；常配 3–4 张书页/封面。COSMOS（Collier Schorr）、The Color Black、Ray’s a Laugh（Billingham）等。",
            ],
            steal: "组图学翻页序列和纸白，不学九宫格；图注写书名+作者即可。",
            links: [
              {
                label: "COSMOS 帖",
                href: "https://x.com/i/status/1856370336599814398",
              },
              {
                label: "The Color Black 帖",
                href: "https://x.com/i/status/1857423687806247360",
              },
            ],
            figures: [
              {
                file: "log-mack-cosmos-1.webp",
                alt: "Collier Schorr COSMOS 摄影书内页或封面",
                width: 1385,
                height: 1800,
                caption: "COSMOS：书页竖构图，看裁切和留白，不看滤镜。",
                credit:
                  "MACK / X @MACK_books · Collier Schorr COSMOS · 无商业用途·侵权立删",
                creditHref: "https://x.com/MACK_books",
              },
              {
                file: "log-mack-color-black-1.webp",
                alt: "The Color Black 书相关静物/建筑图",
                width: 1024,
                height: 806,
                caption: "The Color Black：物件与建筑并置，文案只点书名和摄影师。",
                credit:
                  "MACK / X @MACK_books · The Color Black · 无商业用途·侵权立删",
                creditHref: "https://x.com/MACK_books",
              },
            ],
          },
          {
            heading: "X · @thegentlewoman / @fantasticman",
            points: [
              "两号都偏休眠（TGW 停 2023，FM 停 2024）。学封面与时装组图即可，别等新帖。",
              "TGW 有用历史图：Cathy Horyn 农场肖像；UNIQLO : C 棚拍组图。",
            ],
            steal: "封面文案模板：人名 + 一句身份判断 + 摄影师。",
            figures: [
              {
                file: "log-tgw-cathy-horyn.webp",
                alt: "Cathy Horyn 在农场的肖像",
                width: 1400,
                height: 1118,
                caption: "长访配图：环境人像，不是棚拍网红闪片。",
                credit:
                  "The Gentlewoman / X @thegentlewoman · Cathy Horyn · 无商业用途·侵权立删",
                creditHref: "https://x.com/i/status/1706667794564325559",
              },
            ],
          },
          {
            heading: "X · 其他",
            points: [
              "@lensculture 近帖几乎全是奖赛征稿；偶有作品如 Kyosei Yoshiike Salvage，可当下家入口，不跟时间线。",
              "@BlindMagazine 解析到的是 2015 西语空壳号，不是摄影刊。@printedmatter 近期可读帖为 0。",
              "@presentcorrect / @aperturefnd 自昨天笔记后再无增量有图帖。",
            ],
            steal: "优先杂志/出版社官号；宽搜索和奖赛号噪声大。",
            imageNote:
              "lensculture-yoshiike-salvage.jpg 已下到 staging，若上站可转 webp 挂在本条；不挂就只留外链。",
            links: [
              {
                label: "Yoshiike Salvage 帖",
                href: "https://x.com/i/status/1809322072876908639",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    date: "2026-10-16",
    title: "例行：MacGuffin + magCulture",
    summary:
      "下午例行新开了 MacGuffin 和 magCulture。一个用物件词收整期，一个用商品卡把尺寸、编辑、设计写在一行里。能下到的原图放在对应条目下，下不到的写明了。",
    sections: [
      {
        id: "routine-2026-10-16",
        label: "例行 · 下午 14:00",
        intro:
          "新开 MacGuffin（物的一生）和 magCulture Journal。X 上 @MacGuffinMag、@magculture、@foam_amsterdam 都偏旧或偏薄；增量看了 @presentcorrect 和 Aperture 短名单。",
        items: [
          {
            heading: "MacGuffin（新开）",
            href: "https://www.macguffinmagazine.com/",
            points: [
              "定位是 The Life of Things：每期只围着一个物件转，从熟悉的到被忽视的都挖。About 写得很干：extraordinary stories about ordinary things。编辑 Kirsten Algera & Ernst van der Hoeven，设计 Sandra Kassenaar。",
              "当期 N°16 The Mirror，210×275 mm，194 页，双语（英）。开篇引 Agnès Varda：自拍的工具是镜子；反过来，你看见世界。",
              "一个词收整期，再按学科切开：Claude glass、镜面球、健身自拍、面部识别、电影里的镜子、灵长类自我意识实验。",
              "内页分三章 Self / Shadow / Space，不是无限 feed。封面把手写 M 左右翻转，当镜子的暗示：标识还认得出来，但有一点不安。",
              "首页几乎只有刊头、本期一大段 deck、「Read full story」，再加一篇十周年缝纫档案。没有卡片堆，没有图标。",
            ],
            steal:
              "期主题用一个摸得到的物件词（镜子、床、绳子）；首页只留一期一句加一段 deck；组图换学科角度，不重复同一景别。刊头别每周换字体，熟悉标识轻轻改一下就够。",
            links: [
              {
                label: "N°16 The Mirror",
                href: "https://www.macguffinmagazine.com/issues/macguffin-the-mirror",
              },
              {
                label: "magCulture 商品页（三章写在这里）",
                href: "https://magculture.com/products/macguffin-16-the-mirror",
              },
            ],
            figures: [
              {
                file: "log-mg-mirror-cover.webp",
                alt: "MacGuffin 第 16 期 The Mirror 封面：一人拿手机自拍，绿色手写 M 压在画面上",
                width: 800,
                height: 1037,
                caption: "封面：手写大 M 压在自拍上，刊头字很小，主题 The Mirror 放在下面。",
                credit: "原图 · MacGuffin N°16 The Mirror 封面 · 无商业用途·侵权立删",
                creditHref: "https://www.macguffinmagazine.com/issues/macguffin-the-mirror",
              },
            ],
          },
          {
            heading: "magCulture Journal（新开）",
            href: "https://magculture.com/",
            points: [
              "伦敦杂志店 + Journal + Podcast。首页一句 We love magazines，是策展口吻，不是内容农场。",
              "商品卡统一写尺寸、页数、城市、刊期、编辑、设计，等于一份可检索的独立刊名录。",
              "Journal 这篇是 Ida Yndal, Tinted Issue（2026-10-05，Jeremy Leslie）。栏目眉题固定 At work with:，正文是工作周访谈，语气正常，不诗意。",
              "Ida 夸 MacGuffin：视觉有刺激但不乱，正文可读，永远知道从哪开始读。这是排版底线。",
              "Tinted Issue #1：200×285 mm，216 页 openbound，哥本哈根。主题 The Illusion of Hierarchy。站旨 Every person, every perspective, holds its own tint。声明不用生成式 AI。",
              "Velvet Pages #2：300×400 mm，56 页活页，报纸开本。主题 Reading is Hot，一句就带态度。",
              "MacGuffin #16 在店里仍是常客。商品页把 Self / Shadow / Space 写清楚，商品文案本身就是编辑摘要。",
            ],
            steal:
              "固定眉题（At work with 这种专名）；条目 meta 学商品卡：规格、谁编、谁设计、一句判断。期主题句加规格一行就够，不必长导语。",
            links: [
              {
                label: "Ida Yndal, Tinted Issue",
                href: "https://magculture.com/blogs/journal/ida-yndal-tinted-issue",
              },
              {
                label: "Tinted Issue #1",
                href: "https://magculture.com/products/tinted-issue-1",
              },
              {
                label: "Velvet Pages #2",
                href: "https://magculture.com/products/velvet-pages-2",
              },
            ],
          },
          {
            heading: "X · @presentcorrect",
            href: "https://x.com/presentcorrect",
            points: [
              "10-09：1952 彩票收藏第 30 张。10-03：中世纪日本彩票 Autumn 组图。09-30：1960s / 80s / 90s 办公器物静物。",
              "文案仍只写年代和物件名，零形容词。方法昨天记过，今天把能下到的原图存下来。",
            ],
            steal: "同一类物件并置；图注只标年代和物名。静物棚拍就是平面构成：留白、对齐、同色系。",
            figures: [
              {
                file: "log-pc-lottery-1952.webp",
                alt: "一张日本短期宝くじ，票面为昭和28年第4回，娃娃与鲤鱼旗",
                width: 1080,
                height: 1350,
                caption:
                  "收藏帖里的第 30 张。票面印着昭和28年、第4回短期宝くじ，字和图在同一张纸上。",
                credit:
                  "Present & Correct / X @presentcorrect · 1952 lottery ticket #30 · 无商业用途·侵权立删",
                creditHref: "https://x.com/presentcorrect",
              },
              {
                file: "log-pc-jp-lottery-26.webp",
                alt: "一张日本彩票，票面为昭和29年第26回东京都10日くじ，两个和服人物",
                width: 1080,
                height: 1350,
                caption: "同一组日本彩票里的一张。昭和29年、第26回東京都10日くじ，看版式和配色就够。",
                credit:
                  "Present & Correct / X @presentcorrect · Mid-century Japanese lottery · Autumn · 无商业用途·侵权立删",
                creditHref: "https://x.com/presentcorrect",
              },
              {
                file: "log-pc-office-1016.webp",
                alt: "透明塑料盒里的红剪刀，黄底上压着绿、蓝两块",
                width: 1400,
                height: 1050,
                caption: "办公器物静物之一：透明盒、黄底、红剪刀对齐，背景留白。",
                credit:
                  "Present & Correct / X @presentcorrect · 1960s–1990s office wares · 无商业用途·侵权立删",
                creditHref: "https://x.com/presentcorrect",
              },
            ],
          },
          {
            heading: "X · @MacGuffinMag",
            href: "https://x.com/MacGuffinMag",
            points: [
              "账号几乎休眠，最近一条停在 2019。历史帖仍有用：为 Nº5 THE CABINET 连发物件研究图，Lalanne Cat Bar、IKEA Billy、Sottsass Carlton、Josef Frank Norden Flora。",
              "文案模板就一句：Researching MacGuffin NºX THE OBJECT，后面接物件名、作者、年代。",
            ],
            steal: "研究日记式图注：物件名 + 作者 + 年份，零形容词。和 Present & Correct 的年代/物名是同一族。",
            figures: [
              {
                file: "log-mg-lalanne-catbar.webp",
                alt: "黄铜猫形酒吧柜 Lalanne Cat Bar，柜身打开，里面摆着酒瓶",
                width: 592,
                height: 592,
                caption: "Lalanne Cat Bar，1968。图注只需要物件名、作者、年份。",
                credit:
                  "MacGuffin research dump / X @MacGuffinMag · Lalanne Cat Bar 1968 · 无商业用途·侵权立删",
                creditHref: "https://x.com/MacGuffinMag",
              },
              {
                file: "log-mg-sottsass-carlton.webp",
                alt: "Ettore Sottsass 的 Carlton 书架，彩色几何块叠在水磨石底座上",
                width: 900,
                height: 986,
                caption: "Sottsass Carlton，Memphis，1981。同一套研究日记写法。",
                credit:
                  "MacGuffin research dump / X @MacGuffinMag · Sottsass Carlton / Memphis 1981 · 无商业用途·侵权立删",
                creditHref: "https://x.com/MacGuffinMag",
              },
            ],
          },
          {
            heading: "X · @aperturefnd",
            href: "https://x.com/aperturefnd",
            points: [
              "10-08：2026 Paris Photo–Aperture PhotoBook Awards，35 本短名单。",
              "同账号还有 Duane Michals、Aaryan Sinha Portfolio Prize、Friedlander 讨论等长文。跟的是摄影书节奏：翻页、序列，不是九宫格。",
            ],
            steal: "短名单当找书入口，学序列，不学机构官腔。",
            links: [
              {
                label: "35 本短名单帖",
                href: "https://x.com/i/status/2108220941058940998",
              },
            ],
            imageNote: "原图未取到（这条帖没有附图，短名单页打不开），外链留着。",
          },
          {
            heading: "X · @magculture",
            href: "https://x.com/magculture",
            points: [
              "近帖偏店铺活动和转发，图片策展已经迁到网站和 Instagram。",
              "有图的一条是 2024 年 Backstage Talks 活动海报，薄，不够当参考。",
            ],
            steal: "学站，不学这条时间线。策展语气以 Journal 和商品页为准。",
          },
          {
            heading: "X · @foam_amsterdam",
            href: "https://x.com/foam_amsterdam",
            points: [
              "时间线停在 2022：Foam Talent 作品发布、Paul Kooiker 展览。",
              "署名习惯是 © 作者，再加系列名。",
            ],
            steal: "机构账号的图注可以对齐成：系列名 + ©。账号本身偏旧，不跟新帖。",
          },
          {
            heading: "宽搜索（反面）",
            points: [
              "搜 photobook、still life、editorial，近帖被 K-pop 专辑和 AI prompt 海报刷掉。安静一点的只剩博物馆静物转发，比如 Coorte 的草莓、梵高的手套和橙子。",
            ],
            steal: "优先杂志官号和静物店号，别靠宽关键词。",
          },
        ],
      },
    ],
  },
  {
    date: "2026-10-15",
    title: "一天两轮：手动深挖 + 下午例行",
    summary:
      "上午手动翻了一轮老参考站和几个 X 账号，下午例行又新开了 MilK 和 Fonts In Use。下面是原样记录，没精简，方便回头翻。能抓到原图的放了原图，抓不到的写了「原图未取到」并留外链。",
    sections: [
      {
        id: "manual-2026-10-15",
        label: "手动学习",
        intro: "深挖 You Iwata / Kinfolk / HARU / &Premium，新开 BRUTUS.jp；X 拉了四个账号的近帖。",
        items: [
          {
            heading: "You Iwata（深挖）",
            href: "https://youiwata.com/",
            points: [
              "首页先放站旨（「光は、翳りがあってこそ」这类），再按春夏秋冬 / 祭 / 旅 / 人像分章，每章一句短诗当题记。",
              "图注密度高：英文诗意题 + 日文汉字题 +「季 / 编号 ── 类型标签」（風景・陰翳・ポートレート）+ 版权一行。",
              "全站几乎没有 UI 装饰，字和图就是界面。",
            ],
            steal: "分章 + 章首一句题记；图注可以加一层「类型 / 章节」标签。",
            imageNote: "原图未取到（站内图受保护），只记要点，保留外链。",
          },
          {
            heading: "Kinfolk（再看首页）",
            href: "https://www.kinfolk.com/",
            points: [
              "用一期主题收住整站：「THE PLAY ISSUE」，不是无限 feed。",
              "首页混排：大特写 + 次要短栏（Art / Books / What Are You Working On?）+「Home Tour」短判断。",
            ],
            steal: "首页来一句「本期」，把内容收住。",
          },
          {
            heading: "HARU IN FRAME（深挖声明）",
            href: "https://haru.photo/",
            points: [
              "STATEMENT 放在作品前面：在 AI 能画图的年代，为什么还拍有重量的实物。",
              "单独有个 Shooting Note 栏目，谈光、色、怎么看。",
            ],
            steal: "站旨可以更硬一点，别只是说明文。",
          },
          {
            heading: "&Premium（再看栏目语气）",
            href: "https://andpremium.jp/",
            points: [
              "封面语很短：「住まいと心を、整える。」",
              "眉题小写 + 日期（LIFESTYLE / FASHION / FOOD / TRAVEL）；一篇只讲一件事。",
            ],
            steal: "本期主题句可以照这个短句模板。",
          },
          {
            heading: "BRUTUS.jp（新开）",
            href: "https://brutus.jp/",
            points: [
              "号驱动：「No.1063『犬と、暮らせば。』」，用主题把一期收起来。",
              "分类用小字（wear / live / eat / visit）+ 日期；标题写具体判断。",
              "有个「今日のギフト」短栏目。",
            ],
            steal: "固定短栏 +「标题就是看见了什么」。",
          },
          {
            heading: "Casa BRUTUS 文章页",
            points: [
              "标题就是图注判断：「帆を思わせる非対称の天板と長さが特徴的なテーブル。」",
              "署名行写角色：photo_Keiko Nakajima styling & text_Yumi Nakata + 刊号。",
            ],
            steal: "credit 可以按角色分工写（谁拍、谁搭、谁写）。",
          },
          {
            heading: "X · @POPEYE_Magazine",
            href: "https://x.com/POPEYE_Magazine",
            points: [
              "山崎蒸馏所 4 图跟拍；两国古着屋，写具体买了哪三件；高円寺两人挖宝散步。",
              "文案写地名、店名、物件，不写「氛围感」。",
            ],
            steal: "一条可以配同主题、不同景别的 3–4 张图。",
            imageNote: "原图未取到（X 需登录/反爬），只留外链。",
          },
          {
            heading: "X · @CasaBRUTUS",
            href: "https://x.com/CasaBRUTUS",
            points: [
              "「帆を思わせる非対称の天板…」；竹艺展；#今日の名建築 温泉宿 2 图；天神书店。",
            ],
            steal: "固定短栏，外景 + 室内交替。",
            imageNote: "原图未取到（X 需登录/反爬），只留外链。",
          },
          {
            heading: "X · @AestheticsJapan",
            href: "https://x.com/AestheticsJapan",
            points: [
              "六本木交叉口 / Tokyo Tower / Midnight Tokyo；每帖模板：📍地点 📸作者 🔗IG。",
              "今天链到的作者：Masato、Liam Wong、Shion。",
            ],
            steal: "图下强制署名；把策展帖当找作者的入口。",
            imageNote: "原图未取到（X 需登录/反爬），只留外链。",
          },
          {
            heading: "X · @akinecoco987",
            href: "https://x.com/akinecoco987",
            points: [
              "「これが私の帰り道。」「夜へと変わる空を眺めていた。」+ 同一时刻的多张图。",
            ],
            steal: "图注可以就一句；组图讲同一时刻、不同朝向。",
            imageNote: "原图未取到（X 需登录/反爬），只留外链。",
          },
        ],
      },
      {
        id: "routine-2026-10-15",
        label: "例行 · 下午 14:00",
        intro: "例行一轮，新开 MilK Japon + Fonts In Use Staff Pick，X 看了静物和摄影书两个方向。",
        items: [
          {
            heading: "MilK MAGAZINE JAPON（新开）",
            href: "https://milkjapon.com/",
            points: [
              "新一期 No.52 主题就一个词：Memory，整期的时装、摄影、亲子都收在这个词下。",
              "栏目眉题 FASHION / LIBRARY / GOOD NEWS + 日期；固定栏有 INNOCENT VIEW（摄影师原点访谈）、Art to Make You Smile、ACTIVITY BOOK。",
              "时装文案页图下 credit 写全：Photo / Styling / Hair / Edit。",
            ],
            steal: "主题句可以短到一个词；固定栏起个专名；credit 按角色分工。",
            links: [
              {
                label: "HYBRID THEORY（时装页示例）",
                href: "https://milkjapon.com/fashion/hybrid-theory/",
              },
            ],
            figures: [
              {
                file: "log-milk-hybrid.webp",
                alt: "MilK Japon 时装企划 HYBRID THEORY 的一页",
                width: 849,
                height: 1280,
                caption: "时装页：图占满，栏目名和 credit 都收得很小。",
                credit: "原图 · MilK Japon《HYBRID THEORY》· 无商业用途·侵权立删",
                creditHref: "https://milkjapon.com/fashion/hybrid-theory/",
              },
            ],
          },
          {
            heading: "Fonts In Use · Staff Pick",
            href: "https://fontsinuse.com/uses/80713/monuments-historiques-covers-1980-1985",
            points: [
              "一组 1980–1985 的法国杂志封面：刊头用全小写 Sully-Jonquières，33 期同一个锚点。",
              "字阶分工：刊头是有性格的衬线，议题标签用 Franklin Gothic 全大写无衬线。",
              "封面构图：大图局部特写 + 极小刊头，图占主导。",
            ],
            steal: "刊头小写 + 标签大写这一对；hero 敢裁局部，不用总是全身。",
            figures: [
              {
                file: "log-fiu-1980.webp",
                alt: "Monuments Historiques 杂志 1980 年第 107 期封面",
                width: 1000,
                height: 1254,
                caption: "1980 · n°107：刊头小写压在上方，大图占满下半版。",
                credit: "原图 · Monuments Historiques 封面 via Fonts In Use · 无商业用途·侵权立删",
                creditHref:
                  "https://fontsinuse.com/uses/80713/monuments-historiques-covers-1980-1985",
              },
              {
                file: "log-fiu-1981.webp",
                alt: "Monuments Historiques 杂志 1981 年第 116 期封面",
                width: 1000,
                height: 1225,
                caption: "1981 · n°116：同一个刊头锚点，封面图换了也认得出是同一本。",
                credit: "原图 · Monuments Historiques 封面 via Fonts In Use · 无商业用途·侵权立删",
                creditHref:
                  "https://fontsinuse.com/uses/80713/monuments-historiques-covers-1980-1985",
              },
            ],
          },
          {
            heading: "X · @presentcorrect",
            href: "https://x.com/presentcorrect",
            points: [
              "1952 年彩票收藏第 30 张；中世纪日本彩票秋组图；60/80/90 年代办公室器物 4 图静物。",
              "文案只写年代和物件名，零形容词。",
            ],
            steal: "同一类物件摆一起拍；图注只写是什么、哪年的。",
            imageNote: "原图未取到（X 需登录/反爬），只留外链。",
          },
          {
            heading: "X · @aperturefnd",
            href: "https://x.com/aperturefnd",
            points: [
              "2026 Paris Photo–Aperture PhotoBook Awards 35 本短名单。",
            ],
            steal: "组图学摄影书的翻页、序列感，不是九宫格。",
            imageNote: "原图未取到（X 需登录/反爬），只留外链。",
          },
        ],
      },
    ],
  },
];
