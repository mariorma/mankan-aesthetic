import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const root = import.meta.dirname;

export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        about: resolve(root, "about/index.html"),
        entries: resolve(root, "entries/index.html"),
        notes: resolve(root, "notes/index.html"),
        archive: resolve(root, "archive/index.html"),
        log: resolve(root, "log/index.html"),
        notFound: resolve(root, "404.html"),
      },
    },
  },
});
