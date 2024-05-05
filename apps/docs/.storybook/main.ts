import fs from 'fs';
import path, { dirname, join } from 'path';
import type { StorybookConfig } from '@storybook/react-webpack5';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

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
    '@storybook/addon-webpack5-compiler-swc',
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-webpack5'),
    options: {},
  },
  docs: {
    autodocs: false,
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.plugins = [
        ...(config.resolve.plugins || []),
        new TsconfigPathsPlugin({
          configFile: path.resolve(__dirname, '../tsconfig.json'),
        }),
      ];
    }

    return config;
  },
};
export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
