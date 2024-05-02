export default {
  '**/*.ts?(x)': (filenames) => `eslint ${filenames.join(' ')}`,
};
