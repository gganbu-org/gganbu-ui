import sharedConfigs from '../../configs/jest.config';

export default {
  ...sharedConfigs,
  collectCoverage: true,
  coverageProvider: 'v8',
  coverageDirectory: './coverage/',
  transform: {
    '^.+\\.(ts|tsx)?$': [
      'ts-jest',
      {
        tsconfig: './tsconfig.json',
      },
    ],
  },
};
