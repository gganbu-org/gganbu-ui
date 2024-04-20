import fs from 'fs';
import path from 'path';
import type { StorybookConfig } from '@storybook/react-webpack5';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

function findStories() {
  const filePattern = /^.*\.stories\.tsx$/;
  const pkgStoriesPath = `./stories`;
  const files = fs.readdirSync(`${pkgStoriesPath}`);

  return files
    .filter((file) => filePattern.test(file))
    .map((file) => `../${pkgStoriesPath}/${file}`);
}

const config: StorybookConfig = {
  stories: [...findStories()],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-dark-mode',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
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
