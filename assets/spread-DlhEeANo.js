import{c as ll,d as cl,r as et,M as hl,e as dl,f as ul,g as fl,i as hs,h as pl,k as ml,l as gl,n as xr,j as k,o as yr,q as Tt,R as la,u as wr,b as _l,A as vl,G as xl}from"./Shell-B6KMtU_5.js";function ca(i){const e=ll(()=>cl(i)),{isStatic:t}=et.useContext(hl);if(t){const[,n]=et.useState(i);et.useEffect(()=>e.on("change",n),[])}return e}function Ml(i,e){const t=ca(e()),n=()=>t.set(e());return n(),dl(()=>{const r=()=>fl.preRender(n,!1,!0),a=i.map(s=>s.on("change",r));return n(),()=>{a.forEach(s=>s()),ul(n)}}),t}function Sl(i,...e){const t=i.length;function n(){let r="";for(let a=0;a<t;a++){r+=i[a];const s=e[a];s&&(r+=hs(s)?s.get():s)}return r}return Ml(e.filter(hs),n)}const yl={some:0,all:1};function wl(i,e,{root:t,margin:n,amount:r="some"}={}){const a=pl(i);e=ml(e);const s=new WeakMap,o=c=>{c.forEach(h=>{const u=s.get(h.target);if(h.isIntersecting!==!!u)if(h.isIntersecting){const f=e(h.target,h);typeof f=="function"?s.set(h.target,f):l.unobserve(h.target)}else typeof u=="function"&&(u(h),s.delete(h.target))})},l=new IntersectionObserver(o,{root:t,rootMargin:n,threshold:typeof r=="number"?r:yl[r]});return a.forEach(c=>l.observe(c)),gl(()=>l.disconnect())}function bl(i,{root:e,margin:t,amount:n,once:r=!1,initial:a=!1}={}){const[s,o]=et.useState(a),[l,c]=et.useState({});return et.useEffect(()=>{const h=l.current=i.current;if(!h||r&&s)return;const u=()=>(o(!0),r?void 0:()=>o(!1)),f={root:e&&e.current||void 0,margin:t,amount:n};return wl(h,u,f)},[e,i,t,r,n,l]),et.useEffect(()=>{i.current!==l.current&&(r||o(!1),c({}))}),s}function cm(){const[i,e]=et.useState("biao");function t(){e(r=>r==="biao"?"li":"biao");const n=window.matchMedia("(prefers-reduced-motion: reduce)").matches;window.scrollTo({top:0,behavior:n?"auto":"smooth"})}return{face:i,flip:t}}function hm(i){return i?{variants:{enter:{opacity:0},center:{opacity:1,rotateX:0,y:0},exit:{opacity:0}},transition:{duration:.01,ease:xr}}:{variants:{enter:{opacity:0,rotateX:14,y:48},center:{opacity:1,rotateX:0,y:0},exit:{opacity:0,rotateX:-10,y:-28}},transition:{duration:.7,ease:xr}}}function dm({items:i,className:e=""}){const[t,n]=et.useState(null);return k.jsx("div",{className:`toc ${e}`.trim(),children:i.map((r,a)=>k.jsxs("a",{href:r.link,className:"toc-link",onMouseEnter:()=>n(a),onMouseLeave:()=>n(null),children:[k.jsx(yr,{children:t===a&&k.jsx(Tt.span,{className:"toc-wash",layoutId:"hoverBackground",initial:{opacity:0},animate:{opacity:1,transition:{duration:.15}},exit:{opacity:0,transition:{duration:.15,delay:.2}},transition:{duration:.45,ease:xr}})}),k.jsxs(El,{children:[k.jsx(Tl,{children:r.title}),k.jsx(Al,{children:r.description})]})]},r.link))})}function El({children:i}){return k.jsx("div",{className:"toc-card",children:k.jsx("div",{className:"toc-card__inner",children:i})})}function Tl({children:i}){return k.jsx("h3",{className:"toc-title",children:i})}function Al({children:i}){return k.jsx("p",{className:"toc-desc",children:i})}function um({children:i,radius:e=280,color:t="rgba(255, 70, 48, 0.38)",className:n="",...r}){const a=ca(0),s=ca(0),[o,l]=et.useState(!1),c=Sl`radial-gradient(${e}px circle at ${a}px ${s}px, black 0%, transparent 72%)`;function h({currentTarget:u,clientX:f,clientY:m}){const{left:_,top:M}=u.getBoundingClientRect();a.set(f-_),s.set(m-M)}return k.jsxs("div",{...r,className:`card-spot ${n}`.trim(),onMouseMove:h,onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),children:[k.jsx("div",{className:"card-spot__body",children:i}),k.jsx(Tt.div,{className:"card-spot__light","aria-hidden":"true",style:{background:t,opacity:o?1:0,maskImage:c,WebkitMaskImage:c}})]})}function fm({children:i,className:e="",transition:t,variants:n,activeIndex:r,...a}){return k.jsx("div",{className:`turn ${e}`.trim(),children:k.jsx(yr,{initial:!1,mode:"popLayout",custom:a.custom,children:k.jsx(Tt.div,{variants:n,transition:t,initial:"enter",animate:"center",exit:"exit",...a,children:i[r]},r)})})}function Cl(i){const e=i.match(/bilibili\.com\/video\/(BV[\w]+)/i);if(e)return`https://player.bilibili.com/player.html?bvid=${e[1]}&page=1&autoplay=0&danmaku=0&high_quality=1`;const t=i.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);return t?`https://www.youtube-nocookie.com/embed/${t[1]}?rel=0`:null}function pm({kicker:i,title:e,items:t}){const n=t.flatMap(r=>{const a=Cl(r.href);return a?[{...r,src:a}]:[]});return n.length===0?null:k.jsxs("section",{className:"film","aria-label":e,children:[k.jsxs("div",{className:"film-head",children:[k.jsx("p",{className:"chapter-kicker",children:i}),k.jsx("h2",{className:"film-title",children:k.jsx("span",{className:"anim-swing",children:e})})]}),k.jsx("div",{className:"film-wall",children:n.map((r,a)=>k.jsxs("figure",{className:a===0?"film-frame is-lead":"film-frame",children:[k.jsx("iframe",{src:r.src,title:r.title,allow:"fullscreen; picture-in-picture; encrypted-media",allowFullScreen:!0,loading:a===0?"eager":"lazy"}),k.jsxs("figcaption",{children:[k.jsx("strong",{children:r.title}),k.jsxs("span",{children:[r.by," · 官方播放器"]})]})]},r.href))})]})}const mm=[{date:"2026-10-28",title:"每日学习 · 2026-10-28（例行 14:00）",summary:"例行「慢看每日品味学习」。昨天海外批 C + 中文批 2；今日换海外批 D + 中文批 1，并续性压抑 / 单人性张力，另入库里区·前夜美女追更。今日批次：海外批 D（网站画廊/排版）· 中文批 1（花瓣/站酷/美叶）· 性压抑 · 单人性张力 · 里区追更。关键词：「审美积累」/ aesthetic training / taste building / visual taste / design taste / editorial design / magazine layout。不重抄：10-27 Ren Hang / Albertine / Magnetic Presence / Quiet Gaze / Instinct Camille；10-24 批 D The Face#26 / TSJ Archives / Savee UI Editorial 画板 / Are.na Aesthetic。封面见本目录；无商业用途·侵权立删。未改整站版式、未对外推广。",sections:[{id:"overseas-2026-10-28",label:"海外",items:[{heading:"Fonts In Use · Mix Interiors 改版（深）",href:"https://fontsinuse.com/uses/78765/mix-interiors",points:["为何好看：英国商业室内刊全编辑改版——封面、字阶、网格重做却留签名栏目。相对 10-24 The Face #26 终刊定制字：今天挖持续在市的垂直刊如何换装不丢识别。"],steal:"改版＝重分字职；外链 FIU 条目 + cardshot/CDN。",links:[{label:"Fonts In Use",href:"https://fontsinuse.com/uses/78765/mix-interiors"}],figures:[{file:"log-fiu-mix-interiors.webp",alt:"Fonts In Use · Mix Interiors 改版刊面",width:1399,height:933,caption:"垂直刊换装——字职重分，不是换皮。",credit:"原图 · Fonts In Use · Mix Interiors · 无商业用途·侵权立删",creditHref:"https://fontsinuse.com/uses/78765/mix-interiors"}]},{heading:"PW Magazine · 青年实践编辑站（深 · Siteinspire 降级）",href:"https://archive.pw-magazine.com/",points:["为何好看：Vienna/Berlin/Zurich 青年艺术与表演实践的编辑列表姿态。Siteinspire 本轮 bot/429，改核活官方 archive + live。"],steal:"积累栏可学城市场景刊语气；外链官方。",links:[{label:"PW archive",href:"https://archive.pw-magazine.com/"},{label:"PW live",href:"https://www.pw-magazine.com/"}],figures:[{file:"log-pw-magazine.webp",alt:"PW Magazine 首页编辑列表姿态",width:1600,height:900,caption:"编辑列表站——不是灵感瀑布。",credit:"原图 · PW Magazine · 无商业用途·侵权立删",creditHref:"https://archive.pw-magazine.com/"}]},{heading:"It's Nice That · N-E redesign Odda（浅）",href:"https://www.itsnicethat.com/articles/n-e-studio-odda-magazine-publication-110121",points:["12 栏 + 三声部字（Baskerville / Akzidenz / OCR-B）；成刊改版访谈角。"],links:[{label:"It's Nice That",href:"https://www.itsnicethat.com/articles/n-e-studio-odda-magazine-publication-110121"}],figures:[{file:"log-int-odda.webp",alt:"It's Nice That · Odda magazine N-E 改版内页",width:1440,height:1080,caption:"三声部字 + 12 栏——成刊改版访谈。",credit:"原图 · It's Nice That · N-E Odda · 无商业用途·侵权立删",creditHref:"https://www.itsnicethat.com/articles/n-e-studio-odda-magazine-publication-110121"}]},{heading:"Awwwards · Ai in Design Report 2026 SOTD（浅）",href:"https://www.awwwards.com/sites/ai-in-design-report-2026",points:["只偷章节滚动与信息架构，不跟 AI 营销刷屏。"],links:[{label:"Awwwards",href:"https://www.awwwards.com/sites/ai-in-design-report-2026"}],figures:[{file:"log-awwwards-ai.webp",alt:"Awwwards SOTD · Ai in Design Report 2026",width:1600,height:1200,caption:"日站章节节奏——偷架构不偷话术。",credit:"原图 · Awwwards · Ai in Design Report 2026 · 无商业用途·侵权立删",creditHref:"https://www.awwwards.com/sites/ai-in-design-report-2026"}]},{heading:"Are.na · Magazine Layouts channel（浅）",href:"https://www.are.na/fraser-clark/magazine-layouts",points:["刊面剪贴 channel；相对 10-24 Aesthetic 策展文换角度。"],links:[{label:"Are.na",href:"https://www.are.na/fraser-clark/magazine-layouts"}],figures:[{file:"log-arena-mag-layouts.webp",alt:"Are.na Magazine Layouts channel OG",width:1200,height:630,caption:"刊面 channel——用名单承载 vibe。",credit:"原图 · Are.na · Magazine Layouts · 无商业用途·侵权立删",creditHref:"https://www.are.na/fraser-clark/magazine-layouts"}]},{heading:"Savee · 首页改版 OG（浅）",href:"https://savee.com/",points:["相对 10-24 UI Editorial 画板：今天记站本身首页字+三张 save 嵌字。"],links:[{label:"Savee",href:"https://savee.com/"}],figures:[{file:"log-savee-home.webp",alt:"Savee homepage redesign OG",width:1200,height:630,caption:"首页嵌字——站本身也是排版课。",credit:"原图 · Savee · homepage OG · 无商业用途·侵权立删",creditHref:"https://savee.com/"}]}]},{id:"zh-2026-10-28",label:"中文",items:[{heading:"花瓣 · 话题「杂志排版」（本周露脸 · 降级）",href:"https://huaban.com/topic-board/a-zazhipaiban",points:["中文灵感墙的刊面专题入口；本周批次必须露脸。本轮仅得 SPA 壳，未抓到可署名 pin——只留官方话题链。"],steal:"入口先挂上；有浏览器再补图。",links:[{label:"花瓣话题",href:"https://huaban.com/topic-board/a-zazhipaiban"}]},{heading:"站酷 · 周妙妍「中文海报这样排」",href:"https://www.zcool.com.cn/article/ZMTc5MjQ3Ng==.html",points:["为何好看：中文海报字阶、对齐与留白的可执行 tips；写给会排字的人。"],steal:"中文排版写成短 tips；外链文章页 + og。",links:[{label:"站酷",href:"https://www.zcool.com.cn/article/ZMTc5MjQ3Ng==.html"}],figures:[{file:"log-zcool-poster-tips.webp",alt:"站酷 · 周妙妍中文海报版式 Tips 封面",width:800,height:600,caption:"中文海报 tips——可执行，不是种草。",credit:"原图 · 站酷 · 周妙妍 · 无商业用途·侵权立删",creditHref:"https://www.zcool.com.cn/article/ZMTc5MjQ3Ng==.html"}]},{heading:"美叶 · 灵感集 pin（浅）",href:"https://meiye.art/inspiration",points:["公开 pin 示意灵感墙气质；不作广告种草。"],links:[{label:"美叶",href:"https://meiye.art/inspiration"}],figures:[{file:"log-meiye-pin.webp",alt:"美叶灵感集公开 pin",width:739,height:1600,caption:"灵感墙气质示意——只偷构成。",credit:"原图 · 美叶 · inspiration pin · 无商业用途·侵权立删",creditHref:"https://meiye.art/inspiration"}]}]},{id:"repression-2026-10-28",label:"性压抑",intro:"冷、正式、压得住；不写 gore / 直球色情。不重抄 Ren Hang / Albertine。",items:[{heading:"Edward Hopper · Office at Night（Walker）",href:"https://www.walkerart.org/collections/artwork/office-at-night/",points:["为何好看：夜办公室、窗、桌、未说破的距离——闷的、停住的欲望；礼教驯过的视线落在文件与台灯。"],steal:"压抑条写窗/桌/夜与未完成的目光；博物馆藏页外链。",links:[{label:"Walker",href:"https://www.walkerart.org/collections/artwork/office-at-night/"}],figures:[{file:"log-hopper-office-night.webp",alt:"Edward Hopper Office at Night · Walker Art Center",width:1400,height:931,caption:"窗、桌、夜——闷的欲望停在台灯边。",credit:"原图 · Walker Art Center · Hopper Office at Night · 无商业用途·侵权立删",creditHref:"https://www.walkerart.org/collections/artwork/office-at-night/"}]},{heading:"Francesca Woodman · Untitled（Whitney）",href:"https://whitney.org/collection/works/33724",points:["为何好看：半遮、自抹消、房间边角——羞耻与消失感；高级干净，不是 gore。"],steal:"半身入墙/模糊边界；机构藏品页。",links:[{label:"Whitney work",href:"https://whitney.org/collection/works/33724"},{label:"Whitney artist",href:"https://whitney.org/artists/4136"}],figures:[{file:"log-woodman-whitney.webp",alt:"Francesca Woodman Untitled · Whitney",width:1284,height:1600,caption:"半遮与消失——压得住的羞耻感。",credit:"原图 · Whitney · Francesca Woodman Untitled · 无商业用途·侵权立删",creditHref:"https://whitney.org/collection/works/33724"}]}]},{id:"tension-2026-10-28",label:"单人性张力",intro:"一人自带磁场；不是情侣戏。不重抄 Magnetic Presence / Quiet Gaze / Camille。",items:[{heading:"Visie · Quiet Power · KEYMAN Magazine Issue 3",href:"https://visie.io/project/various-editorials-quiet-power-for-keyman-magazine-issue-3-2025",points:["为何好看：建筑剪影、定向光、单色——一人撑满棚拍。Photographer Rambo Ding · Model Ying Ouyang。"],steal:"剪裁与肩线即权力；外链 Visie 项目页。",links:[{label:"Visie",href:"https://visie.io/project/various-editorials-quiet-power-for-keyman-magazine-issue-3-2025"}],figures:[{file:"log-visie-quiet-power.webp",alt:"Quiet Power editorial for KEYMAN Magazine Issue 3",width:800,height:450,caption:"Quiet Power——单人磁场，不是双人戏。",credit:"原图 · Visie · KEYMAN Quiet Power · 无商业用途·侵权立删",creditHref:"https://visie.io/project/various-editorials-quiet-power-for-keyman-magazine-issue-3-2025"}]},{heading:"Pascal Uehli · Audé in Monochrome Fashion",href:"https://pascaluehli.com/aude-in-monochrome-fashion/",points:["苏黎世棚拍单色肖像；光只服务一张脸与衣料，磁场自持。"],steal:"单色统一高级；官方作品页。",links:[{label:"Pascal Uehli",href:"https://pascaluehli.com/aude-in-monochrome-fashion/"}],figures:[{file:"log-pascal-aude-mono.webp",alt:"Pascal Uehli · Audé in Monochrome Fashion",width:1440,height:960,caption:"单色自持——一人填满画幅。",credit:"原图 · Pascal Uehli · Audé Monochrome · 无商业用途·侵权立删",creditHref:"https://pascaluehli.com/aude-in-monochrome-fashion/"}]}]},{id:"li-watch-2026-10-28",label:"里区·前夜美女追更",intro:"来源 watch-20261027；跳过校园违规与直球低俗。已入裏 beautyLog，见表侧不贴图。",items:[{heading:"えなこ · ギャバン舞台挨拶",href:"https://x.com/enako_cos/status/2115020589652189470",points:["舞台问候造型，手势干净、站得住。"]},{heading:"kokoro · Young Gangan うさぎ",href:"https://x.com/kokoro777pp/status/2114679117778141586",points:["刊面兔耳，甜但不挤。"]},{heading:"三上悠亜 · GR pool",href:"https://x.com/yua_mikami/status/2114676656745091283",points:["泳池边构图稳，光平人亮。"]},{heading:"あまつ様 · まえとうしろ front",href:"https://x.com/R_Ap8_/status/2115036271051743448",points:["前后对照刊式泳装前帧，姿态收得住。"]}]}]},{date:"2026-10-27",title:"每日学习 · 2026-10-27（例行 14:00）",summary:"例行「慢看每日品味学习」。昨天海外批 B + 中文批 3；今日换海外批 C + 中文批 2，并新增性压抑 / 单人性张力两小节。今日批次：海外批 C（YouTube / Vimeo）· 中文批 2（B站）· 性压抑 · 单人性张力。关键词：「审美积累」/ aesthetic training / taste building / visual taste / design taste / editorial design / magazine layout。不重抄：oXnHkmIrgDQ / PKfZ1gnVJ44 / S51Mw97OFjc / Vimeo 732690625 / Helvetica / BV1v3zeBnEnK / BV1wjqRBDEZq / BV1wV411d7rq / BV1Aepi6KErg。封面与参考图见本目录；无商业用途·侵权立删。未改整站版式、未对外推广。",sections:[{id:"overseas-2026-10-27",label:"海外",items:[{heading:"YouTube · Collect & Contrast「Editorial Design Process: Making a Coffee Table Book」",href:"https://www.youtube.com/watch?v=pM7g8qddXaY",points:["为何好看：咖啡桌书从网格到成书的过程角；看得见页对页节奏、出血、字阶、图文对话。相对 10-21 art direction 定义片——今天挖成书过程。"],steal:"过程比成品截图更能教「为什么落在这一格」；外链官方播放页，封面用 ytimg。",links:[{label:"YouTube",href:"https://www.youtube.com/watch?v=pM7g8qddXaY"},{label:"Collect & Contrast",href:"https://www.youtube.com/@Collect_Contrast"}],figures:[{file:"log-yt-coffee-table-book.webp",alt:"YouTube 封面：咖啡桌书编辑设计过程片",width:1280,height:720,caption:"成书过程角——页对页节奏比概念口播更可偷。",credit:"原图 · YouTube · Collect & Contrast · Coffee Table Book · 无商业用途·侵权立删",creditHref:"https://www.youtube.com/watch?v=pM7g8qddXaY"}]},{heading:"Vimeo · Albinson Design「The Title Design of Saul and Elaine Bass」",href:"https://vimeo.com/31992143",points:["为何好看：Saul & Elaine Bass 片头字视觉史；字把叙事压成符号与运动。Elaine 同署，别只记 Saul。"],steal:"字即情节——一帧定调；Vimeo 官方播放页 + oEmbed 核活。",links:[{label:"Vimeo",href:"https://vimeo.com/31992143"},{label:"Albinson Design",href:"https://vimeo.com/albinsondesign"}],figures:[{file:"log-vimeo-saul-elaine-bass.webp",alt:"Vimeo 缩略：Saul and Elaine Bass 片头字设计",width:1280,height:720,caption:"片头字一帧定调——字即情节，不是装饰贴纸。",credit:"原图 · Vimeo · Albinson · Saul & Elaine Bass · 无商业用途·侵权立删",creditHref:"https://vimeo.com/31992143"}]},{heading:"YouTube · Satori Graphics「Graphic Design Trends 2026」（浅）",href:"https://www.youtube.com/watch?v=yHs9-RVTwsA",points:["偏趋势清单/营销课销，只偷「趋势要落到用法」判断，不跟清单刷屏。"],links:[{label:"YouTube",href:"https://www.youtube.com/watch?v=yHs9-RVTwsA"}]}]},{id:"zh-2026-10-27",label:"中文",items:[{heading:"B站 · System 杂志「字比图多」",href:"https://www.bilibili.com/video/BV1oP411p7FE/",points:["为何好看：字压过图的业内向时尚刊；字阶与栏宽先于氛围图。相对 10-21 Ryo / Victionary——今天挖 System。"],steal:"字刊写给会看字的人；外链 bilibili.com/video/BV…，封面用 og 落盘。",links:[{label:"B站",href:"https://www.bilibili.com/video/BV1oP411p7FE/"}],figures:[{file:"log-bili-system-type.webp",alt:"B站封面：System 字比图多的时尚杂志",width:1600,height:1e3,caption:"字刊——字阶与栏宽先于氛围图。",credit:"原图 · B站 · System 字比图多 · 无商业用途·侵权立删",creditHref:"https://www.bilibili.com/video/BV1oP411p7FE/"}]},{heading:"B站 · W中文版",href:"https://www.bilibili.com/video/BV1CG66YtEpY/",points:["为何好看：大刊时装摄影 + 中文编辑气口；与 System「吃字」对照，W 更「吃片」。"],steal:"同批 B 站两端：System 吃字 / W 吃片；笔记只留版式判断，不跟标题党。",links:[{label:"B站",href:"https://www.bilibili.com/video/BV1CG66YtEpY/"}],figures:[{file:"log-bili-w-magazine.webp",alt:"B站封面：W中文版水准对照",width:1570,height:883,caption:"片刊一端——时装摄影与中文编辑气口。",credit:"原图 · B站 · W中文版 · 无商业用途·侵权立删",creditHref:"https://www.bilibili.com/video/BV1CG66YtEpY/"}]},{heading:"B站 · 【审美积累21】滨田英明（浅）",href:"https://www.bilibili.com/video/BV1i7421N7bR/",points:["摄影师个人视线课；系列粒度可对标慢看「同角换作者」。"],links:[{label:"B站",href:"https://www.bilibili.com/video/BV1i7421N7bR/"}],figures:[{file:"log-bili-hamada.webp",alt:"B站封面：审美积累滨田英明",width:1440,height:1080,caption:"审美积累系列浅记——个人视线课。",credit:"原图 · B站 · 审美积累21 滨田英明 · 无商业用途·侵权立删",creditHref:"https://www.bilibili.com/video/BV1i7421N7bR/"}]}]},{id:"repression-2026-10-27",label:"性压抑",items:[{heading:"Ren Hang · Blindspot / Fondazione Sozzani / ArtAsiaPacific「Human Love」",href:"https://blindspotgallery.com/artist/ren-hang/",points:["为何好看：画廊与展览文把作品放进机构语境；半遮、匿名化身体、审查后仍闷着的视线——不是裸露本身。品味门槛：冷、正式、统一高级色调；不搬血腥/生猛。"],steal:"压抑写半遮与审查语境，不写肉；外链画廊/展览/评论页。",links:[{label:"Blindspot",href:"https://blindspotgallery.com/artist/ren-hang/"},{label:"Sozzani press",href:"https://fondazionesozzani.org/press/2020/09/ren-hang/"},{label:"AAP Human Love",href:"https://www.artasiapacific.com/shows/ren-hang-s-human-love/"}],figures:[{file:"log-ren-hang-blindspot.webp",alt:"Ren Hang 较克制的形体抽象（Blindspot）",width:1420,height:959,caption:"半遮与匿名化身体——闷拧的视线，不是色情搬运。",credit:"原图 · Blindspot · Ren Hang · 无商业用途·侵权立删",creditHref:"https://blindspotgallery.com/artist/ren-hang/"}]},{heading:"ALBERTINE · Hannibal 摄影美术文（色调参考 · 不抄血腥）",href:"https://www.albertine.live/the-menagerie/hannibal",points:["为何好看：冷青绿/琥珀对照、正式构图、压得住的摄影美术——要的是统一高级色调与情绪，不是血腥意象。"],steal:"压抑条目写色板与镜头礼貌，不写肉；单人侧脸/静物局部也能撑住闷。",links:[{label:"ALBERTINE",href:"https://www.albertine.live/the-menagerie/hannibal"}],figures:[{file:"log-albertine-hannibal.webp",alt:"Hannibal 剧集色调与美术设计参考静帧",width:1500,height:841,caption:"冷青绿与琥珀对照——正式、压得住的色调，不是血腥。",credit:"原图 · ALBERTINE · Hannibal 色调参考 · 无商业用途·侵权立删",creditHref:"https://www.albertine.live/the-menagerie/hannibal"}]}]},{id:"tension-2026-10-27",label:"单人性张力",items:[{heading:"L'Officiel Baltic · MAGNETIC PRESENCE",href:"https://www.lofficielbaltic.com/en/editorials/magnetic-presence",points:["为何好看：刊名即论点——Magnetic Presence 是单人磁场，不是两人拉扯。结构肩、严妆、正面目光：规矩里发烫。"],steal:"一人填满画幅的权力感；禁止情侣戏入条。",links:[{label:"L'Officiel Baltic",href:"https://www.lofficielbaltic.com/en/editorials/magnetic-presence"}],figures:[{file:"log-lofficiel-magnetic.webp",alt:"L'Officiel Baltic MAGNETIC PRESENCE 编辑人像",width:1200,height:1500,caption:"单人磁场——结构肩与正面目光，规矩里发烫。",credit:"原图 · L'Officiel Baltic · MAGNETIC PRESENCE · 无商业用途·侵权立删",creditHref:"https://www.lofficielbaltic.com/en/editorials/magnetic-presence"}]},{heading:"Numéro Switzerland · Quiet Gaze",href:"https://numeromagazine.ch/quiet-gaze/",points:["为何好看：工作室肖像把张力放在回眸与自持；黑白、肩线、目光——压着却发烫。"],steal:"静默凝视即磁场；外链编辑页。",links:[{label:"Numéro CH",href:"https://numeromagazine.ch/quiet-gaze/"}],figures:[{file:"log-numero-quiet-gaze.webp",alt:"Numéro Switzerland Quiet Gaze 单人肖像",width:800,height:600,caption:"Quiet Gaze——回眸与自持，不是双人戏。",credit:"原图 · Numéro CH · Quiet Gaze · 无商业用途·侵权立删",creditHref:"https://numeromagazine.ch/quiet-gaze/"}]},{heading:"Instinct Paris · Camille Cottin Dior（浅）",href:"https://instinct.paris/dior-camille-cottin",points:["单人女星磁场、建筑肩与窥视式前景框。"],links:[{label:"Instinct",href:"https://instinct.paris/dior-camille-cottin"}],figures:[{file:"log-instinct-camille.webp",alt:"Instinct · Camille Cottin Dior 编辑页示意",width:1200,height:630,caption:"单人磁场浅记——建筑肩与前景框。",credit:"原图 · Instinct · Camille Cottin Dior · 无商业用途·侵权立删",creditHref:"https://instinct.paris/dior-camille-cottin"}]}]}]},{date:"2026-10-26",title:"每日学习 · 2026-10-26（例行 14:00）",summary:"例行「慢看每日品味学习」。昨天海外批 A + 中文批 1；今日换海外批 B + 中文批 3。今日批次：海外批 B（Pixiv / DeviantArt / Tumblr 插画向）· 中文批 3（优设 / SANKOU / MUUUUU）。关键词：「审美积累」/ aesthetic training / taste building / visual taste / design taste / editorial design / magazine layout / typography / 杂志排版 / 装帧 / タイトルデザイン。不重抄：VISIONS 2026 / てんぱる1(84497848) / 84433706 / Rock-and-Roar / Katy Dockrill / YOMA / 博报堂招聘 SOTD / mina / 杂志化风格。封面与参考图见本目录；无商业用途·侵权立删。未改整站版式、未对外推广。",sections:[{id:"overseas-2026-10-26",label:"海外",items:[{heading:"Pixiv · むなかたきえ「依頼絵、タイトルデザイン」",href:"https://www.pixiv.net/artworks/144091085",points:["为何好看：轻小说表紙委托把插画与标题字阶一次排成；相对てんぱる1「几乎只有字」——这是图+字一口气的商业竖幅。"],steal:"字跟着画面呼吸；积累栏写清委托对象；外链作品/作者页。",links:[{label:"Pixiv 作品",href:"https://www.pixiv.net/artworks/144091085"},{label:"むなかたきえ",href:"https://www.pixiv.net/users/3228312"}],figures:[{file:"log-pixiv-munakata-title.webp",alt:"轻小说表紙：插画与标题字阶一体的竖幅委托作例",width:845,height:1200,caption:"表紙一体——图与标题字阶一次排成，字跟着画面呼吸。",credit:"原图 · Pixiv · むなかたきえ · 依頼絵、タイトルデザイン · 无商业用途·侵权立删",creditHref:"https://www.pixiv.net/artworks/144091085"}]},{heading:"DeviantArt · SaneKyle「MH Rise for Switch Player Mag」",href:"https://www.deviantart.com/sanekyle/art/MH-Rise-for-Switch-Player-Mag-875825170",points:["为何好看：游戏实刊封面——刊名条、主视觉、导读位一起站住；插画先给字留着陆台。"],steal:"先留字位再画满；对照 Pixiv 文库表紙看刊种字阶差异。",links:[{label:"DeviantArt",href:"https://www.deviantart.com/sanekyle/art/MH-Rise-for-Switch-Player-Mag-875825170"},{label:"SaneKyle",href:"https://www.deviantart.com/sanekyle"}],figures:[{file:"log-da-mh-rise-switchplayer.webp",alt:"Switch Player 杂志封面：刊名条与怪物猎人主视觉",width:752,height:1063,caption:"实刊封面先留字位——刊名条、主视觉、导读一起站住。",credit:"原图 · DeviantArt · SaneKyle · MH Rise for Switch Player Mag · 无商业用途·侵权立删",creditHref:"https://www.deviantart.com/sanekyle/art/MH-Rise-for-Switch-Player-Mag-875825170"}]},{heading:"Pixiv · nao_zhizi「やさしい第一印象」（浅）",href:"https://www.pixiv.net/artworks/138700351",points:["封面第一眼字要安心；带素材味，只偷判断不跟素材号。"],links:[{label:"Pixiv",href:"https://www.pixiv.net/artworks/138700351"}],figures:[{file:"log-pixiv-nao-yasashii.webp",alt:"やさしい第一印象：偏软的封面字阶示意",width:1200,height:1200,caption:"第一印象要安心——封面字阶先给人软着陆。",credit:"原图 · Pixiv · nao_zhizi · やさしい第一印象 · 无商业用途·侵权立删",creditHref:"https://www.pixiv.net/artworks/138700351"}]},{heading:"Tumblr · Sari Cohen editorial（浅）",href:"https://www.tumblr.com/sari-cohen",points:["真人编辑插画博（Wired / Ebony / CK / Mosaic）；宽搜降级时的真实 Tumblr。"],links:[{label:"Tumblr · sari-cohen",href:"https://www.tumblr.com/sari-cohen"},{label:"tagged editorial illustration",href:"https://www.tumblr.com/sari-cohen/tagged/editorial%20illustration"}],figures:[{file:"log-tumblr-sari-wired.webp",alt:"Sari Cohen 为 Wired 一类编辑向的插画截帧",width:1280,height:1199,caption:"编辑插画服务文章语气，不是壁纸墙。",credit:"原图 · Tumblr · Sari Cohen · editorial illustration · 无商业用途·侵权立删",creditHref:"https://www.tumblr.com/sari-cohen"}]}]},{id:"zh-2026-10-26",label:"中文",items:[{heading:"MUUUUU · SB OAI Japan SOTD OCT 25, 2026",href:"https://muuuuu.org/industry/technology/25142.html",points:["为何好看：OCT 25 新 SOTD（相对 OCT 22 博报堂招聘）；AI/科技企业站字阶冷静、分区清楚。制作 IN FOCUS。"],steal:"SOTD 当周更一例；双挂 MUUUUU 条目 + 对象站。",links:[{label:"MUUUUU 详情",href:"https://muuuuu.org/industry/technology/25142.html"},{label:"SB OAI Japan",href:"https://www.sb-oai.co.jp/"}],figures:[{file:"log-muuuuu-sb-oai-sotd.webp",alt:"MUUUUU Site of the Day：SB OAI Japan 站截图",width:1600,height:1200,caption:"新于上周的 SOTD——企业站字阶冷静、分区清楚。",credit:"原图 · MUUUUU · SB OAI Japan SOTD OCT 25 · 无商业用途·侵权立删",creditHref:"https://muuuuu.org/industry/technology/25142.html"}]},{heading:"优设 · layout-design-23「三率一版」",href:"https://www.uisdc.com/layout-design-23",points:["为何好看：版面率 / 图版率 / 跳跃率，把「高级 / 热闹 / 活泼」变成可调尺；不重抄 mina 拆刊与杂志化七特征。"],steal:"图注写清是哪一率在起作用。",links:[{label:"优设文",href:"https://www.uisdc.com/layout-design-23"}],figures:[{file:"log-uisdc-layout-design.webp",alt:"优设三率一版文章封面示意",width:880,height:560,caption:"三率当判断句——高级、热闹、活泼各自对应哪一率。",credit:"原图 · 优设 · layout-design-23 三率一版 · 无商业用途·侵权立删",creditHref:"https://www.uisdc.com/layout-design-23"}]},{heading:"SANKOU · 味覚編集（浅）",href:"https://sankoudesign.com/web/mikakuhenshu/",points:["味觉=编辑；对象站 mikakuhenshu.com。不重抄 YOMA。"],links:[{label:"SANKOU",href:"https://sankoudesign.com/web/mikakuhenshu/"},{label:"味覚編集",href:"https://mikakuhenshu.com/"}],figures:[{file:"log-sankou-mikaku.webp",alt:"SANKOU 收录的味覚編集站缩略",width:1e3,height:874,caption:"味觉当编辑立场——站名本身就是判断句。",credit:"原图 · SANKOU · 味覚編集 · 无商业用途·侵权立删",creditHref:"https://sankoudesign.com/web/mikakuhenshu/"}]},{heading:"SANKOU · ヒラギノフォント（浅）",href:"https://sankoudesign.com/web/hiragino/",points:["字厂商特设站；字本身是产品主视觉。"],links:[{label:"SANKOU",href:"https://sankoudesign.com/web/hiragino/"},{label:"ヒラギノ",href:"https://hiragino.screen.co.jp/"}],figures:[{file:"log-sankou-hiragino.webp",alt:"SANKOU 收录的ヒラギノフォント特设站缩略",width:1e3,height:874,caption:"字厂商特设——字就是主视觉，少装饰。",credit:"原图 · SANKOU · ヒラギノフォント · 无商业用途·侵权立删",creditHref:"https://sankoudesign.com/web/hiragino/"}]}]}]},{date:"2026-10-25",title:"每日学习 · 2026-10-25（例行 14:00）",summary:"例行「慢看每日品味学习」。昨天海外批 D + 中文批 2；今日换海外批 A + 中文批 1。今日批次：海外批 A（X / ArtStation / Behance / Cara）· 中文批 1（花瓣 / 站酷精选 / 美叶 / 小红书设计·排版向）。关键词：「审美积累」/ aesthetic training / taste building / visual taste / design taste / editorial design / magazine layout。不重抄：DuoLife / Design ZNU / Ariel Medel / MIX Interiors / @presentcorrect 秋彩票 / 美叶首页定位 / BranD 79 / 花瓣话题入口句。封面与参考图见本目录；无商业用途·侵权立删。未改站代码、未 push、未对外推广。",sections:[{id:"overseas-2026-10-25",label:"海外",items:[{heading:"ArtStation · Alvari Juhola — Selkosanomat / Lätta bladet",href:"https://alvarijuhola.artstation.com/projects/x3mR3O",points:["为何好看：芬兰易读新闻刊实刊 layout（issues 5–7）：客户模板 + 严格易读规范（字/色/图如何尽量易达）。插画服务信息结构（体育跨页、自定义地图、渔具小图），不是氛围贴图。相对 DuoLife 品牌刊系统——这是「约束里做版」。"],steal:"表侧先定可读性底线再谈氛围；外链作品页写清作者/刊名/约束句。",links:[{label:"ArtStation",href:"https://alvarijuhola.artstation.com/projects/x3mR3O"}],figures:[{file:"log-artstation-selkosanomat.webp",alt:"Selkosanomat 5/2024 体育跨页，泳池与球场插画配易读正文",width:1400,height:1004,caption:"约束里做版——字、色、图先过易读底线，插画服务体育跨页的信息。",credit:"原图 · ArtStation · Alvari Juhola · Selkosanomat / Lätta bladet · 无商业用途·侵权立删",creditHref:"https://alvarijuhola.artstation.com/projects/x3mR3O"}]},{heading:"Cara · Serra Ataman — KAFKAOKUR「Alphabet of Sacred Flavours」",href:"https://cara.app/post/486d1762-74ea-411b-95a6-cf599513813e",points:["为何好看：真人编辑食物插画连载——每期两种蔬果并置，服务文章而非壁纸；同系列换物类、不换整套视觉语言。"],steal:"连载粒度对标每日积累；Cara 作真人绘画平台外链。",links:[{label:"Cabbage & Sunchoke",href:"https://cara.app/post/486d1762-74ea-411b-95a6-cf599513813e"},{label:"Garlic & Strawberry",href:"https://cara.app/post/34f4f8fe-9c79-4024-8e53-8708f061bb1c"},{label:"Serra Ataman",href:"https://cara.app/serraataman"}],figures:[{file:"log-cara-serra-cabbage.webp",alt:"KAFKAOKUR：卷心菜与菊芋插画",width:750,height:392,caption:"连载一帧：卷心菜与菊芋并置，服务文章，不换整套视觉语言。",credit:"原图 · Cara · Serra Ataman · Cabbage & Sunchoke · KAFKAOKUR · 无商业用途·侵权立删",creditHref:"https://cara.app/post/486d1762-74ea-411b-95a6-cf599513813e"},{file:"log-cara-serra-garlic.webp",alt:"KAFKAOKUR：蒜与草莓插画",width:750,height:183,caption:"同一连载换物类：蒜与草莓。粒度对标每日积累。",credit:"原图 · Cara · Serra Ataman · Garlic & Strawberry · KAFKAOKUR · 无商业用途·侵权立删",creditHref:"https://cara.app/post/34f4f8fe-9c79-4024-8e53-8708f061bb1c"}]}]},{id:"overseas-notes-2026-10-25",label:"海外浅记",items:[{heading:"Behance · Typezine Longinotti",href:"https://www.behance.net/gallery/243108419/Typezine-Editorial-Tipografia-Longinotti",points:["两字一墨斜网格。"],links:[{label:"Behance",href:"https://www.behance.net/gallery/243108419/Typezine-Editorial-Tipografia-Longinotti"}],figures:[{file:"log-behance-typezine.webp",alt:"Typezine Longinotti 跨页，薄荷绿底上的斜向大字",width:1400,height:1043,caption:"两字一墨斜网格。大字跨页本身就是版面结构。",credit:"原图 · Behance · Typezine Editorial · Tipografía Longinotti · 无商业用途·侵权立删",creditHref:"https://www.behance.net/gallery/243108419/Typezine-Editorial-Tipografia-Longinotti"}]},{heading:"Behance · Bant Mag Redesign",href:"https://www.behance.net/gallery/248358129/Bant-Mag-Redesign-Editorial-Design-Project",points:["胶带手做刊名。"],links:[{label:"Behance",href:"https://www.behance.net/gallery/248358129/Bant-Mag-Redesign-Editorial-Design-Project"}],figures:[{file:"log-behance-bant.webp",alt:"Bant Mag 改版封面，胶带拼出刊名",width:1200,height:675,caption:"胶带手做刊名。字是做出来的物件，不是贴上去的标题。",credit:"原图 · Behance · Bant Mag. Redesign · 无商业用途·侵权立删",creditHref:"https://www.behance.net/gallery/248358129/Bant-Mag-Redesign-Editorial-Design-Project"}]},{heading:"X · @oliver_gareis · 字阶 / 网格 / 节奏",href:"https://x.com/oliver_gareis/status/2107146296842719562",points:["字阶、网格、节奏。两张都是比例实验，不是氛围海报。"],links:[{label:"X · scale / grid / rhythm",href:"https://x.com/oliver_gareis/status/2107146296842719562"}],figures:[{file:"log-x-oliver-scale-1.webp",alt:"字阶与网格练习，棕底上的大写字母和红线网格",width:1008,height:1200,caption:"字阶叠在网格上。比例本身是内容。",credit:"原图 · X · @oliver_gareis · scale / grid / rhythm · 无商业用途·侵权立删",creditHref:"https://x.com/oliver_gareis/status/2107146296842719562"},{file:"log-x-oliver-scale-2.webp",alt:"字阶与网格练习，大字 AN ONGOING STUDY OF TYPE 与小注",width:1008,height:1200,caption:"网格是出发点。大字和小注的疏密，拿走的和留下的一样要紧。",credit:"原图 · X · @oliver_gareis · scale / grid / rhythm · 无商业用途·侵权立删",creditHref:"https://x.com/oliver_gareis/status/2107146296842719562"}]},{heading:"X · @oliver_gareis · racing editorial",href:"https://x.com/oliver_gareis/status/2112219724855836691",points:["赛车题材的编辑刊面：一张照片叠字，一张纯字版。"],links:[{label:"X · racing editorial",href:"https://x.com/oliver_gareis/status/2112219724855836691"}],figures:[{file:"log-x-oliver-racing-1.webp",alt:"赛车编辑跨页，头盔照片上叠 GT-R 与数字",width:1200,height:764,caption:"赛车编辑刊面：照片上叠字阶，数字当主角。",credit:"原图 · X · @oliver_gareis · racing editorial layouts · 无商业用途·侵权立删",creditHref:"https://x.com/oliver_gareis/status/2112219724855836691"},{file:"log-x-oliver-racing-2.webp",alt:"赛车编辑纯字版，SPEED IS NOT ENOUGH 大字加双栏小注",width:1200,height:764,caption:"大字口号压过小注双栏。节奏靠字重，不靠装饰。",credit:"原图 · X · @oliver_gareis · racing editorial layouts · 无商业用途·侵权立删",creditHref:"https://x.com/oliver_gareis/status/2112219724855836691"}]},{heading:"ArtStation · SIEGE Issue 05",href:"https://echolima.artstation.com/projects/nEy4mO",points:["作品集当刊。"],links:[{label:"ArtStation",href:"https://echolima.artstation.com/projects/nEy4mO"}],figures:[{file:"log-artstation-siege05.webp",alt:"SIEGE Issue 05 封面，刊名与期号做成杂志封面",width:1400,height:1811,caption:"作品集当刊。刊名、期号、导语在同一套封面上。",credit:"原图 · ArtStation · Echo Lima / Eliott Lilly · SIEGE Issue 05 · 无商业用途·侵权立删",creditHref:"https://echolima.artstation.com/projects/nEy4mO"}]}]},{id:"zh-2026-10-25",label:"中文",items:[{heading:"美叶 · Mat Voyce 榜样页",href:"https://www.meiye.art/MasterDesigner/204/1/2307",points:["为何好看：相对首页 pin——今天跟读单人脾气（插画+字+循环短动画）。美叶真正用法是长期榜样名单，不是刷瀑布。"],steal:"积累栏「本周跟读作者」卡片；字当角色、循环当呼吸。",links:[{label:"美叶 · Mat Voyce",href:"https://www.meiye.art/MasterDesigner/204/1/2307"},{label:"matvoyce.tv",href:"https://matvoyce.tv/"}],figures:[{file:"log-meiye-matvoyce-avatar.webp",alt:"美叶 Mat Voyce 榜样头图",width:230,height:230,caption:"跟读单人榜样。美叶的用法是长期名单，不是刷瀑布。",credit:"原图 · 美叶 · Mat Voyce · 榜样头图 · 无商业用途·侵权立删",creditHref:"https://www.meiye.art/MasterDesigner/204/1/2307"},{file:"log-meiye-matvoyce-work1.webp",alt:"Mat Voyce 作品 SUNNY DAY，字与太阳角色叠在一起",width:1071,height:1071,caption:"字当角色。SUNNY DAY 的字和插画是同一个脾气。",credit:"原图 · 美叶 · Mat Voyce · 榜样作品 · 无商业用途·侵权立删",creditHref:"https://www.meiye.art/MasterDesigner/204/1/2307"},{file:"log-meiye-matvoyce-work2.webp",alt:"Mat Voyce 作品 SWEET!，层叠字",width:1071,height:1071,caption:"SWEET! 层叠字。循环感像呼吸。",credit:"原图 · 美叶 · Mat Voyce · 榜样作品 · 无商业用途·侵权立删",creditHref:"https://www.meiye.art/MasterDesigner/204/1/2307"},{file:"log-meiye-matvoyce-work3.webp",alt:"Mat Voyce 作品 BUSY，错位字层",width:1e3,height:1e3,caption:"BUSY 字层错位。跟的是这个人的字。",credit:"原图 · 美叶 · Mat Voyce · 榜样作品 · 无商业用途·侵权立删",creditHref:"https://www.meiye.art/MasterDesigner/204/1/2307"},{file:"log-matvoyce-og.webp",alt:"Mat Voyce 官网 OGP，斜条底上的字标",width:1800,height:945,caption:"官网字标。斜条底和作品页是同一套脾气。",credit:"原图 · Mat Voyce · 官网 OGP · 无商业用途·侵权立删",creditHref:"https://matvoyce.tv/"}]},{heading:"数英 · 小红书《about关于》MOOK 呼吸感排版",href:"https://www.digitaling.com/articles/1261294.html",points:["为何好看：平台杂志书用疏密分层举例（展开插图 vs 注释小版）；每期加新板块彩蛋。小红书本体笔记本轮抓不到，以降级数英公开拆解作入口。"],steal:"图注写清「哪块展开、哪块注释」；别空喊呼吸感。",links:[{label:"数英",href:"https://www.digitaling.com/articles/1261294.html"}],imageNote:"原图未取到。数英 CDN 403，封面与文内图未落。"}]},{id:"zh-notes-2026-10-25",label:"中文浅记",items:[{heading:"花瓣 · 单画板",href:"https://huaban.com/boards/25263522",points:["单画板，深于话题入口。不重抄花瓣话题入口句。"],links:[{label:"花瓣",href:"https://huaban.com/boards/25263522"}],imageNote:"原图未取到。画板 405，未落图。"},{heading:"站酷 · 合集",href:"https://www.zcool.com.cn/collection/ZMzM5Mjg1MjQ=",points:["合集页。不重抄 BranD 79。"],links:[{label:"站酷",href:"https://www.zcool.com.cn/collection/ZMzM5Mjg1MjQ="}],imageNote:"原图未取到。合集缩略 CDN 403，未落图。"},{heading:"美叶 · 首页流图示意",href:"https://meiye.art/",points:["首页流图示意（浅）。不重抄美叶首页定位。"],links:[{label:"美叶",href:"https://meiye.art/"}],figures:[{file:"log-meiye-home-pin1.webp",alt:"美叶首页流图示意",width:800,height:1732,caption:"首页流里的一帧。浅记，不重抄首页定位。",credit:"原图 · 美叶 · 首页流图示意 · 无商业用途·侵权立删",creditHref:"https://meiye.art/"}]}]},{id:"steal-2026-10-25",label:"今日可偷（短）",items:[{heading:"短清单",points:["易读约束 > 氛围堆（Selkosanomat）。","连载粒度（Cara / KAFKAOKUR）。","两字一墨斜网格（Typezine）。","美叶跟读单人榜样。","呼吸感要可核（about MOOK 疏密分层）。"]}]},{id:"notice-2026-10-25",label:"声明",items:[{heading:"声明",points:["本 log 仅供教育与个人品味训练；勿整站抄袭视觉系统。引用务必署名并尊重版权；封面图仅个人品味训练·无商业用途·侵权立删。外链均为作品页/作者页/条目页/公开文，不热链原始视频文件。"]}]}]},{date:"2026-10-24",title:"每日学习 · 2026-10-24（例行 14:00）",summary:"例行「慢看每日品味学习」。昨天海外批 B + 中文批 3；今日换海外批 D + 中文批 2。今日批次：海外批 D（网站画廊/排版：Siteinspire、Are.na、Savee、Fonts In Use、It's Nice That、Awwwards、出版社/杂志站）· 中文批 2（B 站）。关键词：「审美积累」/ aesthetic training / taste building / visual taste / design taste。本周已轮 X / ArtStation / 花瓣 / Pixiv，今日不强开。不重抄近几日 MACK / Loose Joints / Fonts In Use Monuments historiques / Are.na Areal / B站 Ryo·Victionary。封面与参考图见本目录；无商业用途·侵权立删。未改站代码、未 push、未对外推广。",sections:[{id:"overseas-2026-10-24",label:"海外",items:[{heading:"Fonts In Use · The Face magazine, issue 26（终刊定制字系统）",href:"https://fontsinuse.com/uses/78225/the-face-magazine-issue-26",points:["为何好看：The Face 2026 春最终印本委托两套定制字——KMR Face Grotesk Stencil（档案期 Akzidenz Stencil 研究 → display/text 缝宽分档）+ OO Face Serif（参数化对比/字重，类等宽字形做节奏）。终刊仍为字系统买单；字对 = 无衬线刊头锚 + 衬线叙事层。","图：fiu-the-face-card.jpg、fiu-the-face-01.jpeg、fiu-the-face-02.jpeg、fiu-the-face-03.jpeg、fiu-the-face-stencil.jpeg（staging；无商业用途·侵权立删）。"],steal:"改版先定 display/text 职责；外链 FIU 条目拿齐字名与工作室 credit。",links:[{label:"Fonts In Use",href:"https://fontsinuse.com/uses/78225/the-face-magazine-issue-26"}],imageNote:"原图未取到。封面在 staging，本轮不入库。无商业用途·侵权立删。"},{heading:"Siteinspire → The Surfer's Journal Archives（杂志档案站网格）",href:"https://archives.surfersjournal.com/",points:["为何好看：按年卷把封面排成可翻档案墙（1992 Vol.1 → 2026 Vol.35）；刊自述 minimalist cover / flat binding / more book than magazine。用期号网格替代无限瀑布。","图：tsj-archives-og.png（单期封面 CDN 本轮 403 未落；无商业用途·侵权立删）。"],steal:"积累栏做成「期号/批次网格」；外链双挂 Siteinspire 策展条目 + 官方 Archives。",links:[{label:"Siteinspire",href:"https://www.siteinspire.com/website/13639-the-surfers-journal-archives"},{label:"对象站 Archives",href:"https://archives.surfersjournal.com/"},{label:"刊 About",href:"https://www.surfersjournal.com/about/"}],imageNote:"原图未取到。tsj-archives-og.png 在 staging；单期封面 CDN 本轮 403 未落。无商业用途·侵权立删。"}]},{id:"overseas-notes-2026-10-24",label:"海外浅记",items:[{heading:"Awwwards · Hearst Exhibit 2026",href:"https://www.awwwards.com/sites/hearst-exhibit-2026",points:["展场当刊；Magazine/Typography 标签。对象站 https://www.hollywoodexhibit2026.com/","图：awwwards-hearst.jpg（staging；无商业用途·侵权立删）。"],links:[{label:"Awwwards",href:"https://www.awwwards.com/sites/hearst-exhibit-2026"},{label:"对象站",href:"https://www.hollywoodexhibit2026.com/"}],imageNote:"原图未取到。awwwards-hearst.jpg 在 staging，本轮不入库。"},{heading:"It's Nice That · 2026 graphic trends",href:"https://www.itsnicethat.com/features/forward-thinking-graphic-trends-2026-graphic-design-120126",points:["Micrographics 作页家具。","图：int-trends-2026.png（staging；无商业用途·侵权立删）。"],links:[{label:"It's Nice That",href:"https://www.itsnicethat.com/features/forward-thinking-graphic-trends-2026-graphic-design-120126"}],imageNote:"原图未取到。int-trends-2026.png 在 staging，本轮不入库。"},{heading:"Savee · UI Editorial / Magazine",href:"https://savee.com/martijnvanmeijel/boards/0-ui-editorial-magazine/",points:["画廊入口。","图：savee-editorial-board-og.jpg（staging；无商业用途·侵权立删）。"],links:[{label:"Savee",href:"https://savee.com/martijnvanmeijel/boards/0-ui-editorial-magazine/"}],imageNote:"原图未取到。savee-editorial-board-og.jpg 在 staging，本轮不入库。"},{heading:"Are.na Editorial · The Aesthetic",href:"https://www.are.na/editorial/aesthetic",points:["channel 名单策展（非 Areal 字文）。","图：arena-aesthetic-og.jpeg（staging；无商业用途·侵权立删）。"],links:[{label:"Are.na Editorial",href:"https://www.are.na/editorial/aesthetic"}],imageNote:"原图未取到。arena-aesthetic-og.jpeg 在 staging，本轮不入库。"}]},{id:"zh-2026-10-24",label:"中文",items:[{heading:"B站 · 【宛堇】一起看杂志｜apartamento / TANK / In Paris / Magazine B",href:"https://www.bilibili.com/video/BV1654y1J7Zk/",points:["为何好看：独立杂志实物沉浸翻页——跨页疏密、图注位置、封面→内页第一拍；与慢看种子刊同族。","图：bili-BV1654y1J7Zk-cover.jpg（无商业用途·侵权立删）。"],steal:"条目写「翻到第几拍停」；人物时尚图归裏，表侧写版式与物性。",links:[{label:"B站",href:"https://www.bilibili.com/video/BV1654y1J7Zk/"}],imageNote:"原图未取到。bili-BV1654y1J7Zk-cover.jpg 在 staging，本轮不入库。"},{heading:"B站 · 我竟从杂志中…悟出了排版的真谛",href:"https://www.bilibili.com/video/BV1Vu411S7Yo/",points:["为何好看：间距/对比/色彩/视觉动线等可核动作清单，比「十五种风格」合集更贴判断句。","图：bili-BV1Vu411S7Yo-cover.jpg（无商业用途·侵权立删）。"],steal:"作表侧排版词典入口。",links:[{label:"B站",href:"https://www.bilibili.com/video/BV1Vu411S7Yo/"}],imageNote:"原图未取到。bili-BV1Vu411S7Yo-cover.jpg 在 staging，本轮不入库。"}]},{id:"zh-notes-2026-10-24",label:"中文浅记",items:[{heading:"B站 · 文字编排 18 案例",href:"https://www.bilibili.com/video/BV196vHBMESN/",points:["文字编排 18 案例。","图：bili-BV196vHBMESN-cover.jpg（无商业用途·侵权立删）。"],links:[{label:"B站",href:"https://www.bilibili.com/video/BV196vHBMESN/"}],imageNote:"原图未取到。bili-BV196vHBMESN-cover.jpg 在 staging，本轮不入库。"},{heading:"B站 · 26 开年封大战",href:"https://www.bilibili.com/video/BV11TrpB3EJA/",points:["26 开年封大战。","图：bili-BV11TrpB3EJA-cover.jpg（无商业用途·侵权立删）。"],links:[{label:"B站",href:"https://www.bilibili.com/video/BV11TrpB3EJA/"}],imageNote:"原图未取到。bili-BV11TrpB3EJA-cover.jpg 在 staging，本轮不入库。"}]},{id:"steal-2026-10-24",label:"今日可偷（短）",items:[{heading:"短清单",points:["终刊定制字 = 系统课（Face #26）。","档案网格姿态（TSJ Archives）。","画廊入口分职：Siteinspire / Savee / Are.na / Awwwards。","Micrographics 当页脚纹理。","B 站翻刊节奏 + 排版动作清单。"]}]},{id:"notice-2026-10-24",label:"声明",items:[{heading:"声明",points:["本 log 仅供教育与个人品味训练；勿整站抄袭视觉系统。引用务必署名并尊重版权；封面图仅个人品味训练·无商业用途·侵权立删。外链均为作品页/条目页/官方 BV 页，不热链原始视频文件。"]}]}]},{date:"2026-10-23",title:"例行：二次元/插画批 · Pixiv + 优设/SANKOU/MUUUUU",summary:"今日批次：海外批 B（Pixiv/DeviantArt/Tumblr）· 中文批 3（优设/SANKOU/MUUUUU）。海外深挖 VISIONS 2026 年刊+特设站包装策展，以及てんぱる1 同人纯字标题作例；中文深挖 SANKOU 上的 YOMA 工作室站，以及 MUUUUU SOTD 博报堂招聘站。本周补 Pixiv 与中文画廊入口露脸。Tumblr 宽搜薄，改 Katy Dockrill 官网作同向浅记。",sections:[{id:"routine-2026-10-23",label:"例行 · 下午 14:00",intro:"昨天社交画廊批后轮到二次元/插画批 + 中文站与日系画廊。关键词钉「审美积累」；外链一律作品页/特设站/画廊详情/官网，图存 public、credit 含无商业用途·侵权立删。表侧写包装/字层级/站建，不搬人像墙。",items:[{heading:"Pixiv 监修 · VISIONS 2026 年刊 + 特设站",href:"https://visions.pr-pixiv.net/2026/",points:["平台监修年度插画年刊：约 170 人成书，特设站把每位创作者做成可翻个页。","刊名字阶与 key visual 分工清楚；年刊姿态像「策展名单」而不是散点图墙。","外链走特设站与 pixiv.co.jp 书讯；表侧记包装与站建，人物主视觉留给裏侧。"],steal:"积累栏可做成「本周关注作者」名单+特设入口，别只堆单图。",links:[{label:"VISIONS 2026 特设站",href:"https://visions.pr-pixiv.net/2026/"},{label:"pixiv.co.jp 书讯",href:"https://www.pixiv.co.jp/2025/09/19/120000"}],figures:[{file:"log-visions-2026-kv.webp",alt:"VISIONS 2026 特设站 key visual",width:1600,height:900,caption:"年刊包装——刊名与 KV 分工，策展名单可翻。",credit:"原图 · VISIONS 2026 · 特设站 KV · 无商业用途·侵权立删",creditHref:"https://visions.pr-pixiv.net/2026/"}]},{heading:"Pixiv · てんぱる1「同人誌のタイトルデザイン」",href:"https://www.pixiv.net/artworks/84497848",points:["几乎只有字：同人刊名在缩略图尺寸里仍可读——助词缩小、字重对比、一行切节奏。","相对「图+字半订表纸」作例，这是纯字层级主挖；标签含タイポグラフィ / タイトルデザイン / 装丁デザイン。","系列自述作例只放标题、分卷连载——适合当字墙词典长期跟作者。"],steal:"表侧偷字层级与缩略可读性；人物图仍归裏。可跟系列作者，不单赏立绘。",links:[{label:"タイトルデザイン(3) · Pixiv",href:"https://www.pixiv.net/artworks/84497848"},{label:"てんぱる1 作者页",href:"https://www.pixiv.net/users/2513282"}],figures:[{file:"log-pixiv-tenparu-title.webp",alt:"Pixiv 同人刊名标题设计作例",width:825,height:825,caption:"纯字标题——缩略图里仍可读的层级。",credit:"原图 · Pixiv · てんぱる1 · タイトルデザイン(3) · 无商业用途·侵权立删",creditHref:"https://www.pixiv.net/artworks/84497848"}]},{heading:"SANKOU · YOMA inc.（余间）工作室站",href:"https://sankoudesign.com/web/yoma/",points:["SANKOU 价值在类目检索（配色/字/布局/业种）后的可复访站墙，不是又一个囤图瀑布。","YOMA 练留白节奏、作品网格、信用行克制；对象站 yoma.inc 正文偏壳，以 SANKOU 条目+缩略为核。","相对花瓣囤图，这是「可复访的站」级参考。"],steal:"表侧条目可学元数据：来源、角度、可偷课一句——类目墙比散点图好找回。",links:[{label:"SANKOU · YOMA",href:"https://sankoudesign.com/web/yoma/"},{label:"YOMA inc.",href:"https://yoma.inc/"}],figures:[{file:"log-sankou-yoma.webp",alt:"SANKOU 收录的 YOMA 工作室站缩略",width:1e3,height:874,caption:"工作室站品味——留白、网格、信用行。",credit:"原图 · SANKOU · YOMA inc. · 无商业用途·侵权立删",creditHref:"https://sankoudesign.com/web/yoma/"}]},{heading:"MUUUUU SOTD · HAKUHODO RECRUITMENT",href:"https://muuuuu.org/color/gray/25126.html",points:["MUUUUU 改成每日一站（SOTD）+ 制作 credit——和慢看「每日品味」同构。","博报堂招聘站大字口号「汗かいて、心を動かす。」+ 作品/人/环境分栏；制作 TWOTONE。","外链挂 MUUUUU 详情（溯源 credit）+ 官方招聘页 https://hakusuku.jp/recruit/。"],steal:"口号当刊头别促销腔；日更画廊用「今日一站」代替无限瀑布。",links:[{label:"MUUUUU · HAKUHODO SOTD",href:"https://muuuuu.org/color/gray/25126.html"},{label:"博报堂招聘站",href:"https://hakusuku.jp/recruit/"}],figures:[{file:"log-hakusuku-recruit.webp",alt:"博报堂招聘站 OGP / 主视觉",width:1220,height:640,caption:"招聘站也是编辑刊——大字口号与分栏。",credit:"原图 · HAKUHODO RECRUITMENT / TWOTONE · 无商业用途·侵权立删",creditHref:"https://hakusuku.jp/recruit/"}]},{heading:"优设 · mina 时尚杂志平面拆解（浅）",href:"https://www.uisdc.com/magazines-design",points:["以《mina》拆版心/分组/反复对齐/对比/出血/留白/抠图与四方版——纸刊解剖课。","相对已记「杂志化风格」UI 七特征，这是出血与版心增量，不重抄旧文。"],steal:"纸刊动作清单可印成表侧「怎么看」短栏；B 端版式文仅作网格词典备用。",links:[{label:"优设 · 跟时尚杂志学平面基础",href:"https://www.uisdc.com/magazines-design"}],figures:[{file:"log-uisdc-mina.webp",alt:"优设 mina 杂志拆解文封面",width:440,height:280,caption:"纸刊版心与出血——杂志化 UI 文没覆盖的课。",credit:"原图 · 优设 · mina 时尚杂志拆解 · 无商业用途·侵权立删",creditHref:"https://www.uisdc.com/magazines-design"}]}]}]}],gm=[{id:"log-fiu-mix-interiors",date:"2026-10-28",title:"Fonts In Use · Mix Interiors 改版",figure:{file:"log-fiu-mix-interiors.webp",alt:"Fonts In Use · Mix Interiors 改版刊面",width:1399,height:933,caption:"垂直刊换装——字职重分，不是换皮。",credit:"原图 · Fonts In Use · Mix Interiors · 无商业用途·侵权立删",creditHref:"https://fontsinuse.com/uses/78765/mix-interiors"}},{id:"log-pw-magazine",date:"2026-10-28",title:"PW Magazine · 青年实践编辑站",figure:{file:"log-pw-magazine.webp",alt:"PW Magazine 首页编辑列表姿态",width:1600,height:900,caption:"编辑列表站——不是灵感瀑布。",credit:"原图 · PW Magazine · 无商业用途·侵权立删",creditHref:"https://archive.pw-magazine.com/"}},{id:"log-zcool-poster-tips",date:"2026-10-28",title:"站酷 · 中文海报这样排",figure:{file:"log-zcool-poster-tips.webp",alt:"站酷 · 周妙妍中文海报版式 Tips 封面",width:800,height:600,caption:"中文海报 tips——可执行，不是种草。",credit:"原图 · 站酷 · 周妙妍 · 无商业用途·侵权立删",creditHref:"https://www.zcool.com.cn/article/ZMTc5MjQ3Ng==.html"}},{id:"log-hopper-office-night",date:"2026-10-28",title:"性压抑 · Hopper Office at Night",figure:{file:"log-hopper-office-night.webp",alt:"Edward Hopper Office at Night · Walker",width:1400,height:931,caption:"窗、桌、夜——闷的欲望停在台灯边。",credit:"原图 · Walker · Hopper Office at Night · 无商业用途·侵权立删",creditHref:"https://www.walkerart.org/collections/artwork/office-at-night/"}},{id:"log-woodman-whitney",date:"2026-10-28",title:"性压抑 · Woodman Untitled",figure:{file:"log-woodman-whitney.webp",alt:"Francesca Woodman Untitled · Whitney",width:1284,height:1600,caption:"半遮与消失——压得住的羞耻感。",credit:"原图 · Whitney · Woodman Untitled · 无商业用途·侵权立删",creditHref:"https://whitney.org/collection/works/33724"}},{id:"log-visie-quiet-power",date:"2026-10-28",title:"单人性张力 · KEYMAN Quiet Power",figure:{file:"log-visie-quiet-power.webp",alt:"Quiet Power editorial for KEYMAN Magazine",width:800,height:450,caption:"Quiet Power——单人磁场，不是双人戏。",credit:"原图 · Visie · KEYMAN Quiet Power · 无商业用途·侵权立删",creditHref:"https://visie.io/project/various-editorials-quiet-power-for-keyman-magazine-issue-3-2025"}},{id:"log-pascal-aude-mono",date:"2026-10-28",title:"单人性张力 · Audé Monochrome",figure:{file:"log-pascal-aude-mono.webp",alt:"Pascal Uehli · Audé in Monochrome",width:1440,height:960,caption:"单色自持——一人填满画幅。",credit:"原图 · Pascal Uehli · Audé Monochrome · 无商业用途·侵权立删",creditHref:"https://pascaluehli.com/aude-in-monochrome-fashion/"}},{id:"log-yt-coffee-table-book",date:"2026-10-27",title:"YouTube · Coffee Table Book 成书过程",figure:{file:"log-yt-coffee-table-book.webp",alt:"YouTube 封面：咖啡桌书编辑设计过程片",width:1280,height:720,caption:"成书过程角——页对页节奏比概念口播更可偷。",credit:"原图 · YouTube · Collect & Contrast · Coffee Table Book · 无商业用途·侵权立删",creditHref:"https://www.youtube.com/watch?v=pM7g8qddXaY"}},{id:"log-vimeo-saul-elaine-bass",date:"2026-10-27",title:"Vimeo · Saul & Elaine Bass 片头字",figure:{file:"log-vimeo-saul-elaine-bass.webp",alt:"Vimeo 缩略：Saul and Elaine Bass 片头字设计",width:1280,height:720,caption:"片头字一帧定调——字即情节，不是装饰贴纸。",credit:"原图 · Vimeo · Albinson · Saul & Elaine Bass · 无商业用途·侵权立删",creditHref:"https://vimeo.com/31992143"}},{id:"log-bili-system-type",date:"2026-10-27",title:"B站 · System「字比图多」",figure:{file:"log-bili-system-type.webp",alt:"B站封面：System 字比图多的时尚杂志",width:1600,height:1e3,caption:"字刊——字阶与栏宽先于氛围图。",credit:"原图 · B站 · System 字比图多 · 无商业用途·侵权立删",creditHref:"https://www.bilibili.com/video/BV1oP411p7FE/"}},{id:"log-bili-w-magazine",date:"2026-10-27",title:"B站 · W中文版",figure:{file:"log-bili-w-magazine.webp",alt:"B站封面：W中文版水准对照",width:1570,height:883,caption:"片刊一端——时装摄影与中文编辑气口。",credit:"原图 · B站 · W中文版 · 无商业用途·侵权立删",creditHref:"https://www.bilibili.com/video/BV1CG66YtEpY/"}},{id:"log-ren-hang-blindspot",date:"2026-10-27",title:"性压抑 · Ren Hang Blindspot",figure:{file:"log-ren-hang-blindspot.webp",alt:"Ren Hang 较克制的形体抽象（Blindspot）",width:1420,height:959,caption:"半遮与匿名化身体——闷拧的视线，不是色情搬运。",credit:"原图 · Blindspot · Ren Hang · 无商业用途·侵权立删",creditHref:"https://blindspotgallery.com/artist/ren-hang/"}},{id:"log-albertine-hannibal",date:"2026-10-27",title:"性压抑 · Albertine Hannibal 色调",figure:{file:"log-albertine-hannibal.webp",alt:"Hannibal 剧集色调与美术设计参考静帧",width:1500,height:841,caption:"冷青绿与琥珀对照——正式、压得住的色调，不是血腥。",credit:"原图 · ALBERTINE · Hannibal 色调参考 · 无商业用途·侵权立删",creditHref:"https://www.albertine.live/the-menagerie/hannibal"}},{id:"log-lofficiel-magnetic",date:"2026-10-27",title:"单人性张力 · MAGNETIC PRESENCE",figure:{file:"log-lofficiel-magnetic.webp",alt:"L'Officiel Baltic MAGNETIC PRESENCE 编辑人像",width:1200,height:1500,caption:"单人磁场——结构肩与正面目光，规矩里发烫。",credit:"原图 · L'Officiel Baltic · MAGNETIC PRESENCE · 无商业用途·侵权立删",creditHref:"https://www.lofficielbaltic.com/en/editorials/magnetic-presence"}},{id:"log-numero-quiet-gaze",date:"2026-10-27",title:"单人性张力 · Quiet Gaze",figure:{file:"log-numero-quiet-gaze.webp",alt:"Numéro Switzerland Quiet Gaze 单人肖像",width:800,height:600,caption:"Quiet Gaze——回眸与自持，不是双人戏。",credit:"原图 · Numéro CH · Quiet Gaze · 无商业用途·侵权立删",creditHref:"https://numeromagazine.ch/quiet-gaze/"}},{id:"log-bili-hamada",date:"2026-10-27",title:"B站 · 【审美积累21】滨田英明",figure:{file:"log-bili-hamada.webp",alt:"B站封面：审美积累滨田英明",width:1440,height:1080,caption:"审美积累系列浅记——个人视线课。",credit:"原图 · B站 · 审美积累21 滨田英明 · 无商业用途·侵权立删",creditHref:"https://www.bilibili.com/video/BV1i7421N7bR/"}},{id:"log-instinct-camille",date:"2026-10-27",title:"Instinct · Camille Cottin Dior",figure:{file:"log-instinct-camille.webp",alt:"Instinct · Camille Cottin Dior 编辑页示意",width:1200,height:630,caption:"单人磁场浅记——建筑肩与前景框。",credit:"原图 · Instinct · Camille Cottin Dior · 无商业用途·侵权立删",creditHref:"https://instinct.paris/dior-camille-cottin"}},{id:"log-pixiv-munakata-title",date:"2026-10-26",title:"Pixiv · むなかたきえ「依頼絵、タイトルデザイン」",figure:{file:"log-pixiv-munakata-title.webp",alt:"轻小说表紙：插画与标题字阶一体的竖幅委托作例",width:845,height:1200,caption:"表紙一体——图与标题字阶一次排成，字跟着画面呼吸。",credit:"原图 · Pixiv · むなかたきえ · 依頼絵、タイトルデザイン · 无商业用途·侵权立删",creditHref:"https://www.pixiv.net/artworks/144091085"}},{id:"log-da-mh-rise-switchplayer",date:"2026-10-26",title:"DeviantArt · SaneKyle · Switch Player Mag",figure:{file:"log-da-mh-rise-switchplayer.webp",alt:"Switch Player 杂志封面：刊名条与怪物猎人主视觉",width:752,height:1063,caption:"实刊封面先留字位——刊名条、主视觉、导读一起站住。",credit:"原图 · DeviantArt · SaneKyle · MH Rise for Switch Player Mag · 无商业用途·侵权立删",creditHref:"https://www.deviantart.com/sanekyle/art/MH-Rise-for-Switch-Player-Mag-875825170"}},{id:"log-muuuuu-sb-oai-sotd",date:"2026-10-26",title:"MUUUUU · SB OAI Japan SOTD OCT 25",figure:{file:"log-muuuuu-sb-oai-sotd.webp",alt:"MUUUUU Site of the Day：SB OAI Japan 站截图",width:1600,height:1200,caption:"新于上周的 SOTD——企业站字阶冷静、分区清楚。",credit:"原图 · MUUUUU · SB OAI Japan SOTD OCT 25 · 无商业用途·侵权立删",creditHref:"https://muuuuu.org/industry/technology/25142.html"}},{id:"log-uisdc-layout-design",date:"2026-10-26",title:"优设 · 三率一版",figure:{file:"log-uisdc-layout-design.webp",alt:"优设三率一版文章封面示意",width:880,height:560,caption:"三率当判断句——高级、热闹、活泼各自对应哪一率。",credit:"原图 · 优设 · layout-design-23 三率一版 · 无商业用途·侵权立删",creditHref:"https://www.uisdc.com/layout-design-23"}},{id:"log-tumblr-sari-wired",date:"2026-10-26",title:"Tumblr · Sari Cohen editorial",figure:{file:"log-tumblr-sari-wired.webp",alt:"Sari Cohen 编辑向插画截帧",width:1280,height:1199,caption:"编辑插画服务文章语气，不是壁纸墙。",credit:"原图 · Tumblr · Sari Cohen · editorial illustration · 无商业用途·侵权立删",creditHref:"https://www.tumblr.com/sari-cohen"}},{id:"log-sankou-mikaku",date:"2026-10-26",title:"SANKOU · 味覚編集",figure:{file:"log-sankou-mikaku.webp",alt:"SANKOU 收录的味覚編集站缩略",width:1e3,height:874,caption:"味觉当编辑立场——站名本身就是判断句。",credit:"原图 · SANKOU · 味覚編集 · 无商业用途·侵权立删",creditHref:"https://sankoudesign.com/web/mikakuhenshu/"}},{id:"log-pixiv-nao-yasashii",date:"2026-10-26",title:"Pixiv · nao_zhizi「やさしい第一印象」",figure:{file:"log-pixiv-nao-yasashii.webp",alt:"やさしい第一印象：偏软的封面字阶示意",width:1200,height:1200,caption:"第一印象要安心——封面字阶先给人软着陆。",credit:"原图 · Pixiv · nao_zhizi · やさしい第一印象 · 无商业用途·侵权立删",creditHref:"https://www.pixiv.net/artworks/138700351"}},{id:"log-sankou-hiragino",date:"2026-10-26",title:"SANKOU · ヒラギノフォント",figure:{file:"log-sankou-hiragino.webp",alt:"SANKOU 收录的ヒラギノフォント特设站缩略",width:1e3,height:874,caption:"字厂商特设——字就是主视觉，少装饰。",credit:"原图 · SANKOU · ヒラギノフォント · 无商业用途·侵权立删",creditHref:"https://sankoudesign.com/web/hiragino/"}},{id:"log-artstation-selkosanomat",date:"2026-10-25",title:"ArtStation · Alvari Juhola — Selkosanomat / Lätta bladet",figure:{file:"log-artstation-selkosanomat.webp",alt:"Selkosanomat 5/2024 体育跨页，泳池与球场插画配易读正文",width:1400,height:1004,caption:"约束里做版——字、色、图先过易读底线，插画服务体育跨页的信息。",credit:"原图 · ArtStation · Alvari Juhola · Selkosanomat / Lätta bladet · 无商业用途·侵权立删",creditHref:"https://alvarijuhola.artstation.com/projects/x3mR3O"}},{id:"log-cara-serra-cabbage",date:"2026-10-25",title:"Cara · Serra Ataman — Cabbage & Sunchoke",figure:{file:"log-cara-serra-cabbage.webp",alt:"KAFKAOKUR：卷心菜与菊芋插画",width:750,height:392,caption:"连载一帧：卷心菜与菊芋并置，服务文章，不换整套视觉语言。",credit:"原图 · Cara · Serra Ataman · Cabbage & Sunchoke · KAFKAOKUR · 无商业用途·侵权立删",creditHref:"https://cara.app/post/486d1762-74ea-411b-95a6-cf599513813e"}},{id:"log-cara-serra-garlic",date:"2026-10-25",title:"Cara · Serra Ataman — Garlic & Strawberry",figure:{file:"log-cara-serra-garlic.webp",alt:"KAFKAOKUR：蒜与草莓插画",width:750,height:183,caption:"同一连载换物类：蒜与草莓。粒度对标每日积累。",credit:"原图 · Cara · Serra Ataman · Garlic & Strawberry · KAFKAOKUR · 无商业用途·侵权立删",creditHref:"https://cara.app/post/34f4f8fe-9c79-4024-8e53-8708f061bb1c"}},{id:"log-behance-typezine",date:"2026-10-25",title:"Behance · Typezine Longinotti",figure:{file:"log-behance-typezine.webp",alt:"Typezine Longinotti 跨页，薄荷绿底上的斜向大字",width:1400,height:1043,caption:"两字一墨斜网格。大字跨页本身就是版面结构。",credit:"原图 · Behance · Typezine Editorial · Tipografía Longinotti · 无商业用途·侵权立删",creditHref:"https://www.behance.net/gallery/243108419/Typezine-Editorial-Tipografia-Longinotti"}},{id:"log-behance-bant",date:"2026-10-25",title:"Behance · Bant Mag Redesign",figure:{file:"log-behance-bant.webp",alt:"Bant Mag 改版封面，胶带拼出刊名",width:1200,height:675,caption:"胶带手做刊名。字是做出来的物件，不是贴上去的标题。",credit:"原图 · Behance · Bant Mag. Redesign · 无商业用途·侵权立删",creditHref:"https://www.behance.net/gallery/248358129/Bant-Mag-Redesign-Editorial-Design-Project"}},{id:"log-x-oliver-scale-1",date:"2026-10-25",title:"X · @oliver_gareis · 字阶叠网格",figure:{file:"log-x-oliver-scale-1.webp",alt:"字阶与网格练习，棕底上的大写字母和红线网格",width:1008,height:1200,caption:"字阶叠在网格上。比例本身是内容。",credit:"原图 · X · @oliver_gareis · scale / grid / rhythm · 无商业用途·侵权立删",creditHref:"https://x.com/oliver_gareis/status/2107146296842719562"}},{id:"log-x-oliver-scale-2",date:"2026-10-25",title:"X · @oliver_gareis · 大字与网格注",figure:{file:"log-x-oliver-scale-2.webp",alt:"字阶与网格练习，大字 AN ONGOING STUDY OF TYPE 与小注",width:1008,height:1200,caption:"网格是出发点。大字和小注的疏密，拿走的和留下的一样要紧。",credit:"原图 · X · @oliver_gareis · scale / grid / rhythm · 无商业用途·侵权立删",creditHref:"https://x.com/oliver_gareis/status/2107146296842719562"}},{id:"log-x-oliver-racing-1",date:"2026-10-25",title:"X · @oliver_gareis · racing editorial",figure:{file:"log-x-oliver-racing-1.webp",alt:"赛车编辑跨页，头盔照片上叠 GT-R 与数字",width:1200,height:764,caption:"赛车编辑刊面：照片上叠字阶，数字当主角。",credit:"原图 · X · @oliver_gareis · racing editorial layouts · 无商业用途·侵权立删",creditHref:"https://x.com/oliver_gareis/status/2112219724855836691"}},{id:"log-x-oliver-racing-2",date:"2026-10-25",title:"X · @oliver_gareis · racing type",figure:{file:"log-x-oliver-racing-2.webp",alt:"赛车编辑纯字版，SPEED IS NOT ENOUGH 大字加双栏小注",width:1200,height:764,caption:"大字口号压过小注双栏。节奏靠字重，不靠装饰。",credit:"原图 · X · @oliver_gareis · racing editorial layouts · 无商业用途·侵权立删",creditHref:"https://x.com/oliver_gareis/status/2112219724855836691"}},{id:"log-artstation-siege05",date:"2026-10-25",title:"ArtStation · SIEGE Issue 05",figure:{file:"log-artstation-siege05.webp",alt:"SIEGE Issue 05 封面，刊名与期号做成杂志封面",width:1400,height:1811,caption:"作品集当刊。刊名、期号、导语在同一套封面上。",credit:"原图 · ArtStation · Echo Lima / Eliott Lilly · SIEGE Issue 05 · 无商业用途·侵权立删",creditHref:"https://echolima.artstation.com/projects/nEy4mO"}},{id:"log-meiye-matvoyce-avatar",date:"2026-10-25",title:"美叶 · Mat Voyce 榜样头图",figure:{file:"log-meiye-matvoyce-avatar.webp",alt:"美叶 Mat Voyce 榜样头图",width:230,height:230,caption:"跟读单人榜样。美叶的用法是长期名单，不是刷瀑布。",credit:"原图 · 美叶 · Mat Voyce · 榜样头图 · 无商业用途·侵权立删",creditHref:"https://www.meiye.art/MasterDesigner/204/1/2307"}},{id:"log-meiye-matvoyce-work1",date:"2026-10-25",title:"美叶 · Mat Voyce · SUNNY DAY",figure:{file:"log-meiye-matvoyce-work1.webp",alt:"Mat Voyce 作品 SUNNY DAY，字与太阳角色叠在一起",width:1071,height:1071,caption:"字当角色。SUNNY DAY 的字和插画是同一个脾气。",credit:"原图 · 美叶 · Mat Voyce · 榜样作品 · 无商业用途·侵权立删",creditHref:"https://www.meiye.art/MasterDesigner/204/1/2307"}},{id:"log-meiye-matvoyce-work2",date:"2026-10-25",title:"美叶 · Mat Voyce · SWEET!",figure:{file:"log-meiye-matvoyce-work2.webp",alt:"Mat Voyce 作品 SWEET!，层叠字",width:1071,height:1071,caption:"SWEET! 层叠字。循环感像呼吸。",credit:"原图 · 美叶 · Mat Voyce · 榜样作品 · 无商业用途·侵权立删",creditHref:"https://www.meiye.art/MasterDesigner/204/1/2307"}},{id:"log-meiye-matvoyce-work3",date:"2026-10-25",title:"美叶 · Mat Voyce · BUSY",figure:{file:"log-meiye-matvoyce-work3.webp",alt:"Mat Voyce 作品 BUSY，错位字层",width:1e3,height:1e3,caption:"BUSY 字层错位。跟的是这个人的字。",credit:"原图 · 美叶 · Mat Voyce · 榜样作品 · 无商业用途·侵权立删",creditHref:"https://www.meiye.art/MasterDesigner/204/1/2307"}},{id:"log-matvoyce-og",date:"2026-10-25",title:"Mat Voyce · 官网 OGP",figure:{file:"log-matvoyce-og.webp",alt:"Mat Voyce 官网 OGP，斜条底上的字标",width:1800,height:945,caption:"官网字标。斜条底和作品页是同一套脾气。",credit:"原图 · Mat Voyce · 官网 OGP · 无商业用途·侵权立删",creditHref:"https://matvoyce.tv/"}},{id:"2026-10-25-digitaling-about-mook",date:"2026-10-25",title:"数英 · 小红书《about关于》MOOK 呼吸感排版",note:"疏密要能指出来：哪块是展开插图，哪块是注释小版。别空喊呼吸感。",href:"https://www.digitaling.com/articles/1261294.html",imageNote:"原图未取到。数英 CDN 403，封面与文内图未落。"},{id:"2026-10-25-huaban-board",date:"2026-10-25",title:"花瓣 · 单画板",note:"单画板，深于话题入口。不重抄花瓣话题入口句。",href:"https://huaban.com/boards/25263522",imageNote:"原图未取到。画板 405，未落图。"},{id:"2026-10-25-zcool-collection",date:"2026-10-25",title:"站酷 · 合集",note:"合集页。不重抄 BranD 79。",href:"https://www.zcool.com.cn/collection/ZMzM5Mjg1MjQ=",imageNote:"原图未取到。合集缩略 CDN 403，未落图。"},{id:"log-meiye-home-pin1",date:"2026-10-25",title:"美叶 · 首页流图示意",figure:{file:"log-meiye-home-pin1.webp",alt:"美叶首页流图示意",width:800,height:1732,caption:"首页流里的一帧。浅记，不重抄首页定位。",credit:"原图 · 美叶 · 首页流图示意 · 无商业用途·侵权立删",creditHref:"https://meiye.art/"}},{id:"2026-10-24-fiu-the-face",date:"2026-10-24",title:"Fonts In Use · The Face magazine, issue 26",note:"终刊两套定制字：无衬线刊头锚 + 衬线叙事层。改版先定 display/text 职责。",href:"https://fontsinuse.com/uses/78225/the-face-magazine-issue-26",imageNote:"原图未取到。封面在 staging，本轮不入库。"},{id:"2026-10-24-tsj-archives",date:"2026-10-24",title:"The Surfer's Journal Archives",note:"按年卷把封面排成可翻档案墙，用期号网格替代无限瀑布。",href:"https://archives.surfersjournal.com/",imageNote:"原图未取到。单期封面 CDN 本轮 403 未落。"},{id:"2026-10-24-awwwards-hearst",date:"2026-10-24",title:"Awwwards · Hearst Exhibit 2026",note:"展场当刊；Magazine/Typography 标签。",href:"https://www.awwwards.com/sites/hearst-exhibit-2026",imageNote:"原图未取到。封面在 staging，本轮不入库。"},{id:"2026-10-24-int-trends",date:"2026-10-24",title:"It's Nice That · 2026 graphic trends",note:"Micrographics 作页家具。",href:"https://www.itsnicethat.com/features/forward-thinking-graphic-trends-2026-graphic-design-120126",imageNote:"原图未取到。封面在 staging，本轮不入库。"},{id:"2026-10-24-savee-editorial",date:"2026-10-24",title:"Savee · UI Editorial / Magazine",note:"画廊入口。",href:"https://savee.com/martijnvanmeijel/boards/0-ui-editorial-magazine/",imageNote:"原图未取到。封面在 staging，本轮不入库。"},{id:"2026-10-24-arena-aesthetic",date:"2026-10-24",title:"Are.na Editorial · The Aesthetic",note:"channel 名单策展（非 Areal 字文）。",href:"https://www.are.na/editorial/aesthetic",imageNote:"原图未取到。封面在 staging，本轮不入库。"},{id:"2026-10-24-bili-bv1654y1j7zk",date:"2026-10-24",title:"B站 · 一起看杂志｜apartamento / TANK / In Paris / Magazine B",note:"独立杂志实物翻页：跨页疏密、图注、封面到内页第一拍。",href:"https://www.bilibili.com/video/BV1654y1J7Zk/",imageNote:"原图未取到。封面在 staging，本轮不入库。"},{id:"2026-10-24-bili-bv1vu411s7yo",date:"2026-10-24",title:"B站 · 我竟从杂志中…悟出了排版的真谛",note:"间距、对比、色彩、视觉动线，可核的排版动作清单。",href:"https://www.bilibili.com/video/BV1Vu411S7Yo/",imageNote:"原图未取到。封面在 staging，本轮不入库。"},{id:"2026-10-24-bili-bv196vhbmessn",date:"2026-10-24",title:"B站 · 文字编排 18 案例",note:"文字编排 18 案例。",href:"https://www.bilibili.com/video/BV196vHBMESN/",imageNote:"原图未取到。封面在 staging，本轮不入库。"},{id:"2026-10-24-bili-bv11trpb3eja",date:"2026-10-24",title:"B站 · 26 开年封大战",note:"26 开年封大战。",href:"https://www.bilibili.com/video/BV11TrpB3EJA/",imageNote:"原图未取到。封面在 staging，本轮不入库。"},{id:"log-visions-2026-kv",date:"2026-10-23",title:"Pixiv 监修 · VISIONS 2026 年刊 + 特设站",figure:{file:"log-visions-2026-kv.webp",alt:"VISIONS 2026 特设站 key visual",width:1600,height:900,caption:"年刊包装——刊名与 KV 分工，策展名单可翻。",credit:"原图 · VISIONS 2026 · 特设站 KV · 无商业用途·侵权立删",creditHref:"https://visions.pr-pixiv.net/2026/"}},{id:"2026-10-23-visions-book",date:"2026-10-23",title:"pixiv.co.jp · VISIONS 2026 书讯",note:"外链走特设站与 pixiv.co.jp 书讯；表侧记包装与站建。",href:"https://www.pixiv.co.jp/2025/09/19/120000"},{id:"log-pixiv-tenparu-title",date:"2026-10-23",title:"Pixiv · てんぱる1「同人誌のタイトルデザイン」",figure:{file:"log-pixiv-tenparu-title.webp",alt:"Pixiv 同人刊名标题设计作例",width:825,height:825,caption:"纯字标题——缩略图里仍可读的层级。",credit:"原图 · Pixiv · てんぱる1 · タイトルデザイン(3) · 无商业用途·侵权立删",creditHref:"https://www.pixiv.net/artworks/84497848"}},{id:"2026-10-23-tenparu-user",date:"2026-10-23",title:"Pixiv · てんぱる1 作者页",note:"系列自述作例只放标题、分卷连载，适合当字墙词典长期跟作者。",href:"https://www.pixiv.net/users/2513282"},{id:"log-sankou-yoma",date:"2026-10-23",title:"SANKOU · YOMA inc.（余间）工作室站",figure:{file:"log-sankou-yoma.webp",alt:"SANKOU 收录的 YOMA 工作室站缩略",width:1e3,height:874,caption:"工作室站品味——留白、网格、信用行。",credit:"原图 · SANKOU · YOMA inc. · 无商业用途·侵权立删",creditHref:"https://sankoudesign.com/web/yoma/"}},{id:"2026-10-23-yoma-inc",date:"2026-10-23",title:"YOMA inc.",note:"对象站正文偏壳，以 SANKOU 条目和缩略为核。",href:"https://yoma.inc/"},{id:"log-hakusuku-recruit",date:"2026-10-23",title:"MUUUUU SOTD · HAKUHODO RECRUITMENT",figure:{file:"log-hakusuku-recruit.webp",alt:"博报堂招聘站 OGP / 主视觉",width:1220,height:640,caption:"招聘站也是编辑刊——大字口号与分栏。",credit:"原图 · HAKUHODO RECRUITMENT / TWOTONE · 无商业用途·侵权立删",creditHref:"https://hakusuku.jp/recruit/"}},{id:"2026-10-23-muuuuu-hakuhodo",date:"2026-10-23",title:"MUUUUU · HAKUHODO RECRUITMENT",note:"每日一站详情，用来溯源制作 credit；官方页是博报堂招聘站。",href:"https://muuuuu.org/color/gray/25126.html"},{id:"log-uisdc-mina",date:"2026-10-23",title:"优设 · mina 时尚杂志平面拆解（浅）",figure:{file:"log-uisdc-mina.webp",alt:"优设 mina 杂志拆解文封面",width:440,height:280,caption:"纸刊版心与出血——杂志化 UI 文没覆盖的课。",credit:"原图 · 优设 · mina 时尚杂志拆解 · 无商业用途·侵权立删",creditHref:"https://www.uisdc.com/magazines-design"}},{id:"log-artstation-duolife",date:"2026-10-22",title:"ArtStation · DuoLife Magazine（Rafal Topolski）",figure:{file:"log-artstation-duolife.webp",alt:"ArtStation 封面：DuoLife Magazine",width:1200,height:675,caption:"品牌刊网格系统——真实约束下的可持续刊面。",credit:"原图 · ArtStation · Rafal Topolski · DuoLife Magazine",creditHref:"https://lafar.artstation.com/projects/DAXbVe"}},{id:"log-behance-mix",date:"2026-10-22",title:"Behance · MIX Interiors Editorial Redesign",figure:{file:"log-behance-mix.webp",alt:"MIX Interiors 改版刊面示意",width:1200,height:675,caption:"内容响应式：标题、取色、构图跟文章变。",credit:"原图 · Behance/Marçal · MIX Interiors Editorial",creditHref:"https://www.behance.net/gallery/249923613/MIX-Interiors-Editorial-Design"}},{id:"log-meiye-pin1",date:"2026-10-22",title:"美叶 · 设计师的品味养成所",figure:{file:"log-meiye-pin1.webp",alt:"美叶首页流图示例一",width:1200,height:900,caption:"品味养成所——策展入口姿态。",credit:"原图 · 美叶 · 首页流图",creditHref:"https://meiye.art/"}},{id:"2026-10-22-站酷-BranD-79-可持续地方设计",date:"2026-10-22",title:"站酷 · BranD 79 可持续地方设计",imageNote:"原图未取到。",note:"全刊制作课：专色、六款护封叠龙脊、仿龙鳞装、木刻过渡页、四款纸触感分层。",href:"https://www.zcool.com.cn/work/ZNzQxMTg4NDQ=.html"},{id:"2026-10-22-花瓣-杂志排版话题画板-入口",date:"2026-10-22",title:"花瓣 · 杂志排版话题画板（入口）",imageNote:"话题页打不开，原图未取到。",note:"本周花瓣露脸：杂志排版话题合集墙（复古刊、五大刊、杂志风文字等）。",href:"https://huaban.com/topic-board/a-zazhipaiban"},{id:"log-yt-mishi-artdirection",date:"2026-10-21",title:"YouTube · Mastering Art Direction（Mishi）",figure:{file:"log-yt-mishi-artdirection.webp",alt:"YouTube 封面：Mastering Art Direction 讲解片",width:1200,height:675,caption:"Art direction / 字阶指挥——导演视角补巡礼缺口。",credit:"原图 · YouTube · Mishi Designs Studio · Art Direction / Editorial",creditHref:"https://www.youtube.com/watch?v=oXnHkmIrgDQ"}},{id:"log-vimeo-hometown-magazine",date:"2026-10-21",title:"Vimeo · HOW TO MAKE A MAGAZINE（Hometown）",figure:{file:"log-vimeo-hometown-magazine.webp",alt:"Vimeo 封面：HOW TO MAKE A MAGAZINE",width:1200,height:675,caption:"印刷装订成刊过程当影像散文。",credit:"原图 · Vimeo · Hometown · HOW TO MAKE A MAGAZINE",creditHref:"https://vimeo.com/732690625"}},{id:"log-bili-ryo-nakajima",date:"2026-10-21",title:"B站 · 审美积累｜Ryo Nakajima",figure:{file:"log-bili-ryo-nakajima.webp",alt:"B站封面：审美积累｜Ryo Nakajima",width:1200,height:675,caption:"同关键词摄影师蒙太奇；表侧偷色与留白。",credit:"原图 · B站 · 审美积累｜Ryo Nakajima",creditHref:"https://www.bilibili.com/video/BV1v3zeBnEnK/"}},{id:"log-bili-victionary-255",date:"2026-10-21",title:"B站 · 灵感系列 VOL.255 Victionary",figure:{file:"log-bili-victionary-255.webp",alt:"B站封面：Victionary 书封面灵感 VOL.255",width:1200,height:675,caption:"出版物封面字阶巡礼，贴表侧字/排版。",credit:"原图 · B站 · 灵感系列 VOL.255 Victionary",creditHref:"https://www.bilibili.com/video/BV1wjqRBDEZq/"}},{id:"log-bili-bv1aepi6kerg",date:"2026-10-21",title:"01 压抑 / 执念",figure:{file:"log-bili-bv1aepi6kerg.webp",alt:"B站官方封面：石塔上的白衣人物拉着钟绳，右边是深谷",width:1200,height:675,caption:"官方封面。人缩在石塔里拉钟，谷占了右半。片子到播放页里看。",credit:"原图 · B站官方封面 · Lana-Dey-Rey · 压抑、执念与精神崩塌",creditHref:"https://www.bilibili.com/video/BV1Aepi6KErg/"}},{id:"log-x-xin-heart",date:"2026-10-21",title:"02 「心」字怎么变",figure:{file:"log-x-xin-heart.webp",alt:"「心」字从图形到楷书、再到偏旁的几组造型",width:1400,height:1867,caption:"原帖那张。心字从图形收到楷书，再收成三种偏旁。",credit:"原图 · X · @Eonway_Ying · 「心」字造型的变化",creditHref:"https://x.com/Eonway_Ying/status/2112707395935711427"}},{id:"log-as-hifructose-cover",date:"2026-10-21",title:"03 Hi-Fructose 封面改版",figure:{file:"log-as-hifructose-cover.webp",alt:"Hi-Fructose 封面改版：手绘刊名、左侧目录、红蓝色带",width:1200,height:1604,caption:"四层字：刊名、人名、问题、左侧目录。先读字阶。",credit:"原图 · Landon Cargill · ArtStation · Hi-Fructose 封面改版",creditHref:"https://llcargill.artstation.com/projects/NyLdlJ"}},{id:"2026-10-21-04-杂志排版",date:"2026-10-21",title:"04 杂志排版",imageNote:"话题页打不开（405），原图未取到。",note:"中文排版的灵感入口。要下判断，得再进子画板挑。",href:"https://huaban.com/topic-board/a-zazhipaiban"},{id:"log-pixiv-cover-samples",date:"2026-10-21",title:"05 同人志封面作例",figure:{file:"log-pixiv-cover-samples.webp",alt:"同人志封面作例集的分享卡，两行刊名用品红和黄绿拆开",width:1200,height:630,caption:"这是作品页的分享卡，不是二十二张封面。刊名拆成两行，颜色分开。",credit:"原图 · pixiv · てんぱる · セミオーダー同人誌表紙作例集 · 作者声明不是免费素材",creditHref:"https://www.pixiv.net/artworks/84433706"},imageNote:"二十二张封面原图未取到。上图只是作品页分享卡。"},{id:"log-em-vol7-cover",date:"2026-10-21",title:"06 Emergence",figure:{file:"log-em-vol7-cover.webp",alt:"Emergence Magazine 第七卷封面和书脊，白底上散着小图，中间是主题句",width:1200,height:1326,caption:"第七卷封面，连书脊。主题句在中间，四周留白。这是封面，不是内页。",credit:"原图 · Emergence Magazine · Vol. 7 Seeds and Structures 封面",creditHref:"https://emergencemagazine.org/"}},{id:"log-arena-areal",date:"2026-10-21",title:"07 Areal",figure:{file:"log-arena-areal.webp",alt:"旧窗口里的大字 Ar_al，中间缺一笔",width:865,height:630,caption:"字样写成 Ar_al，缺的那一笔就是题目。窗口是容器，字才是要看的。",credit:"原图 · Are.na Editorial · Introducing Areal · Dinamo",creditHref:"https://www.are.na/editorial/introducing-areal-are-nas-new-typeface"}},{id:"log-yt-mag-layouts-2024",date:"2026-10-21",title:"08 2024 的刊面",figure:{file:"log-yt-mag-layouts-2024.webp",alt:"2024 杂志版面视频的官方封面，下方是摊开的橙色信息图跨页",width:1200,height:676,caption:"官方封面。下半是一张信息图跨页，右边是刊名。先看层级，片子到播放页里看。",credit:"原图 · YouTube 官方封面 · 2024 Best Magazine Layouts",creditHref:"https://www.youtube.com/watch?v=K5sKMHW7NKw"}},{id:"log-uisdc-mag-ui",date:"2026-10-21",title:"09 杂志化风格怎么用",figure:{file:"log-uisdc-mag-ui.webp",alt:"一排手机界面，大字、色块和海报式排版叠在一起",width:1200,height:800,caption:"文里的一张案例。大字压在色块上，像一页刊。不是站的横幅。",credit:"原图 · 优设 · 功夫UX · 杂志化风格怎么用",creditHref:"https://www.uisdc.com/magazine-style"}},{id:"log-yz-cereal-cover",date:"2026-10-21",title:"10 七种杂志调子",figure:{file:"log-yz-cereal-cover.webp",alt:"Cereal 杂志封面：大字刊名，下面是一只梨、一只盘子和一把叉子",width:700,height:918,caption:"文中举例的简约一挂。七种调子先看这一格。不是文首那张报亭。",credit:"原图 · 云展网 · 七种杂志调子 · Cereal 封面例",creditHref:"https://www.yunzhan365.com/use/digital-magazine/digital-magazine015/"}},{id:"2026-10-21-11-灵感集",date:"2026-10-21",title:"11 灵感集",imageNote:"墙里抽到的一张是空状态界面，不是色和版面，未采用。分享图只是 logo，也未采用。",note:"色和界面的灵感墙。和优设那篇对照着扫。",href:"https://meiye.art/inspiration"},{id:"log-lj-dont-worry-boys",date:"2026-10-20",title:"Don't Worry Boys / Stanley Stellar",figure:{file:"log-lj-dont-worry-boys.webp",alt:"Stanley Stellar Don't Worry Boys 书页静物",width:1200,height:788,caption:"LJ 规格块：plates 分色 + mm + quarterbound + LJ227。",credit:"原图 · Loose Joints · Don't Worry Boys / Stanley Stellar",creditHref:"https://loosejoints.biz/products/dont-worry-boys"}},{id:"log-lj-frozen-features",date:"2026-10-20",title:"Frozen Features / Jason Fulford",figure:{file:"log-lj-frozen-features.webp",alt:"Jason Fulford Frozen Features 书封面静物",width:1200,height:788,caption:"silkscreen + loose insert 写进规格；lede 讲 montage。",credit:"原图 · Loose Joints · Frozen Features / Jason Fulford",creditHref:"https://loosejoints.biz/products/frozen-features"}},{id:"log-lj-in-the-beginning",date:"2026-10-20",title:"In the Beginning / Roe Ethridge",figure:{file:"log-lj-in-the-beginning.webp",alt:"Roe Ethridge In the Beginning 三册套装",width:1200,height:788,caption:"多卷书分行规格：三册 facsimile + rubber band。",credit:"原图 · Loose Joints · In the Beginning / Roe Ethridge",creditHref:"https://loosejoints.biz/products/in-the-beginning"}},{id:"log-perimeter-retracer",date:"2026-10-20",title:"Retracer / Karl Halliday",figure:{file:"log-perimeter-retracer.webp",alt:"Karl Halliday Retracer 书与内页",width:1e3,height:750,caption:"Swiss-bound；文案写 unbound 文本可移位。",credit:"原图 · Perimeter Books · Retracer / Karl Halliday",creditHref:"https://www.perimeterbooks.com/products/karl-halliday-retracer"}},{id:"log-perimeter-byng",date:"2026-10-20",title:"Some Voices Carry / Arini Byng",figure:{file:"log-perimeter-byng.webp",alt:"Arini Byng Some Voices Carry 书封面",width:1e3,height:750,caption:"OTA flaps + Special Edition 签名印尺寸写进文案。",credit:"原图 · Perimeter Editions · Some Voices Carry / Arini Byng",creditHref:"https://www.perimeterbooks.com/products/arini-byng-some-voices-carry"}},{id:"log-pc-autumn-lottery-1",date:"2026-10-20",title:"秋彩票 · 其一",figure:{file:"log-pc-autumn-lottery-1.webp",alt:"日本中世纪彩票秋色静物新帖图一",width:1199,height:654,caption:"同系列换旁白：Autumn, through the medium of…",credit:"Present & Correct / X @presentcorrect · autumn JP lottery",creditHref:"https://x.com/i/status/2112255225419419970"}},{id:"log-pc-autumn-lottery-2",date:"2026-10-20",title:"秋彩票 · 其二",figure:{file:"log-pc-autumn-lottery-2.webp",alt:"日本中世纪彩票秋色静物新帖图二",width:1199,height:629,caption:"同帖四连图之二。",credit:"Present & Correct / X @presentcorrect · autumn JP lottery",creditHref:"https://x.com/i/status/2112255225419419970"}},{id:"log-spbh-glazzard",date:"2026-10-19",title:"Jesse Glazzard",figure:{file:"log-spbh-glazzard.webp",alt:"Jesse Glazzard The Sound of Dirt and Beauty 书封面",width:1400,height:1339,caption:"SPBH 挂 MACK：规格行完整；装帧动机写进判断文案。",credit:"原图 · SPBH Editions / MACK · Jesse Glazzard",creditHref:"https://mackbooks.co.uk/products/the-sound-of-dirt-and-beauty-jesse-glazzard"}},{id:"log-spbh-chronograph",date:"2026-10-19",title:"Chronograph / Nick Haymes",figure:{file:"log-spbh-chronograph.webp",alt:"Nick Haymes Chronograph 书封面",width:1400,height:1339,caption:"同印记另一本：dustjacket 写进规格；评语墙当外部判断。",credit:"原图 · SPBH Editions / MACK · Chronograph / Nick Haymes",creditHref:"https://mackbooks.co.uk/products/chronograph-nick-haymes"}},{id:"log-tbw-sheila",date:"2026-10-19",title:"Sheila / John Divola",figure:{file:"log-tbw-sheila.webp",alt:"John Divola Sheila 书封面",width:1080,height:1260,caption:"规格块：页数·plates·寸/毫米；私人与代表作同页。",credit:"原图 · TBW Books · Sheila / John Divola",creditHref:"https://tbwbooks.com/products/shelia"}},{id:"log-tbw-california",date:"2026-10-19",title:"California Anonymous / Ken Light",figure:{file:"log-tbw-california.webp",alt:"Ken Light California Anonymous 书封面",width:1080,height:1260,caption:"tip-in 原背景布碎片写进规格；Edition of 748。",credit:"原图 · TBW Books · California Anonymous / Ken Light",creditHref:"https://tbwbooks.com/products/california-anonymous"}},{id:"log-pc-jp-lottery-1",date:"2026-10-19",title:"JP lottery autumn",figure:{file:"log-pc-jp-lottery-1.webp",alt:"日本中世纪彩票秋色静物",width:960,height:1200,caption:"同系列换季节：文案只写 Mid century Japanese lottery · Autumn。",credit:"Present & Correct / X @presentcorrect · JP lottery autumn",creditHref:"https://x.com/i/status/2106380573006553466"}},{id:"log-pc-office-1",date:"2026-10-19",title:"office wares",figure:{file:"log-pc-office-1.webp",alt:"1960–1990 年代办公文具静物",width:1200,height:900,caption:"年代并置：60s / 90s / 80s office wares，零形容词。",credit:"Present & Correct / X @presentcorrect · office wares",creditHref:"https://x.com/i/status/2105351726748373033"}},{id:"log-bint-leiter",date:"2026-10-19",title:"Saul Leiter",figure:{file:"log-bint-leiter.webp",alt:"Saul Leiter 摄影书封面帖",width:1200,height:812,caption:"安静号模板：人名 – 书名 + 单封面。",credit:"Bint photoBooks / X @Bintphotobooks · Saul Leiter",creditHref:"https://x.com/i/status/1180119246640168960"}},{id:"log-mack-faces-phases",date:"2026-10-18",title:"Faces and Phases / Zanele Muholi",figure:{file:"log-mack-faces-phases.webp",alt:"Zanele Muholi Faces and Phases 书封面",width:1599,height:1529,caption:"封面 credit 写完整：谁、地点、年、©。规格行在文末一行收束。",credit:"原图 · MACK · Faces and Phases / Zanele Muholi",creditHref:"https://mackbooks.co.uk/products/faces-and-phases-zanele-muholi"}},{id:"log-mack-american-teen",date:"2026-10-18",title:"American Teen / Joseph Szabo",figure:{file:"log-mack-american-teen.webp",alt:"Joseph Szabo American Teen 书封面",width:1599,height:1529,caption:"同站规格模板：装帧·尺寸·页数·月份·ISBN；另有 With new texts by…。",credit:"原图 · MACK · American Teen / Joseph Szabo",creditHref:"https://mackbooks.co.uk/products/american-teen-joseph-szabo"}},{id:"log-bz22-covers-1",date:"2026-10-18",title:"Buffalo Zine Issue 22 covers",figure:{file:"log-bz22-covers-1.webp",alt:"Buffalo Zine 第 22 期多封面拼图",width:1600,height:1142,caption:"多封面并置：看裁切和字让路，不看电商促销条。",credit:"原图 · Buffalo Zine Issue 22 covers",creditHref:"https://www.buffalozine.com/products/issue-22"}},{id:"log-bz22-text-1a",date:"2026-10-18",title:"Buffalo Zine homepage text-as-image",figure:{file:"log-bz22-text-1a.webp",alt:"Buffalo Zine 首页文字排成图物件",width:726,height:1024,caption:"首页课：文字即视觉块，不是导航副标题。",credit:"原图 · Buffalo Zine homepage text-as-image",creditHref:"https://www.buffalozine.com/"}},{id:"log-aperture-2026-shortlist",date:"2026-10-18",title:"Aperture 短名单（机构向增量）",figure:{file:"log-aperture-2026-shortlist.webp",alt:"Aperture 2026 摄影书奖短名单封面组图",width:1024,height:682,caption:"短名单页头图：书脊/封面并置，看序列不看奖杯。",credit:"原图 · Aperture · 2026 PhotoBook Awards / photo Daniel Salemi",creditHref:"https://aperture.org/editorial/announcing-the-2026-photobook-awards-shortlist/"}},{id:"log-pc-lottery-27",date:"2026-10-18",title:"lottery 1955 #27",figure:{file:"log-pc-lottery-27.webp",alt:"1955 年彩票收藏静物",width:1080,height:1350,caption:"图注只写年代和物名，零形容词。",credit:"Present & Correct / X @presentcorrect · lottery 1955 #27",creditHref:"https://x.com/i/status/2102816209075093510"}},{id:"log-pc-diaries-intl-1",date:"2026-10-18",title:"diaries",figure:{file:"log-pc-diaries-intl-1.webp",alt:"多国手账本静物棚拍",width:1600,height:1200,caption:"同功能物件成组：日本/法国/意大利/波兰 diary。",credit:"Present & Correct / X @presentcorrect · diaries",creditHref:"https://x.com/i/status/2100648388870001139"}},{id:"log-pbs-steinmetz",date:"2026-10-18",title:"Mark Steinmetz",figure:{file:"log-pbs-steinmetz.webp",alt:"Mark Steinmetz Rivers and Towns 摄影书页",width:1440,height:1009,caption:"书店帖：书名 + 翻页组图，学序列和纸白。",credit:"Photobookstore / X @photobookstore · Mark Steinmetz",creditHref:"https://x.com/i/status/1821457712917401790"}},{id:"log-tgw-34-cover",date:"2026-10-17",title:"The Gentlewoman n°34 cover",figure:{file:"log-tgw-34-cover.webp",alt:"The Gentlewoman 第 34 期封面 splash",width:1155,height:1500,caption:"n°34 封面：人像占满，刊名很小，首页 splash 就这一张。",credit:"原图 · The Gentlewoman n°34 cover",creditHref:"https://thegentlewoman.co.uk/"}},{id:"log-tgw-autumn-durald",date:"2026-10-17",title:"Autumn Durald Arkapaw",figure:{file:"log-tgw-autumn-durald.webp",alt:"Autumn Durald Arkapaw 横向肖像",width:1400,height:583,caption:"Library 内页用图：宽画幅人像，图注写穿什么比写氛围感有用。",credit:"原图 · The Gentlewoman Library · Autumn Durald Arkapaw",creditHref:"https://thegentlewoman.co.uk/library/autumn-durald-arkapaw"}},{id:"log-fm-38-lev-tanju",date:"2026-10-17",title:"n°38 Lev Tanju",figure:{file:"log-fm-38-lev-tanju.webp",alt:"Fantastic Man 第 38 期 Lev Tanju 封面",width:1376,height:1701,caption:"封面：一人占满，身份判断写在文案里，刊名让路。",credit:"Fantastic Man / X @fantasticman · n°38 Lev Tanju",creditHref:"https://x.com/i/status/1778447409288188408"}},{id:"log-fm-37-armani",date:"2026-10-17",title:"n°37 Armani",figure:{file:"log-fm-37-armani.webp",alt:"Fantastic Man 第 37 期 Giorgio Armani 封面",width:1376,height:1701,caption:"Armani 封面：近景肖像，摄影 Alasdair McLellan。",credit:"Fantastic Man / X @fantasticman · n°37 Armani",creditHref:"https://x.com/i/status/1714949852222697562"}},{id:"log-mack-cosmos-1",date:"2026-10-17",title:"Collier Schorr COSMOS",figure:{file:"log-mack-cosmos-1.webp",alt:"Collier Schorr COSMOS 摄影书内页或封面",width:1385,height:1800,caption:"COSMOS：书页竖构图，看裁切和留白，不看滤镜。",credit:"MACK / X @MACK_books · Collier Schorr COSMOS",creditHref:"https://x.com/MACK_books"}},{id:"log-mack-color-black-1",date:"2026-10-17",title:"The Color Black",figure:{file:"log-mack-color-black-1.webp",alt:"The Color Black 书相关静物/建筑图",width:1024,height:806,caption:"The Color Black：物件与建筑并置，文案只点书名和摄影师。",credit:"MACK / X @MACK_books · The Color Black",creditHref:"https://x.com/MACK_books"}},{id:"log-tgw-cathy-horyn",date:"2026-10-17",title:"X · @thegentlewoman / @fantasticman",figure:{file:"log-tgw-cathy-horyn.webp",alt:"Cathy Horyn 在农场的肖像",width:1400,height:1118,caption:"长访配图：环境人像，不是棚拍网红闪片。",credit:"The Gentlewoman / X @thegentlewoman · Cathy Horyn",creditHref:"https://x.com/i/status/1706667794564325559"}},{id:"2026-10-17-X-其他",date:"2026-10-17",title:"X · 其他",imageNote:"原图未取到。",note:"@lensculture 近帖几乎全是奖赛征稿；偶有作品如 Kyosei Yoshiike Salvage，可当下家入口，不跟时间线。",href:"https://x.com/i/status/1809322072876908639"},{id:"log-mg-mirror-cover",date:"2026-10-16",title:"MacGuffin（新开）",figure:{file:"log-mg-mirror-cover.webp",alt:"MacGuffin 第 16 期 The Mirror 封面：一人拿手机自拍，绿色手写 M 压在画面上",width:800,height:1037,caption:"封面：手写大 M 压在自拍上，刊头字很小，主题 The Mirror 放在下面。",credit:"原图 · MacGuffin N°16 The Mirror 封面",creditHref:"https://www.macguffinmagazine.com/issues/macguffin-the-mirror"}},{id:"2026-10-16-magCulture-Journal-新开",date:"2026-10-16",title:"magCulture Journal（新开）",imageNote:"原图未取到。",note:"伦敦杂志店 + Journal + Podcast。首页一句 We love magazines，是策展口吻，不是内容农场。",href:"https://magculture.com/"},{id:"log-pc-lottery-1952",date:"2026-10-16",title:"1952 lottery ticket #30",figure:{file:"log-pc-lottery-1952.webp",alt:"一张日本短期宝くじ，票面为昭和28年第4回，娃娃与鲤鱼旗",width:1080,height:1350,caption:"收藏帖里的第 30 张。票面印着昭和28年、第4回短期宝くじ，字和图在同一张纸上。",credit:"Present & Correct / X @presentcorrect · 1952 lottery ticket #30",creditHref:"https://x.com/presentcorrect"}},{id:"log-pc-jp-lottery-26",date:"2026-10-16",title:"Autumn",figure:{file:"log-pc-jp-lottery-26.webp",alt:"一张日本彩票，票面为昭和29年第26回东京都10日くじ，两个和服人物",width:1080,height:1350,caption:"同一组日本彩票里的一张。昭和29年、第26回東京都10日くじ，看版式和配色就够。",credit:"Present & Correct / X @presentcorrect · Mid-century Japanese lottery · Autumn",creditHref:"https://x.com/presentcorrect"}},{id:"log-pc-office-1016",date:"2026-10-16",title:"1960s–1990s office wares",figure:{file:"log-pc-office-1016.webp",alt:"透明塑料盒里的红剪刀，黄底上压着绿、蓝两块",width:1400,height:1050,caption:"办公器物静物之一：透明盒、黄底、红剪刀对齐，背景留白。",credit:"Present & Correct / X @presentcorrect · 1960s–1990s office wares",creditHref:"https://x.com/presentcorrect"}},{id:"log-mg-lalanne-catbar",date:"2026-10-16",title:"Lalanne Cat Bar 1968",figure:{file:"log-mg-lalanne-catbar.webp",alt:"黄铜猫形酒吧柜 Lalanne Cat Bar，柜身打开，里面摆着酒瓶",width:592,height:592,caption:"Lalanne Cat Bar，1968。图注只需要物件名、作者、年份。",credit:"MacGuffin research dump / X @MacGuffinMag · Lalanne Cat Bar 1968",creditHref:"https://x.com/MacGuffinMag"}},{id:"log-mg-sottsass-carlton",date:"2026-10-16",title:"Sottsass Carlton / Memphis 1981",figure:{file:"log-mg-sottsass-carlton.webp",alt:"Ettore Sottsass 的 Carlton 书架，彩色几何块叠在水磨石底座上",width:900,height:986,caption:"Sottsass Carlton，Memphis，1981。同一套研究日记写法。",credit:"MacGuffin research dump / X @MacGuffinMag · Sottsass Carlton / Memphis 1981",creditHref:"https://x.com/MacGuffinMag"}},{id:"2026-10-16-X-aperturefnd",date:"2026-10-16",title:"X · @aperturefnd",imageNote:"这条帖没有附图，短名单页打不开。",note:"10-08：2026 Paris Photo–Aperture PhotoBook Awards，35 本短名单。",href:"https://x.com/aperturefnd"},{id:"2026-10-16-X-magculture",date:"2026-10-16",title:"X · @magculture",imageNote:"原图未取到。",note:"近帖偏店铺活动和转发，图片策展已经迁到网站和 Instagram。",href:"https://x.com/magculture"},{id:"2026-10-16-X-foam-amsterdam",date:"2026-10-16",title:"X · @foam_amsterdam",imageNote:"原图未取到。",note:"时间线停在 2022：Foam Talent 作品发布、Paul Kooiker 展览。",href:"https://x.com/foam_amsterdam"},{id:"2026-10-15-You-Iwata-深挖",date:"2026-10-15",title:"You Iwata（深挖）",imageNote:"原图未取到（站内图受保护）。",note:"首页先放站旨（「光は、翳りがあってこそ」这类），再按春夏秋冬 / 祭 / 旅 / 人像分章，每章一句短诗当题记。",href:"https://youiwata.com/"},{id:"2026-10-15-Kinfolk-再看首页",date:"2026-10-15",title:"Kinfolk（再看首页）",imageNote:"原图未取到。",note:"用一期主题收住整站：「THE PLAY ISSUE」，不是无限 feed。",href:"https://www.kinfolk.com/"},{id:"2026-10-15-HARU-IN-FRAME-深挖声明",date:"2026-10-15",title:"HARU IN FRAME（深挖声明）",imageNote:"原图未取到。",note:"STATEMENT 放在作品前面：在 AI 能画图的年代，为什么还拍有重量的实物。",href:"https://haru.photo/"},{id:"2026-10-15-Premium-再看栏目语气",date:"2026-10-15",title:"&Premium（再看栏目语气）",imageNote:"原图未取到。",note:"封面语很短：「住まいと心を、整える。」",href:"https://andpremium.jp/"},{id:"2026-10-15-BRUTUS-jp-新开",date:"2026-10-15",title:"BRUTUS.jp（新开）",imageNote:"原图未取到。",note:"号驱动：「No.1063『犬と、暮らせば。』」，用主题把一期收起来。",href:"https://brutus.jp/"},{id:"2026-10-15-Casa-BRUTUS-文章页",date:"2026-10-15",title:"Casa BRUTUS 文章页",imageNote:"原图未取到。文章页链接没有留下。",note:"标题就是图注判断：「帆を思わせる非対称の天板と長さが特徴的なテーブル。」"},{id:"2026-10-15-X-POPEYE-Magazine",date:"2026-10-15",title:"X · @POPEYE_Magazine",imageNote:"原图未取到（X 需登录，抓不到图）。",note:"山崎蒸馏所 4 图跟拍；两国古着屋，写具体买了哪三件；高円寺两人挖宝散步。",href:"https://x.com/POPEYE_Magazine"},{id:"2026-10-15-X-CasaBRUTUS",date:"2026-10-15",title:"X · @CasaBRUTUS",imageNote:"原图未取到（X 需登录，抓不到图）。",note:"「帆を思わせる非対称の天板…」；竹艺展；#今日の名建築 温泉宿 2 图；天神书店。",href:"https://x.com/CasaBRUTUS"},{id:"2026-10-15-X-AestheticsJapan",date:"2026-10-15",title:"X · @AestheticsJapan",imageNote:"原图未取到（X 需登录，抓不到图）。",note:"六本木交叉口 / Tokyo Tower / Midnight Tokyo；每帖模板：📍地点 📸作者 🔗IG。",href:"https://x.com/AestheticsJapan"},{id:"2026-10-15-X-akinecoco987",date:"2026-10-15",title:"X · @akinecoco987",imageNote:"原图未取到（X 需登录，抓不到图）。",note:"「これが私の帰り道。」「夜へと変わる空を眺めていた。」+ 同一时刻的多张图。",href:"https://x.com/akinecoco987"},{id:"log-milk-hybrid",date:"2026-10-15",title:"MilK MAGAZINE JAPON（新开）",figure:{file:"log-milk-hybrid.webp",alt:"MilK Japon 时装企划 HYBRID THEORY 的一页",width:849,height:1280,caption:"时装页：图占满，栏目名和 credit 都收得很小。",credit:"原图 · MilK Japon《HYBRID THEORY》",creditHref:"https://milkjapon.com/fashion/hybrid-theory/"}},{id:"log-fiu-1980",date:"2026-10-15",title:"Monuments Historiques · 1980",figure:{file:"log-fiu-1980.webp",alt:"Monuments Historiques 杂志 1980 年第 107 期封面",width:1e3,height:1254,caption:"1980 · n°107：刊头小写压在上方，大图占满下半版。",credit:"原图 · Monuments Historiques 封面 via Fonts In Use",creditHref:"https://fontsinuse.com/uses/80713/monuments-historiques-covers-1980-1985"}},{id:"log-fiu-1981",date:"2026-10-15",title:"Monuments Historiques · 1981",figure:{file:"log-fiu-1981.webp",alt:"Monuments Historiques 杂志 1981 年第 116 期封面",width:1e3,height:1225,caption:"1981 · n°116：同一个刊头锚点，封面图换了也认得出是同一本。",credit:"原图 · Monuments Historiques 封面 via Fonts In Use",creditHref:"https://fontsinuse.com/uses/80713/monuments-historiques-covers-1980-1985"}},{id:"2026-10-15-X-presentcorrect",date:"2026-10-15",title:"X · @presentcorrect",imageNote:"原图未取到（X 需登录，抓不到图）。",note:"1952 年彩票收藏第 30 张；中世纪日本彩票秋组图；60/80/90 年代办公室器物 4 图静物。",href:"https://x.com/presentcorrect"},{id:"2026-10-15-X-aperturefnd",date:"2026-10-15",title:"X · @aperturefnd",imageNote:"原图未取到（X 需登录，抓不到图）。",note:"2026 Paris Photo–Aperture PhotoBook Awards 35 本短名单。",href:"https://x.com/aperturefnd"}],_m=[{id:"li-enako-gavan",date:"2026-10-27",title:"えなこ · Gavan",figure:{file:"li-20261028-enako-gavan.webp",alt:"えなこ穿蓝舞台服，护目镜和耳机，侧身站在树前",width:1108,height:1477,caption:"蓝舞台服，护目镜和耳机，侧身站在树前。站姿稳，是来告知的。",credit:"喜欢名单 · えなこ · Gavan 舞台挨拶 · 点图进原帖",creditHref:"https://x.com/enako_cos/status/2115020589652189470"}},{id:"li-iori-kyurun",date:"2026-10-27",title:"伊織もえ",figure:{file:"li-20261028-iori-kyurun.webp",alt:"伊織もえ戴灰兔耳，穿浅蓝内衣，横躺在木地板上",width:2500,height:1406,caption:"灰兔耳，浅蓝内衣，横躺在木地板上。粉丝带垂下来，是きゅるん。",credit:"喜欢名单 · 伊織もえ · きゅるん · 点图进原帖",creditHref:"https://x.com/iorimoe_five/status/2114914638412513733"}},{id:"li-amatsu-front",date:"2026-10-27",title:"あまつまりな",figure:{file:"li-20261028-amatsu-front.webp",alt:"あまつまりな穿白紫泳装，正面站在室内",width:1200,height:1600,caption:"白紫泳装正面，窗帘和吊灯在旁边。人站直，构图干净。",credit:"喜欢名单 · あまつまりな · まえとうしろ · 点图进原帖",creditHref:"https://x.com/R_Ap8_/status/2115036271051743448"}},{id:"li-yua-gr",date:"2026-10-27",title:"三上悠亜 · GR",figure:{file:"li-20261028-yua-gr.webp",alt:"三上悠亜穿格子比基尼，一手扶额头，站在泳池栏杆边",width:1066,height:1600,caption:"格子比基尼，一手扶着额头，站在泳池栏杆边。",credit:"喜欢名单 · 三上悠亜 · GR · 点图进原帖",creditHref:"https://x.com/yua_mikami/status/2114676656745091283"}},{id:"li-yua-walk",date:"2026-10-27",title:"三上悠亜 · 走路",figure:{file:"li-20261028-yua-walk.webp",alt:"三上悠亜背对镜头走向泳池，白镂空衫，肩上一个大白包",width:1066,height:1600,caption:"背对镜头往池边走，白镂空衫，肩上一个大白包。同一次 GR。",credit:"喜欢名单 · 三上悠亜 · GR 走路 · 点图进原帖",creditHref:"https://x.com/yua_mikami/status/2114676656745091283"}},{id:"li-kokoro-usagi",date:"2026-10-26",title:"篠崎こころ",figure:{file:"li-20261028-kokoro-usagi.webp",alt:"篠崎こころ金发兔耳，粉条纹衬衫滑到肩下",width:1200,height:1600,caption:"金发兔耳，粉条纹衬衫滑到肩下。Young Gangan。",credit:"喜欢名单 · 篠崎こころ · うさぎ · Young Gangan · 点图进原帖",creditHref:"https://x.com/kokoro777pp/status/2114679117778141586"}},{id:"li-karin-tulip",date:"2026-10-20",title:"小渕花梨",figure:{file:"li-karin-tulip.webp",alt:"小渕花梨，橙毛衣，抱着一把郁金香，背后是红砖墙",width:1280,height:1600,caption:"橙毛衣，一把郁金香，红砖墙。颜色暖，人安静。",credit:"喜欢名单 · 小渕花梨 · note 主页 · 点图进主页",creditHref:"https://note.com/karin_obuchi"}},{id:"li-hydrangea",date:"2026-10-20",title:"绣球",figure:{file:"li-hydrangea.webp",alt:"绣球花叶子前，碎花深色短袖，齐刘海",width:1080,height:1350,caption:"绣球叶子挡着半边，碎花深色短袖，齐刘海。花是配的，人是看的。",credit:"喜欢名单 · strawbelly · 绣球花 · 点图进主页",creditHref:"https://x.com/strawbelly"}},{id:"li-friday-mizuki",date:"2026-10-20",title:"金曜美人 · 麻倉瑞季",figure:{file:"li-friday-mizuki.webp",alt:"金曜美人，麻倉瑞季，浅蓝蕾丝，侧脸贴过来",width:1200,height:790,caption:"麻倉瑞季，浅蓝蕾丝，脸贴过来。近，但不挤。",credit:"喜欢名单 · 金曜美人 · 麻倉瑞季 · 点图进原页",creditHref:"https://friday.gold/gravure/article/444633"}},{id:"li-beautybeast-cos",date:"2026-10-20",title:"beautybeast",figure:{file:"li-beautybeast-cos.webp",alt:"beautybeast cos，红裙子和珍珠项链，站在玫瑰拱门下",width:800,height:1200,caption:"红裙子，珍珠，玫瑰拱门。cos 贝尔，甜和正式叠在一起。",credit:"喜欢名单 · beautybeast cos · 点图去找原帖",creditHref:"https://x.com/search?q=beautybeast%20cos&f=media"}},{id:"li-kokoro-swim",date:"2026-10-20",title:"kokoro",figure:{file:"li-kokoro-swim.webp",alt:"kokoro 粉色短发，在泳池边比耶，穿浅蓝色泳衣",width:1200,height:1600,caption:"泳池边，粉色短发，比了个耶。颜色亮，人更亮。",credit:"喜欢名单 · kokoro · 日常搜图 · 点图进主页",creditHref:"https://x.com/kokoro777pp"}},{id:"li-iori-stripe",date:"2026-10-20",title:"iori",figure:{file:"li-iori-stripe.webp",alt:"iori 穿蓝条纹衬衫，站在老房子里，头顶一盏灯泡",width:900,height:1600,caption:"蓝条纹衬衫，老房子，头顶一盏白灯泡。人站得稳。",credit:"喜欢名单 · iori · 日常搜图 · 点图进主页",creditHref:"https://x.com/iorimoe_five"}},{id:"li-yua-plaid",date:"2026-10-20",title:"yua",figure:{file:"li-yua-plaid.webp",alt:"yua 穿格子挂脖裙，在电梯镜子前自拍",width:1200,height:1600,caption:"格子挂脖裙，马尾，电梯镜子里自拍。光是平的，人还是好看。",credit:"喜欢名单 · yua · 日常搜图 · 点图进主页",creditHref:"https://x.com/yua_mikami"}},{id:"li-enako-yk",date:"2026-10-20",title:"えなこ",figure:{file:"li-enako-yk.webp",alt:"えなこ，白兔耳，双手比心，ヤングキング封面",width:1062,height:1500,caption:"兔耳，双手比心，笑得很开。甜，手势干净。",credit:"喜欢名单 · enako · ヤングキング封面 · 点图进原帖",creditHref:"https://x.com/enako_cos/status/2099342591829688659"}}],vm=[{id:"li-enako-gavan",kicker:"01 · 稳",judgment:"舞台服，站姿稳。这张是来告知的，不是来撒娇的。",lines:["蓝紧身衣从领口收到脚踝，浅色条纹把侧线画出来。护目镜推在额头上，耳机扣着，手套是黑的，指节有金属片。","人侧过身，脸转回来看镜头。背后是树和云，不是棚拍的白。天是亮的，衣服是一块完整的蓝。","好看在站：重心在后腿，肩是平的。道具都在脸上和手上，人没有被它们拆开。"]},{id:"li-iori-kyurun",kicker:"02 · 横",judgment:"灰兔耳，浅蓝内衣，横在木地板上。粉丝带是软的，人不是。",lines:["横构图，人从左下躺到画面中间。一只手撑地，腿叠着，紫拖鞋只露一只。兔耳是毛的，比头还高。","粉丝带从颈后垂到胸口。内衣是浅蓝蕾丝，室外的光是白的，背景的人和窗都虚掉了。","好看在横：脸在上半，身体沿着地板铺开。きゅるん在耳朵和丝带，不在表情。"]},{id:"li-amatsu-front",kicker:"03 · 正",judgment:"泳装正面，人站直。房间是配的，构图是干净的。",lines:["竖构图，人占中间。白、深蓝、浅紫三块颜色用金边分开，高领把脖子收住。手臂垂着，没有比手势。","左边是白窗帘，头顶一盏玻璃吊灯，右边一盏台灯。光是室内的，没有打到过曝。","好看在正：肩和髋是侧过去的，脸是正的。正面给全了，背景没有抢。"]},{id:"li-yua-gr",kicker:"04 · 池",judgment:"格子比基尼，一手放在额头上。泳池是蓝的，人是站着的。",lines:["竖构图，人在栏杆旁边。比基尼是浅绿色格子加粉条，肩带是粉的。左手抬起来，手心贴着发际。","后面是金玻璃楼和棕榈，水是亮的。栏杆是圆的不锈钢，占了左下，把人从池边切出来。","好看在手：抬起来的那只手是这张的停顿。不笑很大，站着就够。"]}],Rl=la.memo(function({className:e="",beamOpacity:t=.85,from:n="#ffb199",via:r="#ff3b24",to:a="#ffe1a8"}){const s=la.useId().replace(/:/g,""),o=["M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875","M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867","M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859","M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851","M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843","M-345 -229C-345 -229 -277 176 187 303C651 430 719 835 719 835","M-338 -237C-338 -237 -270 168 194 295C658 422 726 827 726 827","M-331 -245C-331 -245 -263 160 201 287C665 414 733 819 733 819","M-324 -253C-324 -253 -256 152 208 279C672 406 740 811 740 811","M-317 -261C-317 -261 -249 144 215 271C679 398 747 803 747 803","M-310 -269C-310 -269 -242 136 222 263C686 390 754 795 754 795","M-303 -277C-303 -277 -235 128 229 255C693 382 761 787 761 787","M-296 -285C-296 -285 -228 120 236 247C700 374 768 779 768 779","M-289 -293C-289 -293 -221 112 243 239C707 366 775 771 775 771","M-282 -301C-282 -301 -214 104 250 231C714 358 782 763 782 763","M-275 -309C-275 -309 -207 96 257 223C721 350 789 755 789 755","M-268 -317C-268 -317 -200 88 264 215C728 342 796 747 796 747","M-261 -325C-261 -325 -193 80 271 207C735 334 803 739 803 739","M-254 -333C-254 -333 -186 72 278 199C742 326 810 731 810 731","M-247 -341C-247 -341 -179 64 285 191C749 318 817 723 817 723","M-240 -349C-240 -349 -172 56 292 183C756 310 824 715 824 715","M-233 -357C-233 -357 -165 48 299 175C763 302 831 707 831 707","M-226 -365C-226 -365 -158 40 306 167C770 294 838 699 838 699","M-219 -373C-219 -373 -151 32 313 159C777 286 845 691 845 691","M-212 -381C-212 -381 -144 24 320 151C784 278 852 683 852 683","M-205 -389C-205 -389 -137 16 327 143C791 270 859 675 859 675","M-198 -397C-198 -397 -130 8 334 135C798 262 866 667 866 667","M-191 -405C-191 -405 -123 0 341 127C805 254 873 659 873 659","M-184 -413C-184 -413 -116 -8 348 119C812 246 880 651 880 651","M-177 -421C-177 -421 -109 -16 355 111C819 238 887 643 887 643","M-170 -429C-170 -429 -102 -24 362 103C826 230 894 635 894 635","M-163 -437C-163 -437 -95 -32 369 95C833 222 901 627 901 627","M-156 -445C-156 -445 -88 -40 376 87C840 214 908 619 908 619","M-149 -453C-149 -453 -81 -48 383 79C847 206 915 611 915 611","M-142 -461C-142 -461 -74 -56 390 71C854 198 922 603 922 603","M-135 -469C-135 -469 -67 -64 397 63C861 190 929 595 929 595","M-128 -477C-128 -477 -60 -72 404 55C868 182 936 587 936 587","M-121 -485C-121 -485 -53 -80 411 47C875 174 943 579 943 579","M-114 -493C-114 -493 -46 -88 418 39C882 166 950 571 950 571","M-107 -501C-107 -501 -39 -96 425 31C889 158 957 563 957 563","M-100 -509C-100 -509 -32 -104 432 23C896 150 964 555 964 555","M-93 -517C-93 -517 -25 -112 439 15C903 142 971 547 971 547","M-86 -525C-86 -525 -18 -120 446 7C910 134 978 539 978 539","M-79 -533C-79 -533 -11 -128 453 -1C917 126 985 531 985 531","M-72 -541C-72 -541 -4 -136 460 -9C924 118 992 523 992 523","M-65 -549C-65 -549 3 -144 467 -17C931 110 999 515 999 515","M-58 -557C-58 -557 10 -152 474 -25C938 102 1006 507 1006 507","M-51 -565C-51 -565 17 -160 481 -33C945 94 1013 499 1013 499","M-44 -573C-44 -573 24 -168 488 -41C952 86 1020 491 1020 491","M-37 -581C-37 -581 31 -176 495 -49C959 78 1027 483 1027 483"];return k.jsx("div",{className:`beams ${e}`.trim(),children:k.jsxs("svg",{className:"beams__svg",width:"100%",height:"100%",viewBox:"0 0 696 316",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[k.jsx("path",{d:"M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843M-345 -229C-345 -229 -277 176 187 303C651 430 719 835 719 835M-338 -237C-338 -237 -270 168 194 295C658 422 726 827 726 827M-331 -245C-331 -245 -263 160 201 287C665 414 733 819 733 819M-324 -253C-324 -253 -256 152 208 279C672 406 740 811 740 811M-317 -261C-317 -261 -249 144 215 271C679 398 747 803 747 803M-310 -269C-310 -269 -242 136 222 263C686 390 754 795 754 795M-303 -277C-303 -277 -235 128 229 255C693 382 761 787 761 787M-296 -285C-296 -285 -228 120 236 247C700 374 768 779 768 779M-289 -293C-289 -293 -221 112 243 239C707 366 775 771 775 771M-282 -301C-282 -301 -214 104 250 231C714 358 782 763 782 763M-275 -309C-275 -309 -207 96 257 223C721 350 789 755 789 755M-268 -317C-268 -317 -200 88 264 215C728 342 796 747 796 747M-261 -325C-261 -325 -193 80 271 207C735 334 803 739 803 739M-254 -333C-254 -333 -186 72 278 199C742 326 810 731 810 731M-247 -341C-247 -341 -179 64 285 191C749 318 817 723 817 723M-240 -349C-240 -349 -172 56 292 183C756 310 824 715 824 715M-233 -357C-233 -357 -165 48 299 175C763 302 831 707 831 707M-226 -365C-226 -365 -158 40 306 167C770 294 838 699 838 699M-219 -373C-219 -373 -151 32 313 159C777 286 845 691 845 691M-212 -381C-212 -381 -144 24 320 151C784 278 852 683 852 683M-205 -389C-205 -389 -137 16 327 143C791 270 859 675 859 675M-198 -397C-198 -397 -130 8 334 135C798 262 866 667 866 667M-191 -405C-191 -405 -123 0 341 127C805 254 873 659 873 659M-184 -413C-184 -413 -116 -8 348 119C812 246 880 651 880 651M-177 -421C-177 -421 -109 -16 355 111C819 238 887 643 887 643M-170 -429C-170 -429 -102 -24 362 103C826 230 894 635 894 635M-163 -437C-163 -437 -95 -32 369 95C833 222 901 627 901 627M-156 -445C-156 -445 -88 -40 376 87C840 214 908 619 908 619M-149 -453C-149 -453 -81 -48 383 79C847 206 915 611 915 611M-142 -461C-142 -461 -74 -56 390 71C854 198 922 603 922 603M-135 -469C-135 -469 -67 -64 397 63C861 190 929 595 929 595M-128 -477C-128 -477 -60 -72 404 55C868 182 936 587 936 587M-121 -485C-121 -485 -53 -80 411 47C875 174 943 579 943 579M-114 -493C-114 -493 -46 -88 418 39C882 166 950 571 950 571M-107 -501C-107 -501 -39 -96 425 31C889 158 957 563 957 563M-100 -509C-100 -509 -32 -104 432 23C896 150 964 555 964 555M-93 -517C-93 -517 -25 -112 439 15C903 142 971 547 971 547M-86 -525C-86 -525 -18 -120 446 7C910 134 978 539 978 539M-79 -533C-79 -533 -11 -128 453 -1C917 126 985 531 985 531M-72 -541C-72 -541 -4 -136 460 -9C924 118 992 523 992 523M-65 -549C-65 -549 3 -144 467 -17C931 110 999 515 999 515M-58 -557C-58 -557 10 -152 474 -25C938 102 1006 507 1006 507M-51 -565C-51 -565 17 -160 481 -33C945 94 1013 499 1013 499M-44 -573C-44 -573 24 -168 488 -41C952 86 1020 491 1020 491M-37 -581C-37 -581 31 -176 495 -49C959 78 1027 483 1027 483M-30 -589C-30 -589 38 -184 502 -57C966 70 1034 475 1034 475M-23 -597C-23 -597 45 -192 509 -65C973 62 1041 467 1041 467M-16 -605C-16 -605 52 -200 516 -73C980 54 1048 459 1048 459M-9 -613C-9 -613 59 -208 523 -81C987 46 1055 451 1055 451M-2 -621C-2 -621 66 -216 530 -89C994 38 1062 443 1062 443M5 -629C5 -629 73 -224 537 -97C1001 30 1069 435 1069 435M12 -637C12 -637 80 -232 544 -105C1008 22 1076 427 1076 427M19 -645C19 -645 87 -240 551 -113C1015 14 1083 419 1083 419",stroke:`url(#${s}-wash)`,strokeOpacity:"0.05",strokeWidth:"0.5"}),o.map((l,c)=>k.jsx(Tt.path,{d:l,stroke:`url(#${s}-beam-${c})`,strokeOpacity:t,strokeWidth:"0.5"},"path-"+c)),k.jsxs("defs",{children:[o.map((l,c)=>k.jsxs(Tt.linearGradient,{id:`${s}-beam-${c}`,initial:{x1:"0%",x2:"0%",y1:"0%",y2:"0%"},animate:{x1:["0%","100%"],x2:["0%","95%"],y1:["0%","100%"],y2:["0%",`${93+Math.random()*8}%`]},transition:{duration:Math.random()*10+10,ease:"easeInOut",repeat:1/0,delay:Math.random()*10},children:[k.jsx("stop",{stopColor:n,stopOpacity:"0"}),k.jsx("stop",{stopColor:n}),k.jsx("stop",{offset:"32.5%",stopColor:r}),k.jsx("stop",{offset:"100%",stopColor:a,stopOpacity:"0"})]},`gradient-${c}`)),k.jsxs("radialGradient",{id:`${s}-wash`,cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(352 34) rotate(90) scale(555 1560.62)",children:[k.jsx("stop",{offset:"0.0666667",stopColor:"#d4d4d4"}),k.jsx("stop",{offset:"0.243243",stopColor:"#d4d4d4"}),k.jsx("stop",{offset:"0.43594",stopColor:"white",stopOpacity:"0"})]})]})]})})});function Pl({children:i,className:e,delay:t=0,duration:n=.7,offset:r=28,direction:a="up",inView:s=!1,inViewMargin:o="-40px",blur:l="12px"}){const c=et.useRef(null),h=bl(c,{once:!0,margin:o}),u=!s||h,f=a==="left"||a==="right"?"x":"y",m=a==="right"||a==="down"?-r:r,_={hidden:{[f]:m,opacity:0,filter:`blur(${l})`},visible:{[f]:0,opacity:1,filter:"blur(0px)"}};return k.jsx(yr,{children:k.jsx(Tt.div,{ref:c,className:e,initial:"hidden",animate:u?"visible":"hidden",exit:"hidden",variants:_,transition:{delay:.04+t,duration:n,ease:xr},children:i})})}const Ul=et.createContext(void 0);function Ll({children:i,className:e="",containerClassName:t=""}){const n=et.useRef(null),[r,a]=et.useState(!1),s=wr();function o(c){if(s||!n.current)return;const{left:h,top:u,width:f,height:m}=n.current.getBoundingClientRect(),_=(c.clientX-h-f/2)/18,M=(c.clientY-u-m/2)/18;n.current.style.transform=`rotateY(${_}deg) rotateX(${-M}deg)`}function l(){a(!1),n.current&&(n.current.style.transform="rotateY(0deg) rotateX(0deg)")}return k.jsx(Ul.Provider,{value:[r,a],children:k.jsx("div",{className:`card3d-scene ${t}`.trim(),style:{perspective:"1000px"},children:k.jsx("div",{ref:n,className:`card3d ${e}`.trim(),style:{transformStyle:"preserve-3d"},onMouseEnter:()=>a(!0),onMouseMove:o,onMouseLeave:l,children:i})})})}function Dl({children:i,className:e=""}){return k.jsx("div",{className:`card3d-body ${e}`.trim(),style:{transformStyle:"preserve-3d"},children:i})}function ds({className:i="",reverse:e=!1,pauseOnHover:t=!1,children:n,vertical:r=!1,repeat:a=4,...s}){return k.jsx("div",{...s,className:`marquee ${i}`.trim(),"data-vertical":r?"true":"false","data-reverse":e?"true":"false","data-pause":t?"true":"false",style:{"--duration":r?"28s":"36s","--gap":"2.4rem",...s.style},children:Array.from({length:a},(o,l)=>k.jsx("div",{className:"marquee__track",children:n},l))})}function Il({gradientFirst:i="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, .08) 0, hsla(210, 100%, 55%, .02) 50%, hsla(210, 100%, 45%, 0) 80%)",gradientSecond:e="radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .06) 0, hsla(210, 100%, 55%, .02) 80%, transparent 100%)",gradientThird:t="radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .04) 0, hsla(210, 100%, 45%, .02) 80%, transparent 100%)",translateY:n=-350,width:r=560,height:a=1380,smallWidth:s=240,duration:o=7,xOffset:l=100}={}){return wr()?null:k.jsxs(Tt.div,{className:"ace-spot",initial:{opacity:0},animate:{opacity:1},transition:{duration:1.5},children:[k.jsxs(Tt.div,{className:"ace-spot__side ace-spot__side--left",animate:{x:[0,l,0]},transition:{duration:o,repeat:1/0,repeatType:"reverse",ease:"easeInOut"},children:[k.jsx("div",{className:"ace-spot__beam",style:{transform:`translateY(${n}px) rotate(-45deg)`,background:i,width:`${r}px`,height:`${a}px`}}),k.jsx("div",{className:"ace-spot__beam ace-spot__beam--origin-left",style:{transform:"rotate(-45deg) translate(5%, -50%)",background:e,width:`${s}px`,height:`${a}px`}}),k.jsx("div",{className:"ace-spot__beam ace-spot__beam--origin-left",style:{transform:"rotate(-45deg) translate(-180%, -70%)",background:t,width:`${s}px`,height:`${a}px`}})]}),k.jsxs(Tt.div,{className:"ace-spot__side ace-spot__side--right",animate:{x:[0,-l,0]},transition:{duration:o,repeat:1/0,repeatType:"reverse",ease:"easeInOut"},children:[k.jsx("div",{className:"ace-spot__beam ace-spot__beam--right",style:{transform:`translateY(${n}px) rotate(45deg)`,background:i,width:`${r}px`,height:`${a}px`}}),k.jsx("div",{className:"ace-spot__beam ace-spot__beam--right ace-spot__beam--origin-right",style:{transform:"rotate(45deg) translate(-5%, -50%)",background:e,width:`${s}px`,height:`${a}px`}}),k.jsx("div",{className:"ace-spot__beam ace-spot__beam--right ace-spot__beam--origin-right",style:{transform:"rotate(45deg) translate(180%, -70%)",background:t,width:`${s}px`,height:`${a}px`}})]})]})}function Nl(...i){return i.filter(Boolean).join(" ")}const Fl={char:.03,word:.05,line:.1},si={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.05}},exit:{transition:{staggerChildren:.05,staggerDirection:-1}}},Ol={hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},Bl={blur:{container:si,item:{hidden:{opacity:0,filter:"blur(12px)"},visible:{opacity:1,filter:"blur(0px)"},exit:{opacity:0,filter:"blur(12px)"}}},"fade-in-blur":{container:si,item:{hidden:{opacity:0,y:20,filter:"blur(12px)"},visible:{opacity:1,y:0,filter:"blur(0px)"},exit:{opacity:0,y:20,filter:"blur(12px)"}}},scale:{container:si,item:{hidden:{opacity:0,scale:0},visible:{opacity:1,scale:1},exit:{opacity:0,scale:0}}},fade:{container:si,item:{hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}}},slide:{container:si,item:{hidden:{opacity:0,y:20},visible:{opacity:1,y:0},exit:{opacity:0,y:20}}}},Eo=la.memo(({segment:i,variants:e,per:t,segmentWrapperClassName:n})=>{const r=t==="line"?k.jsx(Tt.span,{variants:e,className:"block",children:i}):t==="word"?k.jsx(Tt.span,{"aria-hidden":"true",variants:e,className:"inline-block whitespace-pre",children:i}):k.jsx(Tt.span,{className:"inline-block whitespace-pre",children:i.split("").map((s,o)=>k.jsx(Tt.span,{"aria-hidden":"true",variants:e,className:"inline-block whitespace-pre",children:s},`char-${o}`))});if(!n)return r;const a=t==="line"?"block":"inline-block";return k.jsx("span",{className:Nl(a,n),children:r})});Eo.displayName="AnimationComponent";const zl=(i,e)=>e==="line"?i.split(`
`):i.split(/(\s+)/),Mr=i=>i?typeof i=="object"&&"transition"in i:!1,us=(i,e)=>{if(!e)return i;const{exit:t,...n}=e;return{...i,visible:{...i.visible,transition:{...Mr(i.visible)?i.visible.transition:{},...n}},exit:{...i.exit,transition:{...Mr(i.exit)?i.exit.transition:{},...n,staggerDirection:-1}}}};function fs({children:i,per:e="word",as:t="p",variants:n,className:r,preset:a="fade",delay:s=0,speedReveal:o=1,speedSegment:l=1,trigger:c=!0,onAnimationComplete:h,onAnimationStart:u,segmentWrapperClassName:f,containerTransition:m,segmentTransition:_,style:M}){var I,S,x,T,X,O;const p=zl(i,e),d=Tt[t],E=a?Bl[a]:{container:si,item:Ol},b=Fl[e]/o,w=.3/l,H=Mr(((I=n==null?void 0:n.container)==null?void 0:I.visible)??{})?(x=((S=n==null?void 0:n.container)==null?void 0:S.visible).transition)==null?void 0:x.staggerChildren:void 0,R=Mr(((T=n==null?void 0:n.container)==null?void 0:T.visible)??{})?(O=((X=n==null?void 0:n.container)==null?void 0:X.visible).transition)==null?void 0:O.delayChildren:void 0,A={container:us((n==null?void 0:n.container)||E.container,{staggerChildren:H??b,delayChildren:R??s,...m,exit:{staggerChildren:H??b,staggerDirection:-1}}),item:us((n==null?void 0:n.item)||E.item,{duration:w,..._})};return k.jsx(yr,{mode:"popLayout",children:c&&k.jsxs(d,{initial:"hidden",animate:"visible",exit:"exit",variants:A.container,className:r,onAnimationComplete:h,onAnimationStart:u,style:M,children:[e!=="line"?k.jsx("span",{className:"sr-only",children:i}):null,p.map((Y,Z)=>k.jsx(Eo,{segment:Y,variants:A.item,per:e,segmentWrapperClassName:f},`${e}-${Z}-${Y}`))]})})}const kl=6,Hl="translate3d(calc(var(--tc-px, 0) * var(--tc-depth, 0) * 1px), calc(var(--tc-py, 0) * var(--tc-depth, 0) * 1px), 0)",ps={background:"radial-gradient(farthest-corner circle at var(--tc-gx, 50%) var(--tc-gy, 50%), rgba(var(--tc-glare-rgb, 255, 255, 255), calc(var(--tc-glare, 0) * 0.34)) 0%, rgba(var(--tc-glare-rgb, 255, 255, 255), calc(var(--tc-glare, 0) * 0.331)) 9%, rgba(var(--tc-glare-rgb, 255, 255, 255), calc(var(--tc-glare, 0) * 0.285)) 18%, rgba(var(--tc-glare-rgb, 255, 255, 255), calc(var(--tc-glare, 0) * 0.202)) 27%, rgba(var(--tc-glare-rgb, 255, 255, 255), calc(var(--tc-glare, 0) * 0.108)) 36%, rgba(var(--tc-glare-rgb, 255, 255, 255), calc(var(--tc-glare, 0) * 0.035)) 45%, rgba(var(--tc-glare-rgb, 255, 255, 255), calc(var(--tc-glare, 0) * 0.003)) 54%, rgba(var(--tc-glare-rgb, 255, 255, 255), 0) 60%)"},ms={background:"radial-gradient(farthest-side circle at var(--tc-gx, 50%) var(--tc-gy, 50%), rgba(var(--tc-glare-rgb, 255, 255, 255), calc(var(--tc-glare, 0) * 0.85)) 0%, rgba(var(--tc-glare-rgb, 255, 255, 255), calc(var(--tc-glare, 0) * 0.71)) 18%, rgba(var(--tc-glare-rgb, 255, 255, 255), calc(var(--tc-glare, 0) * 0.43)) 36%, rgba(var(--tc-glare-rgb, 255, 255, 255), calc(var(--tc-glare, 0) * 0.16)) 54%, rgba(var(--tc-glare-rgb, 255, 255, 255), calc(var(--tc-glare, 0) * 0.02)) 72%, rgba(var(--tc-glare-rgb, 255, 255, 255), 0) 85%)",WebkitMask:"linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",WebkitMaskComposite:"xor",mask:"linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0)"},vt=(i,e,t)=>Math.min(t,Math.max(e,i)),Vl=i=>{const e=String(i||"").trim(),t=/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(e);if(t){const r=t[1].length===3?t[1].replace(/./g,a=>a+a):t[1];return[0,2,4].map(a=>parseInt(r.slice(a,a+2),16))}const n=/^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/i.exec(e);return n?[n[1],n[2],n[3]].map(r=>vt(Math.round(parseFloat(r)),0,255)):null},mn=i=>typeof i=="number"?`${i}px`:i,Cr=i=>{const e=vt(i,0,1);return e*e*e*(e*(e*6-15)+10)},gn=(i,e,t,n,r,a)=>{const s=`v${e}`,o=Math.max(1,Math.ceil(a/(1/240))),l=a/o;for(let h=0;h<o;h++)i[s]+=(n*n*(t-i[e])-2*r*n*i[s])*l,i[e]+=i[s]*l;const c=Math.abs(t-i[e])<.001&&Math.abs(i[s])<.01;return c&&(i[e]=t,i[s]=0),!c},Gl=({imageSrc:i,altText:e="Tilted card image",captionText:t="",containerHeight:n="300px",containerWidth:r="100%",imageHeight:a="300px",imageWidth:s="300px",scaleOnHover:o=1.05,rotateAmplitude:l=12,showTooltip:c=!0,overlayContent:h=null,displayOverlayContent:u=!1,overlayDepth:f=30,children:m,backContent:_=null,flipOnClick:M=!0,flipped:p,onFlip:d,radius:E=15,perspective:b=800,smoothness:w=.6,glare:H=.5,glareColor:R="#ffffff",shadow:A=.5,parallax:I=1,axis:S="both",reverse:x=!1,trackWindow:T=!1,floating:X=!1,gyroscope:O=!0,intro:Y=!0,introDelay:Z=0,onClick:j,className:J="",style:V})=>{const ne=et.useRef(null),le=et.useRef(null),xe=et.useRef(null),De=et.useRef(null),Ve=et.useRef(null),q=et.useRef(null),[te,ye]=et.useState(!1),se=typeof p=="boolean",Ee=!!_&&(se?p:te),Ue={amplitude:vt(l,0,60),scale:Math.max(.5,o),smoothness:vt(w,0,1),glare:vt(H,0,1),shadow:vt(A,0,1),parallax:Math.max(0,I),axis:S,reverse:x,trackWindow:T,floating:X,gyroscope:O,intro:Y,introDelay:Math.max(0,Z),flippable:!!_&&M,interactive:!!_&&M||!!j,flipped:Ee,tooltip:c&&!!t},Ie=et.useRef(Ue);Ie.current=Ue,et.useEffect(()=>{var me;(me=Ve.current)==null||me.call(Ve)}),et.useEffect(()=>{const me=ne.current,Me=le.current;if(!me||!Me)return;const y=window.matchMedia("(prefers-reduced-motion: reduce)").matches,g=window.matchMedia("(hover: none) and (pointer: coarse)").matches,C={rx:0,vrx:0,ry:0,vry:0,lift:0,vlift:0,ty:0,vty:0,flip:0,vflip:0,press:0,vpress:0,tip:0,vtip:0,shown:0,vshown:0,tx:0,tyy:0},F={nx:0,ny:0,x:0,y:0,inside:!1,mouse:!1,seen:!1,vx:0,last:0},K={active:!1,x:0,y:0,moved:!1},G={gamma:0,beta:0,baseGamma:0,baseBeta:0,calibrated:!1,live:!1,asked:!1};let fe=1,ie=!0,de=-1,ze=Math.random()*10,Q=!1,ue=0,Te=0,Ae=!0;Ie.current.intro&&!y&&(ie=!1,fe=0,C.rx=16,C.ty=22,Me.style.opacity="0");const pe=Re=>{ue=0;const Se=Ie.current,Ke=vt((Re-Te)/1e3||0,0,.05);Te=Math.max(Te,Re),ze+=Ke;let nt=!1;const cn=Se.amplitude*(y?.3:1),hn=F.inside&&F.mouse,yi=K.active&&!F.mouse,Cn=hn||yi||Se.trackWindow&&F.seen&&!g;let dn=0,un=0;Cn?(dn=F.nx,un=F.ny):G.live&&Se.gyroscope?(dn=vt((G.gamma-G.baseGamma)/22,-1,1),un=vt((G.beta-G.baseBeta)/22,-1,1),G.baseGamma+=(G.gamma-G.baseGamma)*(1-Math.exp(-Ke/4)),G.baseBeta+=(G.beta-G.baseBeta)*(1-Math.exp(-Ke/4)),nt=!0):Se.floating&&!y&&Ae&&(dn=.32*Math.sin(ze*.62)+.12*Math.sin(ze*1.31+.7),un=.26*Math.sin(ze*.83+1.9)+.1*Math.sin(ze*1.57),nt=!0),Se.axis==="horizontal"&&(un=0),Se.axis==="vertical"&&(dn=0);const Vi=Se.reverse?-1:1,Wn=20*Math.pow(.2,Se.smoothness),wi=1-.3*Se.smoothness,v=hn||yi||Q?1:0;!ie&&de>=0&&Re>=de&&(ie=!0);const U=ie||!Se.intro||y;nt=gn(C,"rx",U?-un*cn*Vi:C.rx,Wn,wi,Ke)||nt,nt=gn(C,"ry",U?dn*cn*Vi:C.ry,Wn,wi,Ke)||nt,nt=gn(C,"ty",U?Se.floating&&!Cn&&!y?-4*Math.sin(ze*.9):0:C.ty,Wn*.8,.9,Ke)||nt,nt=gn(C,"lift",v,Wn,Math.max(wi,.85),Ke)||nt,nt=gn(C,"flip",Se.flipped?180:0,y?18:9.5,.72,Ke)||nt,nt=gn(C,"press",K.active&&!K.moved&&Se.interactive?1:0,26,.8,Ke)||nt,U&&fe<1&&(fe=Math.min(1,fe+Ke/.45),nt=!0);const B=v>0||C.lift>.01;B!==me.hasAttribute("data-active")&&me.toggleAttribute("data-active",B);const z=1+(Se.scale-1)*C.lift-.02*C.press,L=C.rx,ee=C.ry,oe=L*Math.PI/180,ve=ee*Math.PI/180;Me.style.transform=`translate3d(0, ${C.ty.toFixed(2)}px, 0) rotateX(${L.toFixed(3)}deg) rotateY(${(ee+C.flip).toFixed(3)}deg) scale(${z.toFixed(4)})`,Me.style.opacity=fe<1?Cr(fe).toFixed(3):"",Me.style.setProperty("--tc-px",(Math.sin(ve)*Se.parallax).toFixed(4)),Me.style.setProperty("--tc-py",(-Math.sin(oe)*Se.parallax).toFixed(4));const ge=Math.max(cn,1);Me.style.setProperty("--tc-gx",`${(50+ee/ge*46).toFixed(2)}%`),Me.style.setProperty("--tc-gy",`${(50-L/ge*46).toFixed(2)}%`);const Pe=Math.min(1,Math.hypot(L,ee)/ge);Me.style.setProperty("--tc-glare",(Se.glare*Math.max(C.lift,Pe)*(fe<1?Cr(fe):1)).toFixed(3));const Le=xe.current;if(Le){const We=Se.shadow*(fe<1?Cr(fe):1),$e=-Math.sin(ve)*22,at=12+16*C.lift+Math.sin(oe)*18-C.ty*.6,mt=Math.abs(Math.cos(C.flip*Math.PI/180)),Xe=z*(.86+.04*C.lift);Le.style.transform=`translate3d(${$e.toFixed(2)}px, ${at.toFixed(2)}px, 0) scale(${(Xe*(.2+.8*mt)).toFixed(4)}, ${Xe.toFixed(4)})`,Le.style.opacity=(We*(.6+.4*C.lift)).toFixed(3)}const _e=De.current;if(_e){const We=Se.tooltip&&hn?1:0;nt=gn(C,"shown",We,16,1,Ke)||nt;const $e=1-Math.exp(-Ke/.035);C.tx+=(F.x-C.tx)*$e,C.tyy+=(F.y-C.tyy)*$e,Math.abs(F.x-C.tx)+Math.abs(F.y-C.tyy)>.2&&(nt=!0),F.vx*=Math.exp(-Ke/.08),nt=gn(C,"tip",y?0:vt(-F.vx*.012,-14,14),18,.62,Ke)||nt,_e.style.transform=`translate3d(${C.tx.toFixed(1)}px, ${C.tyy.toFixed(1)}px, 0) rotate(${C.tip.toFixed(2)}deg)`,_e.style.opacity=Math.max(0,C.shown).toFixed(3)}(nt||!U&&Se.intro)&&Ae&&(ue=requestAnimationFrame(pe))},Ce=()=>{ue||!Ae||(Te=performance.now(),ue=requestAnimationFrame(pe))};Ve.current=Ce;const Ne=(Re,Se)=>{const Ke=Se.getBoundingClientRect();return{x:Re.clientX-Ke.left,y:Re.clientY-Ke.top,width:Math.max(1,Ke.width),height:Math.max(1,Ke.height)}},Je=Re=>{const Se=Ne(Re,me),Ke=performance.now(),nt=Math.max(8,Ke-(F.last||Ke-16))/1e3,cn=Se.x-F.x;F.vx+=(cn/nt-F.vx)*.5,F.last=Ke,F.x=Se.x,F.y=Se.y,F.nx=vt((Se.x-Se.width/2)/(Se.width/2),-1,1),F.ny=vt((Se.y-Se.height/2)/(Se.height/2),-1,1)},P=Re=>{F.inside=!0,F.mouse=Re.pointerType==="mouse"||Re.pointerType==="pen";const Se=Ne(Re,me);F.x=Se.x,F.y=Se.y,C.tx=Se.x,C.tyy=Se.y,F.vx=0,Je(Re),Ce()},re=Re=>{if(F.mouse=Re.pointerType==="mouse"||Re.pointerType==="pen",!F.inside&&F.mouse){F.inside=!0;const Se=Ne(Re,me);F.x=Se.x,F.y=Se.y,C.tx=Se.x,C.tyy=Se.y,F.vx=0}Je(Re),K.active&&Math.hypot(Re.clientX-K.x,Re.clientY-K.y)>kl&&(K.moved=!0),Ce()},W=()=>{F.inside=!1,F.vx=0,Ce()},$=Re=>{if(F.inside&&F.mouse&&!me.contains(Re.target)&&W(),!Ie.current.trackWindow||F.inside)return;const Se=me.getBoundingClientRect(),Ke=Se.left+Se.width/2,nt=Se.top+Se.height/2;F.seen=!0,F.nx=vt((Re.clientX-Ke)/Math.max(1,window.innerWidth/2),-1,1),F.ny=vt((Re.clientY-nt)/Math.max(1,window.innerHeight/2),-1,1),Ce()},ce=()=>{F.seen=!1,Ce()},he=()=>{var Ke;if(!Ie.current.gyroscope||!g||G.asked)return;G.asked=!0;const Se=(Ke=window.DeviceOrientationEvent)==null?void 0:Ke.requestPermission;typeof Se=="function"&&Se.call(window.DeviceOrientationEvent).catch(()=>{})},Fe=Re=>{K.active=!0,K.moved=!1,K.x=Re.clientX,K.y=Re.clientY,F.mouse=Re.pointerType==="mouse"||Re.pointerType==="pen",F.mouse||(F.inside=!0,Je(Re)),he(),Ce()},st=Re=>{K.active&&(K.active=!1,Re.pointerType!=="mouse"&&Re.pointerType!=="pen"&&(F.inside=!1),Ce())},dt=()=>{K.active=!1,K.moved=!0,F.inside=!1,Ce()},qe=Re=>{Re.gamma==null||Re.beta==null||(G.gamma=Re.gamma,G.beta=Re.beta,G.calibrated||(G.baseGamma=Re.gamma,G.baseBeta=Re.beta,G.calibrated=!0),G.live=g,Ce())};q.current=()=>!K.moved;const wt=()=>{Q=me.matches(":focus-visible"),Ce()},Dt=()=>{Q=!1,Ce()};me.addEventListener("pointerenter",P),me.addEventListener("pointermove",re),me.addEventListener("pointerleave",W),me.addEventListener("pointerdown",Fe),me.addEventListener("focus",wt),me.addEventListener("blur",Dt),window.addEventListener("pointerup",st,{passive:!0}),window.addEventListener("pointercancel",dt,{passive:!0}),window.addEventListener("pointermove",$,{passive:!0}),document.documentElement.addEventListener("pointerleave",ce),window.addEventListener("deviceorientation",qe);const Si=new IntersectionObserver(Re=>{Ae=Re.some(Se=>Se.isIntersecting),Ae&&!ie&&de<0&&(de=performance.now()+Ie.current.introDelay),Ce()});return Si.observe(me),Ce(),()=>{cancelAnimationFrame(ue),Ve.current=null,q.current=null,Si.disconnect(),me.removeEventListener("pointerenter",P),me.removeEventListener("pointermove",re),me.removeEventListener("pointerleave",W),me.removeEventListener("pointerdown",Fe),me.removeEventListener("focus",wt),me.removeEventListener("blur",Dt),window.removeEventListener("pointerup",st),window.removeEventListener("pointercancel",dt),window.removeEventListener("pointermove",$),document.documentElement.removeEventListener("pointerleave",ce),window.removeEventListener("deviceorientation",qe)}},[]);const tt=!!_&&M,Be=tt||!!j,lt=()=>{const me=!Ee;se||ye(me),d==null||d(me)},D=me=>{q.current&&!q.current()||(tt&&lt(),j==null||j(me))},yt=me=>{!Be||me.target!==me.currentTarget||me.key!=="Enter"&&me.key!==" "||(me.preventDefault(),tt&&lt(),j==null||j(me))},He=mn(E),Ge=(Vl(R)||[255,255,255]).join(", "),be=Math.ceil(Math.sin(vt(l,0,60)*Math.PI/180)*24*Math.max(0,I))+1;return k.jsxs("div",{ref:ne,className:`tilted-card ${J}`.trim(),style:{width:mn(r),height:mn(n),perspective:mn(b),...V},"data-interactive":Be?"":void 0,"data-flipped":Ee?"":void 0,tabIndex:Be?0:void 0,role:Be?"button":void 0,"aria-pressed":tt?Ee:void 0,"aria-label":Be?t||e:void 0,onClick:Be?D:void 0,onKeyDown:yt,children:[k.jsx("div",{ref:xe,className:"tilted-card__shadow","aria-hidden":"true",style:{width:mn(s),height:mn(a),borderRadius:He}}),k.jsxs("div",{ref:le,className:"tilted-card__body",style:{width:mn(s),height:mn(a),"--tc-radius":He,"--tc-glare-rgb":Ge},children:[k.jsxs("div",{className:"tilted-card__face tilted-card__front",children:[i&&k.jsx("img",{className:"tilted-card__img",src:i,alt:e,draggable:!1,style:{"--tc-depth":-24,transform:Hl,top:`-${be}px`,left:`-${be}px`,width:`calc(100% + ${be*2}px)`,height:`calc(100% + ${be*2}px)`}}),m,k.jsx("span",{className:"tilted-card__glare",style:ps,"aria-hidden":"true"}),k.jsx("span",{className:"tilted-card__rim","aria-hidden":"true"}),k.jsx("span",{className:"tilted-card__edge",style:ms,"aria-hidden":"true"})]}),_&&k.jsxs("div",{className:"tilted-card__face tilted-card__back","aria-hidden":!Ee,children:[_,k.jsx("span",{className:"tilted-card__glare",style:ps,"aria-hidden":"true"}),k.jsx("span",{className:"tilted-card__rim","aria-hidden":"true"}),k.jsx("span",{className:"tilted-card__edge",style:ms,"aria-hidden":"true"})]}),u&&h&&k.jsx("div",{className:"tilted-card__overlay",style:{transform:`translateZ(${f}px)`},children:h})]}),c&&t&&k.jsx("figcaption",{ref:De,className:"tilted-card__caption",children:t})]})};function Wl({page:i,figure:e,priority:t=!1,linkLabel:n}){const r=k.jsx("img",{src:_l(i,e.file),alt:e.alt,width:e.width,height:e.height,loading:t?"eager":"lazy",decoding:"async"});return e.creditHref?k.jsx("a",{className:"fig-link",href:e.creditHref,target:"_blank",rel:"noreferrer","aria-label":`打开原帖：${n??e.alt}`,children:r}):r}function Xl({figure:i,children:e,omitCaption:t=!1}){const n=i.caption.split(`
`);return k.jsxs("figcaption",{children:[!t&&n.map((r,a)=>k.jsxs("span",{children:[a>0&&k.jsx("br",{}),r]},r)),k.jsx("span",{className:"credit",children:i.credit}),e]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ja="170",jl=0,gs=1,Yl=2,To=1,ql=2,tn=3,Tn=0,At=1,nn=2,bn=0,li=1,_s=2,vs=3,xs=4,Kl=5,On=100,$l=101,Zl=102,Jl=103,Ql=104,ec=200,tc=201,nc=202,ic=203,ha=204,da=205,rc=206,ac=207,sc=208,oc=209,lc=210,cc=211,hc=212,dc=213,uc=214,ua=0,fa=1,pa=2,di=3,ma=4,ga=5,_a=6,va=7,Ao=0,fc=1,pc=2,En=0,mc=1,gc=2,_c=3,vc=4,xc=5,Mc=6,Sc=7,Co=300,ui=301,fi=302,xa=303,Ma=304,br=306,Sa=1e3,zn=1001,ya=1002,Vt=1003,yc=1004,Gi=1005,jt=1006,Rr=1007,kn=1008,on=1009,Ro=1010,Po=1011,Ii=1012,Qa=1013,Vn=1014,rn=1015,Fi=1016,es=1017,ts=1018,pi=1020,Uo=35902,Lo=1021,Do=1022,Ht=1023,Io=1024,No=1025,ci=1026,mi=1027,Fo=1028,ns=1029,Oo=1030,is=1031,rs=1033,fr=33776,pr=33777,mr=33778,gr=33779,wa=35840,ba=35841,Ea=35842,Ta=35843,Aa=36196,Ca=37492,Ra=37496,Pa=37808,Ua=37809,La=37810,Da=37811,Ia=37812,Na=37813,Fa=37814,Oa=37815,Ba=37816,za=37817,ka=37818,Ha=37819,Va=37820,Ga=37821,_r=36492,Wa=36494,Xa=36495,Bo=36283,ja=36284,Ya=36285,qa=36286,wc=3200,bc=3201,zo=0,Ec=1,wn="",Ut="srgb",_i="srgb-linear",Er="linear",it="srgb",jn=7680,Ms=519,Tc=512,Ac=513,Cc=514,ko=515,Rc=516,Pc=517,Uc=518,Lc=519,Ss=35044,ys="300 es",an=2e3,Sr=2001;class vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pr=Math.PI/180,Ka=180/Math.PI;function Oi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gt[i&255]+gt[i>>8&255]+gt[i>>16&255]+gt[i>>24&255]+"-"+gt[e&255]+gt[e>>8&255]+"-"+gt[e>>16&15|64]+gt[e>>24&255]+"-"+gt[t&63|128]+gt[t>>8&255]+"-"+gt[t>>16&255]+gt[t>>24&255]+gt[n&255]+gt[n>>8&255]+gt[n>>16&255]+gt[n>>24&255]).toLowerCase()}function Et(i,e,t){return Math.max(e,Math.min(t,i))}function Dc(i,e){return(i%e+e)%e}function Ur(i,e,t){return(1-t)*i+t*e}function Ti(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ze{constructor(e=0,t=0){Ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*n-s*r+e.x,this.y=a*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,t,n,r,a,s,o,l,c){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,l,c)}set(e,t,n,r,a,s,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=a,h[5]=l,h[6]=n,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],m=n[5],_=n[8],M=r[0],p=r[3],d=r[6],E=r[1],b=r[4],w=r[7],H=r[2],R=r[5],A=r[8];return a[0]=s*M+o*E+l*H,a[3]=s*p+o*b+l*R,a[6]=s*d+o*w+l*A,a[1]=c*M+h*E+u*H,a[4]=c*p+h*b+u*R,a[7]=c*d+h*w+u*A,a[2]=f*M+m*E+_*H,a[5]=f*p+m*b+_*R,a[8]=f*d+m*w+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*s*h-t*o*c-n*a*h+n*o*l+r*a*c-r*s*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*s-o*c,f=o*l-h*a,m=c*a-s*l,_=t*u+n*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return e[0]=u*M,e[1]=(r*c-h*n)*M,e[2]=(o*n-r*s)*M,e[3]=f*M,e[4]=(h*t-r*l)*M,e[5]=(r*a-o*t)*M,e[6]=m*M,e[7]=(n*l-c*t)*M,e[8]=(s*t-n*a)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*s+c*o)+s+e,-r*c,r*l,-r*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Lr.makeScale(e,t)),this}rotate(e){return this.premultiply(Lr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Lr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lr=new Oe;function Ho(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ni(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ic(){const i=Ni("canvas");return i.style.display="block",i}const ws={};function Li(i){i in ws||(ws[i]=!0,console.warn(i))}function Nc(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function Fc(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Oc(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const je={enabled:!0,workingColorSpace:_i,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===it&&(i.r=sn(i.r),i.g=sn(i.g),i.b=sn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===it&&(i.r=hi(i.r),i.g=hi(i.g),i.b=hi(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===wn?Er:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function sn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function hi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const bs=[.64,.33,.3,.6,.15,.06],Es=[.2126,.7152,.0722],Ts=[.3127,.329],As=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cs=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);je.define({[_i]:{primaries:bs,whitePoint:Ts,transfer:Er,toXYZ:As,fromXYZ:Cs,luminanceCoefficients:Es,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:bs,whitePoint:Ts,transfer:it,toXYZ:As,fromXYZ:Cs,luminanceCoefficients:Es,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}});let Yn;class Bc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Yn===void 0&&(Yn=Ni("canvas")),Yn.width=e.width,Yn.height=e.height;const n=Yn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Yn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ni("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=sn(a[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(sn(t[n]/255)*255):t[n]=sn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zc=0;class Vo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zc++}),this.uuid=Oi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(Dr(r[s].image)):a.push(Dr(r[s]))}else a=Dr(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function Dr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Bc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kc=0;class Mt extends vi{constructor(e=Mt.DEFAULT_IMAGE,t=Mt.DEFAULT_MAPPING,n=zn,r=zn,a=jt,s=kn,o=Ht,l=on,c=Mt.DEFAULT_ANISOTROPY,h=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kc++}),this.uuid=Oi(),this.name="",this.source=new Vo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Co)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sa:e.x=e.x-Math.floor(e.x);break;case zn:e.x=e.x<0?0:1;break;case ya:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sa:e.y=e.y-Math.floor(e.y);break;case zn:e.y=e.y<0?0:1;break;case ya:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mt.DEFAULT_IMAGE=null;Mt.DEFAULT_MAPPING=Co;Mt.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,n=0,r=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],_=l[9],M=l[2],p=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-M)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+M)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,w=(m+1)/2,H=(d+1)/2,R=(h+f)/4,A=(u+M)/4,I=(_+p)/4;return b>w&&b>H?b<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(b),r=R/n,a=A/n):w>H?w<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(w),n=R/r,a=I/r):H<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(H),n=A/a,r=I/a),this.set(n,r,a,t),this}let E=Math.sqrt((p-_)*(p-_)+(u-M)*(u-M)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(p-_)/E,this.y=(u-M)/E,this.z=(f-h)/E,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hc extends vi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new Mt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const s=n.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Vo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gn extends Hc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Go extends Mt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vc extends Mt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,s,o){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3];const f=a[s+0],m=a[s+1],_=a[s+2],M=a[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=M;return}if(u!==M||l!==f||c!==m||h!==_){let p=1-o;const d=l*f+c*m+h*_+u*M,E=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){const H=Math.sqrt(b),R=Math.atan2(H,d*E);p=Math.sin(p*R)/H,o=Math.sin(o*R)/H}const w=o*E;if(l=l*p+f*w,c=c*p+m*w,h=h*p+_*w,u=u*p+M*w,p===1-o){const H=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=H,c*=H,h*=H,u*=H}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,a,s){const o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=a[s],f=a[s+1],m=a[s+2],_=a[s+3];return e[t]=o*_+h*u+l*m-c*f,e[t+1]=l*_+h*f+c*u-o*m,e[t+2]=c*_+h*m+o*f-l*u,e[t+3]=h*_-o*u-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),u=o(a/2),f=l(n/2),m=l(r/2),_=l(a/2);switch(s){case"XYZ":this._x=f*h*u+c*m*_,this._y=c*m*u-f*h*_,this._z=c*h*_+f*m*u,this._w=c*h*u-f*m*_;break;case"YXZ":this._x=f*h*u+c*m*_,this._y=c*m*u-f*h*_,this._z=c*h*_-f*m*u,this._w=c*h*u+f*m*_;break;case"ZXY":this._x=f*h*u-c*m*_,this._y=c*m*u+f*h*_,this._z=c*h*_+f*m*u,this._w=c*h*u-f*m*_;break;case"ZYX":this._x=f*h*u-c*m*_,this._y=c*m*u+f*h*_,this._z=c*h*_-f*m*u,this._w=c*h*u+f*m*_;break;case"YZX":this._x=f*h*u+c*m*_,this._y=c*m*u+f*h*_,this._z=c*h*_-f*m*u,this._w=c*h*u-f*m*_;break;case"XZY":this._x=f*h*u-c*m*_,this._y=c*m*u-f*h*_,this._z=c*h*_+f*m*u,this._w=c*h*u+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(a-c)*m,this._z=(s-r)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(a+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(a-c)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(s-r)/m,this._x=(a+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+s*o+r*c-a*l,this._y=r*h+s*l+a*o-n*c,this._z=a*h+s*c+n*l-r*o,this._w=s*h-n*o-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,s=this._w;let o=s*e._w+n*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=r,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*s+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=s*u+this._w*f,this._x=n*u+this._x*f,this._y=r*u+this._y*f,this._z=a*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rs.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rs.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*r-o*n),h=2*(o*t-a*r),u=2*(a*n-s*t);return this.x=t+l*c+s*u-o*h,this.y=n+l*h+o*c-a*u,this.z=r+l*u+a*h-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=r*l-a*o,this.y=a*s-n*l,this.z=n*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ir.copy(this).projectOnVector(e),this.sub(Ir)}reflect(e){return this.sub(Ir.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ir=new N,Rs=new Bi;class zi{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ot.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ot.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ot.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Ot):Ot.fromBufferAttribute(a,s),Ot.applyMatrix4(e.matrixWorld),this.expandByPoint(Ot);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wi.copy(n.boundingBox)),Wi.applyMatrix4(e.matrixWorld),this.union(Wi)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ot),Ot.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ai),Xi.subVectors(this.max,Ai),qn.subVectors(e.a,Ai),Kn.subVectors(e.b,Ai),$n.subVectors(e.c,Ai),_n.subVectors(Kn,qn),vn.subVectors($n,Kn),Rn.subVectors(qn,$n);let t=[0,-_n.z,_n.y,0,-vn.z,vn.y,0,-Rn.z,Rn.y,_n.z,0,-_n.x,vn.z,0,-vn.x,Rn.z,0,-Rn.x,-_n.y,_n.x,0,-vn.y,vn.x,0,-Rn.y,Rn.x,0];return!Nr(t,qn,Kn,$n,Xi)||(t=[1,0,0,0,1,0,0,0,1],!Nr(t,qn,Kn,$n,Xi))?!1:(ji.crossVectors(_n,vn),t=[ji.x,ji.y,ji.z],Nr(t,qn,Kn,$n,Xi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ot).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ot).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($t[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$t[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$t[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$t[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$t[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$t[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$t[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$t[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($t),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $t=[new N,new N,new N,new N,new N,new N,new N,new N],Ot=new N,Wi=new zi,qn=new N,Kn=new N,$n=new N,_n=new N,vn=new N,Rn=new N,Ai=new N,Xi=new N,ji=new N,Pn=new N;function Nr(i,e,t,n,r){for(let a=0,s=i.length-3;a<=s;a+=3){Pn.fromArray(i,a);const o=r.x*Math.abs(Pn.x)+r.y*Math.abs(Pn.y)+r.z*Math.abs(Pn.z),l=e.dot(Pn),c=t.dot(Pn),h=n.dot(Pn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Gc=new zi,Ci=new N,Fr=new N;class Tr{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Gc.setFromPoints(e).getCenter(n);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ci.subVectors(e,this.center);const t=Ci.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ci,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ci.copy(e.center).add(Fr)),this.expandByPoint(Ci.copy(e.center).sub(Fr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zt=new N,Or=new N,Yi=new N,xn=new N,Br=new N,qi=new N,zr=new N;class Wo{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zt.copy(this.origin).addScaledVector(this.direction,t),Zt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Or.copy(e).add(t).multiplyScalar(.5),Yi.copy(t).sub(e).normalize(),xn.copy(this.origin).sub(Or);const a=e.distanceTo(t)*.5,s=-this.direction.dot(Yi),o=xn.dot(this.direction),l=-xn.dot(Yi),c=xn.lengthSq(),h=Math.abs(1-s*s);let u,f,m,_;if(h>0)if(u=s*l-o,f=s*o-l,_=a*h,u>=0)if(f>=-_)if(f<=_){const M=1/h;u*=M,f*=M,m=u*(u+s*f+2*o)+f*(s*u+f+2*l)+c}else f=a,u=Math.max(0,-(s*f+o)),m=-u*u+f*(f+2*l)+c;else f=-a,u=Math.max(0,-(s*f+o)),m=-u*u+f*(f+2*l)+c;else f<=-_?(u=Math.max(0,-(-s*a+o)),f=u>0?-a:Math.min(Math.max(-a,-l),a),m=-u*u+f*(f+2*l)+c):f<=_?(u=0,f=Math.min(Math.max(-a,-l),a),m=f*(f+2*l)+c):(u=Math.max(0,-(s*a+o)),f=u>0?a:Math.min(Math.max(-a,-l),a),m=-u*u+f*(f+2*l)+c);else f=s>0?-a:a,u=Math.max(0,-(s*f+o)),m=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Or).addScaledVector(Yi,f),m}intersectSphere(e,t){Zt.subVectors(e.center,this.origin);const n=Zt.dot(this.direction),r=Zt.dot(Zt)-n*n,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=n-s,l=n+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,s,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(a=(e.min.y-f.y)*h,s=(e.max.y-f.y)*h):(a=(e.max.y-f.y)*h,s=(e.min.y-f.y)*h),n>s||a>r||((a>n||isNaN(n))&&(n=a),(s<r||isNaN(r))&&(r=s),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Zt)!==null}intersectTriangle(e,t,n,r,a){Br.subVectors(t,e),qi.subVectors(n,e),zr.crossVectors(Br,qi);let s=this.direction.dot(zr),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;xn.subVectors(this.origin,e);const l=o*this.direction.dot(qi.crossVectors(xn,qi));if(l<0)return null;const c=o*this.direction.dot(Br.cross(xn));if(c<0||l+c>s)return null;const h=-o*xn.dot(zr);return h<0?null:this.at(h/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,n,r,a,s,o,l,c,h,u,f,m,_,M,p){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,l,c,h,u,f,m,_,M,p)}set(e,t,n,r,a,s,o,l,c,h,u,f,m,_,M,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=a,d[5]=s,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=_,d[11]=M,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Zn.setFromMatrixColumn(e,0).length(),a=1/Zn.setFromMatrixColumn(e,1).length(),s=1/Zn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(a),u=Math.sin(a);if(e.order==="XYZ"){const f=s*h,m=s*u,_=o*h,M=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+_*c,t[5]=f-M*c,t[9]=-o*l,t[2]=M-f*c,t[6]=_+m*c,t[10]=s*l}else if(e.order==="YXZ"){const f=l*h,m=l*u,_=c*h,M=c*u;t[0]=f+M*o,t[4]=_*o-m,t[8]=s*c,t[1]=s*u,t[5]=s*h,t[9]=-o,t[2]=m*o-_,t[6]=M+f*o,t[10]=s*l}else if(e.order==="ZXY"){const f=l*h,m=l*u,_=c*h,M=c*u;t[0]=f-M*o,t[4]=-s*u,t[8]=_+m*o,t[1]=m+_*o,t[5]=s*h,t[9]=M-f*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const f=s*h,m=s*u,_=o*h,M=o*u;t[0]=l*h,t[4]=_*c-m,t[8]=f*c+M,t[1]=l*u,t[5]=M*c+f,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const f=s*l,m=s*c,_=o*l,M=o*c;t[0]=l*h,t[4]=M-f*u,t[8]=_*u+m,t[1]=u,t[5]=s*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*u+_,t[10]=f-M*u}else if(e.order==="XZY"){const f=s*l,m=s*c,_=o*l,M=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+M,t[5]=s*h,t[9]=m*u-_,t[2]=_*u-m,t[6]=o*h,t[10]=M*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wc,e,Xc)}lookAt(e,t,n){const r=this.elements;return Rt.subVectors(e,t),Rt.lengthSq()===0&&(Rt.z=1),Rt.normalize(),Mn.crossVectors(n,Rt),Mn.lengthSq()===0&&(Math.abs(n.z)===1?Rt.x+=1e-4:Rt.z+=1e-4,Rt.normalize(),Mn.crossVectors(n,Rt)),Mn.normalize(),Ki.crossVectors(Rt,Mn),r[0]=Mn.x,r[4]=Ki.x,r[8]=Rt.x,r[1]=Mn.y,r[5]=Ki.y,r[9]=Rt.y,r[2]=Mn.z,r[6]=Ki.z,r[10]=Rt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],m=n[13],_=n[2],M=n[6],p=n[10],d=n[14],E=n[3],b=n[7],w=n[11],H=n[15],R=r[0],A=r[4],I=r[8],S=r[12],x=r[1],T=r[5],X=r[9],O=r[13],Y=r[2],Z=r[6],j=r[10],J=r[14],V=r[3],ne=r[7],le=r[11],xe=r[15];return a[0]=s*R+o*x+l*Y+c*V,a[4]=s*A+o*T+l*Z+c*ne,a[8]=s*I+o*X+l*j+c*le,a[12]=s*S+o*O+l*J+c*xe,a[1]=h*R+u*x+f*Y+m*V,a[5]=h*A+u*T+f*Z+m*ne,a[9]=h*I+u*X+f*j+m*le,a[13]=h*S+u*O+f*J+m*xe,a[2]=_*R+M*x+p*Y+d*V,a[6]=_*A+M*T+p*Z+d*ne,a[10]=_*I+M*X+p*j+d*le,a[14]=_*S+M*O+p*J+d*xe,a[3]=E*R+b*x+w*Y+H*V,a[7]=E*A+b*T+w*Z+H*ne,a[11]=E*I+b*X+w*j+H*le,a[15]=E*S+b*O+w*J+H*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],m=e[14],_=e[3],M=e[7],p=e[11],d=e[15];return _*(+a*l*u-r*c*u-a*o*f+n*c*f+r*o*m-n*l*m)+M*(+t*l*m-t*c*f+a*s*f-r*s*m+r*c*h-a*l*h)+p*(+t*c*u-t*o*m-a*s*u+n*s*m+a*o*h-n*c*h)+d*(-r*o*h-t*l*u+t*o*f+r*s*u-n*s*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],m=e[11],_=e[12],M=e[13],p=e[14],d=e[15],E=u*p*c-M*f*c+M*l*m-o*p*m-u*l*d+o*f*d,b=_*f*c-h*p*c-_*l*m+s*p*m+h*l*d-s*f*d,w=h*M*c-_*u*c+_*o*m-s*M*m-h*o*d+s*u*d,H=_*u*l-h*M*l-_*o*f+s*M*f+h*o*p-s*u*p,R=t*E+n*b+r*w+a*H;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=E*A,e[1]=(M*f*a-u*p*a-M*r*m+n*p*m+u*r*d-n*f*d)*A,e[2]=(o*p*a-M*l*a+M*r*c-n*p*c-o*r*d+n*l*d)*A,e[3]=(u*l*a-o*f*a-u*r*c+n*f*c+o*r*m-n*l*m)*A,e[4]=b*A,e[5]=(h*p*a-_*f*a+_*r*m-t*p*m-h*r*d+t*f*d)*A,e[6]=(_*l*a-s*p*a-_*r*c+t*p*c+s*r*d-t*l*d)*A,e[7]=(s*f*a-h*l*a+h*r*c-t*f*c-s*r*m+t*l*m)*A,e[8]=w*A,e[9]=(_*u*a-h*M*a-_*n*m+t*M*m+h*n*d-t*u*d)*A,e[10]=(s*M*a-_*o*a+_*n*c-t*M*c-s*n*d+t*o*d)*A,e[11]=(h*o*a-s*u*a-h*n*c+t*u*c+s*n*m-t*o*m)*A,e[12]=H*A,e[13]=(h*M*r-_*u*r+_*n*f-t*M*f-h*n*p+t*u*p)*A,e[14]=(_*o*r-s*M*r-_*n*l+t*M*l+s*n*p-t*o*p)*A,e[15]=(s*u*r-h*o*r+h*n*l-t*u*l-s*n*f+t*o*f)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,s=e.x,o=e.y,l=e.z,c=a*s,h=a*o;return this.set(c*s+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*s,0,c*l-r*o,h*l+r*s,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,s){return this.set(1,n,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,h=s+s,u=o+o,f=a*c,m=a*h,_=a*u,M=s*h,p=s*u,d=o*u,E=l*c,b=l*h,w=l*u,H=n.x,R=n.y,A=n.z;return r[0]=(1-(M+d))*H,r[1]=(m+w)*H,r[2]=(_-b)*H,r[3]=0,r[4]=(m-w)*R,r[5]=(1-(f+d))*R,r[6]=(p+E)*R,r[7]=0,r[8]=(_+b)*A,r[9]=(p-E)*A,r[10]=(1-(f+M))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=Zn.set(r[0],r[1],r[2]).length();const s=Zn.set(r[4],r[5],r[6]).length(),o=Zn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Bt.copy(this);const c=1/a,h=1/s,u=1/o;return Bt.elements[0]*=c,Bt.elements[1]*=c,Bt.elements[2]*=c,Bt.elements[4]*=h,Bt.elements[5]*=h,Bt.elements[6]*=h,Bt.elements[8]*=u,Bt.elements[9]*=u,Bt.elements[10]*=u,t.setFromRotationMatrix(Bt),n.x=a,n.y=s,n.z=o,this}makePerspective(e,t,n,r,a,s,o=an){const l=this.elements,c=2*a/(t-e),h=2*a/(n-r),u=(t+e)/(t-e),f=(n+r)/(n-r);let m,_;if(o===an)m=-(s+a)/(s-a),_=-2*s*a/(s-a);else if(o===Sr)m=-s/(s-a),_=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,a,s,o=an){const l=this.elements,c=1/(t-e),h=1/(n-r),u=1/(s-a),f=(t+e)*c,m=(n+r)*h;let _,M;if(o===an)_=(s+a)*u,M=-2*u;else if(o===Sr)_=a*u,M=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=M,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Zn=new N,Bt=new ct,Wc=new N(0,0,0),Xc=new N(1,1,1),Mn=new N,Ki=new N,Rt=new N,Ps=new ct,Us=new Bi;class qt{constructor(e=0,t=0,n=0,r=qt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(Et(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Et(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ps.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ps,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Us.setFromEuler(this),this.setFromQuaternion(Us,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qt.DEFAULT_ORDER="XYZ";class Xo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jc=0;const Ls=new N,Jn=new Bi,Jt=new ct,$i=new N,Ri=new N,Yc=new N,qc=new Bi,Ds=new N(1,0,0),Is=new N(0,1,0),Ns=new N(0,0,1),Fs={type:"added"},Kc={type:"removed"},Qn={type:"childadded",child:null},kr={type:"childremoved",child:null};class St extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jc++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new N,t=new qt,n=new Bi,r=new N(1,1,1);function a(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new Oe}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Jn.setFromAxisAngle(e,t),this.quaternion.multiply(Jn),this}rotateOnWorldAxis(e,t){return Jn.setFromAxisAngle(e,t),this.quaternion.premultiply(Jn),this}rotateX(e){return this.rotateOnAxis(Ds,e)}rotateY(e){return this.rotateOnAxis(Is,e)}rotateZ(e){return this.rotateOnAxis(Ns,e)}translateOnAxis(e,t){return Ls.copy(e).applyQuaternion(this.quaternion),this.position.add(Ls.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ds,e)}translateY(e){return this.translateOnAxis(Is,e)}translateZ(e){return this.translateOnAxis(Ns,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$i.copy(e):$i.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ri.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jt.lookAt(Ri,$i,this.up):Jt.lookAt($i,Ri,this.up),this.quaternion.setFromRotationMatrix(Jt),r&&(Jt.extractRotation(r.matrixWorld),Jn.setFromRotationMatrix(Jt),this.quaternion.premultiply(Jn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fs),Qn.child=e,this.dispatchEvent(Qn),Qn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kc),kr.child=e,this.dispatchEvent(kr),kr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fs),Qn.child=e,this.dispatchEvent(Qn),Qn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ri,e,Yc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ri,qc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];a(e.shapes,u)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),h=s(e.images),u=s(e.shapes),f=s(e.skeletons),m=s(e.animations),_=s(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=r,n;function s(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}St.DEFAULT_UP=new N(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zt=new N,Qt=new N,Hr=new N,en=new N,ei=new N,ti=new N,Os=new N,Vr=new N,Gr=new N,Wr=new N,Xr=new rt,jr=new rt,Yr=new rt;class kt{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),zt.subVectors(e,t),r.cross(zt);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){zt.subVectors(r,t),Qt.subVectors(n,t),Hr.subVectors(e,t);const s=zt.dot(zt),o=zt.dot(Qt),l=zt.dot(Hr),c=Qt.dot(Qt),h=Qt.dot(Hr),u=s*c-o*o;if(u===0)return a.set(0,0,0),null;const f=1/u,m=(c*l-o*h)*f,_=(s*h-o*l)*f;return a.set(1-m-_,_,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,en)===null?!1:en.x>=0&&en.y>=0&&en.x+en.y<=1}static getInterpolation(e,t,n,r,a,s,o,l){return this.getBarycoord(e,t,n,r,en)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,en.x),l.addScaledVector(s,en.y),l.addScaledVector(o,en.z),l)}static getInterpolatedAttribute(e,t,n,r,a,s){return Xr.setScalar(0),jr.setScalar(0),Yr.setScalar(0),Xr.fromBufferAttribute(e,t),jr.fromBufferAttribute(e,n),Yr.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Xr,a.x),s.addScaledVector(jr,a.y),s.addScaledVector(Yr,a.z),s}static isFrontFacing(e,t,n,r){return zt.subVectors(n,t),Qt.subVectors(e,t),zt.cross(Qt).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zt.subVectors(this.c,this.b),Qt.subVectors(this.a,this.b),zt.cross(Qt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return kt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return kt.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let s,o;ei.subVectors(r,n),ti.subVectors(a,n),Vr.subVectors(e,n);const l=ei.dot(Vr),c=ti.dot(Vr);if(l<=0&&c<=0)return t.copy(n);Gr.subVectors(e,r);const h=ei.dot(Gr),u=ti.dot(Gr);if(h>=0&&u<=h)return t.copy(r);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return s=l/(l-h),t.copy(n).addScaledVector(ei,s);Wr.subVectors(e,a);const m=ei.dot(Wr),_=ti.dot(Wr);if(_>=0&&m<=_)return t.copy(a);const M=m*c-l*_;if(M<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(ti,o);const p=h*_-m*u;if(p<=0&&u-h>=0&&m-_>=0)return Os.subVectors(a,r),o=(u-h)/(u-h+(m-_)),t.copy(r).addScaledVector(Os,o);const d=1/(p+M+f);return s=M*d,o=f*d,t.copy(n).addScaledVector(ei,s).addScaledVector(ti,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sn={h:0,s:0,l:0},Zi={h:0,s:0,l:0};function qr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=je.workingColorSpace){if(e=Dc(e,1),t=Et(t,0,1),n=Et(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,s=2*n-a;this.r=qr(s,a,e+1/3),this.g=qr(s,a,e),this.b=qr(s,a,e-1/3)}return je.toWorkingColorSpace(this,r),this}setStyle(e,t=Ut){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){const n=jo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=sn(e.r),this.g=sn(e.g),this.b=sn(e.b),this}copyLinearToSRGB(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return je.fromWorkingColorSpace(_t.copy(this),e),Math.round(Et(_t.r*255,0,255))*65536+Math.round(Et(_t.g*255,0,255))*256+Math.round(Et(_t.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(_t.copy(this),t);const n=_t.r,r=_t.g,a=_t.b,s=Math.max(n,r,a),o=Math.min(n,r,a);let l,c;const h=(o+s)/2;if(o===s)l=0,c=0;else{const u=s-o;switch(c=h<=.5?u/(s+o):u/(2-s-o),s){case n:l=(r-a)/u+(r<a?6:0);break;case r:l=(a-n)/u+2;break;case a:l=(n-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(_t.copy(this),t),e.r=_t.r,e.g=_t.g,e.b=_t.b,e}getStyle(e=Ut){je.fromWorkingColorSpace(_t.copy(this),e);const t=_t.r,n=_t.g,r=_t.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Sn),this.setHSL(Sn.h+e,Sn.s+t,Sn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Sn),e.getHSL(Zi);const n=Ur(Sn.h,Zi.h,t),r=Ur(Sn.s,Zi.s,t),a=Ur(Sn.l,Zi.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _t=new Ye;Ye.NAMES=jo;let $c=0;class xi extends vi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$c++}),this.uuid=Oi(),this.name="",this.blending=li,this.side=Tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ha,this.blendDst=da,this.blendEquation=On,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=di,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ms,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jn,this.stencilZFail=jn,this.stencilZPass=jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==li&&(n.blending=this.blending),this.side!==Tn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ha&&(n.blendSrc=this.blendSrc),this.blendDst!==da&&(n.blendDst=this.blendDst),this.blendEquation!==On&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==di&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ms&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==jn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==jn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(n.textures=a),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Yo extends xi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qt,this.combine=Ao,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new N,Ji=new Ze;class Gt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ss,this.updateRanges=[],this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ji.fromBufferAttribute(this,t),Ji.applyMatrix3(e),this.setXY(t,Ji.x,Ji.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ti(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),r=bt(r,this.array),a=bt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ss&&(e.usage=this.usage),e}}class qo extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ko extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Hn extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Zc=0;const Nt=new ct,Kr=new St,ni=new N,Pt=new zi,Pi=new zi,pt=new N;class ln extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zc++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ho(e)?Ko:qo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Oe().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nt.makeRotationFromQuaternion(e),this.applyMatrix4(Nt),this}rotateX(e){return Nt.makeRotationX(e),this.applyMatrix4(Nt),this}rotateY(e){return Nt.makeRotationY(e),this.applyMatrix4(Nt),this}rotateZ(e){return Nt.makeRotationZ(e),this.applyMatrix4(Nt),this}translate(e,t,n){return Nt.makeTranslation(e,t,n),this.applyMatrix4(Nt),this}scale(e,t,n){return Nt.makeScale(e,t,n),this.applyMatrix4(Nt),this}lookAt(e){return Kr.lookAt(e),Kr.updateMatrix(),this.applyMatrix4(Kr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ni).negate(),this.translate(ni.x,ni.y,ni.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,a=e.length;r<a;r++){const s=e[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Hn(n,3))}else{for(let n=0,r=t.count;n<r;n++){const a=e[n];t.setXYZ(n,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];Pt.setFromBufferAttribute(a),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Pt.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Pt.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Pt.min),this.boundingBox.expandByPoint(Pt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(Pt.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];Pi.setFromBufferAttribute(o),this.morphTargetsRelative?(pt.addVectors(Pt.min,Pi.min),Pt.expandByPoint(pt),pt.addVectors(Pt.max,Pi.max),Pt.expandByPoint(pt)):(Pt.expandByPoint(Pi.min),Pt.expandByPoint(Pi.max))}Pt.getCenter(n);let r=0;for(let a=0,s=e.count;a<s;a++)pt.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(pt));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)pt.fromBufferAttribute(o,c),l&&(ni.fromBufferAttribute(e,c),pt.add(ni)),r=Math.max(r,n.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new N,l[I]=new N;const c=new N,h=new N,u=new N,f=new Ze,m=new Ze,_=new Ze,M=new N,p=new N;function d(I,S,x){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,x),f.fromBufferAttribute(a,I),m.fromBufferAttribute(a,S),_.fromBufferAttribute(a,x),h.sub(c),u.sub(c),m.sub(f),_.sub(f);const T=1/(m.x*_.y-_.x*m.y);isFinite(T)&&(M.copy(h).multiplyScalar(_.y).addScaledVector(u,-m.y).multiplyScalar(T),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(T),o[I].add(M),o[S].add(M),o[x].add(M),l[I].add(p),l[S].add(p),l[x].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let I=0,S=E.length;I<S;++I){const x=E[I],T=x.start,X=x.count;for(let O=T,Y=T+X;O<Y;O+=3)d(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const b=new N,w=new N,H=new N,R=new N;function A(I){H.fromBufferAttribute(r,I),R.copy(H);const S=o[I];b.copy(S),b.sub(H.multiplyScalar(H.dot(S))).normalize(),w.crossVectors(R,S);const T=w.dot(l[I])<0?-1:1;s.setXYZW(I,b.x,b.y,b.z,T)}for(let I=0,S=E.length;I<S;++I){const x=E[I],T=x.start,X=x.count;for(let O=T,Y=T+X;O<Y;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new N,a=new N,s=new N,o=new N,l=new N,c=new N,h=new N,u=new N;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),M=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,M),s.fromBufferAttribute(t,p),h.subVectors(s,a),u.subVectors(r,a),h.cross(u),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),h.subVectors(s,a),u.subVectors(r,a),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let m=0,_=0;for(let M=0,p=l.length;M<p;M++){o.isInterleavedBufferAttribute?m=l[M]*o.data.stride+o.offset:m=l[M]*h;for(let d=0;d<h;d++)f[_++]=c[m++]}return new Gt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ln,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],m=e(f,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],u=a[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,h=s.length;c<h;c++){const u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bs=new ct,Un=new Wo,Qi=new Tr,zs=new N,er=new N,tr=new N,nr=new N,$r=new N,ir=new N,ks=new N,rr=new N;class Yt extends St{constructor(e=new ln,t=new Yo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){ir.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],u=a[l];h!==0&&($r.fromBufferAttribute(u,e),s?ir.addScaledVector($r,h):ir.addScaledVector($r.sub(t),h))}t.add(ir)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qi.copy(n.boundingSphere),Qi.applyMatrix4(a),Un.copy(e.ray).recast(e.near),!(Qi.containsPoint(Un.origin)===!1&&(Un.intersectSphere(Qi,zs)===null||Un.origin.distanceToSquared(zs)>(e.far-e.near)**2))&&(Bs.copy(a).invert(),Un.copy(e.ray).applyMatrix4(Bs),!(n.boundingBox!==null&&Un.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Un)))}_computeIntersections(e,t,n){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,f=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(s))for(let _=0,M=f.length;_<M;_++){const p=f[_],d=s[p.materialIndex],E=Math.max(p.start,m.start),b=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let w=E,H=b;w<H;w+=3){const R=o.getX(w),A=o.getX(w+1),I=o.getX(w+2);r=ar(this,d,e,n,c,h,u,R,A,I),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let p=_,d=M;p<d;p+=3){const E=o.getX(p),b=o.getX(p+1),w=o.getX(p+2);r=ar(this,s,e,n,c,h,u,E,b,w),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,M=f.length;_<M;_++){const p=f[_],d=s[p.materialIndex],E=Math.max(p.start,m.start),b=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let w=E,H=b;w<H;w+=3){const R=w,A=w+1,I=w+2;r=ar(this,d,e,n,c,h,u,R,A,I),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let p=_,d=M;p<d;p+=3){const E=p,b=p+1,w=p+2;r=ar(this,s,e,n,c,h,u,E,b,w),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Jc(i,e,t,n,r,a,s,o){let l;if(e.side===At?l=n.intersectTriangle(s,a,r,!0,o):l=n.intersectTriangle(r,a,s,e.side===Tn,o),l===null)return null;rr.copy(o),rr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(rr);return c<t.near||c>t.far?null:{distance:c,point:rr.clone(),object:i}}function ar(i,e,t,n,r,a,s,o,l,c){i.getVertexPosition(o,er),i.getVertexPosition(l,tr),i.getVertexPosition(c,nr);const h=Jc(i,e,t,n,er,tr,nr,ks);if(h){const u=new N;kt.getBarycoord(ks,er,tr,nr,u),r&&(h.uv=kt.getInterpolatedAttribute(r,o,l,c,u,new Ze)),a&&(h.uv1=kt.getInterpolatedAttribute(a,o,l,c,u,new Ze)),s&&(h.normal=kt.getInterpolatedAttribute(s,o,l,c,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new N,materialIndex:0};kt.getNormal(er,tr,nr,f.normal),h.face=f,h.barycoord=u}return h}class ki extends ln{constructor(e=1,t=1,n=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],h=[],u=[];let f=0,m=0;_("z","y","x",-1,-1,n,t,e,s,a,0),_("z","y","x",1,-1,n,t,-e,s,a,1),_("x","z","y",1,1,e,n,t,r,s,2),_("x","z","y",1,-1,e,n,-t,r,s,3),_("x","y","z",1,-1,e,t,n,r,a,4),_("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(l),this.setAttribute("position",new Hn(c,3)),this.setAttribute("normal",new Hn(h,3)),this.setAttribute("uv",new Hn(u,2));function _(M,p,d,E,b,w,H,R,A,I,S){const x=w/A,T=H/I,X=w/2,O=H/2,Y=R/2,Z=A+1,j=I+1;let J=0,V=0;const ne=new N;for(let le=0;le<j;le++){const xe=le*T-O;for(let De=0;De<Z;De++){const Ve=De*x-X;ne[M]=Ve*E,ne[p]=xe*b,ne[d]=Y,c.push(ne.x,ne.y,ne.z),ne[M]=0,ne[p]=0,ne[d]=R>0?1:-1,h.push(ne.x,ne.y,ne.z),u.push(De/A),u.push(1-le/I),J+=1}}for(let le=0;le<I;le++)for(let xe=0;xe<A;xe++){const De=f+xe+Z*le,Ve=f+xe+Z*(le+1),q=f+(xe+1)+Z*(le+1),te=f+(xe+1)+Z*le;l.push(De,Ve,te),l.push(Ve,q,te),V+=6}o.addGroup(m,V,S),m+=V,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ki(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function xt(i){const e={};for(let t=0;t<i.length;t++){const n=gi(i[t]);for(const r in n)e[r]=n[r]}return e}function Qc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function $o(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const eh={clone:gi,merge:xt};var th=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends xi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=th,this.fragmentShader=nh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gi(e.uniforms),this.uniformsGroups=Qc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Zo extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=an}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yn=new N,Hs=new Ze,Vs=new Ze;class Lt extends Zo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ka*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ka*2*Math.atan(Math.tan(Pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yn.x,yn.y).multiplyScalar(-e/yn.z),yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yn.x,yn.y).multiplyScalar(-e/yn.z)}getViewSize(e,t){return this.getViewBounds(e,Hs,Vs),t.subVectors(Vs,Hs)}setViewOffset(e,t,n,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Pr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,t-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ii=-90,ri=1;class ih extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Lt(ii,ri,e,t);r.layers=this.layers,this.add(r);const a=new Lt(ii,ri,e,t);a.layers=this.layers,this.add(a);const s=new Lt(ii,ri,e,t);s.layers=this.layers,this.add(s);const o=new Lt(ii,ri,e,t);o.layers=this.layers,this.add(o);const l=new Lt(ii,ri,e,t);l.layers=this.layers,this.add(l);const c=new Lt(ii,ri,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,s,o,l]=t;for(const c of t)this.remove(c);if(e===an)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Sr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,s),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,f,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Jo extends Mt{constructor(e,t,n,r,a,s,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ui,super(e,t,n,r,a,s,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rh extends Gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Jo(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ki(5,5,5),a=new An({name:"CubemapFromEquirect",uniforms:gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:At,blending:bn});a.uniforms.tEquirect.value=t;const s=new Yt(r,a),o=t.minFilter;return t.minFilter===kn&&(t.minFilter=jt),new ih(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(a)}}const Zr=new N,ah=new N,sh=new Oe;class Nn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Zr.subVectors(n,t).cross(ah.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Zr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||sh.getNormalMatrix(e),r=this.coplanarPoint(Zr).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ln=new Tr,sr=new N;class as{constructor(e=new Nn,t=new Nn,n=new Nn,r=new Nn,a=new Nn,s=new Nn){this.planes=[e,t,n,r,a,s]}set(e,t,n,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=an){const n=this.planes,r=e.elements,a=r[0],s=r[1],o=r[2],l=r[3],c=r[4],h=r[5],u=r[6],f=r[7],m=r[8],_=r[9],M=r[10],p=r[11],d=r[12],E=r[13],b=r[14],w=r[15];if(n[0].setComponents(l-a,f-c,p-m,w-d).normalize(),n[1].setComponents(l+a,f+c,p+m,w+d).normalize(),n[2].setComponents(l+s,f+h,p+_,w+E).normalize(),n[3].setComponents(l-s,f-h,p-_,w-E).normalize(),n[4].setComponents(l-o,f-u,p-M,w-b).normalize(),t===an)n[5].setComponents(l+o,f+u,p+M,w+b).normalize();else if(t===Sr)n[5].setComponents(o,u,M,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ln.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ln.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ln)}intersectsSprite(e){return Ln.center.set(0,0,0),Ln.radius=.7071067811865476,Ln.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ln)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(sr.x=r.normal.x>0?e.max.x:e.min.x,sr.y=r.normal.y>0?e.max.y:e.min.y,sr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(sr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qo(){let i=null,e=!1,t=null,n=null;function r(a,s){t(a,s),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function oh(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<u.length;m++){const _=u[f],M=u[m];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++f,u[f]=M)}u.length=f+1;for(let m=0,_=u.length;m<_;m++){const M=u[m];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:a,update:s}}class Hi extends ln{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,u=e/o,f=t/l,m=[],_=[],M=[],p=[];for(let d=0;d<h;d++){const E=d*f-s;for(let b=0;b<c;b++){const w=b*u-a;_.push(w,-E,0),M.push(0,0,1),p.push(b/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<o;E++){const b=E+c*d,w=E+c*(d+1),H=E+1+c*(d+1),R=E+1+c*d;m.push(b,w,R),m.push(w,H,R)}this.setIndex(m),this.setAttribute("position",new Hn(_,3)),this.setAttribute("normal",new Hn(M,3)),this.setAttribute("uv",new Hn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hi(e.width,e.height,e.widthSegments,e.heightSegments)}}var lh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ch=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ph=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,_h=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Sh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Eh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Th=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ah=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ch=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ph=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Uh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Dh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ih=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Oh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bh="gl_FragColor = linearToOutputTexel( gl_FragColor );",zh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Hh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$h=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ed=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,td=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,id=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ad=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,od=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ld=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ud=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,md=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_d=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Md=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ed=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Td=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ad=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ud=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ld=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Id=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Od=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Wd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Kd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$d=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,iu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ru=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,au=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,su=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ou=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,du=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_u=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Su=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Tu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Au=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ru=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Lu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Du=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Fu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ou=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ku=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:lh,alphahash_pars_fragment:ch,alphamap_fragment:hh,alphamap_pars_fragment:dh,alphatest_fragment:uh,alphatest_pars_fragment:fh,aomap_fragment:ph,aomap_pars_fragment:mh,batching_pars_vertex:gh,batching_vertex:_h,begin_vertex:vh,beginnormal_vertex:xh,bsdfs:Mh,iridescence_fragment:Sh,bumpmap_pars_fragment:yh,clipping_planes_fragment:wh,clipping_planes_pars_fragment:bh,clipping_planes_pars_vertex:Eh,clipping_planes_vertex:Th,color_fragment:Ah,color_pars_fragment:Ch,color_pars_vertex:Rh,color_vertex:Ph,common:Uh,cube_uv_reflection_fragment:Lh,defaultnormal_vertex:Dh,displacementmap_pars_vertex:Ih,displacementmap_vertex:Nh,emissivemap_fragment:Fh,emissivemap_pars_fragment:Oh,colorspace_fragment:Bh,colorspace_pars_fragment:zh,envmap_fragment:kh,envmap_common_pars_fragment:Hh,envmap_pars_fragment:Vh,envmap_pars_vertex:Gh,envmap_physical_pars_fragment:ed,envmap_vertex:Wh,fog_vertex:Xh,fog_pars_vertex:jh,fog_fragment:Yh,fog_pars_fragment:qh,gradientmap_pars_fragment:Kh,lightmap_pars_fragment:$h,lights_lambert_fragment:Zh,lights_lambert_pars_fragment:Jh,lights_pars_begin:Qh,lights_toon_fragment:td,lights_toon_pars_fragment:nd,lights_phong_fragment:id,lights_phong_pars_fragment:rd,lights_physical_fragment:ad,lights_physical_pars_fragment:sd,lights_fragment_begin:od,lights_fragment_maps:ld,lights_fragment_end:cd,logdepthbuf_fragment:hd,logdepthbuf_pars_fragment:dd,logdepthbuf_pars_vertex:ud,logdepthbuf_vertex:fd,map_fragment:pd,map_pars_fragment:md,map_particle_fragment:gd,map_particle_pars_fragment:_d,metalnessmap_fragment:vd,metalnessmap_pars_fragment:xd,morphinstance_vertex:Md,morphcolor_vertex:Sd,morphnormal_vertex:yd,morphtarget_pars_vertex:wd,morphtarget_vertex:bd,normal_fragment_begin:Ed,normal_fragment_maps:Td,normal_pars_fragment:Ad,normal_pars_vertex:Cd,normal_vertex:Rd,normalmap_pars_fragment:Pd,clearcoat_normal_fragment_begin:Ud,clearcoat_normal_fragment_maps:Ld,clearcoat_pars_fragment:Dd,iridescence_pars_fragment:Id,opaque_fragment:Nd,packing:Fd,premultiplied_alpha_fragment:Od,project_vertex:Bd,dithering_fragment:zd,dithering_pars_fragment:kd,roughnessmap_fragment:Hd,roughnessmap_pars_fragment:Vd,shadowmap_pars_fragment:Gd,shadowmap_pars_vertex:Wd,shadowmap_vertex:Xd,shadowmask_pars_fragment:jd,skinbase_vertex:Yd,skinning_pars_vertex:qd,skinning_vertex:Kd,skinnormal_vertex:$d,specularmap_fragment:Zd,specularmap_pars_fragment:Jd,tonemapping_fragment:Qd,tonemapping_pars_fragment:eu,transmission_fragment:tu,transmission_pars_fragment:nu,uv_pars_fragment:iu,uv_pars_vertex:ru,uv_vertex:au,worldpos_vertex:su,background_vert:ou,background_frag:lu,backgroundCube_vert:cu,backgroundCube_frag:hu,cube_vert:du,cube_frag:uu,depth_vert:fu,depth_frag:pu,distanceRGBA_vert:mu,distanceRGBA_frag:gu,equirect_vert:_u,equirect_frag:vu,linedashed_vert:xu,linedashed_frag:Mu,meshbasic_vert:Su,meshbasic_frag:yu,meshlambert_vert:wu,meshlambert_frag:bu,meshmatcap_vert:Eu,meshmatcap_frag:Tu,meshnormal_vert:Au,meshnormal_frag:Cu,meshphong_vert:Ru,meshphong_frag:Pu,meshphysical_vert:Uu,meshphysical_frag:Lu,meshtoon_vert:Du,meshtoon_frag:Iu,points_vert:Nu,points_frag:Fu,shadow_vert:Ou,shadow_frag:Bu,sprite_vert:zu,sprite_frag:ku},ae={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Xt={basic:{uniforms:xt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:xt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ye(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:xt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:xt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:xt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ye(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:xt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:xt([ae.points,ae.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:xt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:xt([ae.common,ae.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:xt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:xt([ae.sprite,ae.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:xt([ae.common,ae.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:xt([ae.lights,ae.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Xt.physical={uniforms:xt([Xt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const or={r:0,b:0,g:0},Dn=new qt,Hu=new ct;function Vu(i,e,t,n,r,a,s){const o=new Ye(0);let l=a===!0?0:1,c,h,u=null,f=0,m=null;function _(E){let b=E.isScene===!0?E.background:null;return b&&b.isTexture&&(b=(E.backgroundBlurriness>0?t:e).get(b)),b}function M(E){let b=!1;const w=_(E);w===null?d(o,l):w&&w.isColor&&(d(w,1),b=!0);const H=i.xr.getEnvironmentBlendMode();H==="additive"?n.buffers.color.setClear(0,0,0,1,s):H==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(E,b){const w=_(b);w&&(w.isCubeTexture||w.mapping===br)?(h===void 0&&(h=new Yt(new ki(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:gi(Xt.backgroundCube.uniforms),vertexShader:Xt.backgroundCube.vertexShader,fragmentShader:Xt.backgroundCube.fragmentShader,side:At,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(H,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Dn.copy(b.backgroundRotation),Dn.x*=-1,Dn.y*=-1,Dn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Dn.y*=-1,Dn.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Hu.makeRotationFromEuler(Dn)),h.material.toneMapped=je.getTransfer(w.colorSpace)!==it,(u!==w||f!==w.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=w,f=w.version,m=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Yt(new Hi(2,2),new An({name:"BackgroundMaterial",uniforms:gi(Xt.background.uniforms),vertexShader:Xt.background.vertexShader,fragmentShader:Xt.background.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=je.getTransfer(w.colorSpace)!==it,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||f!==w.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=w,f=w.version,m=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function d(E,b){E.getRGB(or,$o(i)),n.buffers.color.setClear(or.r,or.g,or.b,b,s)}return{getClearColor:function(){return o},setClearColor:function(E,b=1){o.set(E),l=b,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,d(o,l)},render:M,addToRenderList:p}}function Gu(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let a=r,s=!1;function o(x,T,X,O,Y){let Z=!1;const j=u(O,X,T);a!==j&&(a=j,c(a.object)),Z=m(x,O,X,Y),Z&&_(x,O,X,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(Z||s)&&(s=!1,w(x,T,X,O),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,T,X){const O=X.wireframe===!0;let Y=n[x.id];Y===void 0&&(Y={},n[x.id]=Y);let Z=Y[T.id];Z===void 0&&(Z={},Y[T.id]=Z);let j=Z[O];return j===void 0&&(j=f(l()),Z[O]=j),j}function f(x){const T=[],X=[],O=[];for(let Y=0;Y<t;Y++)T[Y]=0,X[Y]=0,O[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:X,attributeDivisors:O,object:x,attributes:{},index:null}}function m(x,T,X,O){const Y=a.attributes,Z=T.attributes;let j=0;const J=X.getAttributes();for(const V in J)if(J[V].location>=0){const le=Y[V];let xe=Z[V];if(xe===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(xe=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(xe=x.instanceColor)),le===void 0||le.attribute!==xe||xe&&le.data!==xe.data)return!0;j++}return a.attributesNum!==j||a.index!==O}function _(x,T,X,O){const Y={},Z=T.attributes;let j=0;const J=X.getAttributes();for(const V in J)if(J[V].location>=0){let le=Z[V];le===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(le=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(le=x.instanceColor));const xe={};xe.attribute=le,le&&le.data&&(xe.data=le.data),Y[V]=xe,j++}a.attributes=Y,a.attributesNum=j,a.index=O}function M(){const x=a.newAttributes;for(let T=0,X=x.length;T<X;T++)x[T]=0}function p(x){d(x,0)}function d(x,T){const X=a.newAttributes,O=a.enabledAttributes,Y=a.attributeDivisors;X[x]=1,O[x]===0&&(i.enableVertexAttribArray(x),O[x]=1),Y[x]!==T&&(i.vertexAttribDivisor(x,T),Y[x]=T)}function E(){const x=a.newAttributes,T=a.enabledAttributes;for(let X=0,O=T.length;X<O;X++)T[X]!==x[X]&&(i.disableVertexAttribArray(X),T[X]=0)}function b(x,T,X,O,Y,Z,j){j===!0?i.vertexAttribIPointer(x,T,X,Y,Z):i.vertexAttribPointer(x,T,X,O,Y,Z)}function w(x,T,X,O){M();const Y=O.attributes,Z=X.getAttributes(),j=T.defaultAttributeValues;for(const J in Z){const V=Z[J];if(V.location>=0){let ne=Y[J];if(ne===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(ne=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(ne=x.instanceColor)),ne!==void 0){const le=ne.normalized,xe=ne.itemSize,De=e.get(ne);if(De===void 0)continue;const Ve=De.buffer,q=De.type,te=De.bytesPerElement,ye=q===i.INT||q===i.UNSIGNED_INT||ne.gpuType===Qa;if(ne.isInterleavedBufferAttribute){const se=ne.data,Ee=se.stride,Ue=ne.offset;if(se.isInstancedInterleavedBuffer){for(let Ie=0;Ie<V.locationSize;Ie++)d(V.location+Ie,se.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ie=0;Ie<V.locationSize;Ie++)p(V.location+Ie);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let Ie=0;Ie<V.locationSize;Ie++)b(V.location+Ie,xe/V.locationSize,q,le,Ee*te,(Ue+xe/V.locationSize*Ie)*te,ye)}else{if(ne.isInstancedBufferAttribute){for(let se=0;se<V.locationSize;se++)d(V.location+se,ne.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let se=0;se<V.locationSize;se++)p(V.location+se);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let se=0;se<V.locationSize;se++)b(V.location+se,xe/V.locationSize,q,le,xe*te,xe/V.locationSize*se*te,ye)}}else if(j!==void 0){const le=j[J];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(V.location,le);break;case 3:i.vertexAttrib3fv(V.location,le);break;case 4:i.vertexAttrib4fv(V.location,le);break;default:i.vertexAttrib1fv(V.location,le)}}}}E()}function H(){I();for(const x in n){const T=n[x];for(const X in T){const O=T[X];for(const Y in O)h(O[Y].object),delete O[Y];delete T[X]}delete n[x]}}function R(x){if(n[x.id]===void 0)return;const T=n[x.id];for(const X in T){const O=T[X];for(const Y in O)h(O[Y].object),delete O[Y];delete T[X]}delete n[x.id]}function A(x){for(const T in n){const X=n[T];if(X[x.id]===void 0)continue;const O=X[x.id];for(const Y in O)h(O[Y].object),delete O[Y];delete X[x.id]}}function I(){S(),s=!0,a!==r&&(a=r,c(a.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:I,resetDefaultState:S,dispose:H,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:M,enableAttribute:p,disableUnusedAttributes:E}}function Wu(i,e,t){let n;function r(c){n=c}function a(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function s(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_];t.update(m,n,1)}function l(c,h,u,f){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)s(c[_],h[_],f[_]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let _=0;for(let M=0;M<u;M++)_+=h[M]*f[M];t.update(_,n,1)}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Xu(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(A){return!(A!==Ht&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const I=A===Fi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==on&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==rn&&!I)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),H=_>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:w,vertexTextures:H,maxSamples:R}}function ju(i){const e=this;let t=null,n=0,r=!1,a=!1;const s=new Nn,o=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||n!==0||r;return r=f,n=u.length,m},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,m){const _=u.clippingPlanes,M=u.clipIntersection,p=u.clipShadows,d=i.get(u);if(!r||_===null||_.length===0||a&&!p)a?h(null):c();else{const E=a?0:n,b=E*4;let w=d.clippingState||null;l.value=w,w=h(_,f,b,m);for(let H=0;H!==b;++H)w[H]=t[H];d.clippingState=w,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,m,_){const M=u!==null?u.length:0;let p=null;if(M!==0){if(p=l.value,_!==!0||p===null){const d=m+M*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<d)&&(p=new Float32Array(d));for(let b=0,w=m;b!==M;++b,w+=4)s.copy(u[b]).applyMatrix4(E,o),s.normal.toArray(p,w),p[w+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,p}}function Yu(i){let e=new WeakMap;function t(s,o){return o===xa?s.mapping=ui:o===Ma&&(s.mapping=fi),s}function n(s){if(s&&s.isTexture){const o=s.mapping;if(o===xa||o===Ma)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new rh(l.height);return c.fromEquirectangularTexture(i,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class qu extends Zo{constructor(e=-1,t=1,n=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,s=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const oi=4,Gs=[.125,.215,.35,.446,.526,.582],Bn=20,Jr=new qu,Ws=new Ye;let Qr=null,ea=0,ta=0,na=!1;const Fn=(1+Math.sqrt(5))/2,ai=1/Fn,Xs=[new N(-Fn,ai,0),new N(Fn,ai,0),new N(-ai,0,Fn),new N(ai,0,Fn),new N(0,Fn,-ai),new N(0,Fn,ai),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class js{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Qr=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),ta=this._renderer.getActiveMipmapLevel(),na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ks(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qr,ea,ta),this._renderer.xr.enabled=na,e.scissorTest=!1,lr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ui||e.mapping===fi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qr=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),ta=this._renderer.getActiveMipmapLevel(),na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:Fi,format:Ht,colorSpace:_i,depthBuffer:!1},r=Ys(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ys(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ku(a)),this._blurMaterial=$u(a,e,t)}return r}_compileMaterial(e){const t=new Yt(this._lodPlanes[0],e);this._renderer.compile(t,Jr)}_sceneToCubeUV(e,t,n,r){const o=new Lt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Ws),h.toneMapping=En,h.autoClear=!1;const m=new Yo({name:"PMREM.Background",side:At,depthWrite:!1,depthTest:!1}),_=new Yt(new ki,m);let M=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,M=!0):(m.color.copy(Ws),M=!0);for(let d=0;d<6;d++){const E=d%3;E===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):E===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const b=this._cubeSize;lr(r,E*b,d>2?b:0,b,b),h.setRenderTarget(r),M&&h.render(_,o),h.render(e,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ui||e.mapping===fi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ks()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qs());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new Yt(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;lr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,Jr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Xs[(r-a-1)%Xs.length];this._blur(e,a-1,a,s,o)}t.autoClear=n}_blur(e,t,n,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",a),this._halfBlur(s,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Yt(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*Bn-1),M=a/_,p=isFinite(a)?1+Math.floor(h*M):Bn;p>Bn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Bn}`);const d=[];let E=0;for(let A=0;A<Bn;++A){const I=A/M,S=Math.exp(-I*I/2);d.push(S),A===0?E+=S:A<p&&(E+=2*S)}for(let A=0;A<d.length;A++)d[A]=d[A]/E;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=_,f.mipInt.value=b-n;const w=this._sizeLods[r],H=3*w*(r>b-oi?r-b+oi:0),R=4*(this._cubeSize-w);lr(t,H,R,3*w,2*w),l.setRenderTarget(t),l.render(u,Jr)}}function Ku(i){const e=[],t=[],n=[];let r=i;const a=i-oi+1+Gs.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);t.push(o);let l=1/o;s>i-oi?l=Gs[s-i+oi-1]:s===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,_=6,M=3,p=2,d=1,E=new Float32Array(M*_*m),b=new Float32Array(p*_*m),w=new Float32Array(d*_*m);for(let R=0;R<m;R++){const A=R%3*2/3-1,I=R>2?0:-1,S=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];E.set(S,M*_*R),b.set(f,p*_*R);const x=[R,R,R,R,R,R];w.set(x,d*_*R)}const H=new ln;H.setAttribute("position",new Gt(E,M)),H.setAttribute("uv",new Gt(b,p)),H.setAttribute("faceIndex",new Gt(w,d)),e.push(H),r>oi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ys(i,e,t){const n=new Gn(i,e,t);return n.texture.mapping=br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function lr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function $u(i,e,t){const n=new Float32Array(Bn),r=new N(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:Bn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ss(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function qs(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ss(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Ks(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ss(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function ss(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Zu(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===xa||l===Ma,h=l===ui||l===fi;if(c||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new js(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&r(m)?(t===null&&(t=new js(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",a),u.texture):null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function Ju(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Li("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Qu(i,e,t,n){const r={},a=new WeakMap;function s(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const M=f.morphAttributes[_];for(let p=0,d=M.length;p<d;p++)e.remove(M[p])}f.removeEventListener("dispose",s),delete r[f.id];const m=a.get(f);m&&(e.remove(m),a.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const _ in f)e.update(f[_],i.ARRAY_BUFFER);const m=u.morphAttributes;for(const _ in m){const M=m[_];for(let p=0,d=M.length;p<d;p++)e.update(M[p],i.ARRAY_BUFFER)}}function c(u){const f=[],m=u.index,_=u.attributes.position;let M=0;if(m!==null){const E=m.array;M=m.version;for(let b=0,w=E.length;b<w;b+=3){const H=E[b+0],R=E[b+1],A=E[b+2];f.push(H,R,R,A,A,H)}}else if(_!==void 0){const E=_.array;M=_.version;for(let b=0,w=E.length/3-1;b<w;b+=3){const H=b+0,R=b+1,A=b+2;f.push(H,R,R,A,A,H)}}else return;const p=new(Ho(f)?Ko:qo)(f,1);p.version=M;const d=a.get(u);d&&e.remove(d),a.set(u,p)}function h(u){const f=a.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return a.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function ef(i,e,t){let n;function r(f){n=f}let a,s;function o(f){a=f.type,s=f.bytesPerElement}function l(f,m){i.drawElements(n,m,a,f*s),t.update(m,n,1)}function c(f,m,_){_!==0&&(i.drawElementsInstanced(n,m,a,f*s,_),t.update(m,n,_))}function h(f,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,a,f,0,_);let p=0;for(let d=0;d<_;d++)p+=m[d];t.update(p,n,1)}function u(f,m,_,M){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)c(f[d]/s,m[d],M[d]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,a,f,0,M,0,_);let d=0;for(let E=0;E<_;E++)d+=m[E]*M[E];t.update(d,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function tf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function nf(i,e,t){const n=new WeakMap,r=new rt;function a(s,o,l){const c=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let S=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();const m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let b=0;m===!0&&(b=1),_===!0&&(b=2),M===!0&&(b=3);let w=o.attributes.position.count*b,H=1;w>e.maxTextureSize&&(H=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const R=new Float32Array(w*H*4*u),A=new Go(R,w,H,u);A.type=rn,A.needsUpdate=!0;const I=b*4;for(let x=0;x<u;x++){const T=p[x],X=d[x],O=E[x],Y=w*H*4*x;for(let Z=0;Z<T.count;Z++){const j=Z*I;m===!0&&(r.fromBufferAttribute(T,Z),R[Y+j+0]=r.x,R[Y+j+1]=r.y,R[Y+j+2]=r.z,R[Y+j+3]=0),_===!0&&(r.fromBufferAttribute(X,Z),R[Y+j+4]=r.x,R[Y+j+5]=r.y,R[Y+j+6]=r.z,R[Y+j+7]=0),M===!0&&(r.fromBufferAttribute(O,Z),R[Y+j+8]=r.x,R[Y+j+9]=r.y,R[Y+j+10]=r.z,R[Y+j+11]=O.itemSize===4?r.w:1)}}f={count:u,texture:A,size:new Ze(w,H)},n.set(o,f),o.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let m=0;for(let M=0;M<c.length;M++)m+=c[M];const _=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:a}}function rf(i,e,t,n){let r=new WeakMap;function a(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return u}function s(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:s}}class el extends Mt{constructor(e,t,n,r,a,s,o,l,c,h=ci){if(h!==ci&&h!==mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ci&&(n=Vn),n===void 0&&h===mi&&(n=pi),super(null,r,a,s,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Vt,this.minFilter=l!==void 0?l:Vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const tl=new Mt,$s=new el(1,1),nl=new Go,il=new Vc,rl=new Jo,Zs=[],Js=[],Qs=new Float32Array(16),eo=new Float32Array(9),to=new Float32Array(4);function Mi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=Zs[r];if(a===void 0&&(a=new Float32Array(r),Zs[r]=a),e!==0){n.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(a,o)}return a}function ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ft(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ar(i,e){let t=Js[e];t===void 0&&(t=new Int32Array(e),Js[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function af(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function sf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;i.uniform2fv(this.addr,e),ft(t,e)}}function of(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ut(t,e))return;i.uniform3fv(this.addr,e),ft(t,e)}}function lf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;i.uniform4fv(this.addr,e),ft(t,e)}}function cf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(ut(t,n))return;to.set(n),i.uniformMatrix2fv(this.addr,!1,to),ft(t,n)}}function hf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(ut(t,n))return;eo.set(n),i.uniformMatrix3fv(this.addr,!1,eo),ft(t,n)}}function df(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(ut(t,n))return;Qs.set(n),i.uniformMatrix4fv(this.addr,!1,Qs),ft(t,n)}}function uf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ff(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;i.uniform2iv(this.addr,e),ft(t,e)}}function pf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;i.uniform3iv(this.addr,e),ft(t,e)}}function mf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;i.uniform4iv(this.addr,e),ft(t,e)}}function gf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function _f(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;i.uniform2uiv(this.addr,e),ft(t,e)}}function vf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;i.uniform3uiv(this.addr,e),ft(t,e)}}function xf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;i.uniform4uiv(this.addr,e),ft(t,e)}}function Mf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?($s.compareFunction=ko,a=$s):a=tl,t.setTexture2D(e||a,r)}function Sf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||il,r)}function yf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||rl,r)}function wf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||nl,r)}function bf(i){switch(i){case 5126:return af;case 35664:return sf;case 35665:return of;case 35666:return lf;case 35674:return cf;case 35675:return hf;case 35676:return df;case 5124:case 35670:return uf;case 35667:case 35671:return ff;case 35668:case 35672:return pf;case 35669:case 35673:return mf;case 5125:return gf;case 36294:return _f;case 36295:return vf;case 36296:return xf;case 35678:case 36198:case 36298:case 36306:case 35682:return Mf;case 35679:case 36299:case 36307:return Sf;case 35680:case 36300:case 36308:case 36293:return yf;case 36289:case 36303:case 36311:case 36292:return wf}}function Ef(i,e){i.uniform1fv(this.addr,e)}function Tf(i,e){const t=Mi(e,this.size,2);i.uniform2fv(this.addr,t)}function Af(i,e){const t=Mi(e,this.size,3);i.uniform3fv(this.addr,t)}function Cf(i,e){const t=Mi(e,this.size,4);i.uniform4fv(this.addr,t)}function Rf(i,e){const t=Mi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Pf(i,e){const t=Mi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Uf(i,e){const t=Mi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Lf(i,e){i.uniform1iv(this.addr,e)}function Df(i,e){i.uniform2iv(this.addr,e)}function If(i,e){i.uniform3iv(this.addr,e)}function Nf(i,e){i.uniform4iv(this.addr,e)}function Ff(i,e){i.uniform1uiv(this.addr,e)}function Of(i,e){i.uniform2uiv(this.addr,e)}function Bf(i,e){i.uniform3uiv(this.addr,e)}function zf(i,e){i.uniform4uiv(this.addr,e)}function kf(i,e,t){const n=this.cache,r=e.length,a=Ar(t,r);ut(n,a)||(i.uniform1iv(this.addr,a),ft(n,a));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||tl,a[s])}function Hf(i,e,t){const n=this.cache,r=e.length,a=Ar(t,r);ut(n,a)||(i.uniform1iv(this.addr,a),ft(n,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||il,a[s])}function Vf(i,e,t){const n=this.cache,r=e.length,a=Ar(t,r);ut(n,a)||(i.uniform1iv(this.addr,a),ft(n,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||rl,a[s])}function Gf(i,e,t){const n=this.cache,r=e.length,a=Ar(t,r);ut(n,a)||(i.uniform1iv(this.addr,a),ft(n,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||nl,a[s])}function Wf(i){switch(i){case 5126:return Ef;case 35664:return Tf;case 35665:return Af;case 35666:return Cf;case 35674:return Rf;case 35675:return Pf;case 35676:return Uf;case 5124:case 35670:return Lf;case 35667:case 35671:return Df;case 35668:case 35672:return If;case 35669:case 35673:return Nf;case 5125:return Ff;case 36294:return Of;case 36295:return Bf;case 36296:return zf;case 35678:case 36198:case 36298:case 36306:case 35682:return kf;case 35679:case 36299:case 36307:return Hf;case 35680:case 36300:case 36308:case 36293:return Vf;case 36289:case 36303:case 36311:case 36292:return Gf}}class Xf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=bf(t.type)}}class jf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Wf(t.type)}}class Yf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],n)}}}const ia=/(\w+)(\])?(\[|\.)?/g;function no(i,e){i.seq.push(e),i.map[e.id]=e}function qf(i,e,t){const n=i.name,r=n.length;for(ia.lastIndex=0;;){const a=ia.exec(n),s=ia.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){no(t,c===void 0?new Xf(o,i,e):new jf(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Yf(o),no(t,u)),t=u}}}class vr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),s=e.getUniformLocation(t,a.name);qf(a,s,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&n.push(s)}return n}}function io(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Kf=37297;let $f=0;function Zf(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}const ro=new Oe;function Jf(i){je._getMatrix(ro,je.workingColorSpace,i);const e=`mat3( ${ro.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(i)){case Er:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ao(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Zf(i.getShaderSource(e),s)}else return r}function Qf(i,e){const t=Jf(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ep(i,e){let t;switch(e){case mc:t="Linear";break;case gc:t="Reinhard";break;case _c:t="Cineon";break;case vc:t="ACESFilmic";break;case Mc:t="AgX";break;case Sc:t="Neutral";break;case xc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const cr=new N;function tp(){je.getLuminanceCoefficients(cr);const i=cr.x.toFixed(4),e=cr.y.toFixed(4),t=cr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function np(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Di).join(`
`)}function ip(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function rp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),s=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function Di(i){return i!==""}function so(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function oo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ap=/^[ \t]*#include +<([\w\d./]+)>/gm;function $a(i){return i.replace(ap,op)}const sp=new Map;function op(i,e){let t=ke[e];if(t===void 0){const n=sp.get(e);if(n!==void 0)t=ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return $a(t)}const lp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lo(i){return i.replace(lp,cp)}function cp(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function co(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===To?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ql?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===tn&&(e="SHADOWMAP_TYPE_VSM"),e}function dp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ui:case fi:e="ENVMAP_TYPE_CUBE";break;case br:e="ENVMAP_TYPE_CUBE_UV";break}return e}function up(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case fi:e="ENVMAP_MODE_REFRACTION";break}return e}function fp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ao:e="ENVMAP_BLENDING_MULTIPLY";break;case fc:e="ENVMAP_BLENDING_MIX";break;case pc:e="ENVMAP_BLENDING_ADD";break}return e}function pp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function mp(i,e,t,n){const r=i.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=hp(t),c=dp(t),h=up(t),u=fp(t),f=pp(t),m=np(t),_=ip(a),M=r.createProgram();let p,d,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Di).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Di).join(`
`),d.length>0&&(d+=`
`)):(p=[co(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Di).join(`
`),d=[co(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==En?"#define TONE_MAPPING":"",t.toneMapping!==En?ke.tonemapping_pars_fragment:"",t.toneMapping!==En?ep("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,Qf("linearToOutputTexel",t.outputColorSpace),tp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Di).join(`
`)),s=$a(s),s=so(s,t),s=oo(s,t),o=$a(o),o=so(o,t),o=oo(o,t),s=lo(s),o=lo(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===ys?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ys?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const b=E+p+s,w=E+d+o,H=io(r,r.VERTEX_SHADER,b),R=io(r,r.FRAGMENT_SHADER,w);r.attachShader(M,H),r.attachShader(M,R),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function A(T){if(i.debug.checkShaderErrors){const X=r.getProgramInfoLog(M).trim(),O=r.getShaderInfoLog(H).trim(),Y=r.getShaderInfoLog(R).trim();let Z=!0,j=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,M,H,R);else{const J=ao(r,H,"vertex"),V=ao(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+X+`
`+J+`
`+V)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(O===""||Y==="")&&(j=!1);j&&(T.diagnostics={runnable:Z,programLog:X,vertexShader:{log:O,prefix:p},fragmentShader:{log:Y,prefix:d}})}r.deleteShader(H),r.deleteShader(R),I=new vr(r,M),S=rp(r,M)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(M,Kf)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$f++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=H,this.fragmentShader=R,this}let gp=0;class _p{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new vp(e),t.set(e,n)),n}}class vp{constructor(e){this.id=gp++,this.code=e,this.usedTimes=0}}function xp(i,e,t,n,r,a,s){const o=new Xo,l=new _p,c=new Set,h=[],u=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,x,T,X,O){const Y=X.fog,Z=O.geometry,j=S.isMeshStandardMaterial?X.environment:null,J=(S.isMeshStandardMaterial?t:e).get(S.envMap||j),V=J&&J.mapping===br?J.image.height:null,ne=_[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const le=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,xe=le!==void 0?le.length:0;let De=0;Z.morphAttributes.position!==void 0&&(De=1),Z.morphAttributes.normal!==void 0&&(De=2),Z.morphAttributes.color!==void 0&&(De=3);let Ve,q,te,ye;if(ne){const qe=Xt[ne];Ve=qe.vertexShader,q=qe.fragmentShader}else Ve=S.vertexShader,q=S.fragmentShader,l.update(S),te=l.getVertexShaderID(S),ye=l.getFragmentShaderID(S);const se=i.getRenderTarget(),Ee=i.state.buffers.depth.getReversed(),Ue=O.isInstancedMesh===!0,Ie=O.isBatchedMesh===!0,tt=!!S.map,Be=!!S.matcap,lt=!!J,D=!!S.aoMap,yt=!!S.lightMap,He=!!S.bumpMap,Ge=!!S.normalMap,be=!!S.displacementMap,me=!!S.emissiveMap,Me=!!S.metalnessMap,y=!!S.roughnessMap,g=S.anisotropy>0,C=S.clearcoat>0,F=S.dispersion>0,K=S.iridescence>0,G=S.sheen>0,fe=S.transmission>0,ie=g&&!!S.anisotropyMap,de=C&&!!S.clearcoatMap,ze=C&&!!S.clearcoatNormalMap,Q=C&&!!S.clearcoatRoughnessMap,ue=K&&!!S.iridescenceMap,Te=K&&!!S.iridescenceThicknessMap,Ae=G&&!!S.sheenColorMap,pe=G&&!!S.sheenRoughnessMap,Ce=!!S.specularMap,Ne=!!S.specularColorMap,Je=!!S.specularIntensityMap,P=fe&&!!S.transmissionMap,re=fe&&!!S.thicknessMap,W=!!S.gradientMap,$=!!S.alphaMap,ce=S.alphaTest>0,he=!!S.alphaHash,Fe=!!S.extensions;let st=En;S.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(st=i.toneMapping);const dt={shaderID:ne,shaderType:S.type,shaderName:S.name,vertexShader:Ve,fragmentShader:q,defines:S.defines,customVertexShaderID:te,customFragmentShaderID:ye,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Ie,batchingColor:Ie&&O._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&O.instanceColor!==null,instancingMorph:Ue&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:_i,alphaToCoverage:!!S.alphaToCoverage,map:tt,matcap:Be,envMap:lt,envMapMode:lt&&J.mapping,envMapCubeUVHeight:V,aoMap:D,lightMap:yt,bumpMap:He,normalMap:Ge,displacementMap:f&&be,emissiveMap:me,normalMapObjectSpace:Ge&&S.normalMapType===Ec,normalMapTangentSpace:Ge&&S.normalMapType===zo,metalnessMap:Me,roughnessMap:y,anisotropy:g,anisotropyMap:ie,clearcoat:C,clearcoatMap:de,clearcoatNormalMap:ze,clearcoatRoughnessMap:Q,dispersion:F,iridescence:K,iridescenceMap:ue,iridescenceThicknessMap:Te,sheen:G,sheenColorMap:Ae,sheenRoughnessMap:pe,specularMap:Ce,specularColorMap:Ne,specularIntensityMap:Je,transmission:fe,transmissionMap:P,thicknessMap:re,gradientMap:W,opaque:S.transparent===!1&&S.blending===li&&S.alphaToCoverage===!1,alphaMap:$,alphaTest:ce,alphaHash:he,combine:S.combine,mapUv:tt&&M(S.map.channel),aoMapUv:D&&M(S.aoMap.channel),lightMapUv:yt&&M(S.lightMap.channel),bumpMapUv:He&&M(S.bumpMap.channel),normalMapUv:Ge&&M(S.normalMap.channel),displacementMapUv:be&&M(S.displacementMap.channel),emissiveMapUv:me&&M(S.emissiveMap.channel),metalnessMapUv:Me&&M(S.metalnessMap.channel),roughnessMapUv:y&&M(S.roughnessMap.channel),anisotropyMapUv:ie&&M(S.anisotropyMap.channel),clearcoatMapUv:de&&M(S.clearcoatMap.channel),clearcoatNormalMapUv:ze&&M(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&M(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&M(S.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&M(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&M(S.sheenColorMap.channel),sheenRoughnessMapUv:pe&&M(S.sheenRoughnessMap.channel),specularMapUv:Ce&&M(S.specularMap.channel),specularColorMapUv:Ne&&M(S.specularColorMap.channel),specularIntensityMapUv:Je&&M(S.specularIntensityMap.channel),transmissionMapUv:P&&M(S.transmissionMap.channel),thicknessMapUv:re&&M(S.thicknessMap.channel),alphaMapUv:$&&M(S.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Ge||g),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Z.attributes.uv&&(tt||$),fog:!!Y,useFog:S.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ee,skinning:O.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:De,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:st,decodeVideoTexture:tt&&S.map.isVideoTexture===!0&&je.getTransfer(S.map.colorSpace)===it,decodeVideoTextureEmissive:me&&S.emissiveMap.isVideoTexture===!0&&je.getTransfer(S.emissiveMap.colorSpace)===it,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===nn,flipSided:S.side===At,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Fe&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&S.extensions.multiDraw===!0||Ie)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return dt.vertexUv1s=c.has(1),dt.vertexUv2s=c.has(2),dt.vertexUv3s=c.has(3),c.clear(),dt}function d(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const T in S.defines)x.push(T),x.push(S.defines[T]);return S.isRawShaderMaterial===!1&&(E(x,S),b(x,S),x.push(i.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function E(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function b(S,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),S.push(o.mask)}function w(S){const x=_[S.type];let T;if(x){const X=Xt[x];T=eh.clone(X.uniforms)}else T=S.uniforms;return T}function H(S,x){let T;for(let X=0,O=h.length;X<O;X++){const Y=h[X];if(Y.cacheKey===x){T=Y,++T.usedTimes;break}}return T===void 0&&(T=new mp(i,x,S,a),h.push(T)),T}function R(S){if(--S.usedTimes===0){const x=h.indexOf(S);h[x]=h[h.length-1],h.pop(),S.destroy()}}function A(S){l.remove(S)}function I(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:w,acquireProgram:H,releaseProgram:R,releaseShaderCache:A,programs:h,dispose:I}}function Mp(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function n(s){i.delete(s)}function r(s,o,l){i.get(s)[o]=l}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function Sp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ho(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function uo(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function s(u,f,m,_,M,p){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:_,renderOrder:u.renderOrder,z:M,group:p},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=_,d.renderOrder=u.renderOrder,d.z=M,d.group=p),e++,d}function o(u,f,m,_,M,p){const d=s(u,f,m,_,M,p);m.transmission>0?n.push(d):m.transparent===!0?r.push(d):t.push(d)}function l(u,f,m,_,M,p){const d=s(u,f,m,_,M,p);m.transmission>0?n.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||Sp),n.length>1&&n.sort(f||ho),r.length>1&&r.sort(f||ho)}function h(){for(let u=e,f=i.length;u<f;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:o,unshift:l,finish:h,sort:c}}function yp(){let i=new WeakMap;function e(n,r){const a=i.get(n);let s;return a===void 0?(s=new uo,i.set(n,[s])):r>=a.length?(s=new uo,a.push(s)):s=a[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function wp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ye};break;case"SpotLight":t={position:new N,direction:new N,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function bp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Ep=0;function Tp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ap(i){const e=new wp,t=bp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const r=new N,a=new ct,s=new ct;function o(c){let h=0,u=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let m=0,_=0,M=0,p=0,d=0,E=0,b=0,w=0,H=0,R=0,A=0;c.sort(Tp);for(let S=0,x=c.length;S<x;S++){const T=c[S],X=T.color,O=T.intensity,Y=T.distance,Z=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=X.r*O,u+=X.g*O,f+=X.b*O;else if(T.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(T.sh.coefficients[j],O);A++}else if(T.isDirectionalLight){const j=e.get(T);if(j.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const J=T.shadow,V=t.get(T);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.directionalShadow[m]=V,n.directionalShadowMap[m]=Z,n.directionalShadowMatrix[m]=T.shadow.matrix,E++}n.directional[m]=j,m++}else if(T.isSpotLight){const j=e.get(T);j.position.setFromMatrixPosition(T.matrixWorld),j.color.copy(X).multiplyScalar(O),j.distance=Y,j.coneCos=Math.cos(T.angle),j.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),j.decay=T.decay,n.spot[M]=j;const J=T.shadow;if(T.map&&(n.spotLightMap[H]=T.map,H++,J.updateMatrices(T),T.castShadow&&R++),n.spotLightMatrix[M]=J.matrix,T.castShadow){const V=t.get(T);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.spotShadow[M]=V,n.spotShadowMap[M]=Z,w++}M++}else if(T.isRectAreaLight){const j=e.get(T);j.color.copy(X).multiplyScalar(O),j.halfWidth.set(T.width*.5,0,0),j.halfHeight.set(0,T.height*.5,0),n.rectArea[p]=j,p++}else if(T.isPointLight){const j=e.get(T);if(j.color.copy(T.color).multiplyScalar(T.intensity),j.distance=T.distance,j.decay=T.decay,T.castShadow){const J=T.shadow,V=t.get(T);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,V.shadowCameraNear=J.camera.near,V.shadowCameraFar=J.camera.far,n.pointShadow[_]=V,n.pointShadowMap[_]=Z,n.pointShadowMatrix[_]=T.shadow.matrix,b++}n.point[_]=j,_++}else if(T.isHemisphereLight){const j=e.get(T);j.skyColor.copy(T.color).multiplyScalar(O),j.groundColor.copy(T.groundColor).multiplyScalar(O),n.hemi[d]=j,d++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const I=n.hash;(I.directionalLength!==m||I.pointLength!==_||I.spotLength!==M||I.rectAreaLength!==p||I.hemiLength!==d||I.numDirectionalShadows!==E||I.numPointShadows!==b||I.numSpotShadows!==w||I.numSpotMaps!==H||I.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=M,n.rectArea.length=p,n.point.length=_,n.hemi.length=d,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=w+H-R,n.spotLightMap.length=H,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,I.directionalLength=m,I.pointLength=_,I.spotLength=M,I.rectAreaLength=p,I.hemiLength=d,I.numDirectionalShadows=E,I.numPointShadows=b,I.numSpotShadows=w,I.numSpotMaps=H,I.numLightProbes=A,n.version=Ep++)}function l(c,h){let u=0,f=0,m=0,_=0,M=0;const p=h.matrixWorldInverse;for(let d=0,E=c.length;d<E;d++){const b=c[d];if(b.isDirectionalLight){const w=n.directional[u];w.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),u++}else if(b.isSpotLight){const w=n.spot[m];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),m++}else if(b.isRectAreaLight){const w=n.rectArea[_];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(p),s.identity(),a.copy(b.matrixWorld),a.premultiply(p),s.extractRotation(a),w.halfWidth.set(b.width*.5,0,0),w.halfHeight.set(0,b.height*.5,0),w.halfWidth.applyMatrix4(s),w.halfHeight.applyMatrix4(s),_++}else if(b.isPointLight){const w=n.point[f];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){const w=n.hemi[M];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(p),M++}}}return{setup:o,setupView:l,state:n}}function fo(i){const e=new Ap(i),t=[],n=[];function r(h){c.camera=h,t.length=0,n.length=0}function a(h){t.push(h)}function s(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:s}}function Cp(i){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new fo(i),e.set(r,[o])):a>=s.length?(o=new fo(i),s.push(o)):o=s[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Rp extends xi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=wc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Pp extends xi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Up=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Dp(i,e,t){let n=new as;const r=new Ze,a=new Ze,s=new rt,o=new Rp({depthPacking:bc}),l=new Pp,c={},h=t.maxTextureSize,u={[Tn]:At,[At]:Tn,[nn]:nn},f=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:Up,fragmentShader:Lp}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new ln;_.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Yt(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=To;let d=this.type;this.render=function(R,A,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const S=i.getRenderTarget(),x=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),X=i.state;X.setBlending(bn),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const O=d!==tn&&this.type===tn,Y=d===tn&&this.type!==tn;for(let Z=0,j=R.length;Z<j;Z++){const J=R[Z],V=J.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const ne=V.getFrameExtents();if(r.multiply(ne),a.copy(V.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(a.x=Math.floor(h/ne.x),r.x=a.x*ne.x,V.mapSize.x=a.x),r.y>h&&(a.y=Math.floor(h/ne.y),r.y=a.y*ne.y,V.mapSize.y=a.y)),V.map===null||O===!0||Y===!0){const xe=this.type!==tn?{minFilter:Vt,magFilter:Vt}:{};V.map!==null&&V.map.dispose(),V.map=new Gn(r.x,r.y,xe),V.map.texture.name=J.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const le=V.getViewportCount();for(let xe=0;xe<le;xe++){const De=V.getViewport(xe);s.set(a.x*De.x,a.y*De.y,a.x*De.z,a.y*De.w),X.viewport(s),V.updateMatrices(J,xe),n=V.getFrustum(),w(A,I,V.camera,J,this.type)}V.isPointLightShadow!==!0&&this.type===tn&&E(V,I),V.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(S,x,T)};function E(R,A){const I=e.update(M);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Gn(r.x,r.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(A,null,I,f,M,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(A,null,I,m,M,null)}function b(R,A,I,S){let x=null;const T=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(T!==void 0)x=T;else if(x=I.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const X=x.uuid,O=A.uuid;let Y=c[X];Y===void 0&&(Y={},c[X]=Y);let Z=Y[O];Z===void 0&&(Z=x.clone(),Y[O]=Z,A.addEventListener("dispose",H)),x=Z}if(x.visible=A.visible,x.wireframe=A.wireframe,S===tn?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:u[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,I.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const X=i.properties.get(x);X.light=I}return x}function w(R,A,I,S,x){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===tn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);const O=e.update(R),Y=R.material;if(Array.isArray(Y)){const Z=O.groups;for(let j=0,J=Z.length;j<J;j++){const V=Z[j],ne=Y[V.materialIndex];if(ne&&ne.visible){const le=b(R,ne,S,x);R.onBeforeShadow(i,R,A,I,O,le,V),i.renderBufferDirect(I,null,O,le,R,V),R.onAfterShadow(i,R,A,I,O,le,V)}}}else if(Y.visible){const Z=b(R,Y,S,x);R.onBeforeShadow(i,R,A,I,O,Z,null),i.renderBufferDirect(I,null,O,Z,R,null),R.onAfterShadow(i,R,A,I,O,Z,null)}}const X=R.children;for(let O=0,Y=X.length;O<Y;O++)w(X[O],A,I,S,x)}function H(R){R.target.removeEventListener("dispose",H);for(const I in c){const S=c[I],x=R.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}const Ip={[ua]:fa,[pa]:_a,[ma]:va,[di]:ga,[fa]:ua,[_a]:pa,[va]:ma,[ga]:di};function Np(i,e){function t(){let P=!1;const re=new rt;let W=null;const $=new rt(0,0,0,0);return{setMask:function(ce){W!==ce&&!P&&(i.colorMask(ce,ce,ce,ce),W=ce)},setLocked:function(ce){P=ce},setClear:function(ce,he,Fe,st,dt){dt===!0&&(ce*=st,he*=st,Fe*=st),re.set(ce,he,Fe,st),$.equals(re)===!1&&(i.clearColor(ce,he,Fe,st),$.copy(re))},reset:function(){P=!1,W=null,$.set(-1,0,0,0)}}}function n(){let P=!1,re=!1,W=null,$=null,ce=null;return{setReversed:function(he){if(re!==he){const Fe=e.get("EXT_clip_control");re?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT);const st=ce;ce=null,this.setClear(st)}re=he},getReversed:function(){return re},setTest:function(he){he?se(i.DEPTH_TEST):Ee(i.DEPTH_TEST)},setMask:function(he){W!==he&&!P&&(i.depthMask(he),W=he)},setFunc:function(he){if(re&&(he=Ip[he]),$!==he){switch(he){case ua:i.depthFunc(i.NEVER);break;case fa:i.depthFunc(i.ALWAYS);break;case pa:i.depthFunc(i.LESS);break;case di:i.depthFunc(i.LEQUAL);break;case ma:i.depthFunc(i.EQUAL);break;case ga:i.depthFunc(i.GEQUAL);break;case _a:i.depthFunc(i.GREATER);break;case va:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=he}},setLocked:function(he){P=he},setClear:function(he){ce!==he&&(re&&(he=1-he),i.clearDepth(he),ce=he)},reset:function(){P=!1,W=null,$=null,ce=null,re=!1}}}function r(){let P=!1,re=null,W=null,$=null,ce=null,he=null,Fe=null,st=null,dt=null;return{setTest:function(qe){P||(qe?se(i.STENCIL_TEST):Ee(i.STENCIL_TEST))},setMask:function(qe){re!==qe&&!P&&(i.stencilMask(qe),re=qe)},setFunc:function(qe,wt,Dt){(W!==qe||$!==wt||ce!==Dt)&&(i.stencilFunc(qe,wt,Dt),W=qe,$=wt,ce=Dt)},setOp:function(qe,wt,Dt){(he!==qe||Fe!==wt||st!==Dt)&&(i.stencilOp(qe,wt,Dt),he=qe,Fe=wt,st=Dt)},setLocked:function(qe){P=qe},setClear:function(qe){dt!==qe&&(i.clearStencil(qe),dt=qe)},reset:function(){P=!1,re=null,W=null,$=null,ce=null,he=null,Fe=null,st=null,dt=null}}}const a=new t,s=new n,o=new r,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,m=[],_=null,M=!1,p=null,d=null,E=null,b=null,w=null,H=null,R=null,A=new Ye(0,0,0),I=0,S=!1,x=null,T=null,X=null,O=null,Y=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,J=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(V)[1]),j=J>=1):V.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),j=J>=2);let ne=null,le={};const xe=i.getParameter(i.SCISSOR_BOX),De=i.getParameter(i.VIEWPORT),Ve=new rt().fromArray(xe),q=new rt().fromArray(De);function te(P,re,W,$){const ce=new Uint8Array(4),he=i.createTexture();i.bindTexture(P,he),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<W;Fe++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(re,0,i.RGBA,1,1,$,0,i.RGBA,i.UNSIGNED_BYTE,ce):i.texImage2D(re+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ce);return he}const ye={};ye[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),ye[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ye[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),se(i.DEPTH_TEST),s.setFunc(di),He(!1),Ge(gs),se(i.CULL_FACE),D(bn);function se(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function Ee(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function Ue(P,re){return u[P]!==re?(i.bindFramebuffer(P,re),u[P]=re,P===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=re),P===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=re),!0):!1}function Ie(P,re){let W=m,$=!1;if(P){W=f.get(re),W===void 0&&(W=[],f.set(re,W));const ce=P.textures;if(W.length!==ce.length||W[0]!==i.COLOR_ATTACHMENT0){for(let he=0,Fe=ce.length;he<Fe;he++)W[he]=i.COLOR_ATTACHMENT0+he;W.length=ce.length,$=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,$=!0);$&&i.drawBuffers(W)}function tt(P){return _!==P?(i.useProgram(P),_=P,!0):!1}const Be={[On]:i.FUNC_ADD,[$l]:i.FUNC_SUBTRACT,[Zl]:i.FUNC_REVERSE_SUBTRACT};Be[Jl]=i.MIN,Be[Ql]=i.MAX;const lt={[ec]:i.ZERO,[tc]:i.ONE,[nc]:i.SRC_COLOR,[ha]:i.SRC_ALPHA,[lc]:i.SRC_ALPHA_SATURATE,[sc]:i.DST_COLOR,[rc]:i.DST_ALPHA,[ic]:i.ONE_MINUS_SRC_COLOR,[da]:i.ONE_MINUS_SRC_ALPHA,[oc]:i.ONE_MINUS_DST_COLOR,[ac]:i.ONE_MINUS_DST_ALPHA,[cc]:i.CONSTANT_COLOR,[hc]:i.ONE_MINUS_CONSTANT_COLOR,[dc]:i.CONSTANT_ALPHA,[uc]:i.ONE_MINUS_CONSTANT_ALPHA};function D(P,re,W,$,ce,he,Fe,st,dt,qe){if(P===bn){M===!0&&(Ee(i.BLEND),M=!1);return}if(M===!1&&(se(i.BLEND),M=!0),P!==Kl){if(P!==p||qe!==S){if((d!==On||w!==On)&&(i.blendEquation(i.FUNC_ADD),d=On,w=On),qe)switch(P){case li:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _s:i.blendFunc(i.ONE,i.ONE);break;case vs:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xs:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case li:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _s:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case vs:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xs:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}E=null,b=null,H=null,R=null,A.set(0,0,0),I=0,p=P,S=qe}return}ce=ce||re,he=he||W,Fe=Fe||$,(re!==d||ce!==w)&&(i.blendEquationSeparate(Be[re],Be[ce]),d=re,w=ce),(W!==E||$!==b||he!==H||Fe!==R)&&(i.blendFuncSeparate(lt[W],lt[$],lt[he],lt[Fe]),E=W,b=$,H=he,R=Fe),(st.equals(A)===!1||dt!==I)&&(i.blendColor(st.r,st.g,st.b,dt),A.copy(st),I=dt),p=P,S=!1}function yt(P,re){P.side===nn?Ee(i.CULL_FACE):se(i.CULL_FACE);let W=P.side===At;re&&(W=!W),He(W),P.blending===li&&P.transparent===!1?D(bn):D(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),s.setFunc(P.depthFunc),s.setTest(P.depthTest),s.setMask(P.depthWrite),a.setMask(P.colorWrite);const $=P.stencilWrite;o.setTest($),$&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),me(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):Ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function He(P){x!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),x=P)}function Ge(P){P!==jl?(se(i.CULL_FACE),P!==T&&(P===gs?i.cullFace(i.BACK):P===Yl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ee(i.CULL_FACE),T=P}function be(P){P!==X&&(j&&i.lineWidth(P),X=P)}function me(P,re,W){P?(se(i.POLYGON_OFFSET_FILL),(O!==re||Y!==W)&&(i.polygonOffset(re,W),O=re,Y=W)):Ee(i.POLYGON_OFFSET_FILL)}function Me(P){P?se(i.SCISSOR_TEST):Ee(i.SCISSOR_TEST)}function y(P){P===void 0&&(P=i.TEXTURE0+Z-1),ne!==P&&(i.activeTexture(P),ne=P)}function g(P,re,W){W===void 0&&(ne===null?W=i.TEXTURE0+Z-1:W=ne);let $=le[W];$===void 0&&($={type:void 0,texture:void 0},le[W]=$),($.type!==P||$.texture!==re)&&(ne!==W&&(i.activeTexture(W),ne=W),i.bindTexture(P,re||ye[P]),$.type=P,$.texture=re)}function C(){const P=le[ne];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function F(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function G(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function de(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ze(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ue(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Te(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ae(P){Ve.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Ve.copy(P))}function pe(P){q.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),q.copy(P))}function Ce(P,re){let W=c.get(re);W===void 0&&(W=new WeakMap,c.set(re,W));let $=W.get(P);$===void 0&&($=i.getUniformBlockIndex(re,P.name),W.set(P,$))}function Ne(P,re){const $=c.get(re).get(P);l.get(re)!==$&&(i.uniformBlockBinding(re,$,P.__bindingPointIndex),l.set(re,$))}function Je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ne=null,le={},u={},f=new WeakMap,m=[],_=null,M=!1,p=null,d=null,E=null,b=null,w=null,H=null,R=null,A=new Ye(0,0,0),I=0,S=!1,x=null,T=null,X=null,O=null,Y=null,Ve.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:se,disable:Ee,bindFramebuffer:Ue,drawBuffers:Ie,useProgram:tt,setBlending:D,setMaterial:yt,setFlipSided:He,setCullFace:Ge,setLineWidth:be,setPolygonOffset:me,setScissorTest:Me,activeTexture:y,bindTexture:g,unbindTexture:C,compressedTexImage2D:F,compressedTexImage3D:K,texImage2D:ue,texImage3D:Te,updateUBOMapping:Ce,uniformBlockBinding:Ne,texStorage2D:ze,texStorage3D:Q,texSubImage2D:G,texSubImage3D:fe,compressedTexSubImage2D:ie,compressedTexSubImage3D:de,scissor:Ae,viewport:pe,reset:Je}}function po(i,e,t,n){const r=Fp(n);switch(t){case Lo:return i*e;case Io:return i*e;case No:return i*e*2;case Fo:return i*e/r.components*r.byteLength;case ns:return i*e/r.components*r.byteLength;case Oo:return i*e*2/r.components*r.byteLength;case is:return i*e*2/r.components*r.byteLength;case Do:return i*e*3/r.components*r.byteLength;case Ht:return i*e*4/r.components*r.byteLength;case rs:return i*e*4/r.components*r.byteLength;case fr:case pr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case mr:case gr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ba:case Ta:return Math.max(i,16)*Math.max(e,8)/4;case wa:case Ea:return Math.max(i,8)*Math.max(e,8)/2;case Aa:case Ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ua:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case La:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Da:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ia:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Na:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case za:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ka:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Va:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ga:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case _r:case Wa:case Xa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Bo:case ja:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ya:case qa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Fp(i){switch(i){case on:case Ro:return{byteLength:1,components:1};case Ii:case Po:case Fi:return{byteLength:2,components:1};case es:case ts:return{byteLength:2,components:4};case Vn:case Qa:case rn:return{byteLength:4,components:1};case Uo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Op(i,e,t,n,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ze,h=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(y,g){return m?new OffscreenCanvas(y,g):Ni("canvas")}function M(y,g,C){let F=1;const K=Me(y);if((K.width>C||K.height>C)&&(F=C/Math.max(K.width,K.height)),F<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const G=Math.floor(F*K.width),fe=Math.floor(F*K.height);u===void 0&&(u=_(G,fe));const ie=g?_(G,fe):u;return ie.width=G,ie.height=fe,ie.getContext("2d").drawImage(y,0,0,G,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+G+"x"+fe+")."),ie}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),y;return y}function p(y){return y.generateMipmaps}function d(y){i.generateMipmap(y)}function E(y){return y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?i.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(y,g,C,F,K=!1){if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let G=g;if(g===i.RED&&(C===i.FLOAT&&(G=i.R32F),C===i.HALF_FLOAT&&(G=i.R16F),C===i.UNSIGNED_BYTE&&(G=i.R8)),g===i.RED_INTEGER&&(C===i.UNSIGNED_BYTE&&(G=i.R8UI),C===i.UNSIGNED_SHORT&&(G=i.R16UI),C===i.UNSIGNED_INT&&(G=i.R32UI),C===i.BYTE&&(G=i.R8I),C===i.SHORT&&(G=i.R16I),C===i.INT&&(G=i.R32I)),g===i.RG&&(C===i.FLOAT&&(G=i.RG32F),C===i.HALF_FLOAT&&(G=i.RG16F),C===i.UNSIGNED_BYTE&&(G=i.RG8)),g===i.RG_INTEGER&&(C===i.UNSIGNED_BYTE&&(G=i.RG8UI),C===i.UNSIGNED_SHORT&&(G=i.RG16UI),C===i.UNSIGNED_INT&&(G=i.RG32UI),C===i.BYTE&&(G=i.RG8I),C===i.SHORT&&(G=i.RG16I),C===i.INT&&(G=i.RG32I)),g===i.RGB_INTEGER&&(C===i.UNSIGNED_BYTE&&(G=i.RGB8UI),C===i.UNSIGNED_SHORT&&(G=i.RGB16UI),C===i.UNSIGNED_INT&&(G=i.RGB32UI),C===i.BYTE&&(G=i.RGB8I),C===i.SHORT&&(G=i.RGB16I),C===i.INT&&(G=i.RGB32I)),g===i.RGBA_INTEGER&&(C===i.UNSIGNED_BYTE&&(G=i.RGBA8UI),C===i.UNSIGNED_SHORT&&(G=i.RGBA16UI),C===i.UNSIGNED_INT&&(G=i.RGBA32UI),C===i.BYTE&&(G=i.RGBA8I),C===i.SHORT&&(G=i.RGBA16I),C===i.INT&&(G=i.RGBA32I)),g===i.RGB&&C===i.UNSIGNED_INT_5_9_9_9_REV&&(G=i.RGB9_E5),g===i.RGBA){const fe=K?Er:je.getTransfer(F);C===i.FLOAT&&(G=i.RGBA32F),C===i.HALF_FLOAT&&(G=i.RGBA16F),C===i.UNSIGNED_BYTE&&(G=fe===it?i.SRGB8_ALPHA8:i.RGBA8),C===i.UNSIGNED_SHORT_4_4_4_4&&(G=i.RGBA4),C===i.UNSIGNED_SHORT_5_5_5_1&&(G=i.RGB5_A1)}return(G===i.R16F||G===i.R32F||G===i.RG16F||G===i.RG32F||G===i.RGBA16F||G===i.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function w(y,g){let C;return y?g===null||g===Vn||g===pi?C=i.DEPTH24_STENCIL8:g===rn?C=i.DEPTH32F_STENCIL8:g===Ii&&(C=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Vn||g===pi?C=i.DEPTH_COMPONENT24:g===rn?C=i.DEPTH_COMPONENT32F:g===Ii&&(C=i.DEPTH_COMPONENT16),C}function H(y,g){return p(y)===!0||y.isFramebufferTexture&&y.minFilter!==Vt&&y.minFilter!==jt?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function R(y){const g=y.target;g.removeEventListener("dispose",R),I(g),g.isVideoTexture&&h.delete(g)}function A(y){const g=y.target;g.removeEventListener("dispose",A),x(g)}function I(y){const g=n.get(y);if(g.__webglInit===void 0)return;const C=y.source,F=f.get(C);if(F){const K=F[g.__cacheKey];K.usedTimes--,K.usedTimes===0&&S(y),Object.keys(F).length===0&&f.delete(C)}n.remove(y)}function S(y){const g=n.get(y);i.deleteTexture(g.__webglTexture);const C=y.source,F=f.get(C);delete F[g.__cacheKey],s.memory.textures--}function x(y){const g=n.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),n.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(g.__webglFramebuffer[F]))for(let K=0;K<g.__webglFramebuffer[F].length;K++)i.deleteFramebuffer(g.__webglFramebuffer[F][K]);else i.deleteFramebuffer(g.__webglFramebuffer[F]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[F])}else{if(Array.isArray(g.__webglFramebuffer))for(let F=0;F<g.__webglFramebuffer.length;F++)i.deleteFramebuffer(g.__webglFramebuffer[F]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let F=0;F<g.__webglColorRenderbuffer.length;F++)g.__webglColorRenderbuffer[F]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[F]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const C=y.textures;for(let F=0,K=C.length;F<K;F++){const G=n.get(C[F]);G.__webglTexture&&(i.deleteTexture(G.__webglTexture),s.memory.textures--),n.remove(C[F])}n.remove(y)}let T=0;function X(){T=0}function O(){const y=T;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),T+=1,y}function Y(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function Z(y,g){const C=n.get(y);if(y.isVideoTexture&&be(y),y.isRenderTargetTexture===!1&&y.version>0&&C.__version!==y.version){const F=y.image;if(F===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(C,y,g);return}}t.bindTexture(i.TEXTURE_2D,C.__webglTexture,i.TEXTURE0+g)}function j(y,g){const C=n.get(y);if(y.version>0&&C.__version!==y.version){q(C,y,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,C.__webglTexture,i.TEXTURE0+g)}function J(y,g){const C=n.get(y);if(y.version>0&&C.__version!==y.version){q(C,y,g);return}t.bindTexture(i.TEXTURE_3D,C.__webglTexture,i.TEXTURE0+g)}function V(y,g){const C=n.get(y);if(y.version>0&&C.__version!==y.version){te(C,y,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+g)}const ne={[Sa]:i.REPEAT,[zn]:i.CLAMP_TO_EDGE,[ya]:i.MIRRORED_REPEAT},le={[Vt]:i.NEAREST,[yc]:i.NEAREST_MIPMAP_NEAREST,[Gi]:i.NEAREST_MIPMAP_LINEAR,[jt]:i.LINEAR,[Rr]:i.LINEAR_MIPMAP_NEAREST,[kn]:i.LINEAR_MIPMAP_LINEAR},xe={[Tc]:i.NEVER,[Lc]:i.ALWAYS,[Ac]:i.LESS,[ko]:i.LEQUAL,[Cc]:i.EQUAL,[Uc]:i.GEQUAL,[Rc]:i.GREATER,[Pc]:i.NOTEQUAL};function De(y,g){if(g.type===rn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===jt||g.magFilter===Rr||g.magFilter===Gi||g.magFilter===kn||g.minFilter===jt||g.minFilter===Rr||g.minFilter===Gi||g.minFilter===kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(y,i.TEXTURE_WRAP_S,ne[g.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,ne[g.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,ne[g.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,le[g.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,le[g.minFilter]),g.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,xe[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Vt||g.minFilter!==Gi&&g.minFilter!==kn||g.type===rn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const C=e.get("EXT_texture_filter_anisotropic");i.texParameterf(y,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Ve(y,g){let C=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",R));const F=g.source;let K=f.get(F);K===void 0&&(K={},f.set(F,K));const G=Y(g);if(G!==y.__cacheKey){K[G]===void 0&&(K[G]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,C=!0),K[G].usedTimes++;const fe=K[y.__cacheKey];fe!==void 0&&(K[y.__cacheKey].usedTimes--,fe.usedTimes===0&&S(g)),y.__cacheKey=G,y.__webglTexture=K[G].texture}return C}function q(y,g,C){let F=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(F=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(F=i.TEXTURE_3D);const K=Ve(y,g),G=g.source;t.bindTexture(F,y.__webglTexture,i.TEXTURE0+C);const fe=n.get(G);if(G.version!==fe.__version||K===!0){t.activeTexture(i.TEXTURE0+C);const ie=je.getPrimaries(je.workingColorSpace),de=g.colorSpace===wn?null:je.getPrimaries(g.colorSpace),ze=g.colorSpace===wn||ie===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let Q=M(g.image,!1,r.maxTextureSize);Q=me(g,Q);const ue=a.convert(g.format,g.colorSpace),Te=a.convert(g.type);let Ae=b(g.internalFormat,ue,Te,g.colorSpace,g.isVideoTexture);De(F,g);let pe;const Ce=g.mipmaps,Ne=g.isVideoTexture!==!0,Je=fe.__version===void 0||K===!0,P=G.dataReady,re=H(g,Q);if(g.isDepthTexture)Ae=w(g.format===mi,g.type),Je&&(Ne?t.texStorage2D(i.TEXTURE_2D,1,Ae,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,Ae,Q.width,Q.height,0,ue,Te,null));else if(g.isDataTexture)if(Ce.length>0){Ne&&Je&&t.texStorage2D(i.TEXTURE_2D,re,Ae,Ce[0].width,Ce[0].height);for(let W=0,$=Ce.length;W<$;W++)pe=Ce[W],Ne?P&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,pe.width,pe.height,ue,Te,pe.data):t.texImage2D(i.TEXTURE_2D,W,Ae,pe.width,pe.height,0,ue,Te,pe.data);g.generateMipmaps=!1}else Ne?(Je&&t.texStorage2D(i.TEXTURE_2D,re,Ae,Q.width,Q.height),P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,ue,Te,Q.data)):t.texImage2D(i.TEXTURE_2D,0,Ae,Q.width,Q.height,0,ue,Te,Q.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ne&&Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,re,Ae,Ce[0].width,Ce[0].height,Q.depth);for(let W=0,$=Ce.length;W<$;W++)if(pe=Ce[W],g.format!==Ht)if(ue!==null)if(Ne){if(P)if(g.layerUpdates.size>0){const ce=po(pe.width,pe.height,g.format,g.type);for(const he of g.layerUpdates){const Fe=pe.data.subarray(he*ce/pe.data.BYTES_PER_ELEMENT,(he+1)*ce/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,he,pe.width,pe.height,1,ue,Fe)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,pe.width,pe.height,Q.depth,ue,pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Ae,pe.width,pe.height,Q.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?P&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,pe.width,pe.height,Q.depth,ue,Te,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,W,Ae,pe.width,pe.height,Q.depth,0,ue,Te,pe.data)}else{Ne&&Je&&t.texStorage2D(i.TEXTURE_2D,re,Ae,Ce[0].width,Ce[0].height);for(let W=0,$=Ce.length;W<$;W++)pe=Ce[W],g.format!==Ht?ue!==null?Ne?P&&t.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,pe.width,pe.height,ue,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,W,Ae,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?P&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,pe.width,pe.height,ue,Te,pe.data):t.texImage2D(i.TEXTURE_2D,W,Ae,pe.width,pe.height,0,ue,Te,pe.data)}else if(g.isDataArrayTexture)if(Ne){if(Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,re,Ae,Q.width,Q.height,Q.depth),P)if(g.layerUpdates.size>0){const W=po(Q.width,Q.height,g.format,g.type);for(const $ of g.layerUpdates){const ce=Q.data.subarray($*W/Q.data.BYTES_PER_ELEMENT,($+1)*W/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,Q.width,Q.height,1,ue,Te,ce)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ue,Te,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ae,Q.width,Q.height,Q.depth,0,ue,Te,Q.data);else if(g.isData3DTexture)Ne?(Je&&t.texStorage3D(i.TEXTURE_3D,re,Ae,Q.width,Q.height,Q.depth),P&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ue,Te,Q.data)):t.texImage3D(i.TEXTURE_3D,0,Ae,Q.width,Q.height,Q.depth,0,ue,Te,Q.data);else if(g.isFramebufferTexture){if(Je)if(Ne)t.texStorage2D(i.TEXTURE_2D,re,Ae,Q.width,Q.height);else{let W=Q.width,$=Q.height;for(let ce=0;ce<re;ce++)t.texImage2D(i.TEXTURE_2D,ce,Ae,W,$,0,ue,Te,null),W>>=1,$>>=1}}else if(Ce.length>0){if(Ne&&Je){const W=Me(Ce[0]);t.texStorage2D(i.TEXTURE_2D,re,Ae,W.width,W.height)}for(let W=0,$=Ce.length;W<$;W++)pe=Ce[W],Ne?P&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,ue,Te,pe):t.texImage2D(i.TEXTURE_2D,W,Ae,ue,Te,pe);g.generateMipmaps=!1}else if(Ne){if(Je){const W=Me(Q);t.texStorage2D(i.TEXTURE_2D,re,Ae,W.width,W.height)}P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,Te,Q)}else t.texImage2D(i.TEXTURE_2D,0,Ae,ue,Te,Q);p(g)&&d(F),fe.__version=G.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function te(y,g,C){if(g.image.length!==6)return;const F=Ve(y,g),K=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+C);const G=n.get(K);if(K.version!==G.__version||F===!0){t.activeTexture(i.TEXTURE0+C);const fe=je.getPrimaries(je.workingColorSpace),ie=g.colorSpace===wn?null:je.getPrimaries(g.colorSpace),de=g.colorSpace===wn||fe===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const ze=g.isCompressedTexture||g.image[0].isCompressedTexture,Q=g.image[0]&&g.image[0].isDataTexture,ue=[];for(let $=0;$<6;$++)!ze&&!Q?ue[$]=M(g.image[$],!0,r.maxCubemapSize):ue[$]=Q?g.image[$].image:g.image[$],ue[$]=me(g,ue[$]);const Te=ue[0],Ae=a.convert(g.format,g.colorSpace),pe=a.convert(g.type),Ce=b(g.internalFormat,Ae,pe,g.colorSpace),Ne=g.isVideoTexture!==!0,Je=G.__version===void 0||F===!0,P=K.dataReady;let re=H(g,Te);De(i.TEXTURE_CUBE_MAP,g);let W;if(ze){Ne&&Je&&t.texStorage2D(i.TEXTURE_CUBE_MAP,re,Ce,Te.width,Te.height);for(let $=0;$<6;$++){W=ue[$].mipmaps;for(let ce=0;ce<W.length;ce++){const he=W[ce];g.format!==Ht?Ae!==null?Ne?P&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce,0,0,he.width,he.height,Ae,he.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce,Ce,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce,0,0,he.width,he.height,Ae,pe,he.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce,Ce,he.width,he.height,0,Ae,pe,he.data)}}}else{if(W=g.mipmaps,Ne&&Je){W.length>0&&re++;const $=Me(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,re,Ce,$.width,$.height)}for(let $=0;$<6;$++)if(Q){Ne?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ue[$].width,ue[$].height,Ae,pe,ue[$].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ce,ue[$].width,ue[$].height,0,Ae,pe,ue[$].data);for(let ce=0;ce<W.length;ce++){const Fe=W[ce].image[$].image;Ne?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce+1,0,0,Fe.width,Fe.height,Ae,pe,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce+1,Ce,Fe.width,Fe.height,0,Ae,pe,Fe.data)}}else{Ne?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ae,pe,ue[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ce,Ae,pe,ue[$]);for(let ce=0;ce<W.length;ce++){const he=W[ce];Ne?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce+1,0,0,Ae,pe,he.image[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce+1,Ce,Ae,pe,he.image[$])}}}p(g)&&d(i.TEXTURE_CUBE_MAP),G.__version=K.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function ye(y,g,C,F,K,G){const fe=a.convert(C.format,C.colorSpace),ie=a.convert(C.type),de=b(C.internalFormat,fe,ie,C.colorSpace),ze=n.get(g),Q=n.get(C);if(Q.__renderTarget=g,!ze.__hasExternalTextures){const ue=Math.max(1,g.width>>G),Te=Math.max(1,g.height>>G);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,G,de,ue,Te,g.depth,0,fe,ie,null):t.texImage2D(K,G,de,ue,Te,0,fe,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,y),Ge(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,F,K,Q.__webglTexture,0,He(g)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,F,K,Q.__webglTexture,G),t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(y,g,C){if(i.bindRenderbuffer(i.RENDERBUFFER,y),g.depthBuffer){const F=g.depthTexture,K=F&&F.isDepthTexture?F.type:null,G=w(g.stencilBuffer,K),fe=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=He(g);Ge(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,G,g.width,g.height):C?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,G,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,G,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,y)}else{const F=g.textures;for(let K=0;K<F.length;K++){const G=F[K],fe=a.convert(G.format,G.colorSpace),ie=a.convert(G.type),de=b(G.internalFormat,fe,ie,G.colorSpace),ze=He(g);C&&Ge(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,de,g.width,g.height):Ge(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ze,de,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,de,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ee(y,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const F=n.get(g.depthTexture);F.__renderTarget=g,(!F.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Z(g.depthTexture,0);const K=F.__webglTexture,G=He(g);if(g.depthTexture.format===ci)Ge(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(g.depthTexture.format===mi)Ge(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ue(y){const g=n.get(y),C=y.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==y.depthTexture){const F=y.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),F){const K=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,F.removeEventListener("dispose",K)};F.addEventListener("dispose",K),g.__depthDisposeCallback=K}g.__boundDepthTexture=F}if(y.depthTexture&&!g.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");Ee(g.__webglFramebuffer,y)}else if(C){g.__webglDepthbuffer=[];for(let F=0;F<6;F++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[F]),g.__webglDepthbuffer[F]===void 0)g.__webglDepthbuffer[F]=i.createRenderbuffer(),se(g.__webglDepthbuffer[F],y,!1);else{const K=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=g.__webglDepthbuffer[F];i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,G)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),se(g.__webglDepthbuffer,y,!1);else{const F=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,F,i.RENDERBUFFER,K)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(y,g,C){const F=n.get(y);g!==void 0&&ye(F.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),C!==void 0&&Ue(y)}function tt(y){const g=y.texture,C=n.get(y),F=n.get(g);y.addEventListener("dispose",A);const K=y.textures,G=y.isWebGLCubeRenderTarget===!0,fe=K.length>1;if(fe||(F.__webglTexture===void 0&&(F.__webglTexture=i.createTexture()),F.__version=g.version,s.memory.textures++),G){C.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(g.mipmaps&&g.mipmaps.length>0){C.__webglFramebuffer[ie]=[];for(let de=0;de<g.mipmaps.length;de++)C.__webglFramebuffer[ie][de]=i.createFramebuffer()}else C.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){C.__webglFramebuffer=[];for(let ie=0;ie<g.mipmaps.length;ie++)C.__webglFramebuffer[ie]=i.createFramebuffer()}else C.__webglFramebuffer=i.createFramebuffer();if(fe)for(let ie=0,de=K.length;ie<de;ie++){const ze=n.get(K[ie]);ze.__webglTexture===void 0&&(ze.__webglTexture=i.createTexture(),s.memory.textures++)}if(y.samples>0&&Ge(y)===!1){C.__webglMultisampledFramebuffer=i.createFramebuffer(),C.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let ie=0;ie<K.length;ie++){const de=K[ie];C.__webglColorRenderbuffer[ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,C.__webglColorRenderbuffer[ie]);const ze=a.convert(de.format,de.colorSpace),Q=a.convert(de.type),ue=b(de.internalFormat,ze,Q,de.colorSpace,y.isXRRenderTarget===!0),Te=He(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,ue,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,C.__webglColorRenderbuffer[ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(C.__webglDepthRenderbuffer=i.createRenderbuffer(),se(C.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(G){t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture),De(i.TEXTURE_CUBE_MAP,g);for(let ie=0;ie<6;ie++)if(g.mipmaps&&g.mipmaps.length>0)for(let de=0;de<g.mipmaps.length;de++)ye(C.__webglFramebuffer[ie][de],y,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,de);else ye(C.__webglFramebuffer[ie],y,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);p(g)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let ie=0,de=K.length;ie<de;ie++){const ze=K[ie],Q=n.get(ze);t.bindTexture(i.TEXTURE_2D,Q.__webglTexture),De(i.TEXTURE_2D,ze),ye(C.__webglFramebuffer,y,ze,i.COLOR_ATTACHMENT0+ie,i.TEXTURE_2D,0),p(ze)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ie=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,F.__webglTexture),De(ie,g),g.mipmaps&&g.mipmaps.length>0)for(let de=0;de<g.mipmaps.length;de++)ye(C.__webglFramebuffer[de],y,g,i.COLOR_ATTACHMENT0,ie,de);else ye(C.__webglFramebuffer,y,g,i.COLOR_ATTACHMENT0,ie,0);p(g)&&d(ie),t.unbindTexture()}y.depthBuffer&&Ue(y)}function Be(y){const g=y.textures;for(let C=0,F=g.length;C<F;C++){const K=g[C];if(p(K)){const G=E(y),fe=n.get(K).__webglTexture;t.bindTexture(G,fe),d(G),t.unbindTexture()}}}const lt=[],D=[];function yt(y){if(y.samples>0){if(Ge(y)===!1){const g=y.textures,C=y.width,F=y.height;let K=i.COLOR_BUFFER_BIT;const G=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=n.get(y),ie=g.length>1;if(ie)for(let de=0;de<g.length;de++)t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let de=0;de<g.length;de++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[de]);const ze=n.get(g[de]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ze,0)}i.blitFramebuffer(0,0,C,F,0,0,C,F,K,i.NEAREST),l===!0&&(lt.length=0,D.length=0,lt.push(i.COLOR_ATTACHMENT0+de),y.depthBuffer&&y.resolveDepthBuffer===!1&&(lt.push(G),D.push(G),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,lt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ie)for(let de=0;de<g.length;de++){t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,fe.__webglColorRenderbuffer[de]);const ze=n.get(g[de]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const g=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function He(y){return Math.min(r.maxSamples,y.samples)}function Ge(y){const g=n.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function be(y){const g=s.render.frame;h.get(y)!==g&&(h.set(y,g),y.update())}function me(y,g){const C=y.colorSpace,F=y.format,K=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||C!==_i&&C!==wn&&(je.getTransfer(C)===it?(F!==Ht||K!==on)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),g}function Me(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=X,this.setTexture2D=Z,this.setTexture2DArray=j,this.setTexture3D=J,this.setTextureCube=V,this.rebindTextures=Ie,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Ge}function Bp(i,e){function t(n,r=wn){let a;const s=je.getTransfer(r);if(n===on)return i.UNSIGNED_BYTE;if(n===es)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ts)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Uo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ro)return i.BYTE;if(n===Po)return i.SHORT;if(n===Ii)return i.UNSIGNED_SHORT;if(n===Qa)return i.INT;if(n===Vn)return i.UNSIGNED_INT;if(n===rn)return i.FLOAT;if(n===Fi)return i.HALF_FLOAT;if(n===Lo)return i.ALPHA;if(n===Do)return i.RGB;if(n===Ht)return i.RGBA;if(n===Io)return i.LUMINANCE;if(n===No)return i.LUMINANCE_ALPHA;if(n===ci)return i.DEPTH_COMPONENT;if(n===mi)return i.DEPTH_STENCIL;if(n===Fo)return i.RED;if(n===ns)return i.RED_INTEGER;if(n===Oo)return i.RG;if(n===is)return i.RG_INTEGER;if(n===rs)return i.RGBA_INTEGER;if(n===fr||n===pr||n===mr||n===gr)if(s===it)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===fr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===mr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===gr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===fr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===mr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===gr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wa||n===ba||n===Ea||n===Ta)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===wa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ba)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ea)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ta)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Aa||n===Ca||n===Ra)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Aa||n===Ca)return s===it?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Ra)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Pa||n===Ua||n===La||n===Da||n===Ia||n===Na||n===Fa||n===Oa||n===Ba||n===za||n===ka||n===Ha||n===Va||n===Ga)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Pa)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ua)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===La)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Da)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ia)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Na)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fa)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oa)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ba)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===za)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ka)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ha)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Va)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ga)return s===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_r||n===Wa||n===Xa)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===_r)return s===it?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wa)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xa)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bo||n===ja||n===Ya||n===qa)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===_r)return a.COMPRESSED_RED_RGTC1_EXT;if(n===ja)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ya)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qa)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===pi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class zp extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class hr extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kp={type:"move"};class ra{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const M of e.hand.values()){const p=t.getJointPose(M,n),d=this._getHandJoint(c,M);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(kp)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new hr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Hp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Gp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Mt,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new An({vertexShader:Hp,fragmentShader:Vp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Yt(new Hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wp extends vi{constructor(e,t){super();const n=this;let r=null,a=1,s=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,_=null;const M=new Gp,p=t.getContextAttributes();let d=null,E=null;const b=[],w=[],H=new Ze;let R=null;const A=new Lt;A.viewport=new rt;const I=new Lt;I.viewport=new rt;const S=[A,I],x=new zp;let T=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let te=b[q];return te===void 0&&(te=new ra,b[q]=te),te.getTargetRaySpace()},this.getControllerGrip=function(q){let te=b[q];return te===void 0&&(te=new ra,b[q]=te),te.getGripSpace()},this.getHand=function(q){let te=b[q];return te===void 0&&(te=new ra,b[q]=te),te.getHandSpace()};function O(q){const te=w.indexOf(q.inputSource);if(te===-1)return;const ye=b[te];ye!==void 0&&(ye.update(q.inputSource,q.frame,c||s),ye.dispatchEvent({type:q.type,data:q.inputSource}))}function Y(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",Z);for(let q=0;q<b.length;q++){const te=w[q];te!==null&&(w[q]=null,b[q].disconnect(te))}T=null,X=null,M.reset(),e.setRenderTarget(d),m=null,f=null,u=null,r=null,E=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(H.width,H.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",Z),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(H),r.renderState.layers===void 0){const te={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Gn(m.framebufferWidth,m.framebufferHeight,{format:Ht,type:on,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let te=null,ye=null,se=null;p.depth&&(se=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=p.stencil?mi:ci,ye=p.stencil?pi:Vn);const Ee={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:a};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(Ee),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new Gn(f.textureWidth,f.textureHeight,{format:Ht,type:on,depthTexture:new el(f.textureWidth,f.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),Ve.setContext(r),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function Z(q){for(let te=0;te<q.removed.length;te++){const ye=q.removed[te],se=w.indexOf(ye);se>=0&&(w[se]=null,b[se].disconnect(ye))}for(let te=0;te<q.added.length;te++){const ye=q.added[te];let se=w.indexOf(ye);if(se===-1){for(let Ue=0;Ue<b.length;Ue++)if(Ue>=w.length){w.push(ye),se=Ue;break}else if(w[Ue]===null){w[Ue]=ye,se=Ue;break}if(se===-1)break}const Ee=b[se];Ee&&Ee.connect(ye)}}const j=new N,J=new N;function V(q,te,ye){j.setFromMatrixPosition(te.matrixWorld),J.setFromMatrixPosition(ye.matrixWorld);const se=j.distanceTo(J),Ee=te.projectionMatrix.elements,Ue=ye.projectionMatrix.elements,Ie=Ee[14]/(Ee[10]-1),tt=Ee[14]/(Ee[10]+1),Be=(Ee[9]+1)/Ee[5],lt=(Ee[9]-1)/Ee[5],D=(Ee[8]-1)/Ee[0],yt=(Ue[8]+1)/Ue[0],He=Ie*D,Ge=Ie*yt,be=se/(-D+yt),me=be*-D;if(te.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(me),q.translateZ(be),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ee[10]===-1)q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const Me=Ie+be,y=tt+be,g=He-me,C=Ge+(se-me),F=Be*tt/y*Me,K=lt*tt/y*Me;q.projectionMatrix.makePerspective(g,C,F,K,Me,y),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ne(q,te){te===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(te.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let te=q.near,ye=q.far;M.texture!==null&&(M.depthNear>0&&(te=M.depthNear),M.depthFar>0&&(ye=M.depthFar)),x.near=I.near=A.near=te,x.far=I.far=A.far=ye,(T!==x.near||X!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),T=x.near,X=x.far),A.layers.mask=q.layers.mask|2,I.layers.mask=q.layers.mask|4,x.layers.mask=A.layers.mask|I.layers.mask;const se=q.parent,Ee=x.cameras;ne(x,se);for(let Ue=0;Ue<Ee.length;Ue++)ne(Ee[Ue],se);Ee.length===2?V(x,A,I):x.projectionMatrix.copy(A.projectionMatrix),le(q,x,se)};function le(q,te,ye){ye===null?q.matrix.copy(te.matrixWorld):(q.matrix.copy(ye.matrixWorld),q.matrix.invert(),q.matrix.multiply(te.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ka*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(x)};let xe=null;function De(q,te){if(h=te.getViewerPose(c||s),_=te,h!==null){const ye=h.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let se=!1;ye.length!==x.cameras.length&&(x.cameras.length=0,se=!0);for(let Ue=0;Ue<ye.length;Ue++){const Ie=ye[Ue];let tt=null;if(m!==null)tt=m.getViewport(Ie);else{const lt=u.getViewSubImage(f,Ie);tt=lt.viewport,Ue===0&&(e.setRenderTargetTextures(E,lt.colorTexture,f.ignoreDepthValues?void 0:lt.depthStencilTexture),e.setRenderTarget(E))}let Be=S[Ue];Be===void 0&&(Be=new Lt,Be.layers.enable(Ue),Be.viewport=new rt,S[Ue]=Be),Be.matrix.fromArray(Ie.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Ie.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(tt.x,tt.y,tt.width,tt.height),Ue===0&&(x.matrix.copy(Be.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),se===!0&&x.cameras.push(Be)}const Ee=r.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")){const Ue=u.getDepthInformation(ye[0]);Ue&&Ue.isValid&&Ue.texture&&M.init(e,Ue,r.renderState)}}for(let ye=0;ye<b.length;ye++){const se=w[ye],Ee=b[ye];se!==null&&Ee!==void 0&&Ee.update(se,te,c||s)}xe&&xe(q,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),_=null}const Ve=new Qo;Ve.setAnimationLoop(De),this.setAnimationLoop=function(q){xe=q},this.dispose=function(){}}}const In=new qt,Xp=new ct;function jp(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,$o(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,E,b,w){d.isMeshBasicMaterial||d.isMeshLambertMaterial?a(p,d):d.isMeshToonMaterial?(a(p,d),u(p,d)):d.isMeshPhongMaterial?(a(p,d),h(p,d)):d.isMeshStandardMaterial?(a(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,w)):d.isMeshMatcapMaterial?(a(p,d),_(p,d)):d.isMeshDepthMaterial?a(p,d):d.isMeshDistanceMaterial?(a(p,d),M(p,d)):d.isMeshNormalMaterial?a(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,E,b):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===At&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===At&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const E=e.get(d),b=E.envMap,w=E.envMapRotation;b&&(p.envMap.value=b,In.copy(w),In.x*=-1,In.y*=-1,In.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(In.y*=-1,In.z*=-1),p.envMapRotation.value.setFromMatrix4(Xp.makeRotationFromEuler(In)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,E,b){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*E,p.scale.value=b*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,E){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===At&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function M(p,d){const E=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Yp(i,e,t,n){let r={},a={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,b){const w=b.program;n.uniformBlockBinding(E,w)}function c(E,b){let w=r[E.id];w===void 0&&(_(E),w=h(E),r[E.id]=w,E.addEventListener("dispose",p));const H=b.program;n.updateUBOMapping(E,H);const R=e.render.frame;a[E.id]!==R&&(f(E),a[E.id]=R)}function h(E){const b=u();E.__bindingPointIndex=b;const w=i.createBuffer(),H=E.__size,R=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,H,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,w),w}function u(){for(let E=0;E<o;E++)if(s.indexOf(E)===-1)return s.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const b=r[E.id],w=E.uniforms,H=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let R=0,A=w.length;R<A;R++){const I=Array.isArray(w[R])?w[R]:[w[R]];for(let S=0,x=I.length;S<x;S++){const T=I[S];if(m(T,R,S,H)===!0){const X=T.__offset,O=Array.isArray(T.value)?T.value:[T.value];let Y=0;for(let Z=0;Z<O.length;Z++){const j=O[Z],J=M(j);typeof j=="number"||typeof j=="boolean"?(T.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,X+Y,T.__data)):j.isMatrix3?(T.__data[0]=j.elements[0],T.__data[1]=j.elements[1],T.__data[2]=j.elements[2],T.__data[3]=0,T.__data[4]=j.elements[3],T.__data[5]=j.elements[4],T.__data[6]=j.elements[5],T.__data[7]=0,T.__data[8]=j.elements[6],T.__data[9]=j.elements[7],T.__data[10]=j.elements[8],T.__data[11]=0):(j.toArray(T.__data,Y),Y+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,b,w,H){const R=E.value,A=b+"_"+w;if(H[A]===void 0)return typeof R=="number"||typeof R=="boolean"?H[A]=R:H[A]=R.clone(),!0;{const I=H[A];if(typeof R=="number"||typeof R=="boolean"){if(I!==R)return H[A]=R,!0}else if(I.equals(R)===!1)return I.copy(R),!0}return!1}function _(E){const b=E.uniforms;let w=0;const H=16;for(let A=0,I=b.length;A<I;A++){const S=Array.isArray(b[A])?b[A]:[b[A]];for(let x=0,T=S.length;x<T;x++){const X=S[x],O=Array.isArray(X.value)?X.value:[X.value];for(let Y=0,Z=O.length;Y<Z;Y++){const j=O[Y],J=M(j),V=w%H,ne=V%J.boundary,le=V+ne;w+=ne,le!==0&&H-le<J.storage&&(w+=H-le),X.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=w,w+=J.storage}}}const R=w%H;return R>0&&(w+=H-R),E.__size=w,E.__cache={},this}function M(E){const b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function p(E){const b=E.target;b.removeEventListener("dispose",p);const w=s.indexOf(b.__bindingPointIndex);s.splice(w,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete a[b.id]}function d(){for(const E in r)i.deleteBuffer(r[E]);s=[],r={},a={}}return{bind:l,update:c,dispose:d}}class qp{constructor(e={}){const{canvas:t=Ic(),context:n=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=s;const _=new Uint32Array(4),M=new Int32Array(4);let p=null,d=null;const E=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ut,this.toneMapping=En,this.toneMappingExposure=1;const w=this;let H=!1,R=0,A=0,I=null,S=-1,x=null;const T=new rt,X=new rt;let O=null;const Y=new Ye(0);let Z=0,j=t.width,J=t.height,V=1,ne=null,le=null;const xe=new rt(0,0,j,J),De=new rt(0,0,j,J);let Ve=!1;const q=new as;let te=!1,ye=!1;const se=new ct,Ee=new ct,Ue=new N,Ie=new rt,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function lt(){return I===null?V:1}let D=n;function yt(v,U){return t.getContext(v,U)}try{const v={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ja}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",he,!1),D===null){const U="webgl2";if(D=yt(U,v),D===null)throw yt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let He,Ge,be,me,Me,y,g,C,F,K,G,fe,ie,de,ze,Q,ue,Te,Ae,pe,Ce,Ne,Je,P;function re(){He=new Ju(D),He.init(),Ne=new Bp(D,He),Ge=new Xu(D,He,e,Ne),be=new Np(D,He),Ge.reverseDepthBuffer&&f&&be.buffers.depth.setReversed(!0),me=new tf(D),Me=new Mp,y=new Op(D,He,be,Me,Ge,Ne,me),g=new Yu(w),C=new Zu(w),F=new oh(D),Je=new Gu(D,F),K=new Qu(D,F,me,Je),G=new rf(D,K,F,me),Ae=new nf(D,Ge,y),Q=new ju(Me),fe=new xp(w,g,C,He,Ge,Je,Q),ie=new jp(w,Me),de=new yp,ze=new Cp(He),Te=new Vu(w,g,C,be,G,m,l),ue=new Dp(w,G,Ge),P=new Yp(D,me,Ge,be),pe=new Wu(D,He,me),Ce=new ef(D,He,me),me.programs=fe.programs,w.capabilities=Ge,w.extensions=He,w.properties=Me,w.renderLists=de,w.shadowMap=ue,w.state=be,w.info=me}re();const W=new Wp(w,D);this.xr=W,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const v=He.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=He.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(v){v!==void 0&&(V=v,this.setSize(j,J,!1))},this.getSize=function(v){return v.set(j,J)},this.setSize=function(v,U,B=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=v,J=U,t.width=Math.floor(v*V),t.height=Math.floor(U*V),B===!0&&(t.style.width=v+"px",t.style.height=U+"px"),this.setViewport(0,0,v,U)},this.getDrawingBufferSize=function(v){return v.set(j*V,J*V).floor()},this.setDrawingBufferSize=function(v,U,B){j=v,J=U,V=B,t.width=Math.floor(v*B),t.height=Math.floor(U*B),this.setViewport(0,0,v,U)},this.getCurrentViewport=function(v){return v.copy(T)},this.getViewport=function(v){return v.copy(xe)},this.setViewport=function(v,U,B,z){v.isVector4?xe.set(v.x,v.y,v.z,v.w):xe.set(v,U,B,z),be.viewport(T.copy(xe).multiplyScalar(V).round())},this.getScissor=function(v){return v.copy(De)},this.setScissor=function(v,U,B,z){v.isVector4?De.set(v.x,v.y,v.z,v.w):De.set(v,U,B,z),be.scissor(X.copy(De).multiplyScalar(V).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(v){be.setScissorTest(Ve=v)},this.setOpaqueSort=function(v){ne=v},this.setTransparentSort=function(v){le=v},this.getClearColor=function(v){return v.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(v=!0,U=!0,B=!0){let z=0;if(v){let L=!1;if(I!==null){const ee=I.texture.format;L=ee===rs||ee===is||ee===ns}if(L){const ee=I.texture.type,oe=ee===on||ee===Vn||ee===Ii||ee===pi||ee===es||ee===ts,ve=Te.getClearColor(),ge=Te.getClearAlpha(),Pe=ve.r,Le=ve.g,_e=ve.b;oe?(_[0]=Pe,_[1]=Le,_[2]=_e,_[3]=ge,D.clearBufferuiv(D.COLOR,0,_)):(M[0]=Pe,M[1]=Le,M[2]=_e,M[3]=ge,D.clearBufferiv(D.COLOR,0,M))}else z|=D.COLOR_BUFFER_BIT}U&&(z|=D.DEPTH_BUFFER_BIT),B&&(z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",he,!1),de.dispose(),ze.dispose(),Me.dispose(),g.dispose(),C.dispose(),G.dispose(),Je.dispose(),P.dispose(),fe.dispose(),W.dispose(),W.removeEventListener("sessionstart",Si),W.removeEventListener("sessionend",Re),Se.stop()};function $(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const v=me.autoReset,U=ue.enabled,B=ue.autoUpdate,z=ue.needsUpdate,L=ue.type;re(),me.autoReset=v,ue.enabled=U,ue.autoUpdate=B,ue.needsUpdate=z,ue.type=L}function he(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Fe(v){const U=v.target;U.removeEventListener("dispose",Fe),st(U)}function st(v){dt(v),Me.remove(v)}function dt(v){const U=Me.get(v).programs;U!==void 0&&(U.forEach(function(B){fe.releaseProgram(B)}),v.isShaderMaterial&&fe.releaseShaderCache(v))}this.renderBufferDirect=function(v,U,B,z,L,ee){U===null&&(U=tt);const oe=L.isMesh&&L.matrixWorld.determinant()<0,ve=Vi(v,U,B,z,L);be.setMaterial(z,oe);let ge=B.index,Pe=1;if(z.wireframe===!0){if(ge=K.getWireframeAttribute(B),ge===void 0)return;Pe=2}const Le=B.drawRange,_e=B.attributes.position;let We=Le.start*Pe,$e=(Le.start+Le.count)*Pe;ee!==null&&(We=Math.max(We,ee.start*Pe),$e=Math.min($e,(ee.start+ee.count)*Pe)),ge!==null?(We=Math.max(We,0),$e=Math.min($e,ge.count)):_e!=null&&(We=Math.max(We,0),$e=Math.min($e,_e.count));const at=$e-We;if(at<0||at===1/0)return;Je.setup(L,z,ve,B,ge);let mt,Xe=pe;if(ge!==null&&(mt=F.get(ge),Xe=Ce,Xe.setIndex(mt)),L.isMesh)z.wireframe===!0?(be.setLineWidth(z.wireframeLinewidth*lt()),Xe.setMode(D.LINES)):Xe.setMode(D.TRIANGLES);else if(L.isLine){let we=z.linewidth;we===void 0&&(we=1),be.setLineWidth(we*lt()),L.isLineSegments?Xe.setMode(D.LINES):L.isLineLoop?Xe.setMode(D.LINE_LOOP):Xe.setMode(D.LINE_STRIP)}else L.isPoints?Xe.setMode(D.POINTS):L.isSprite&&Xe.setMode(D.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)Xe.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))Xe.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{const we=L._multiDrawStarts,Kt=L._multiDrawCounts,Qe=L._multiDrawCount,Ft=ge?F.get(ge).bytesPerElement:1,Xn=Me.get(z).currentProgram.getUniforms();for(let Ct=0;Ct<Qe;Ct++)Xn.setValue(D,"_gl_DrawID",Ct),Xe.render(we[Ct]/Ft,Kt[Ct])}else if(L.isInstancedMesh)Xe.renderInstances(We,at,L.count);else if(B.isInstancedBufferGeometry){const we=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Kt=Math.min(B.instanceCount,we);Xe.renderInstances(We,at,Kt)}else Xe.render(We,at)};function qe(v,U,B){v.transparent===!0&&v.side===nn&&v.forceSinglePass===!1?(v.side=At,v.needsUpdate=!0,Cn(v,U,B),v.side=Tn,v.needsUpdate=!0,Cn(v,U,B),v.side=nn):Cn(v,U,B)}this.compile=function(v,U,B=null){B===null&&(B=v),d=ze.get(B),d.init(U),b.push(d),B.traverseVisible(function(L){L.isLight&&L.layers.test(U.layers)&&(d.pushLight(L),L.castShadow&&d.pushShadow(L))}),v!==B&&v.traverseVisible(function(L){L.isLight&&L.layers.test(U.layers)&&(d.pushLight(L),L.castShadow&&d.pushShadow(L))}),d.setupLights();const z=new Set;return v.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;const ee=L.material;if(ee)if(Array.isArray(ee))for(let oe=0;oe<ee.length;oe++){const ve=ee[oe];qe(ve,B,L),z.add(ve)}else qe(ee,B,L),z.add(ee)}),b.pop(),d=null,z},this.compileAsync=function(v,U,B=null){const z=this.compile(v,U,B);return new Promise(L=>{function ee(){if(z.forEach(function(oe){Me.get(oe).currentProgram.isReady()&&z.delete(oe)}),z.size===0){L(v);return}setTimeout(ee,10)}He.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let wt=null;function Dt(v){wt&&wt(v)}function Si(){Se.stop()}function Re(){Se.start()}const Se=new Qo;Se.setAnimationLoop(Dt),typeof self<"u"&&Se.setContext(self),this.setAnimationLoop=function(v){wt=v,W.setAnimationLoop(v),v===null?Se.stop():Se.start()},W.addEventListener("sessionstart",Si),W.addEventListener("sessionend",Re),this.render=function(v,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),v.isScene===!0&&v.onBeforeRender(w,v,U,I),d=ze.get(v,b.length),d.init(U),b.push(d),Ee.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),q.setFromProjectionMatrix(Ee),ye=this.localClippingEnabled,te=Q.init(this.clippingPlanes,ye),p=de.get(v,E.length),p.init(),E.push(p),W.enabled===!0&&W.isPresenting===!0){const ee=w.xr.getDepthSensingMesh();ee!==null&&Ke(ee,U,-1/0,w.sortObjects)}Ke(v,U,0,w.sortObjects),p.finish(),w.sortObjects===!0&&p.sort(ne,le),Be=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Be&&Te.addToRenderList(p,v),this.info.render.frame++,te===!0&&Q.beginShadows();const B=d.state.shadowsArray;ue.render(B,v,U),te===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=p.opaque,L=p.transmissive;if(d.setupLights(),U.isArrayCamera){const ee=U.cameras;if(L.length>0)for(let oe=0,ve=ee.length;oe<ve;oe++){const ge=ee[oe];cn(z,L,v,ge)}Be&&Te.render(v);for(let oe=0,ve=ee.length;oe<ve;oe++){const ge=ee[oe];nt(p,v,ge,ge.viewport)}}else L.length>0&&cn(z,L,v,U),Be&&Te.render(v),nt(p,v,U);I!==null&&(y.updateMultisampleRenderTarget(I),y.updateRenderTargetMipmap(I)),v.isScene===!0&&v.onAfterRender(w,v,U),Je.resetDefaultState(),S=-1,x=null,b.pop(),b.length>0?(d=b[b.length-1],te===!0&&Q.setGlobalState(w.clippingPlanes,d.state.camera)):d=null,E.pop(),E.length>0?p=E[E.length-1]:p=null};function Ke(v,U,B,z){if(v.visible===!1)return;if(v.layers.test(U.layers)){if(v.isGroup)B=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(U);else if(v.isLight)d.pushLight(v),v.castShadow&&d.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||q.intersectsSprite(v)){z&&Ie.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Ee);const oe=G.update(v),ve=v.material;ve.visible&&p.push(v,oe,ve,B,Ie.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||q.intersectsObject(v))){const oe=G.update(v),ve=v.material;if(z&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ie.copy(v.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),Ie.copy(oe.boundingSphere.center)),Ie.applyMatrix4(v.matrixWorld).applyMatrix4(Ee)),Array.isArray(ve)){const ge=oe.groups;for(let Pe=0,Le=ge.length;Pe<Le;Pe++){const _e=ge[Pe],We=ve[_e.materialIndex];We&&We.visible&&p.push(v,oe,We,B,Ie.z,_e)}}else ve.visible&&p.push(v,oe,ve,B,Ie.z,null)}}const ee=v.children;for(let oe=0,ve=ee.length;oe<ve;oe++)Ke(ee[oe],U,B,z)}function nt(v,U,B,z){const L=v.opaque,ee=v.transmissive,oe=v.transparent;d.setupLightsView(B),te===!0&&Q.setGlobalState(w.clippingPlanes,B),z&&be.viewport(T.copy(z)),L.length>0&&hn(L,U,B),ee.length>0&&hn(ee,U,B),oe.length>0&&hn(oe,U,B),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function cn(v,U,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[z.id]===void 0&&(d.state.transmissionRenderTarget[z.id]=new Gn(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?Fi:on,minFilter:kn,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));const ee=d.state.transmissionRenderTarget[z.id],oe=z.viewport||T;ee.setSize(oe.z,oe.w);const ve=w.getRenderTarget();w.setRenderTarget(ee),w.getClearColor(Y),Z=w.getClearAlpha(),Z<1&&w.setClearColor(16777215,.5),w.clear(),Be&&Te.render(B);const ge=w.toneMapping;w.toneMapping=En;const Pe=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),d.setupLightsView(z),te===!0&&Q.setGlobalState(w.clippingPlanes,z),hn(v,B,z),y.updateMultisampleRenderTarget(ee),y.updateRenderTargetMipmap(ee),He.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let _e=0,We=U.length;_e<We;_e++){const $e=U[_e],at=$e.object,mt=$e.geometry,Xe=$e.material,we=$e.group;if(Xe.side===nn&&at.layers.test(z.layers)){const Kt=Xe.side;Xe.side=At,Xe.needsUpdate=!0,yi(at,B,z,mt,Xe,we),Xe.side=Kt,Xe.needsUpdate=!0,Le=!0}}Le===!0&&(y.updateMultisampleRenderTarget(ee),y.updateRenderTargetMipmap(ee))}w.setRenderTarget(ve),w.setClearColor(Y,Z),Pe!==void 0&&(z.viewport=Pe),w.toneMapping=ge}function hn(v,U,B){const z=U.isScene===!0?U.overrideMaterial:null;for(let L=0,ee=v.length;L<ee;L++){const oe=v[L],ve=oe.object,ge=oe.geometry,Pe=z===null?oe.material:z,Le=oe.group;ve.layers.test(B.layers)&&yi(ve,U,B,ge,Pe,Le)}}function yi(v,U,B,z,L,ee){v.onBeforeRender(w,U,B,z,L,ee),v.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),L.onBeforeRender(w,U,B,z,v,ee),L.transparent===!0&&L.side===nn&&L.forceSinglePass===!1?(L.side=At,L.needsUpdate=!0,w.renderBufferDirect(B,U,z,L,v,ee),L.side=Tn,L.needsUpdate=!0,w.renderBufferDirect(B,U,z,L,v,ee),L.side=nn):w.renderBufferDirect(B,U,z,L,v,ee),v.onAfterRender(w,U,B,z,L,ee)}function Cn(v,U,B){U.isScene!==!0&&(U=tt);const z=Me.get(v),L=d.state.lights,ee=d.state.shadowsArray,oe=L.state.version,ve=fe.getParameters(v,L.state,ee,U,B),ge=fe.getProgramCacheKey(ve);let Pe=z.programs;z.environment=v.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(v.isMeshStandardMaterial?C:g).get(v.envMap||z.environment),z.envMapRotation=z.environment!==null&&v.envMap===null?U.environmentRotation:v.envMapRotation,Pe===void 0&&(v.addEventListener("dispose",Fe),Pe=new Map,z.programs=Pe);let Le=Pe.get(ge);if(Le!==void 0){if(z.currentProgram===Le&&z.lightsStateVersion===oe)return un(v,ve),Le}else ve.uniforms=fe.getUniforms(v),v.onBeforeCompile(ve,w),Le=fe.acquireProgram(ve,ge),Pe.set(ge,Le),z.uniforms=ve.uniforms;const _e=z.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(_e.clippingPlanes=Q.uniform),un(v,ve),z.needsLights=wi(v),z.lightsStateVersion=oe,z.needsLights&&(_e.ambientLightColor.value=L.state.ambient,_e.lightProbe.value=L.state.probe,_e.directionalLights.value=L.state.directional,_e.directionalLightShadows.value=L.state.directionalShadow,_e.spotLights.value=L.state.spot,_e.spotLightShadows.value=L.state.spotShadow,_e.rectAreaLights.value=L.state.rectArea,_e.ltc_1.value=L.state.rectAreaLTC1,_e.ltc_2.value=L.state.rectAreaLTC2,_e.pointLights.value=L.state.point,_e.pointLightShadows.value=L.state.pointShadow,_e.hemisphereLights.value=L.state.hemi,_e.directionalShadowMap.value=L.state.directionalShadowMap,_e.directionalShadowMatrix.value=L.state.directionalShadowMatrix,_e.spotShadowMap.value=L.state.spotShadowMap,_e.spotLightMatrix.value=L.state.spotLightMatrix,_e.spotLightMap.value=L.state.spotLightMap,_e.pointShadowMap.value=L.state.pointShadowMap,_e.pointShadowMatrix.value=L.state.pointShadowMatrix),z.currentProgram=Le,z.uniformsList=null,Le}function dn(v){if(v.uniformsList===null){const U=v.currentProgram.getUniforms();v.uniformsList=vr.seqWithValue(U.seq,v.uniforms)}return v.uniformsList}function un(v,U){const B=Me.get(v);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function Vi(v,U,B,z,L){U.isScene!==!0&&(U=tt),y.resetTextureUnits();const ee=U.fog,oe=z.isMeshStandardMaterial?U.environment:null,ve=I===null?w.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:_i,ge=(z.isMeshStandardMaterial?C:g).get(z.envMap||oe),Pe=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Le=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),_e=!!B.morphAttributes.position,We=!!B.morphAttributes.normal,$e=!!B.morphAttributes.color;let at=En;z.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(at=w.toneMapping);const mt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Xe=mt!==void 0?mt.length:0,we=Me.get(z),Kt=d.state.lights;if(te===!0&&(ye===!0||v!==x)){const It=v===x&&z.id===S;Q.setState(z,v,It)}let Qe=!1;z.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Kt.state.version||we.outputColorSpace!==ve||L.isBatchedMesh&&we.batching===!1||!L.isBatchedMesh&&we.batching===!0||L.isBatchedMesh&&we.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&we.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&we.instancing===!1||!L.isInstancedMesh&&we.instancing===!0||L.isSkinnedMesh&&we.skinning===!1||!L.isSkinnedMesh&&we.skinning===!0||L.isInstancedMesh&&we.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&we.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&we.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&we.instancingMorph===!1&&L.morphTexture!==null||we.envMap!==ge||z.fog===!0&&we.fog!==ee||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==Q.numPlanes||we.numIntersection!==Q.numIntersection)||we.vertexAlphas!==Pe||we.vertexTangents!==Le||we.morphTargets!==_e||we.morphNormals!==We||we.morphColors!==$e||we.toneMapping!==at||we.morphTargetsCount!==Xe)&&(Qe=!0):(Qe=!0,we.__version=z.version);let Ft=we.currentProgram;Qe===!0&&(Ft=Cn(z,U,L));let Xn=!1,Ct=!1,bi=!1;const ot=Ft.getUniforms(),Wt=we.uniforms;if(be.useProgram(Ft.program)&&(Xn=!0,Ct=!0,bi=!0),z.id!==S&&(S=z.id,Ct=!0),Xn||x!==v){be.buffers.depth.getReversed()?(se.copy(v.projectionMatrix),Fc(se),Oc(se),ot.setValue(D,"projectionMatrix",se)):ot.setValue(D,"projectionMatrix",v.projectionMatrix),ot.setValue(D,"viewMatrix",v.matrixWorldInverse);const fn=ot.map.cameraPosition;fn!==void 0&&fn.setValue(D,Ue.setFromMatrixPosition(v.matrixWorld)),Ge.logarithmicDepthBuffer&&ot.setValue(D,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ot.setValue(D,"isOrthographic",v.isOrthographicCamera===!0),x!==v&&(x=v,Ct=!0,bi=!0)}if(L.isSkinnedMesh){ot.setOptional(D,L,"bindMatrix"),ot.setOptional(D,L,"bindMatrixInverse");const It=L.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),ot.setValue(D,"boneTexture",It.boneTexture,y))}L.isBatchedMesh&&(ot.setOptional(D,L,"batchingTexture"),ot.setValue(D,"batchingTexture",L._matricesTexture,y),ot.setOptional(D,L,"batchingIdTexture"),ot.setValue(D,"batchingIdTexture",L._indirectTexture,y),ot.setOptional(D,L,"batchingColorTexture"),L._colorsTexture!==null&&ot.setValue(D,"batchingColorTexture",L._colorsTexture,y));const Ei=B.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&Ae.update(L,B,Ft),(Ct||we.receiveShadow!==L.receiveShadow)&&(we.receiveShadow=L.receiveShadow,ot.setValue(D,"receiveShadow",L.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Wt.envMap.value=ge,Wt.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(Wt.envMapIntensity.value=U.environmentIntensity),Ct&&(ot.setValue(D,"toneMappingExposure",w.toneMappingExposure),we.needsLights&&Wn(Wt,bi),ee&&z.fog===!0&&ie.refreshFogUniforms(Wt,ee),ie.refreshMaterialUniforms(Wt,z,V,J,d.state.transmissionRenderTarget[v.id]),vr.upload(D,dn(we),Wt,y)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(vr.upload(D,dn(we),Wt,y),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ot.setValue(D,"center",L.center),ot.setValue(D,"modelViewMatrix",L.modelViewMatrix),ot.setValue(D,"normalMatrix",L.normalMatrix),ot.setValue(D,"modelMatrix",L.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const It=z.uniformsGroups;for(let fn=0,pn=It.length;fn<pn;fn++){const cs=It[fn];P.update(cs,Ft),P.bind(cs,Ft)}}return Ft}function Wn(v,U){v.ambientLightColor.needsUpdate=U,v.lightProbe.needsUpdate=U,v.directionalLights.needsUpdate=U,v.directionalLightShadows.needsUpdate=U,v.pointLights.needsUpdate=U,v.pointLightShadows.needsUpdate=U,v.spotLights.needsUpdate=U,v.spotLightShadows.needsUpdate=U,v.rectAreaLights.needsUpdate=U,v.hemisphereLights.needsUpdate=U}function wi(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(v,U,B){Me.get(v.texture).__webglTexture=U,Me.get(v.depthTexture).__webglTexture=B;const z=Me.get(v);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,U){const B=Me.get(v);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(v,U=0,B=0){I=v,R=U,A=B;let z=!0,L=null,ee=!1,oe=!1;if(v){const ge=Me.get(v);if(ge.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(D.FRAMEBUFFER,null),z=!1;else if(ge.__webglFramebuffer===void 0)y.setupRenderTarget(v);else if(ge.__hasExternalTextures)y.rebindTextures(v,Me.get(v.texture).__webglTexture,Me.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const _e=v.depthTexture;if(ge.__boundDepthTexture!==_e){if(_e!==null&&Me.has(_e)&&(v.width!==_e.image.width||v.height!==_e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(v)}}const Pe=v.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(oe=!0);const Le=Me.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Le[U])?L=Le[U][B]:L=Le[U],ee=!0):v.samples>0&&y.useMultisampledRTT(v)===!1?L=Me.get(v).__webglMultisampledFramebuffer:Array.isArray(Le)?L=Le[B]:L=Le,T.copy(v.viewport),X.copy(v.scissor),O=v.scissorTest}else T.copy(xe).multiplyScalar(V).floor(),X.copy(De).multiplyScalar(V).floor(),O=Ve;if(be.bindFramebuffer(D.FRAMEBUFFER,L)&&z&&be.drawBuffers(v,L),be.viewport(T),be.scissor(X),be.setScissorTest(O),ee){const ge=Me.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,ge.__webglTexture,B)}else if(oe){const ge=Me.get(v.texture),Pe=U||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,ge.__webglTexture,B||0,Pe)}S=-1},this.readRenderTargetPixels=function(v,U,B,z,L,ee,oe){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Me.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&oe!==void 0&&(ve=ve[oe]),ve){be.bindFramebuffer(D.FRAMEBUFFER,ve);try{const ge=v.texture,Pe=ge.format,Le=ge.type;if(!Ge.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=v.width-z&&B>=0&&B<=v.height-L&&D.readPixels(U,B,z,L,Ne.convert(Pe),Ne.convert(Le),ee)}finally{const ge=I!==null?Me.get(I).__webglFramebuffer:null;be.bindFramebuffer(D.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=async function(v,U,B,z,L,ee,oe){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Me.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&oe!==void 0&&(ve=ve[oe]),ve){const ge=v.texture,Pe=ge.format,Le=ge.type;if(!Ge.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=v.width-z&&B>=0&&B<=v.height-L){be.bindFramebuffer(D.FRAMEBUFFER,ve);const _e=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,_e),D.bufferData(D.PIXEL_PACK_BUFFER,ee.byteLength,D.STREAM_READ),D.readPixels(U,B,z,L,Ne.convert(Pe),Ne.convert(Le),0);const We=I!==null?Me.get(I).__webglFramebuffer:null;be.bindFramebuffer(D.FRAMEBUFFER,We);const $e=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Nc(D,$e,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,_e),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ee),D.deleteBuffer(_e),D.deleteSync($e),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,U=null,B=0){v.isTexture!==!0&&(Li("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,v=arguments[1]);const z=Math.pow(2,-B),L=Math.floor(v.image.width*z),ee=Math.floor(v.image.height*z),oe=U!==null?U.x:0,ve=U!==null?U.y:0;y.setTexture2D(v,0),D.copyTexSubImage2D(D.TEXTURE_2D,B,0,0,oe,ve,L,ee),be.unbindTexture()},this.copyTextureToTexture=function(v,U,B=null,z=null,L=0){v.isTexture!==!0&&(Li("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,v=arguments[1],U=arguments[2],L=arguments[3]||0,B=null);let ee,oe,ve,ge,Pe,Le,_e,We,$e;const at=v.isCompressedTexture?v.mipmaps[L]:v.image;B!==null?(ee=B.max.x-B.min.x,oe=B.max.y-B.min.y,ve=B.isBox3?B.max.z-B.min.z:1,ge=B.min.x,Pe=B.min.y,Le=B.isBox3?B.min.z:0):(ee=at.width,oe=at.height,ve=at.depth||1,ge=0,Pe=0,Le=0),z!==null?(_e=z.x,We=z.y,$e=z.z):(_e=0,We=0,$e=0);const mt=Ne.convert(U.format),Xe=Ne.convert(U.type);let we;U.isData3DTexture?(y.setTexture3D(U,0),we=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(y.setTexture2DArray(U,0),we=D.TEXTURE_2D_ARRAY):(y.setTexture2D(U,0),we=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const Kt=D.getParameter(D.UNPACK_ROW_LENGTH),Qe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ft=D.getParameter(D.UNPACK_SKIP_PIXELS),Xn=D.getParameter(D.UNPACK_SKIP_ROWS),Ct=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,at.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,at.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ge),D.pixelStorei(D.UNPACK_SKIP_ROWS,Pe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Le);const bi=v.isDataArrayTexture||v.isData3DTexture,ot=U.isDataArrayTexture||U.isData3DTexture;if(v.isRenderTargetTexture||v.isDepthTexture){const Wt=Me.get(v),Ei=Me.get(U),It=Me.get(Wt.__renderTarget),fn=Me.get(Ei.__renderTarget);be.bindFramebuffer(D.READ_FRAMEBUFFER,It.__webglFramebuffer),be.bindFramebuffer(D.DRAW_FRAMEBUFFER,fn.__webglFramebuffer);for(let pn=0;pn<ve;pn++)bi&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Me.get(v).__webglTexture,L,Le+pn),v.isDepthTexture?(ot&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Me.get(U).__webglTexture,L,$e+pn),D.blitFramebuffer(ge,Pe,ee,oe,_e,We,ee,oe,D.DEPTH_BUFFER_BIT,D.NEAREST)):ot?D.copyTexSubImage3D(we,L,_e,We,$e+pn,ge,Pe,ee,oe):D.copyTexSubImage2D(we,L,_e,We,$e+pn,ge,Pe,ee,oe);be.bindFramebuffer(D.READ_FRAMEBUFFER,null),be.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ot?v.isDataTexture||v.isData3DTexture?D.texSubImage3D(we,L,_e,We,$e,ee,oe,ve,mt,Xe,at.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(we,L,_e,We,$e,ee,oe,ve,mt,at.data):D.texSubImage3D(we,L,_e,We,$e,ee,oe,ve,mt,Xe,at):v.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,L,_e,We,ee,oe,mt,Xe,at.data):v.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,L,_e,We,at.width,at.height,mt,at.data):D.texSubImage2D(D.TEXTURE_2D,L,_e,We,ee,oe,mt,Xe,at);D.pixelStorei(D.UNPACK_ROW_LENGTH,Kt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Qe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ft),D.pixelStorei(D.UNPACK_SKIP_ROWS,Xn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ct),L===0&&U.generateMipmaps&&D.generateMipmap(we),be.unbindTexture()},this.copyTextureToTexture3D=function(v,U,B=null,z=null,L=0){return v.isTexture!==!0&&(Li("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,v=arguments[2],U=arguments[3],L=arguments[4]||0),Li('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,U,B,z,L)},this.initRenderTarget=function(v){Me.get(v).__webglFramebuffer===void 0&&y.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?y.setTextureCube(v,0):v.isData3DTexture?y.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?y.setTexture2DArray(v,0):y.setTexture2D(v,0),be.unbindTexture()},this.resetState=function(){R=0,A=0,I=null,be.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}class os{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ye(e),this.density=t}clone(){return new os(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Kp extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qt,this.environmentIntensity=1,this.environmentRotation=new qt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class al extends xi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const mo=new ct,Za=new Wo,dr=new Tr,ur=new N;class $p extends St{constructor(e=new ln,t=new al){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere),dr.applyMatrix4(r),dr.radius+=a,e.ray.intersectsSphere(dr)===!1)return;mo.copy(r).invert(),Za.copy(e.ray).applyMatrix4(mo);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,s.start),m=Math.min(c.count,s.start+s.count);for(let _=f,M=m;_<M;_++){const p=c.getX(_);ur.fromBufferAttribute(u,p),go(ur,p,l,r,e,t,this)}}else{const f=Math.max(0,s.start),m=Math.min(u.count,s.start+s.count);for(let _=f,M=m;_<M;_++)ur.fromBufferAttribute(u,_),go(ur,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function go(i,e,t,n,r,a,s){const o=Za.distanceSqToPoint(i);if(o<t){const l=new N;Za.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class Zp extends xi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zo,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const _o={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Jp{constructor(e,t,n){const r=this;let a=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,a===!1&&r.onStart!==void 0&&r.onStart(h,s,o),a=!0},this.itemEnd=function(h){s++,r.onProgress!==void 0&&r.onProgress(h,s,o),s===o&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const m=c[u],_=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null}}}const Qp=new Jp;class ls{constructor(e){this.manager=e!==void 0?e:Qp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,a){n.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ls.DEFAULT_MATERIAL_NAME="__DEFAULT";class em extends ls{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,s=_o.get(e);if(s!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0),s;const o=Ni("img");function l(){h(),_o.add(e,this),t&&t(this),a.manager.itemEnd(e)}function c(u){h(),r&&r(u),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(e),o.src=e,o}}class tm extends ls{constructor(e){super(e)}load(e,t,n,r){const a=new Mt,s=new em(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},n,r),a}}class sl extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const aa=new ct,vo=new N,xo=new N;class nm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new as,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;vo.setFromMatrixPosition(e.matrixWorld),t.position.copy(vo),xo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xo),t.updateMatrixWorld(),aa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(aa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(aa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Mo=new ct,Ui=new N,sa=new N;class im extends nm{constructor(){super(new Lt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ze(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),Ui.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ui),sa.copy(n.position),sa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(sa),n.updateMatrixWorld(),r.makeTranslation(-Ui.x,-Ui.y,-Ui.z),Mo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mo)}}class So extends sl{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new im}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class rm extends sl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ja}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ja);const yo={biao:16726820,li:15118682},wo={biao:723725,li:1183242},oa=[{x:2.2,y:.25,z:.55,ry:-.48},{x:3.45,y:-.95,z:-1.15,ry:-.2},{x:-2.85,y:.45,z:-.35,ry:.52},{x:.15,y:1.45,z:-1.9,ry:.16},{x:-.85,y:-1.35,z:-2.45,ry:-.28}];function bo(){try{const i=document.createElement("canvas");return!!(i.getContext("webgl2")||i.getContext("webgl"))}catch{return!1}}function am(){const[i,e]=et.useState(()=>{if(typeof window>"u")return!1;const t=window.matchMedia("(prefers-reduced-motion: reduce)").matches,n=window.matchMedia("(max-width: 800px)").matches;return!t&&!n&&bo()});return et.useEffect(()=>{const t=window.matchMedia("(prefers-reduced-motion: reduce)"),n=window.matchMedia("(max-width: 800px)"),r=()=>e(!t.matches&&!n.matches&&bo());return r(),t.addEventListener("change",r),n.addEventListener("change",r),()=>{t.removeEventListener("change",r),n.removeEventListener("change",r)}},[]),i}function sm({images:i}){return k.jsx("div",{className:"stage-still","aria-hidden":"true",children:i.slice(0,3).map(e=>k.jsx("img",{src:e.src,alt:"",width:e.width,height:e.height},e.src))})}function om({root:i,images:e,tint:t}){const n=e.map(r=>`${r.src}:${r.width}:${r.height}`).join("|");return et.useEffect(()=>{var x;const r=(x=i.current)==null?void 0:x.querySelector(".expo-pin"),a=r==null?void 0:r.querySelector("canvas");if(!r||!a)return;const s=new qp({canvas:a,antialias:!0,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!0});s.setClearColor(wo[t],1),s.setPixelRatio(Math.min(window.devicePixelRatio||1,1.6));const o=new Kp;o.fog=new os(wo[t],.085);const l=new Lt(40,1,.1,40);l.position.set(0,0,7.2),o.add(new rm(16774894,1.35));const c=new So(yo[t],28,16);c.position.set(2.4,1.2,4),o.add(c);const h=new So(16773596,12,14);h.position.set(-3,-1,2),o.add(h);const u=240,f=new Float32Array(u*3);for(let T=0;T<u;T+=1)f[T*3]=(Math.random()-.5)*16,f[T*3+1]=(Math.random()-.5)*10,f[T*3+2]=(Math.random()-.5)*10;const m=new ln;m.setAttribute("position",new Gt(f,3));const _=new al({color:yo[t],size:.055,transparent:!0,opacity:.9,sizeAttenuation:!0,depthWrite:!1}),M=new $p(m,_);o.add(M);const p=new tm,d=[];let E=!1;e.slice(0,oa.length).forEach((T,X)=>{const O=oa[X],Y=2.15,Z=Math.min(3.5,Y*(T.width/T.height)),j=new Hi(Z,Y),J=new Zp({color:16777215,roughness:.62,metalness:.04}),V=new Yt(j,J);V.position.set(O.x,O.y,O.z),V.rotation.y=O.ry,o.add(V),d.push(V),p.load(T.src,ne=>{if(E){ne.dispose();return}ne.colorSpace=Ut,J.map=ne,J.needsUpdate=!0})});const b={x:0,y:0},w=T=>{b.x=T.clientX/window.innerWidth*2-1,b.y=T.clientY/window.innerHeight*2-1};window.addEventListener("pointermove",w);const H=()=>{const T=r.clientWidth,X=r.clientHeight;T===0||X===0||(l.aspect=T/X,l.updateProjectionMatrix(),s.setSize(T,X,!1))};H();const R=new ResizeObserver(H);R.observe(r);let A=0;const I=performance.now(),S=T=>{var V,ne;const X=(T-I)/1e3,O=(V=i.current)==null?void 0:V.getBoundingClientRect(),Y=Math.max((((ne=i.current)==null?void 0:ne.offsetHeight)??0)-window.innerHeight,1),j=Math.min(Math.max(-((O==null?void 0:O.top)??0),0),Y)/Y;l.position.x+=(b.x*1.85-l.position.x)*.08,l.position.y+=(-b.y*1.05-l.position.y)*.08;const J=7.4-j*3.4;l.position.z+=(J-l.position.z)*.08,l.lookAt(b.x*.35,-b.y*.2,0),c.position.x=b.x*3.2,c.position.y=-b.y*2.1,M.rotation.y=X*.08+b.x*.45,M.rotation.x=b.y*.2,d.forEach((le,xe)=>{const De=oa[xe],Ve=1+xe*.22;le.position.x=De.x+b.x*.85*Ve,le.position.y=De.y+Math.sin(X*.7+xe)*.16-b.y*.45*Ve,le.rotation.y=De.ry+b.x*.62,le.rotation.x=b.y*.28}),s.render(o,l),A=requestAnimationFrame(S)};return A=requestAnimationFrame(S),()=>{E=!0,cancelAnimationFrame(A),window.removeEventListener("pointermove",w),R.disconnect(),d.forEach(T=>{T.geometry.dispose();const X=T.material;if(!Array.isArray(X)){const O="map"in X?X.map:null;O==null||O.dispose(),X.dispose()}}),m.dispose(),_.dispose(),s.dispose()}},[n,i,t]),k.jsxs(k.Fragment,{children:[k.jsx("canvas",{className:"stage3d"}),k.jsx("ul",{className:"sr-only",children:e.map(r=>k.jsx("li",{children:r.alt},r.src))})]})}const ol={biao:{first:"radial-gradient(68% 68% at 55% 31%, hsla(8, 100%, 64%, .62) 0, hsla(8, 100%, 46%, .18) 48%, transparent 76%)",second:"radial-gradient(50% 50% at 50% 50%, hsla(16, 100%, 68%, .48) 0, transparent 70%)",third:"radial-gradient(50% 50% at 50% 50%, hsla(36, 100%, 72%, .34) 0, transparent 72%)",from:"#ffd0c2",via:"#ff3b24",to:"#ffe3a3",spot:"rgba(255, 70, 40, 0.32)"},li:{first:"radial-gradient(68% 68% at 55% 31%, hsla(38, 92%, 70%, .58) 0, hsla(32, 80%, 48%, .16) 50%, transparent 76%)",second:"radial-gradient(50% 50% at 50% 50%, hsla(40, 85%, 68%, .42) 0, transparent 70%)",third:"radial-gradient(50% 50% at 50% 50%, hsla(18, 70%, 55%, .3) 0, transparent 72%)",from:"#fff1d2",via:"#e6b15a",to:"#ffd0a6",spot:"rgba(230, 177, 90, 0.34)"}};function xm(i){return ol[i].spot}function Mm({face:i,eyebrow:e,title:t,deck:n,plate:r,marquee:a,spine:s,stat:o,stage:l,note:c}){const h=wr(),u=am(),f=et.useRef(null),m=ol[i],_=!!(l&&l.length>0),M=_&&l&&(u?k.jsx(om,{root:f,images:l,tint:i}):k.jsx(sm,{images:l})),p=_?"expo-pin":"cover-plain";return k.jsx("section",{className:_?u?"cover is-expo":"cover is-expo is-still":"cover",ref:f,"data-face":i,children:k.jsxs("div",{className:p,children:[M,k.jsx(Rl,{beamOpacity:_?.4:.9,from:m.from,via:m.via,to:m.to}),k.jsx(Il,{gradientFirst:m.first,gradientSecond:m.second,gradientThird:m.third,duration:8,xOffset:160,width:640,height:1200,smallWidth:280,translateY:-280}),k.jsxs("div",{className:"cover-layout",children:[s.length>0&&k.jsx(ds,{vertical:!0,pauseOnHover:!0,className:"cover-vmarquee",repeat:3,children:s.map((d,E)=>k.jsx("span",{className:"vword",children:d},`${d}-${E}`))}),k.jsxs("div",{className:"cover-copy",children:[k.jsx(vl,{className:"eyebrow",shimmerWidth:140,children:e}),h?k.jsx("h1",{className:"display",children:t}):k.jsx(fs,{as:"h1",per:"char",preset:"fade-in-blur",className:"display",speedReveal:.42,speedSegment:.42,children:t}),h?k.jsx("p",{className:"deck",children:n}):k.jsx(fs,{as:"p",per:"line",preset:"slide",className:"deck",delay:.28,speedSegment:.5,children:n}),c]}),r&&!_&&k.jsx("div",{className:"cover-plate",children:r}),k.jsx(Ll,{containerClassName:"cover-glass-slot",className:"cover-glass-tilt",children:k.jsx(Dl,{children:k.jsx(xl,{radius:22,mouseContainer:f,elasticity:0,children:k.jsxs("div",{className:"stat",children:[k.jsx("p",{className:"stat-value",children:k.jsx("span",{className:h?void 0:"anim-track",children:o.value})}),k.jsx("p",{className:"stat-k",children:o.k}),k.jsx("p",{className:"stat-s",children:o.s})]})})})})]}),a.length>0&&k.jsx(ds,{pauseOnHover:!0,className:"cover-marquee",children:a.map((d,E)=>k.jsx("span",{className:"mq-item",children:d},`${d}-${E}`))}),h?k.jsx("p",{className:"cover-cue",children:k.jsx("span",{children:"往下"})}):k.jsxs(Pl,{className:"cover-cue",offset:18,blur:"8px",delay:.4,children:[k.jsx("span",{className:"cover-rule","aria-hidden":"true"}),k.jsx("span",{children:"往下"})]})]})})}function Sm({page:i,figure:e,priority:t=!1,linkLabel:n,tilt:r=!1,float:a=!1,track:s=!1,intro:o,amp:l=14,omitCaption:c=!1,children:h}){const u=wr(),f=r&&!u,m=k.jsx(Wl,{page:i,figure:e,priority:t,linkLabel:n});return k.jsxs("figure",{className:"plate",children:[k.jsx("div",{className:f?"plate-stage is-tilt":"plate-stage",style:f?{aspectRatio:`${e.width} / ${e.height}`}:void 0,children:f?k.jsx(Gl,{rotateAmplitude:l,scaleOnHover:1.06,showTooltip:!1,gyroscope:!1,floating:a,trackWindow:s,intro:o??t,glare:.72,shadow:.62,radius:18,containerWidth:"100%",containerHeight:"100%",imageWidth:"100%",imageHeight:"100%",children:m}):m}),k.jsx(Xl,{figure:e,omitCaption:c,children:h})]})}function ym({id:i,kicker:e,title:t,children:n}){return k.jsxs("section",{className:"chapter",id:i,"aria-labelledby":i?`${i}-title`:void 0,children:[k.jsx("p",{className:"chapter-kicker",children:e}),k.jsx("div",{className:"chapter-swing",children:k.jsx("h2",{id:i?`${i}-title`:void 0,className:"chapter-title",children:k.jsx("span",{className:"anim-swing",children:t})})}),n]})}function wm({children:i}){const e=et.useRef(null);return et.useLayoutEffect(()=>{const t=e.current;if(!t)return;const n=[...t.querySelectorAll(".rise")];if(window.matchMedia("(prefers-reduced-motion: reduce)").matches||typeof IntersectionObserver>"u"){n.forEach(c=>c.classList.add("is-in"));return}const a=new Set,s=window.innerHeight*.92;n.forEach(c=>{c.getBoundingClientRect().top<s?c.classList.add("is-in"):a.add(c)});const o=new IntersectionObserver(c=>{for(const h of c){if(!h.isIntersecting)continue;const u=h.target;u.classList.add("is-in"),a.delete(u),o.unobserve(u)}},{rootMargin:"0px 0px -6% 0px",threshold:.08});a.forEach(c=>o.observe(c));const l=window.setTimeout(()=>{a.forEach(c=>c.classList.add("is-in"))},1800);return()=>{o.disconnect(),window.clearTimeout(l)}},[]),k.jsx("div",{ref:e,children:i})}export{Mm as C,pm as F,dm as H,Sm as P,wm as R,fm as T,_m as a,vm as b,ym as c,um as d,gm as e,hm as f,Wl as g,mm as l,xm as t,cm as u};
