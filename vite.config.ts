import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import tagger from '@dhiwise/component-tagger';

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react({
      // Enable React Compiler for React 19
      babel: { plugins: ['babel-plugin-react-compiler'] }
    }),
    tagger()
  ],
  server: { port: 4028, host: true, strictPort: false },
  preview: { port: 4028, host: true, strictPort: false },
  resolve: {
    // Avoid duplicate React if symlinked deps exist
    dedupe: ['react', 'react-dom']
  },
  build: {
    outDir: 'build',
    chunkSizeWarningLimit: 2000,
    sourcemap: false,
    minify: 'esbuild',
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['framer-motion', 'react-hook-form'],
          charts: ['d3', 'recharts']
        }
      }
    }
  }
});