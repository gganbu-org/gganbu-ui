import sharedConfigs from '../../configs/jest.config';

export default {
  ...sharedConfigs,
  preset: 'ts-jest',
  rootDir: '../../',
  collectCoverage: true,
  coverageProvider: 'v8',
  coverageDirectory: '<rootDir>/packages/styled/coverage/',
  transform: {
    '^.+\\.(ts|tsx)?$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/packages/styled/tsconfig.json',
      },
    ],
  },
};
