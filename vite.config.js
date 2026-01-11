import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/llm": {
        target: "http://raspberrypi",
        changeOrigin: true,
      },
    },
  },
});
