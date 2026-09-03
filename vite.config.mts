/// <reference types="vitest" />

import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';
import viteTsConfigPaths from 'vite-tsconfig-paths';


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({

  plugins: [angular(), viteTsConfigPaths()],

  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
      '/data-stream': {
        target: 'ws://localhost:8080',
        ws: true,
        changeOrigin: true,
      },
    },
  },

  test: {
    globals: true,

    environment: 'jsdom',

    setupFiles: ['src/test-setup.ts'],
    include: ['**/*.spec.ts'],
    reporters: ['default'],
    server: {
      deps: {
        inline: ['@angular/core', 'angular-resizable-element'],
      },
    },
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}));
