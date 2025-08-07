/// <reference types='vitest' />
/// <reference types='vite/client' />
/// <reference types='vite-plugin-svgr/client' />

import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import { baseConfig } from '@mythmaker/vitest-config/base';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      react(),
      svgr(),
      tsconfigPaths(),
    ],
    base: env.VITE_API_URL_PREFIX,
    server: {
      port: 9000,
      proxy: {
        '/api': {
          target: env.VITE_API_URL,
        }
      }
    },
    build: {
      sourcemap: true,
    },
    // Vitest config from vitest-config package
    baseConfig
  };
});
