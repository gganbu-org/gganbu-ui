import { defineConfig } from '@pandacss/dev';
import { gganbuPreset } from '@gganbu-org/theme';

export default defineConfig({
  presets: [gganbuPreset],
  hash: { cssVar: false, className: true },
  minify: true,

  preflight: true,

  include: ['../../components/**/*.{js,jsx,ts,tsx}'],

  outdir: './dist',
  importMap: '@gganbu-org/styled-system',
  prefix: 'gganbu',
  outExtension: 'js',
});
