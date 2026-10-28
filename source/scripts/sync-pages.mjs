#!/usr/bin/env node
// 把 source/dist 同步到仓库根目录（GitHub Pages 从 main 根目录托管）。
// 只动构建产物：assets/、*.html、daily/、log/、favicon 等；content/、images/、docs/、source/ 不碰。
import { cpSync, existsSync, readdirSync, rmSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const source = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = resolve(source, "dist");
const repo = resolve(source, "..");
const keep = new Set(["content", "images", "docs", "source", ".git", ".github", "README.md", ".gitignore"]);

if (!existsSync(dist)) {
  console.error("没有 source/dist，先跑 npm run build");
  process.exit(1);
}

rmSync(resolve(repo, "assets"), { recursive: true, force: true });

for (const name of readdirSync(dist)) {
  if (keep.has(name)) {
    console.error(`dist 里出现了受保护的 ${name}，停下检查 vite 配置`);
    process.exit(1);
  }
  cpSync(resolve(dist, name), resolve(repo, name), { recursive: true, force: true });
}
console.log(`已同步 ${readdirSync(dist).join("、")} 到仓库根目录。`);
