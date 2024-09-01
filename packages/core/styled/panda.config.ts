import { defineConfig } from '@pandacss/dev';
import { gganbuPreset } from '@gganbu-org/theme';

export default defineConfig({
  presets: [gganbuPreset],

  preflight: true,

  include: [
    './src/**/*.{js,jsx,ts,tsx}',
    '../../components/**/*.{js,jsx,ts,tsx}',
  ],

  outdir: '../styled-utils/dist',
  importMap: '@gganbu-org/styled-utils',
  prefix: 'gganbu',
  outExtension: 'js',
});
