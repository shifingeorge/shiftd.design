import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import tagger from '@dhiwise/component-tagger';

export default defineConfig({
  build: {
    outDir: 'build',
    chunkSizeWarningLimit: 2000,
    sourcemap: false,
    minify: 'esbuild',
    target: 'esnext'
  },
  plugins: [
    tsconfigPaths(),
    react({
      jsxRuntime: 'automatic',
      fastRefresh: true
    }),
    tagger()
  ],
  resolve: {
    alias: {
      '@': '/src',
      components: '/src/components',
      pages: '/src/pages',
      lib: '/src/lib',
      data: '/src/data',
      styles: '/src/styles'
    }
  },
  server: {
    port: 4028,
    host: '0.0.0.0',
    strictPort: false,
    allowedHosts: [
      '.amazonaws.com',
      '.builtwithrocket.new',
      '.vercel.app',
      'localhost'
    ],
    cors: true
  }
});