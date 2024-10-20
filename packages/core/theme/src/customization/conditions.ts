export const PSEUDO_CLASSES = {
  BASE: {
    NAME: 'base',
    VALUE: 'base',
  },
  DARK: {
    NAME: 'dark',
    VALUE: '_dark',
  },
};

export const conditions = {
  extend: {
    [PSEUDO_CLASSES.DARK.NAME]: ':root[data-theme="dark"] &',
  },
};
