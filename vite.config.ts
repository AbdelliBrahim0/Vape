import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
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

      // ✅ Utiliser le plugin Emotion pour SWC (pas Babel sinon build GitHub échoue)
      plugins: [["@swc/plugin-emotion", {}]],
    }),

    // option Lovable.dev en dev uniquement
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  define: {
    "process.env": {},
  },
}));
