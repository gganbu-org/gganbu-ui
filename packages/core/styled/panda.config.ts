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

  preflight: true,

  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  outdir: '../styled-utils/dist',
  importMap: '@gganbu-org/styled-utils',
  prefix: 'gganbu',
  outExtension: 'js',
});
