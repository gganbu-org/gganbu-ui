import sharedConfigs from '../../configs/jest.config';

export default {
  ...sharedConfigs,
  rootDir: '../../',
  collectCoverage: true,
  coverageProvider: 'v8',
  coverageDirectory: '<rootDir>/packages/css/coverage/',
  transform: {
    '^.+\\.(ts|tsx)?$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/packages/css/tsconfig.json',
      },
    ],
  },
};
