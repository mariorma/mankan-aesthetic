import type { Figure } from "./figure";

export type AccumCard = {
  id: string;
  date: string;
  title: string;
  /** 无图时的一两句。有图时说明写在 figure.caption，不要再堆要点。 */
  note?: string;
  href?: string;
  figure?: Figure;
  imageNote?: string;
};

// 表：品味。新的放最前面。每条一张图 + 一两句（写在 caption）。
// 抓不到原图就留 imageNote「原图未取到。」和 href，不写长摘要。
export const tasteLog: AccumCard[] = [
  {
    "id": "log-artstation-duolife",
    "date": "2026-10-22",
    "title": "ArtStation · DuoLife Magazine（Rafal Topolski）",
    "figure": {
      "file": "log-artstation-duolife.webp",
      "alt": "ArtStation 封面：DuoLife Magazine",
      "width": 1200,
      "height": 675,
      "caption": "品牌刊网格系统——真实约束下的可持续刊面。",
      "credit": "原图 · ArtStation · Rafal Topolski · DuoLife Magazine",
      "creditHref": "https://lafar.artstation.com/projects/DAXbVe"
    }
  },
  {
    "id": "log-behance-mix",
    "date": "2026-10-22",
    "title": "Behance · MIX Interiors Editorial Redesign",
    "figure": {
      "file": "log-behance-mix.webp",
      "alt": "MIX Interiors 改版刊面示意",
      "width": 1200,
      "height": 675,
      "caption": "内容响应式：标题、取色、构图跟文章变。",
      "credit": "原图 · Behance/Marçal · MIX Interiors Editorial",
      "creditHref": "https://www.behance.net/gallery/249923613/MIX-Interiors-Editorial-Design"
    }
  },
  {
    "id": "log-meiye-pin1",
    "date": "2026-10-22",
    "title": "美叶 · 设计师的品味养成所",
    "figure": {
      "file": "log-meiye-pin1.webp",
      "alt": "美叶首页流图示例一",
      "width": 1200,
      "height": 900,
      "caption": "品味养成所——策展入口姿态。",
      "credit": "原图 · 美叶 · 首页流图",
      "creditHref": "https://meiye.art/"
    }
  },
  {
    "id": "2026-10-22-站酷-BranD-79-可持续地方设计",
    "date": "2026-10-22",
    "title": "站酷 · BranD 79 可持续地方设计",
    "imageNote": "原图未取到。",
    "note": "全刊制作课：专色、六款护封叠龙脊、仿龙鳞装、木刻过渡页、四款纸触感分层。",
    "href": "https://www.zcool.com.cn/work/ZNzQxMTg4NDQ=.html"
  },
  {
    "id": "2026-10-22-花瓣-杂志排版话题画板-入口",
    "date": "2026-10-22",
    "title": "花瓣 · 杂志排版话题画板（入口）",
    "imageNote": "话题页打不开，原图未取到。",
    "note": "本周花瓣露脸：杂志排版话题合集墙（复古刊、五大刊、杂志风文字等）。",
    "href": "https://huaban.com/topic-board/a-zazhipaiban"
  },
  {
    "id": "log-yt-mishi-artdirection",
    "date": "2026-10-21",
    "title": "YouTube · Mastering Art Direction（Mishi）",
    "figure": {
      "file": "log-yt-mishi-artdirection.webp",
      "alt": "YouTube 封面：Mastering Art Direction 讲解片",
      "width": 1200,
      "height": 675,
      "caption": "Art direction / 字阶指挥——导演视角补巡礼缺口。",
      "credit": "原图 · YouTube · Mishi Designs Studio · Art Direction / Editorial",
      "creditHref": "https://www.youtube.com/watch?v=oXnHkmIrgDQ"
    }
  },
  {
    "id": "log-vimeo-hometown-magazine",
    "date": "2026-10-21",
    "title": "Vimeo · HOW TO MAKE A MAGAZINE（Hometown）",
    "figure": {
      "file": "log-vimeo-hometown-magazine.webp",
      "alt": "Vimeo 封面：HOW TO MAKE A MAGAZINE",
      "width": 1200,
      "height": 675,
      "caption": "印刷装订成刊过程当影像散文。",
      "credit": "原图 · Vimeo · Hometown · HOW TO MAKE A MAGAZINE",
      "creditHref": "https://vimeo.com/732690625"
    }
  },
  {
    "id": "log-bili-ryo-nakajima",
    "date": "2026-10-21",
    "title": "B站 · 审美积累｜Ryo Nakajima",
    "figure": {
      "file": "log-bili-ryo-nakajima.webp",
      "alt": "B站封面：审美积累｜Ryo Nakajima",
      "width": 1200,
      "height": 675,
      "caption": "同关键词摄影师蒙太奇；表侧偷色与留白。",
      "credit": "原图 · B站 · 审美积累｜Ryo Nakajima",
      "creditHref": "https://www.bilibili.com/video/BV1v3zeBnEnK/"
    }
  },
  {
    "id": "log-bili-victionary-255",
    "date": "2026-10-21",
    "title": "B站 · 灵感系列 VOL.255 Victionary",
    "figure": {
      "file": "log-bili-victionary-255.webp",
      "alt": "B站封面：Victionary 书封面灵感 VOL.255",
      "width": 1200,
      "height": 675,
      "caption": "出版物封面字阶巡礼，贴表侧字/排版。",
      "credit": "原图 · B站 · 灵感系列 VOL.255 Victionary",
      "creditHref": "https://www.bilibili.com/video/BV1wjqRBDEZq/"
    }
  },
  {
    "id": "log-bili-bv1aepi6kerg",
    "date": "2026-10-21",
    "title": "01 压抑 / 执念",
    "figure": {
      "file": "log-bili-bv1aepi6kerg.webp",
      "alt": "B站官方封面：石塔上的白衣人物拉着钟绳，右边是深谷",
      "width": 1200,
      "height": 675,
      "caption": "官方封面。人缩在石塔里拉钟，谷占了右半。片子到播放页里看。",
      "credit": "原图 · B站官方封面 · Lana-Dey-Rey · 压抑、执念与精神崩塌",
      "creditHref": "https://www.bilibili.com/video/BV1Aepi6KErg/"
    }
  },
  {
    "id": "log-x-xin-heart",
    "date": "2026-10-21",
    "title": "02 「心」字怎么变",
    "figure": {
      "file": "log-x-xin-heart.webp",
      "alt": "「心」字从图形到楷书、再到偏旁的几组造型",
      "width": 1400,
      "height": 1867,
      "caption": "原帖那张。心字从图形收到楷书，再收成三种偏旁。",
      "credit": "原图 · X · @Eonway_Ying · 「心」字造型的变化",
      "creditHref": "https://x.com/Eonway_Ying/status/2112707395935711427"
    }
  },
  {
    "id": "log-as-hifructose-cover",
    "date": "2026-10-21",
    "title": "03 Hi-Fructose 封面改版",
    "figure": {
      "file": "log-as-hifructose-cover.webp",
      "alt": "Hi-Fructose 封面改版：手绘刊名、左侧目录、红蓝色带",
      "width": 1200,
      "height": 1604,
      "caption": "四层字：刊名、人名、问题、左侧目录。先读字阶。",
      "credit": "原图 · Landon Cargill · ArtStation · Hi-Fructose 封面改版",
      "creditHref": "https://llcargill.artstation.com/projects/NyLdlJ"
    }
  },
  {
    "id": "2026-10-21-04-杂志排版",
    "date": "2026-10-21",
    "title": "04 杂志排版",
    "imageNote": "话题页打不开（405），原图未取到。",
    "note": "中文排版的灵感入口。要下判断，得再进子画板挑。",
    "href": "https://huaban.com/topic-board/a-zazhipaiban"
  },
  {
    "id": "log-pixiv-cover-samples",
    "date": "2026-10-21",
    "title": "05 同人志封面作例",
    "figure": {
      "file": "log-pixiv-cover-samples.webp",
      "alt": "同人志封面作例集的分享卡，两行刊名用品红和黄绿拆开",
      "width": 1200,
      "height": 630,
      "caption": "这是作品页的分享卡，不是二十二张封面。刊名拆成两行，颜色分开。",
      "credit": "原图 · pixiv · てんぱる · セミオーダー同人誌表紙作例集 · 作者声明不是免费素材",
      "creditHref": "https://www.pixiv.net/artworks/84433706"
    },
    "imageNote": "二十二张封面原图未取到。上图只是作品页分享卡。"
  },
  {
    "id": "log-em-vol7-cover",
    "date": "2026-10-21",
    "title": "06 Emergence",
    "figure": {
      "file": "log-em-vol7-cover.webp",
      "alt": "Emergence Magazine 第七卷封面和书脊，白底上散着小图，中间是主题句",
      "width": 1200,
      "height": 1326,
      "caption": "第七卷封面，连书脊。主题句在中间，四周留白。这是封面，不是内页。",
      "credit": "原图 · Emergence Magazine · Vol. 7 Seeds and Structures 封面",
      "creditHref": "https://emergencemagazine.org/"
    }
  },
  {
    "id": "log-arena-areal",
    "date": "2026-10-21",
    "title": "07 Areal",
    "figure": {
      "file": "log-arena-areal.webp",
      "alt": "旧窗口里的大字 Ar_al，中间缺一笔",
      "width": 865,
      "height": 630,
      "caption": "字样写成 Ar_al，缺的那一笔就是题目。窗口是容器，字才是要看的。",
      "credit": "原图 · Are.na Editorial · Introducing Areal · Dinamo",
      "creditHref": "https://www.are.na/editorial/introducing-areal-are-nas-new-typeface"
    }
  },
  {
    "id": "log-yt-mag-layouts-2024",
    "date": "2026-10-21",
    "title": "08 2024 的刊面",
    "figure": {
      "file": "log-yt-mag-layouts-2024.webp",
      "alt": "2024 杂志版面视频的官方封面，下方是摊开的橙色信息图跨页",
      "width": 1200,
      "height": 676,
      "caption": "官方封面。下半是一张信息图跨页，右边是刊名。先看层级，片子到播放页里看。",
      "credit": "原图 · YouTube 官方封面 · 2024 Best Magazine Layouts",
      "creditHref": "https://www.youtube.com/watch?v=K5sKMHW7NKw"
    }
  },
  {
    "id": "log-uisdc-mag-ui",
    "date": "2026-10-21",
    "title": "09 杂志化风格怎么用",
    "figure": {
      "file": "log-uisdc-mag-ui.webp",
      "alt": "一排手机界面，大字、色块和海报式排版叠在一起",
      "width": 1200,
      "height": 800,
      "caption": "文里的一张案例。大字压在色块上，像一页刊。不是站的横幅。",
      "credit": "原图 · 优设 · 功夫UX · 杂志化风格怎么用",
      "creditHref": "https://www.uisdc.com/magazine-style"
    }
  },
  {
    "id": "log-yz-cereal-cover",
    "date": "2026-10-21",
    "title": "10 七种杂志调子",
    "figure": {
      "file": "log-yz-cereal-cover.webp",
      "alt": "Cereal 杂志封面：大字刊名，下面是一只梨、一只盘子和一把叉子",
      "width": 700,
      "height": 918,
      "caption": "文中举例的简约一挂。七种调子先看这一格。不是文首那张报亭。",
      "credit": "原图 · 云展网 · 七种杂志调子 · Cereal 封面例",
      "creditHref": "https://www.yunzhan365.com/use/digital-magazine/digital-magazine015/"
    }
  },
  {
    "id": "2026-10-21-11-灵感集",
    "date": "2026-10-21",
    "title": "11 灵感集",
    "imageNote": "墙里抽到的一张是空状态界面，不是色和版面，未采用。分享图只是 logo，也未采用。",
    "note": "色和界面的灵感墙。和优设那篇对照着扫。",
    "href": "https://meiye.art/inspiration"
  },
  {
    "id": "log-lj-dont-worry-boys",
    "date": "2026-10-20",
    "title": "Don't Worry Boys / Stanley Stellar",
    "figure": {
      "file": "log-lj-dont-worry-boys.webp",
      "alt": "Stanley Stellar Don't Worry Boys 书页静物",
      "width": 1200,
      "height": 788,
      "caption": "LJ 规格块：plates 分色 + mm + quarterbound + LJ227。",
      "credit": "原图 · Loose Joints · Don't Worry Boys / Stanley Stellar",
      "creditHref": "https://loosejoints.biz/products/dont-worry-boys"
    }
  },
  {
    "id": "log-lj-frozen-features",
    "date": "2026-10-20",
    "title": "Frozen Features / Jason Fulford",
    "figure": {
      "file": "log-lj-frozen-features.webp",
      "alt": "Jason Fulford Frozen Features 书封面静物",
      "width": 1200,
      "height": 788,
      "caption": "silkscreen + loose insert 写进规格；lede 讲 montage。",
      "credit": "原图 · Loose Joints · Frozen Features / Jason Fulford",
      "creditHref": "https://loosejoints.biz/products/frozen-features"
    }
  },
  {
    "id": "log-lj-in-the-beginning",
    "date": "2026-10-20",
    "title": "In the Beginning / Roe Ethridge",
    "figure": {
      "file": "log-lj-in-the-beginning.webp",
      "alt": "Roe Ethridge In the Beginning 三册套装",
      "width": 1200,
      "height": 788,
      "caption": "多卷书分行规格：三册 facsimile + rubber band。",
      "credit": "原图 · Loose Joints · In the Beginning / Roe Ethridge",
      "creditHref": "https://loosejoints.biz/products/in-the-beginning"
    }
  },
  {
    "id": "log-perimeter-retracer",
    "date": "2026-10-20",
    "title": "Retracer / Karl Halliday",
    "figure": {
      "file": "log-perimeter-retracer.webp",
      "alt": "Karl Halliday Retracer 书与内页",
      "width": 1000,
      "height": 750,
      "caption": "Swiss-bound；文案写 unbound 文本可移位。",
      "credit": "原图 · Perimeter Books · Retracer / Karl Halliday",
      "creditHref": "https://www.perimeterbooks.com/products/karl-halliday-retracer"
    }
  },
  {
    "id": "log-perimeter-byng",
    "date": "2026-10-20",
    "title": "Some Voices Carry / Arini Byng",
    "figure": {
      "file": "log-perimeter-byng.webp",
      "alt": "Arini Byng Some Voices Carry 书封面",
      "width": 1000,
      "height": 750,
      "caption": "OTA flaps + Special Edition 签名印尺寸写进文案。",
      "credit": "原图 · Perimeter Editions · Some Voices Carry / Arini Byng",
      "creditHref": "https://www.perimeterbooks.com/products/arini-byng-some-voices-carry"
    }
  },
  {
    "id": "log-pc-autumn-lottery-1",
    "date": "2026-10-20",
    "title": "秋彩票 · 其一",
    "figure": {
      "file": "log-pc-autumn-lottery-1.webp",
      "alt": "日本中世纪彩票秋色静物新帖图一",
      "width": 1199,
      "height": 654,
      "caption": "同系列换旁白：Autumn, through the medium of…",
      "credit": "Present & Correct / X @presentcorrect · autumn JP lottery",
      "creditHref": "https://x.com/i/status/2112255225419419970"
    }
  },
  {
    "id": "log-pc-autumn-lottery-2",
    "date": "2026-10-20",
    "title": "秋彩票 · 其二",
    "figure": {
      "file": "log-pc-autumn-lottery-2.webp",
      "alt": "日本中世纪彩票秋色静物新帖图二",
      "width": 1199,
      "height": 629,
      "caption": "同帖四连图之二。",
      "credit": "Present & Correct / X @presentcorrect · autumn JP lottery",
      "creditHref": "https://x.com/i/status/2112255225419419970"
    }
  },
  {
    "id": "log-spbh-glazzard",
    "date": "2026-10-19",
    "title": "Jesse Glazzard",
    "figure": {
      "file": "log-spbh-glazzard.webp",
      "alt": "Jesse Glazzard The Sound of Dirt and Beauty 书封面",
      "width": 1400,
      "height": 1339,
      "caption": "SPBH 挂 MACK：规格行完整；装帧动机写进判断文案。",
      "credit": "原图 · SPBH Editions / MACK · Jesse Glazzard",
      "creditHref": "https://mackbooks.co.uk/products/the-sound-of-dirt-and-beauty-jesse-glazzard"
    }
  },
  {
    "id": "log-spbh-chronograph",
    "date": "2026-10-19",
    "title": "Chronograph / Nick Haymes",
    "figure": {
      "file": "log-spbh-chronograph.webp",
      "alt": "Nick Haymes Chronograph 书封面",
      "width": 1400,
      "height": 1339,
      "caption": "同印记另一本：dustjacket 写进规格；评语墙当外部判断。",
      "credit": "原图 · SPBH Editions / MACK · Chronograph / Nick Haymes",
      "creditHref": "https://mackbooks.co.uk/products/chronograph-nick-haymes"
    }
  },
  {
    "id": "log-tbw-sheila",
    "date": "2026-10-19",
    "title": "Sheila / John Divola",
    "figure": {
      "file": "log-tbw-sheila.webp",
      "alt": "John Divola Sheila 书封面",
      "width": 1080,
      "height": 1260,
      "caption": "规格块：页数·plates·寸/毫米；私人与代表作同页。",
      "credit": "原图 · TBW Books · Sheila / John Divola",
      "creditHref": "https://tbwbooks.com/products/shelia"
    }
  },
  {
    "id": "log-tbw-california",
    "date": "2026-10-19",
    "title": "California Anonymous / Ken Light",
    "figure": {
      "file": "log-tbw-california.webp",
      "alt": "Ken Light California Anonymous 书封面",
      "width": 1080,
      "height": 1260,
      "caption": "tip-in 原背景布碎片写进规格；Edition of 748。",
      "credit": "原图 · TBW Books · California Anonymous / Ken Light",
      "creditHref": "https://tbwbooks.com/products/california-anonymous"
    }
  },
  {
    "id": "log-pc-jp-lottery-1",
    "date": "2026-10-19",
    "title": "JP lottery autumn",
    "figure": {
      "file": "log-pc-jp-lottery-1.webp",
      "alt": "日本中世纪彩票秋色静物",
      "width": 960,
      "height": 1200,
      "caption": "同系列换季节：文案只写 Mid century Japanese lottery · Autumn。",
      "credit": "Present & Correct / X @presentcorrect · JP lottery autumn",
      "creditHref": "https://x.com/i/status/2106380573006553466"
    }
  },
  {
    "id": "log-pc-office-1",
    "date": "2026-10-19",
    "title": "office wares",
    "figure": {
      "file": "log-pc-office-1.webp",
      "alt": "1960–1990 年代办公文具静物",
      "width": 1200,
      "height": 900,
      "caption": "年代并置：60s / 90s / 80s office wares，零形容词。",
      "credit": "Present & Correct / X @presentcorrect · office wares",
      "creditHref": "https://x.com/i/status/2105351726748373033"
    }
  },
  {
    "id": "log-bint-leiter",
    "date": "2026-10-19",
    "title": "Saul Leiter",
    "figure": {
      "file": "log-bint-leiter.webp",
      "alt": "Saul Leiter 摄影书封面帖",
      "width": 1200,
      "height": 812,
      "caption": "安静号模板：人名 – 书名 + 单封面。",
      "credit": "Bint photoBooks / X @Bintphotobooks · Saul Leiter",
      "creditHref": "https://x.com/i/status/1180119246640168960"
    }
  },
  {
    "id": "log-mack-faces-phases",
    "date": "2026-10-18",
    "title": "Faces and Phases / Zanele Muholi",
    "figure": {
      "file": "log-mack-faces-phases.webp",
      "alt": "Zanele Muholi Faces and Phases 书封面",
      "width": 1599,
      "height": 1529,
      "caption": "封面 credit 写完整：谁、地点、年、©。规格行在文末一行收束。",
      "credit": "原图 · MACK · Faces and Phases / Zanele Muholi",
      "creditHref": "https://mackbooks.co.uk/products/faces-and-phases-zanele-muholi"
    }
  },
  {
    "id": "log-mack-american-teen",
    "date": "2026-10-18",
    "title": "American Teen / Joseph Szabo",
    "figure": {
      "file": "log-mack-american-teen.webp",
      "alt": "Joseph Szabo American Teen 书封面",
      "width": 1599,
      "height": 1529,
      "caption": "同站规格模板：装帧·尺寸·页数·月份·ISBN；另有 With new texts by…。",
      "credit": "原图 · MACK · American Teen / Joseph Szabo",
      "creditHref": "https://mackbooks.co.uk/products/american-teen-joseph-szabo"
    }
  },
  {
    "id": "log-bz22-covers-1",
    "date": "2026-10-18",
    "title": "Buffalo Zine Issue 22 covers",
    "figure": {
      "file": "log-bz22-covers-1.webp",
      "alt": "Buffalo Zine 第 22 期多封面拼图",
      "width": 1600,
      "height": 1142,
      "caption": "多封面并置：看裁切和字让路，不看电商促销条。",
      "credit": "原图 · Buffalo Zine Issue 22 covers",
      "creditHref": "https://www.buffalozine.com/products/issue-22"
    }
  },
  {
    "id": "log-bz22-text-1a",
    "date": "2026-10-18",
    "title": "Buffalo Zine homepage text-as-image",
    "figure": {
      "file": "log-bz22-text-1a.webp",
      "alt": "Buffalo Zine 首页文字排成图物件",
      "width": 726,
      "height": 1024,
      "caption": "首页课：文字即视觉块，不是导航副标题。",
      "credit": "原图 · Buffalo Zine homepage text-as-image",
      "creditHref": "https://www.buffalozine.com/"
    }
  },
  {
    "id": "log-aperture-2026-shortlist",
    "date": "2026-10-18",
    "title": "Aperture 短名单（机构向增量）",
    "figure": {
      "file": "log-aperture-2026-shortlist.webp",
      "alt": "Aperture 2026 摄影书奖短名单封面组图",
      "width": 1024,
      "height": 682,
      "caption": "短名单页头图：书脊/封面并置，看序列不看奖杯。",
      "credit": "原图 · Aperture · 2026 PhotoBook Awards / photo Daniel Salemi",
      "creditHref": "https://aperture.org/editorial/announcing-the-2026-photobook-awards-shortlist/"
    }
  },
  {
    "id": "log-pc-lottery-27",
    "date": "2026-10-18",
    "title": "lottery 1955 #27",
    "figure": {
      "file": "log-pc-lottery-27.webp",
      "alt": "1955 年彩票收藏静物",
      "width": 1080,
      "height": 1350,
      "caption": "图注只写年代和物名，零形容词。",
      "credit": "Present & Correct / X @presentcorrect · lottery 1955 #27",
      "creditHref": "https://x.com/i/status/2102816209075093510"
    }
  },
  {
    "id": "log-pc-diaries-intl-1",
    "date": "2026-10-18",
    "title": "diaries",
    "figure": {
      "file": "log-pc-diaries-intl-1.webp",
      "alt": "多国手账本静物棚拍",
      "width": 1600,
      "height": 1200,
      "caption": "同功能物件成组：日本/法国/意大利/波兰 diary。",
      "credit": "Present & Correct / X @presentcorrect · diaries",
      "creditHref": "https://x.com/i/status/2100648388870001139"
    }
  },
  {
    "id": "log-pbs-steinmetz",
    "date": "2026-10-18",
    "title": "Mark Steinmetz",
    "figure": {
      "file": "log-pbs-steinmetz.webp",
      "alt": "Mark Steinmetz Rivers and Towns 摄影书页",
      "width": 1440,
      "height": 1009,
      "caption": "书店帖：书名 + 翻页组图，学序列和纸白。",
      "credit": "Photobookstore / X @photobookstore · Mark Steinmetz",
      "creditHref": "https://x.com/i/status/1821457712917401790"
    }
  },
  {
    "id": "log-tgw-34-cover",
    "date": "2026-10-17",
    "title": "The Gentlewoman n°34 cover",
    "figure": {
      "file": "log-tgw-34-cover.webp",
      "alt": "The Gentlewoman 第 34 期封面 splash",
      "width": 1155,
      "height": 1500,
      "caption": "n°34 封面：人像占满，刊名很小，首页 splash 就这一张。",
      "credit": "原图 · The Gentlewoman n°34 cover",
      "creditHref": "https://thegentlewoman.co.uk/"
    }
  },
  {
    "id": "log-tgw-autumn-durald",
    "date": "2026-10-17",
    "title": "Autumn Durald Arkapaw",
    "figure": {
      "file": "log-tgw-autumn-durald.webp",
      "alt": "Autumn Durald Arkapaw 横向肖像",
      "width": 1400,
      "height": 583,
      "caption": "Library 内页用图：宽画幅人像，图注写穿什么比写氛围感有用。",
      "credit": "原图 · The Gentlewoman Library · Autumn Durald Arkapaw",
      "creditHref": "https://thegentlewoman.co.uk/library/autumn-durald-arkapaw"
    }
  },
  {
    "id": "log-fm-38-lev-tanju",
    "date": "2026-10-17",
    "title": "n°38 Lev Tanju",
    "figure": {
      "file": "log-fm-38-lev-tanju.webp",
      "alt": "Fantastic Man 第 38 期 Lev Tanju 封面",
      "width": 1376,
      "height": 1701,
      "caption": "封面：一人占满，身份判断写在文案里，刊名让路。",
      "credit": "Fantastic Man / X @fantasticman · n°38 Lev Tanju",
      "creditHref": "https://x.com/i/status/1778447409288188408"
    }
  },
  {
    "id": "log-fm-37-armani",
    "date": "2026-10-17",
    "title": "n°37 Armani",
    "figure": {
      "file": "log-fm-37-armani.webp",
      "alt": "Fantastic Man 第 37 期 Giorgio Armani 封面",
      "width": 1376,
      "height": 1701,
      "caption": "Armani 封面：近景肖像，摄影 Alasdair McLellan。",
      "credit": "Fantastic Man / X @fantasticman · n°37 Armani",
      "creditHref": "https://x.com/i/status/1714949852222697562"
    }
  },
  {
    "id": "log-mack-cosmos-1",
    "date": "2026-10-17",
    "title": "Collier Schorr COSMOS",
    "figure": {
      "file": "log-mack-cosmos-1.webp",
      "alt": "Collier Schorr COSMOS 摄影书内页或封面",
      "width": 1385,
      "height": 1800,
      "caption": "COSMOS：书页竖构图，看裁切和留白，不看滤镜。",
      "credit": "MACK / X @MACK_books · Collier Schorr COSMOS",
      "creditHref": "https://x.com/MACK_books"
    }
  },
  {
    "id": "log-mack-color-black-1",
    "date": "2026-10-17",
    "title": "The Color Black",
    "figure": {
      "file": "log-mack-color-black-1.webp",
      "alt": "The Color Black 书相关静物/建筑图",
      "width": 1024,
      "height": 806,
      "caption": "The Color Black：物件与建筑并置，文案只点书名和摄影师。",
      "credit": "MACK / X @MACK_books · The Color Black",
      "creditHref": "https://x.com/MACK_books"
    }
  },
  {
    "id": "log-tgw-cathy-horyn",
    "date": "2026-10-17",
    "title": "X · @thegentlewoman / @fantasticman",
    "figure": {
      "file": "log-tgw-cathy-horyn.webp",
      "alt": "Cathy Horyn 在农场的肖像",
      "width": 1400,
      "height": 1118,
      "caption": "长访配图：环境人像，不是棚拍网红闪片。",
      "credit": "The Gentlewoman / X @thegentlewoman · Cathy Horyn",
      "creditHref": "https://x.com/i/status/1706667794564325559"
    }
  },
  {
    "id": "2026-10-17-X-其他",
    "date": "2026-10-17",
    "title": "X · 其他",
    "imageNote": "原图未取到。",
    "note": "@lensculture 近帖几乎全是奖赛征稿；偶有作品如 Kyosei Yoshiike Salvage，可当下家入口，不跟时间线。",
    "href": "https://x.com/i/status/1809322072876908639"
  },
  {
    "id": "log-mg-mirror-cover",
    "date": "2026-10-16",
    "title": "MacGuffin（新开）",
    "figure": {
      "file": "log-mg-mirror-cover.webp",
      "alt": "MacGuffin 第 16 期 The Mirror 封面：一人拿手机自拍，绿色手写 M 压在画面上",
      "width": 800,
      "height": 1037,
      "caption": "封面：手写大 M 压在自拍上，刊头字很小，主题 The Mirror 放在下面。",
      "credit": "原图 · MacGuffin N°16 The Mirror 封面",
      "creditHref": "https://www.macguffinmagazine.com/issues/macguffin-the-mirror"
    }
  },
  {
    "id": "2026-10-16-magCulture-Journal-新开",
    "date": "2026-10-16",
    "title": "magCulture Journal（新开）",
    "imageNote": "原图未取到。",
    "note": "伦敦杂志店 + Journal + Podcast。首页一句 We love magazines，是策展口吻，不是内容农场。",
    "href": "https://magculture.com/"
  },
  {
    "id": "log-pc-lottery-1952",
    "date": "2026-10-16",
    "title": "1952 lottery ticket #30",
    "figure": {
      "file": "log-pc-lottery-1952.webp",
      "alt": "一张日本短期宝くじ，票面为昭和28年第4回，娃娃与鲤鱼旗",
      "width": 1080,
      "height": 1350,
      "caption": "收藏帖里的第 30 张。票面印着昭和28年、第4回短期宝くじ，字和图在同一张纸上。",
      "credit": "Present & Correct / X @presentcorrect · 1952 lottery ticket #30",
      "creditHref": "https://x.com/presentcorrect"
    }
  },
  {
    "id": "log-pc-jp-lottery-26",
    "date": "2026-10-16",
    "title": "Autumn",
    "figure": {
      "file": "log-pc-jp-lottery-26.webp",
      "alt": "一张日本彩票，票面为昭和29年第26回东京都10日くじ，两个和服人物",
      "width": 1080,
      "height": 1350,
      "caption": "同一组日本彩票里的一张。昭和29年、第26回東京都10日くじ，看版式和配色就够。",
      "credit": "Present & Correct / X @presentcorrect · Mid-century Japanese lottery · Autumn",
      "creditHref": "https://x.com/presentcorrect"
    }
  },
  {
    "id": "log-pc-office-1016",
    "date": "2026-10-16",
    "title": "1960s–1990s office wares",
    "figure": {
      "file": "log-pc-office-1016.webp",
      "alt": "透明塑料盒里的红剪刀，黄底上压着绿、蓝两块",
      "width": 1400,
      "height": 1050,
      "caption": "办公器物静物之一：透明盒、黄底、红剪刀对齐，背景留白。",
      "credit": "Present & Correct / X @presentcorrect · 1960s–1990s office wares",
      "creditHref": "https://x.com/presentcorrect"
    }
  },
  {
    "id": "log-mg-lalanne-catbar",
    "date": "2026-10-16",
    "title": "Lalanne Cat Bar 1968",
    "figure": {
      "file": "log-mg-lalanne-catbar.webp",
      "alt": "黄铜猫形酒吧柜 Lalanne Cat Bar，柜身打开，里面摆着酒瓶",
      "width": 592,
      "height": 592,
      "caption": "Lalanne Cat Bar，1968。图注只需要物件名、作者、年份。",
      "credit": "MacGuffin research dump / X @MacGuffinMag · Lalanne Cat Bar 1968",
      "creditHref": "https://x.com/MacGuffinMag"
    }
  },
  {
    "id": "log-mg-sottsass-carlton",
    "date": "2026-10-16",
    "title": "Sottsass Carlton / Memphis 1981",
    "figure": {
      "file": "log-mg-sottsass-carlton.webp",
      "alt": "Ettore Sottsass 的 Carlton 书架，彩色几何块叠在水磨石底座上",
      "width": 900,
      "height": 986,
      "caption": "Sottsass Carlton，Memphis，1981。同一套研究日记写法。",
      "credit": "MacGuffin research dump / X @MacGuffinMag · Sottsass Carlton / Memphis 1981",
      "creditHref": "https://x.com/MacGuffinMag"
    }
  },
  {
    "id": "2026-10-16-X-aperturefnd",
    "date": "2026-10-16",
    "title": "X · @aperturefnd",
    "imageNote": "这条帖没有附图，短名单页打不开。",
    "note": "10-08：2026 Paris Photo–Aperture PhotoBook Awards，35 本短名单。",
    "href": "https://x.com/aperturefnd"
  },
  {
    "id": "2026-10-16-X-magculture",
    "date": "2026-10-16",
    "title": "X · @magculture",
    "imageNote": "原图未取到。",
    "note": "近帖偏店铺活动和转发，图片策展已经迁到网站和 Instagram。",
    "href": "https://x.com/magculture"
  },
  {
    "id": "2026-10-16-X-foam-amsterdam",
    "date": "2026-10-16",
    "title": "X · @foam_amsterdam",
    "imageNote": "原图未取到。",
    "note": "时间线停在 2022：Foam Talent 作品发布、Paul Kooiker 展览。",
    "href": "https://x.com/foam_amsterdam"
  },
  {
    "id": "2026-10-15-You-Iwata-深挖",
    "date": "2026-10-15",
    "title": "You Iwata（深挖）",
    "imageNote": "原图未取到（站内图受保护）。",
    "note": "首页先放站旨（「光は、翳りがあってこそ」这类），再按春夏秋冬 / 祭 / 旅 / 人像分章，每章一句短诗当题记。",
    "href": "https://youiwata.com/"
  },
  {
    "id": "2026-10-15-Kinfolk-再看首页",
    "date": "2026-10-15",
    "title": "Kinfolk（再看首页）",
    "imageNote": "原图未取到。",
    "note": "用一期主题收住整站：「THE PLAY ISSUE」，不是无限 feed。",
    "href": "https://www.kinfolk.com/"
  },
  {
    "id": "2026-10-15-HARU-IN-FRAME-深挖声明",
    "date": "2026-10-15",
    "title": "HARU IN FRAME（深挖声明）",
    "imageNote": "原图未取到。",
    "note": "STATEMENT 放在作品前面：在 AI 能画图的年代，为什么还拍有重量的实物。",
    "href": "https://haru.photo/"
  },
  {
    "id": "2026-10-15-Premium-再看栏目语气",
    "date": "2026-10-15",
    "title": "&Premium（再看栏目语气）",
    "imageNote": "原图未取到。",
    "note": "封面语很短：「住まいと心を、整える。」",
    "href": "https://andpremium.jp/"
  },
  {
    "id": "2026-10-15-BRUTUS-jp-新开",
    "date": "2026-10-15",
    "title": "BRUTUS.jp（新开）",
    "imageNote": "原图未取到。",
    "note": "号驱动：「No.1063『犬と、暮らせば。』」，用主题把一期收起来。",
    "href": "https://brutus.jp/"
  },
  {
    "id": "2026-10-15-Casa-BRUTUS-文章页",
    "date": "2026-10-15",
    "title": "Casa BRUTUS 文章页",
    "imageNote": "原图未取到。文章页链接没有留下。",
    "note": "标题就是图注判断：「帆を思わせる非対称の天板と長さが特徴的なテーブル。」"
  },
  {
    "id": "2026-10-15-X-POPEYE-Magazine",
    "date": "2026-10-15",
    "title": "X · @POPEYE_Magazine",
    "imageNote": "原图未取到（X 需登录，抓不到图）。",
    "note": "山崎蒸馏所 4 图跟拍；两国古着屋，写具体买了哪三件；高円寺两人挖宝散步。",
    "href": "https://x.com/POPEYE_Magazine"
  },
  {
    "id": "2026-10-15-X-CasaBRUTUS",
    "date": "2026-10-15",
    "title": "X · @CasaBRUTUS",
    "imageNote": "原图未取到（X 需登录，抓不到图）。",
    "note": "「帆を思わせる非対称の天板…」；竹艺展；#今日の名建築 温泉宿 2 图；天神书店。",
    "href": "https://x.com/CasaBRUTUS"
  },
  {
    "id": "2026-10-15-X-AestheticsJapan",
    "date": "2026-10-15",
    "title": "X · @AestheticsJapan",
    "imageNote": "原图未取到（X 需登录，抓不到图）。",
    "note": "六本木交叉口 / Tokyo Tower / Midnight Tokyo；每帖模板：📍地点 📸作者 🔗IG。",
    "href": "https://x.com/AestheticsJapan"
  },
  {
    "id": "2026-10-15-X-akinecoco987",
    "date": "2026-10-15",
    "title": "X · @akinecoco987",
    "imageNote": "原图未取到（X 需登录，抓不到图）。",
    "note": "「これが私の帰り道。」「夜へと変わる空を眺めていた。」+ 同一时刻的多张图。",
    "href": "https://x.com/akinecoco987"
  },
  {
    "id": "log-milk-hybrid",
    "date": "2026-10-15",
    "title": "MilK MAGAZINE JAPON（新开）",
    "figure": {
      "file": "log-milk-hybrid.webp",
      "alt": "MilK Japon 时装企划 HYBRID THEORY 的一页",
      "width": 849,
      "height": 1280,
      "caption": "时装页：图占满，栏目名和 credit 都收得很小。",
      "credit": "原图 · MilK Japon《HYBRID THEORY》",
      "creditHref": "https://milkjapon.com/fashion/hybrid-theory/"
    }
  },
  {
    "id": "log-fiu-1980",
    "date": "2026-10-15",
    "title": "Monuments Historiques · 1980",
    "figure": {
      "file": "log-fiu-1980.webp",
      "alt": "Monuments Historiques 杂志 1980 年第 107 期封面",
      "width": 1000,
      "height": 1254,
      "caption": "1980 · n°107：刊头小写压在上方，大图占满下半版。",
      "credit": "原图 · Monuments Historiques 封面 via Fonts In Use",
      "creditHref": "https://fontsinuse.com/uses/80713/monuments-historiques-covers-1980-1985"
    }
  },
  {
    "id": "log-fiu-1981",
    "date": "2026-10-15",
    "title": "Monuments Historiques · 1981",
    "figure": {
      "file": "log-fiu-1981.webp",
      "alt": "Monuments Historiques 杂志 1981 年第 116 期封面",
      "width": 1000,
      "height": 1225,
      "caption": "1981 · n°116：同一个刊头锚点，封面图换了也认得出是同一本。",
      "credit": "原图 · Monuments Historiques 封面 via Fonts In Use",
      "creditHref": "https://fontsinuse.com/uses/80713/monuments-historiques-covers-1980-1985"
    }
  },
  {
    "id": "2026-10-15-X-presentcorrect",
    "date": "2026-10-15",
    "title": "X · @presentcorrect",
    "imageNote": "原图未取到（X 需登录，抓不到图）。",
    "note": "1952 年彩票收藏第 30 张；中世纪日本彩票秋组图；60/80/90 年代办公室器物 4 图静物。",
    "href": "https://x.com/presentcorrect"
  },
  {
    "id": "2026-10-15-X-aperturefnd",
    "date": "2026-10-15",
    "title": "X · @aperturefnd",
    "imageNote": "原图未取到（X 需登录，抓不到图）。",
    "note": "2026 Paris Photo–Aperture PhotoBook Awards 35 本短名单。",
    "href": "https://x.com/aperturefnd"
  }
];

// 裏：美女积累。新的放最前面。
// 例行美女图、名单追更、以及任何一次找来的可用图，有原帖就填 figure.creditHref。
// 只收人像短说明，不把刊面、字课、静物写进来。
export const beautyLog: AccumCard[] = [
  {
    "id": "li-karin-tulip",
    "date": "2026-10-20",
    "title": "小渕花梨",
    "figure": {
      "file": "li-karin-tulip.webp",
      "alt": "小渕花梨，橙毛衣，抱着一把郁金香，背后是红砖墙",
      "width": 1280,
      "height": 1600,
      "caption": "橙毛衣，一把郁金香，红砖墙。颜色暖，人安静。",
      "credit": "喜欢名单 · 小渕花梨 · note 主页 · 点图进主页",
      "creditHref": "https://note.com/karin_obuchi"
    }
  },
  {
    "id": "li-hydrangea",
    "date": "2026-10-20",
    "title": "绣球",
    "figure": {
      "file": "li-hydrangea.webp",
      "alt": "绣球花叶子前，碎花深色短袖，齐刘海",
      "width": 1080,
      "height": 1350,
      "caption": "绣球叶子挡着半边，碎花深色短袖，齐刘海。花是配的，人是看的。",
      "credit": "喜欢名单 · strawbelly · 绣球花 · 点图进主页",
      "creditHref": "https://x.com/strawbelly"
    }
  },
  {
    "id": "li-friday-mizuki",
    "date": "2026-10-20",
    "title": "金曜美人 · 麻倉瑞季",
    "figure": {
      "file": "li-friday-mizuki.webp",
      "alt": "金曜美人，麻倉瑞季，浅蓝蕾丝，侧脸贴过来",
      "width": 1200,
      "height": 790,
      "caption": "麻倉瑞季，浅蓝蕾丝，脸贴过来。近，但不挤。",
      "credit": "喜欢名单 · 金曜美人 · 麻倉瑞季 · 点图进原页",
      "creditHref": "https://friday.gold/gravure/article/444633"
    }
  },
  {
    "id": "li-beautybeast-cos",
    "date": "2026-10-20",
    "title": "beautybeast",
    "figure": {
      "file": "li-beautybeast-cos.webp",
      "alt": "beautybeast cos，红裙子和珍珠项链，站在玫瑰拱门下",
      "width": 800,
      "height": 1200,
      "caption": "红裙子，珍珠，玫瑰拱门。cos 贝尔，甜和正式叠在一起。",
      "credit": "喜欢名单 · beautybeast cos · 点图去找原帖",
      "creditHref": "https://x.com/search?q=beautybeast%20cos&f=media"
    }
  },
  {
    "id": "li-kokoro-swim",
    "date": "2026-10-20",
    "title": "kokoro",
    "figure": {
      "file": "li-kokoro-swim.webp",
      "alt": "kokoro 粉色短发，在泳池边比耶，穿浅蓝色泳衣",
      "width": 1200,
      "height": 1600,
      "caption": "泳池边，粉色短发，比了个耶。颜色亮，人更亮。",
      "credit": "喜欢名单 · kokoro · 日常搜图 · 点图进主页",
      "creditHref": "https://x.com/kokoro777pp"
    }
  },
  {
    "id": "li-iori-stripe",
    "date": "2026-10-20",
    "title": "iori",
    "figure": {
      "file": "li-iori-stripe.webp",
      "alt": "iori 穿蓝条纹衬衫，站在老房子里，头顶一盏灯泡",
      "width": 900,
      "height": 1600,
      "caption": "蓝条纹衬衫，老房子，头顶一盏白灯泡。人站得稳。",
      "credit": "喜欢名单 · iori · 日常搜图 · 点图进主页",
      "creditHref": "https://x.com/iorimoe_five"
    }
  },
  {
    "id": "li-yua-plaid",
    "date": "2026-10-20",
    "title": "yua",
    "figure": {
      "file": "li-yua-plaid.webp",
      "alt": "yua 穿格子挂脖裙，在电梯镜子前自拍",
      "width": 1200,
      "height": 1600,
      "caption": "格子挂脖裙，马尾，电梯镜子里自拍。光是平的，人还是好看。",
      "credit": "喜欢名单 · yua · 日常搜图 · 点图进主页",
      "creditHref": "https://x.com/yua_mikami"
    }
  },
  {
    "id": "li-enako-yk",
    "date": "2026-10-20",
    "title": "えなこ",
    "figure": {
      "file": "li-enako-yk.webp",
      "alt": "えなこ，白兔耳，双手比心，ヤングキング封面",
      "width": 1062,
      "height": 1500,
      "caption": "兔耳，双手比心，笑得很开。甜，手势干净。",
      "credit": "喜欢名单 · enako · ヤングキング封面 · 点图进原帖",
      "creditHref": "https://x.com/enako_cos/status/2099342591829688659"
    }
  }
];
