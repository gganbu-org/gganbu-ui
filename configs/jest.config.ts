const path = require('path');

const config = {
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
  /* packages alias */
  moduleNameMapper: {
    '@danji/components(.*)$': path.join(
      __dirname,
      '../packages/components/src$1',
    ),
    '@danji/css(.*)$': path.join(__dirname, '../packages/css/src$1'),
    '@danji/rollup(.*)$': path.join(__dirname, '../packages/rollup/src$1'),
    '@danji/styled(.*)$': path.join(__dirname, '../packages/styled/src$1'),
  },
};

export default config;
