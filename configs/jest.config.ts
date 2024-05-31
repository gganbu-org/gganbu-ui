const path = require('path');
const { lstatSync, readdirSync } = require('fs');

const getPackageList = (basePath: string) =>
  readdirSync(basePath).filter((name: string) =>
    lstatSync(path.join(basePath, name)).isDirectory(),
  );

const basePath = path.resolve(__dirname, '../packages');
const packages = getPackageList(basePath);

const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  /* packages alias */
  moduleNameMapper: {
    ...packages.reduce(
      (acc: Record<string, string>, pkg: string) => ({
        ...acc,
        [`@danji/${pkg}(.*)$`]: `<rootDir>/../${pkg}/src$1`,
      }),
      {},
    ),
  },
};

export default config;
