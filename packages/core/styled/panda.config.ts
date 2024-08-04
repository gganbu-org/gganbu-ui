import { defineConfig } from '@pandacss/dev';
import { gganbuPreset } from '@gganbu-org/theme';

export default defineConfig({
  presets: [gganbuPreset],
  // Whether to use css reset
  preflight: true,

  include: ['./src/**/*.{js,jsx,ts,tsx}', '../../components//**/*.{jsx,tsx}'],

  outdir: '../styled-system/dist',
  importMap: '@gganbu-org/styled-system',
  prefix: 'gganbu',
  outExtension: 'js',
});
