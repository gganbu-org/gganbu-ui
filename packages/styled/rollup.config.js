import { generateConfig } from '@danji/rollup';

export default generateConfig({
  input: `./src/index.ts`,
  packageDir: __dirname,
});
