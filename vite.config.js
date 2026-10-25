import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { profile } from "./src/data/portfolio.js";
import { blogPosts } from "./src/data/blogPosts.js";

const SITE = "https://mkanaan.de";

// Writes dist/sitemap.xml from the same data the pages use, so it never drifts.
function sitemap() {
  return {
    name: "sitemap",
    apply: "build",
    generateBundle() {
      const paths = [
        "/",
        "/cv",
        "/blog",
        ...blogPosts.map((p) => `/blog/${p.slug}`),
        ...profile.projects.map((p) => `/project/${p.slug}`),
      ];
      const urls = paths.map((p) => `  <url><loc>${SITE}${p}</loc></url>`).join("\n");
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), sitemap()],
  server: {
    proxy: {
      "/api/llm": {
        target: "http://raspberrypi",
        changeOrigin: true,
      },
    },
  },
});
