#!/usr/bin/env node
// 按 GitHub Pages 的样子在本地托管仓库根目录：http://localhost:4173/mankan-aesthetic/
import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { dirname, extname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repo = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const prefix = "/mankan-aesthetic";
const port = Number(process.env.PORT ?? 4173);
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
};

createServer((req, res) => {
  const url = decodeURIComponent((req.url ?? "/").split("?")[0]);
  if (url === "/" || url === prefix) {
    res.writeHead(302, { Location: `${prefix}/` });
    res.end();
    return;
  }
  if (!url.startsWith(`${prefix}/`)) {
    res.writeHead(404);
    res.end();
    return;
  }
  let file = resolve(repo, `.${url.slice(prefix.length)}`);
  if (!file.startsWith(repo)) {
    res.writeHead(403);
    res.end();
    return;
  }
  if (existsSync(file) && statSync(file).isDirectory()) file = resolve(file, "index.html");
  const missing = !existsSync(file);
  if (missing) file = resolve(repo, "404.html");
  res.writeHead(missing ? 404 : 200, {
    "Content-Type": types[extname(file)] ?? "application/octet-stream",
    "Cache-Control": "no-cache",
  });
  createReadStream(file).pipe(res);
}).listen(port, () => console.log(`预览：http://localhost:${port}${prefix}/`));
