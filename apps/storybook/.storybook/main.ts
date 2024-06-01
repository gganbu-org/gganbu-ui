import fs from 'fs';
import path from 'path';
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
    '@chromatic-com/storybook',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-webpack5-compiler-swc',
    'storybook-dark-mode',
  ],

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  docs: {},

  // NOTE: https://storybook.js.org/docs/configure/compilers#the-swc-compiler-doesnt-work-with-react
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic',
        },
      },
    },
  }),

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
