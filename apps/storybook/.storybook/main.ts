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
    'storybook-dark-mode',
  ],

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  docs: {},

  webpackFinal: async (config) => {
    if (config.module) {
      config.module.rules?.push({
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              presets: [
                '@babel/preset-env',
                ['@babel/preset-react', { runtime: 'automatic' }],
                '@babel/preset-typescript',
              ],
            },
          },
        ],
      });
    }
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
