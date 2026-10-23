import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base ('./') ensures assets load correctly both in AI Studio (root) and on GitHub Pages (/cns_holiday/)
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
});
