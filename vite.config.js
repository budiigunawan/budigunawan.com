// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        projects: resolve(__dirname, 'projects/index.html'),
        blog: resolve(__dirname, 'blog/index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
      },
    },
  },
});
