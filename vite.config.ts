import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },

  esbuild: {
    jsx: "automatic",
  },

  // ✅ IMPORTANT pour GitHub Pages (sous /Vape/)
  base: "/Vape/",

  plugins: [
    react({
      jsxImportSource: "@emotion/react",
    }),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
