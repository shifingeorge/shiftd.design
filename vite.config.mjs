import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tagger from "@dhiwise/component-tagger";

export default defineConfig({
  build: {
    outDir: "build",
    chunkSizeWarningLimit: 2000,
    sourcemap: false,
    minify: 'esbuild',
    target: 'esnext'
  },
  plugins: [
    tsconfigPaths(),
    react({
      jsxRuntime: 'automatic',
      jsxImportSource: 'react'
    }),
    tagger()
  ],
  server: {
    port: 4028,
    host: "0.0.0.0",
    strictPort: false, // allow fallback if port is busy
    allowedHosts: ['.amazonaws.com', '.builtwithrocket.new', '.vercel.app', 'localhost']
  }
});