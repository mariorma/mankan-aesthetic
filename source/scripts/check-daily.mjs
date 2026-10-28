#!/usr/bin/env node
// 校验 content/daily.json。零依赖，仓库根目录或 source/ 下都能跑：
//   node source/scripts/check-daily.mjs          只检查
//   node source/scripts/check-daily.mjs --fix    顺手补上图片 width/height，并统一缩进
import { existsSync, readFileSync, writeFileSync, openSync, readSync, closeSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repo = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const contentDir = resolve(repo, "content");
const imagesDir = resolve(repo, "images");
const fix = process.argv.includes("--fix");

const LINES = ["taste", "repression", "tension", "beauty"];
const KEYS = ["id", "date", "line", "title", "note", "why", "body", "steal", "source", "href", "image", "more", "pick", "off"];
const IMAGE_KEYS = ["file", "alt", "width", "height", "href"];

const errors = [];
const warnings = [];

function head(file, size = 512 * 1024) {
  const fd = openSync(file, "r");
  const buf = Buffer.alloc(size);
  const read = readSync(fd, buf, 0, size, 0);
  closeSync(fd);
  return buf.subarray(0, read);
}

function imageSize(file) {
  const b = head(file);
  if (b.length > 30 && b.toString("ascii", 0, 4) === "RIFF" && b.toString("ascii", 8, 12) === "WEBP") {
    const chunk = b.toString("ascii", 12, 16);
    if (chunk === "VP8 ") return { width: b.readUInt16LE(26) & 0x3fff, height: b.readUInt16LE(28) & 0x3fff };
    if (chunk === "VP8L") {
      const b0 = b[21], b1 = b[22], b2 = b[23], b3 = b[24];
      return { width: 1 + (((b1 & 0x3f) << 8) | b0), height: 1 + (((b3 & 0xf) << 10) | (b2 << 2) | ((b1 & 0xc0) >> 6)) };
    }
    if (chunk === "VP8X") return { width: 1 + b.readUIntLE(24, 3), height: 1 + b.readUIntLE(27, 3) };
  }
  if (b.length > 24 && b.readUInt32BE(0) === 0x89504e47) return { width: b.readUInt32BE(16), height: b.readUInt32BE(20) };
  if (b.length > 10 && b.toString("ascii", 0, 3) === "GIF") return { width: b.readUInt16LE(6), height: b.readUInt16LE(8) };
  if (b.length > 4 && b[0] === 0xff && b[1] === 0xd8) {
    let i = 2;
    while (i + 9 < b.length) {
      if (b[i] !== 0xff) { i += 1; continue; }
      const marker = b[i + 1];
      const len = b.readUInt16BE(i + 2);
      if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
        return { width: b.readUInt16BE(i + 7), height: b.readUInt16BE(i + 5) };
      }
      i += 2 + len;
    }
  }
  return null;
}

function where(text, position) {
  const before = text.slice(0, position);
  const line = before.split("\n").length;
  const col = position - before.lastIndexOf("\n");
  return `第 ${line} 行第 ${col} 列`;
}

function parse(path) {
  const text = readFileSync(path, "utf8");
  try {
    return { text, doc: JSON.parse(text) };
  } catch (error) {
    const m = String(error.message).match(/position (\d+)/);
    const at = m ? `，${where(text, Number(m[1]))}附近` : "";
    errors.push(`${path.replace(repo + "/", "")} 不是合法的 JSON${at}。常见原因：最后一项后面多了逗号、两项之间少了逗号、引号没配对。\n    ${error.message}`);
    return null;
  }
}

function checkImage(image, label, entry) {
  if (!image || typeof image !== "object") {
    errors.push(`${label}：图片要写成对象 { "file": ..., "alt": ... }`);
    return;
  }
  for (const key of Object.keys(image)) if (!IMAGE_KEYS.includes(key)) warnings.push(`${label}：图片里有不认识的字段「${key}」`);
  if (typeof image.file !== "string" || !image.file) {
    errors.push(`${label}：图片缺 file`);
    return;
  }
  if (!image.alt) warnings.push(`${label}：图片缺 alt（一句话描述画面）`);
  if (/^https?:\/\//.test(image.file)) {
    warnings.push(`${label}：图片是外链（${image.file}）。请下到 images/ 再引用文件名`);
    return;
  }
  const path = resolve(imagesDir, image.file);
  if (!existsSync(path)) {
    errors.push(`${label}：images/${image.file} 不存在`);
    return;
  }
  const size = imageSize(path);
  if (!size) {
    if (!image.width || !image.height) warnings.push(`${label}：读不出 ${image.file} 的尺寸，请手填 width/height`);
    return;
  }
  if (image.width !== size.width || image.height !== size.height) {
    if (fix) {
      image.width = size.width;
      image.height = size.height;
    } else if (!image.width || !image.height) {
      warnings.push(`${label}：${image.file} 没写尺寸（实际 ${size.width}×${size.height}）。跑 --fix 自动补`);
    } else {
      warnings.push(`${label}：${image.file} 写的是 ${image.width}×${image.height}，实际 ${size.width}×${size.height}。跑 --fix 自动改`);
    }
  }
  void entry;
}

function checkEntries(entries, file, ids) {
  entries.forEach((entry, index) => {
    const label = `${file} 第 ${index + 1} 条（${entry?.id ?? entry?.title ?? "无 id"}）`;
    if (!entry || typeof entry !== "object" || Array.isArray(entry)) {
      errors.push(`${label}：不是对象`);
      return;
    }
    for (const key of Object.keys(entry)) if (!KEYS.includes(key)) warnings.push(`${label}：不认识的字段「${key}」`);
    if (typeof entry.id !== "string" || !/^[a-z0-9][a-z0-9-]*$/.test(entry.id)) {
      errors.push(`${label}：id 只用小写英文、数字和连字符，例如 "hopper-sunday"`);
    } else if (ids.has(entry.id)) {
      errors.push(`${label}：id「${entry.id}」重复了`);
    } else {
      ids.add(entry.id);
    }
    if (typeof entry.date !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(entry.date) || Number.isNaN(Date.parse(entry.date))) {
      errors.push(`${label}：date 写成 "2026-10-29" 这种格式`);
    }
    if (!LINES.includes(entry.line)) errors.push(`${label}：line 只能是 ${LINES.join(" / ")}`);
    if (typeof entry.title !== "string" || !entry.title.trim()) errors.push(`${label}：缺 title`);
    if (!entry.note && !entry.image) warnings.push(`${label}：没图也没 note，页面上会只剩标题`);
    if (typeof entry.note === "string" && entry.note.length > 90) warnings.push(`${label}：note 有 ${entry.note.length} 字，一句话最好 60 字内，长的放 why`);
    if (entry.href && !/^https?:\/\//.test(entry.href)) errors.push(`${label}：href 要以 http(s):// 开头`);
    if (!entry.image) {
      if (entry.off) warnings.push(`${label}：已下架，没有封面（待补图）`);
      else errors.push(`${label}：缺封面。上架的图、视频、网站、推文都要有本地 image.file；公开页抓不到就先写 "off": true`);
    }
    if (entry.image === undefined && entry.more) errors.push(`${label}：有 more 没 image。第一张放 image`);
    if (entry.image !== undefined) checkImage(entry.image, label, entry);
    if (entry.more !== undefined) {
      if (!Array.isArray(entry.more)) errors.push(`${label}：more 要是数组`);
      else entry.more.forEach((image, i) => checkImage(image, `${label} more[${i}]`, entry));
    }
    if (entry.body !== undefined && (!Array.isArray(entry.body) || entry.body.some((s) => typeof s !== "string"))) {
      errors.push(`${label}：body 要是字符串数组`);
    }
    if (entry.image && !entry.source) warnings.push(`${label}：有图没写 source（来源）`);
  });
}

const mainPath = resolve(contentDir, "daily.json");
if (!existsSync(mainPath)) {
  console.error("找不到 content/daily.json");
  process.exit(1);
}
const files = [];
const main = parse(mainPath);
const ids = new Set();
if (main) {
  const { doc } = main;
  if (!doc || !Array.isArray(doc.entries)) errors.push("content/daily.json 顶层要有 entries 数组");
  else {
    files.push({ path: mainPath, doc });
    checkEntries(doc.entries, "daily.json", ids);
    const archives = Array.isArray(doc.archives) ? doc.archives : [];
    for (const name of archives) {
      const path = resolve(contentDir, name);
      if (!existsSync(path)) {
        errors.push(`archives 里写了 ${name}，但 content/${name} 不存在`);
        continue;
      }
      const extra = parse(path);
      if (!extra) continue;
      if (!Array.isArray(extra.doc.entries)) errors.push(`content/${name} 顶层要有 entries 数组`);
      else {
        files.push({ path, doc: extra.doc });
        checkEntries(extra.doc.entries, name, ids);
      }
    }
    const dates = doc.entries.map((e) => e?.date).filter(Boolean);
    const sorted = [...dates].sort().reverse();
    if (dates.join() !== sorted.join()) warnings.push("daily.json 里的日期没有按新到旧排。页面会自己排序，但新条目请加在最上面");
  }
}

if (fix && errors.length === 0) {
  for (const { path, doc } of files) writeFileSync(path, JSON.stringify(doc, null, 2) + "\n");
}

const total = files.reduce((sum, { doc }) => sum + doc.entries.length, 0);
for (const w of warnings) console.log(`  提醒  ${w}`);
for (const e of errors) console.log(`  错误  ${e}`);
if (errors.length > 0) {
  console.log(`\n日更校验没过：${errors.length} 个错误，${warnings.length} 个提醒。`);
  process.exit(1);
}
console.log(`日更校验通过：${total} 条${warnings.length ? `，${warnings.length} 个提醒` : ""}${fix ? "（已按 --fix 写回）" : ""}。`);
