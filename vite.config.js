import { resolve } from 'path';
import { defineConfig } from 'vite';
import svelte from '@svitejs/vite-plugin-svelte';
import WindiCSS from 'vite-plugin-windicss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), WindiCSS()],
  resolve: {
    alias: {
      $lib: resolve(__dirname, 'src/lib'),
    },
  },
});
