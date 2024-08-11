import { defineConfig } from '@pandacss/dev';
import { gganbuPreset } from '@gganbu-org/theme';

export default defineConfig({
  presets: [gganbuPreset],
  hash: { cssVar: false, className: true },

  preflight: true,

  include: [
    './src/**/*.{js,jsx,ts,tsx}',
    '../../components/**/*.{js,jsx,ts,tsx}',
  ],

  outdir: '../styled-system/dist',
  importMap: '@gganbu-org/styled-system',
  prefix: 'gganbu',
  outExtension: 'js',
});
