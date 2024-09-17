# @gganbu/rollup

🍣 We use rollup to bundle the libraries

## Install

Just add it to your devDependencies

Using npm:

```console
npm install @gganbu/rollup -D
```

Using pnpm:

```console
pnpm add @gganbu/rollup -D
```

## Usage

Create rollup.config.js in your project as simple as follow:

```javascript
import { generateConfig } from '@gganbu/rollup';

export default generateConfig({
  packageDir: __dirname,
});
```
