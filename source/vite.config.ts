import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, resolve } from "node:path";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

const root = import.meta.dirname;
const repo = resolve(root, "..");

const mime: Record<string, string> = {
  ".json": "application/json; charset=utf-8",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".gif": "image/gif",
  ".avif": "image/avif",
  ".svg": "image/svg+xml",
};

// 日更内容和图只放在仓库根目录（content/、images/），Pages 直接托管，不进构建产物。
// 开发时把这两个目录挂到 dev server 上，路径和线上一致。
function repoRootContent(dirs: string[]): Plugin {
  return {
    name: "repo-root-content",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = decodeURIComponent((req.url ?? "").split("?")[0]);
        const match = url.match(/^(?:.*\/)?((?:content|images)\/[^/]+)$/);
        if (!match || !dirs.some((dir) => match[1].startsWith(`${dir}/`))) return next();
        const file = resolve(repo, match[1]);
        if (!file.startsWith(repo) || !existsSync(file) || !statSync(file).isFile()) return next();
        res.setHeader("Content-Type", mime[extname(file).toLowerCase()] ?? "application/octet-stream");
        res.setHeader("Cache-Control", "no-cache");
        createReadStream(file).pipe(res);
      });
    },
  };
}

export default defineConfig({
  base: "./",
  plugins: [react(), repoRootContent(["content", "images"])],
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        daily: resolve(root, "daily/index.html"),
      },
    },
  },
});
