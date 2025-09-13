import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        dashboard: resolve(__dirname, 'dashboard.html'),
        auth: resolve(__dirname, 'auth.html'),
        userDash: resolve(__dirname, 'user-dash/index.html'),
        redirect: resolve(__dirname, 'r/index.html')
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
});
