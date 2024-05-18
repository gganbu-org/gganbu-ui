import fs from 'fs';
import path, { dirname, join } from 'path';
import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';

function findStories() {
  const filePattern = /^.*\.stories\.tsx$/;
  const pkgStoriesPath = `../stories`;
  const files = fs.readdirSync(path.resolve(__dirname, pkgStoriesPath));

  return files
    .filter((file) => filePattern.test(file))
    .map((file) => `${pkgStoriesPath}/${file}`);
}

const config: StorybookConfig = {
  stories: [...findStories()],

  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('storybook-dark-mode'),
    getAbsolutePath('@chromatic-com/storybook'),
  ],

  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },

  docs: {},

  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [viteTsconfigPaths()], // 자체적으로 루트에 있는 tsconfig.json을 참조
    });
  },
};
export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
