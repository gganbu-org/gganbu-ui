import fs from 'fs';
import type { StorybookConfig } from '@storybook/react-webpack5';

interface FindStoriesOptions {
  dir: string;
}

function findStories({ dir = 'components' }: FindStoriesOptions) {
  const filePattern = /^.*\.stories\.tsx$/;
  const pkgStoriesPath = `packages/${dir}/stories`;
  const files = fs.readdirSync(`${pkgStoriesPath}`);

  return files
    .filter((file) => filePattern.test(file))
    .map((file) => `../${pkgStoriesPath}/${file}`);
}

const config: StorybookConfig = {
  stories: [...findStories({ dir: 'components' })],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
