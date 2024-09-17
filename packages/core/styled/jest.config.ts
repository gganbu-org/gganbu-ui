import sharedConfigs from '../../../configs/jest.config';

export default {
  ...sharedConfigs,
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/'],
  collectCoverage: true,
  coverageProvider: 'v8',
  coverageDirectory: './coverage/',
  transform: {
    '^.+\\.(ts|tsx|js|jsx)?$': [
      'ts-jest',
      {
        tsconfig: './tsconfig.json',
      },
    ],
  },
};
