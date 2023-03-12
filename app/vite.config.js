import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import crossOriginIsolation from "vite-plugin-cross-origin-isolation";
import topLevelAwait from "vite-plugin-top-level-await";

export default defineConfig({
  plugins: [react(), crossOriginIsolation(), topLevelAwait()],
  preview: {
    headers: {
      "Cross-Origin-Embedder-Policy": "require-corp",
      "Cross-Origin-Opener-Policy": "same-origin",
    },
  },
});
