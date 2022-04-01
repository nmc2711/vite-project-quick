import { defineConfig } from 'vite';

import { viteCommonjs, esbuildCommonjs } from '@originjs/vite-plugin-commonjs';

import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    esbuildCommonjs(),
    viteCommonjs(),
    tsconfigPaths(),
    react(),
  ],
})
