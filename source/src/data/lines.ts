import type { Line } from "./daily";

export type LineInfo = {
  key: Line;
  no: string;
  name: string;
  en: string;
  blurb: string;
};

export const LINES: Record<Line, LineInfo> = {
  taste: {
    key: "taste",
    no: "01",
    name: "品味",
    en: "Taste",
    blurb: "案头攒下的眼力。先下判断，再报出处；看字阶、版面、留白与纸感。",
  },
  repression: {
    key: "repression",
    no: "02",
    name: "压抑",
    en: "Repression",
    blurb: "扣到顶的领口、桌下绷紧的膝盖与正装里的体温。欲望在场，但被规矩和衣料死死拧住。",
  },
  tension: {
    key: "tension",
    no: "03",
    name: "一人",
    en: "Solo Tension",
    blurb: "不是单人独照，是肉身自带的引力。肩颈、骨相、衣料贴着皮肤的分量，一个人在画幅里把性磁场拉满。",
  },
  beauty: {
    key: "beauty",
    no: "04",
    name: "美人",
    en: "Beauty",
    blurb: "直面好看的女人。一张图配一句话，看骨相、站姿、身上的颜色，以及镜头停在哪个距离。",
  },
};
