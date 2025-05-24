---
to: <%= packageDomain %>/<%= packageName %>/package.json
---
{
  "name": "@gganbu-org/<%= packageName %>",
  "version": "0.0.0",
  "description": "> TODO: description",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/gganbu-org/gganbu-ui.git",
    "directory": "<%= packageDomain %>/<%= packageName %>"
  },
  "bugs": {
    "url": "https://github.com/gganbu-org/gganbu-ui/issues"
  },
  "keywords": [],
  "author": "Danji-ya <erangerang15@gmail.com>",
  "contributors": [
    "minzzang144 <shigatsu970704@gmail.com>"
  ],
  "homepage": "",
  "license": "ISC",
  "main": "./src/index.ts",
  "sideEffects": false,
  "files": [
    "dist/**"
  ],
  "publishConfig": {
    "access": "public",
    "main": "./dist/index.js",
    "module": "./dist/index.mjs",
    "types": "./dist/index.d.ts",
    "exports": {
      ".": {
        "types": "./dist/index.d.ts",
        "import": "./dist/index.mjs",
        "require": "./dist/index.js"
      },
      "./package.json": "./package.json"
    }
  },
  "scripts": {
    "test": "jest",
    "lint": "TIMING=1 eslint --ext .ts,.tsx src/",
    "build": "tsup",
    "clean": "rm -rf .turbo && rm -rf node_modules && rm -rf dist"
  },
  "peerDependencies": {},
  "devDependencies": {},
  "dependencies": {}
}
