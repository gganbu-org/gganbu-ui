# @danji/rollup

🍣 We use rollup to bundle the libraries

## Install

Just add it to your devDependencies

Using npm:

```console
npm install @danji/rollup -D
```

Using yarn:

```console
yarn add @danji/rollup -D
```

## Usage

Create rollup.config.js in your project as simple as follow:

```javascript
import { generateConfig } from '@danji/rollup';

export default generateConfig({
  input: `./src/index.ts`,
  packageDir: __dirname,
});
```
