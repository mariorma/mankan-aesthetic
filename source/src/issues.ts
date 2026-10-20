// 慢看是一个整体，表达「通过积累之后想呈现的品味」。
// 以后每一「期」都可以大变样；这里存期次，方便回溯提升路径。
//
// 怎么加下一期：
// 1) 把当前这期的 current 去掉，给它填一个 snapshotHref（指向那一期存档的静态快照，没有就先留空）。
// 2) 复制一个 Issue 放到数组最前面，slug/no 换新，current: true，写上这期相对上期改了什么（changes）。
// 3) 整站按新一期重新设计首页与条目即可；旧期仍能从「往期」翻到。
export type Issue = {
  slug: string;
  no: string;
  title: string;
  date: string;
  summary: string;
  changes: string[];
  current?: boolean;
  snapshotHref?: string;
};

export const issues: Issue[] = [
  {
    slug: "2026-10-22",
    no: "No.02",
    title: "左雅，右俗。",
    date: "2026-10-22",
    current: true,
    summary:
      "首页改成左右两栏。左边看排版和配色，右边放喜欢的人和桌上的东西。还是同一个站，两边不互相跳。",
    changes: [
      "宽屏首页分成左右两半；窄屏先左后右，一栏一栏往下读。",
      "左边留白多、白底、规格写全；右边图更密、底更暖，文案更口语。",
      "两边各写各的，不互链，也不把两个话题写成一篇。",
      "图用站里已有的原图，图注带来源和「无商业用途·侵权立删」。",
      "四章条目还在「条目」页，首页不再把它们铺成目录。",
    ],
  },
  {
    slug: "2026-10",
    no: "No.01",
    title: "与其刷很多图，不如把一张看久一点。",
    date: "2026-10-15",
    summary: "第一期。定下纸墨排版、四章十二条、「看一张」固定栏，和只给主人翻的积累 log。",
    changes: [
      "首页收成「本期一句 + 一张大图」，不做无限信息流。",
      "十二条分成结构 / 光 / 人与气质 / 练眼四章，每章一句大白话题记。",
      "审美提升三篇提炼笔记先归到这里（本期存档），以后不再做每日提炼。",
      "新增积累 log：原文要点 + 可点外链 + 能抓到的原图，只给主人翻。",
    ],
  },
];

export const currentIssue = issues.find((issue) => issue.current) ?? issues[0];
