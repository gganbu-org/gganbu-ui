import sharedConfigs from '../../configs/jest.config';

export default {
  ...sharedConfigs,
  collectCoverage: true,
  displayName: {
    name: 'CSS',
    color: 'blue',
  },
};
