import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server: {
    host: true,
    port: 5173,
    open: true,
  },

  preview: {
    host: true,
    port: 4173,
  },

  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    emptyOutDir: true,
  },
});