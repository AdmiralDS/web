import { resolve, relative, extname } from 'node:path';
import { existsSync, readdirSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { glob } from 'glob';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import svgr from 'vite-plugin-svgr';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import pkg from './package.json';

emptyDir(resolve(__dirname, 'dist'));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    svgr({
      svgrOptions: {
        dimensions: false,
        svgProps: {
          focusable: '{false}',
        },
      },
    }),
    vanillaExtractPlugin(),
    tsconfigPaths(),
    dts({ tsconfigPath: 'tsconfig.build.json' }),
  ],
  build: {
    sourcemap: true,
    copyPublicDir: false,
    minify: false,
    // use vite library mode to build the package
    // https://vitejs.dev/guide/build.html#library-mode
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: Object.keys(pkg.peerDependencies || {}).map((dep) => new RegExp(`^${dep}`, 'i')),
      input: Object.fromEntries(
        // https://rollupjs.org/configuration-options/#input
        glob
          .sync('lib/**/*.{ts,tsx}', {
            ignore: ['lib/**/*.d.ts'],
          })
          .map((file) => [
            // 1. The name of the entry point
            // lib/nested/foo.js becomes nested/foo
            relative('lib', file.slice(0, file.length - extname(file).length)),
            // 2. The absolute path to the entry file
            // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
            fileURLToPath(new URL(file, import.meta.url)),
          ]),
      ),
      output: {
        preserveModulesRoot: 'lib',
        interop: 'auto',
        chunkFileNames: 'chunks/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
        entryFileNames: '[name].js',
      },
    },
  },
});

function emptyDir(dir: string) {
  if (!existsSync(dir)) {
    return;
  }

  for (const file of readdirSync(dir)) {
    rmSync(resolve(dir, file), { recursive: true, force: true });
  }
}
