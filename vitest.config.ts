import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'happy-dom',
      setupFiles: ['./.test/setup.ts'],
      globals: true,
      // server: { deps: { inline: ['@receter/my-component-library', '@admiral-ds/date-picker'] } },
    },
  }),
);
