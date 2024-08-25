import { defineConfig } from '@pandacss/dev';
import { gganbuPreset } from '@gganbu-org/theme';

export default defineConfig({
  presets: [gganbuPreset],
  clean: true,

  preflight: true,

  include: ['../../components/**/*.{js,jsx,ts,tsx}'],

  outdir: './dist',
  importMap: '@gganbu-org/styled-utils',
  prefix: 'gganbu',
  outExtension: 'js',
});
