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
    blurb: "杂志姿态。先写判断，再写谁出的。看字阶、刊面、留白。",
  },
  repression: {
    key: "repression",
    no: "02",
    name: "压抑",
    en: "Restraint",
    blurb: "冷、正式、压得住。窗、桌、夜，未说破的距离。",
  },
  tension: {
    key: "tension",
    no: "03",
    name: "一人",
    en: "Quiet Power",
    blurb: "一个人撑满画幅。不看你，也让你移不开眼。",
  },
  beauty: {
    key: "beauty",
    no: "04",
    name: "美人",
    en: "Portraits",
    blurb: "一张图一句话。看站姿、颜色和距离。",
  },
};
