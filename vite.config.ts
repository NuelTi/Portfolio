import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/** GitHub Pages project site: https://nuelti.github.io/Portfolio/ */
const repoBase = "/Portfolio/";

export default defineConfig(({ command }) => ({
  base: command === "serve" ? "/" : repoBase,
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
  },
}));
