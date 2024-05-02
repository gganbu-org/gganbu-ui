export default {
  '**/*.ts?(x)': (filenames) =>
    `jest --detectOpenHandles --findRelatedTests ${filenames.join(' ')}`,
};
