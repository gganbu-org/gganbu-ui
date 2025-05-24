import { defineConfig } from '@pandacss/dev';
import { gganbuPreset } from '@gganbu-org/theme';
import { systemProperties } from './src/system-props';

export default defineConfig({
  presets: [
    gganbuPreset({
      css: [
        {
          properties: systemProperties as Record<string, any>,
        },
      ],
    }),
  ],
  hash: { cssVar: false, className: true },
  minify: true,
  clean: true,

  preflight: true,

  layers: {
    base: 'gganbu-org_base',
    recipes: 'gganbu-org_recipes',
    tokens: 'gganbu-org_tokens',
    reset: 'gganbu-org_reset',
    utilities: 'gganbu-org_utilities',
  },

  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  outdir: '../styled-utils/dist',
  importMap: '@gganbu-org/styled-utils',
  prefix: 'gganbu',
  outExtension: 'js',
});
