---
to: <%= packageDomain %>/<%= packageName %>/tsup.config.ts
---
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  minify: true,
  banner: { js: '"use client";' },
});
