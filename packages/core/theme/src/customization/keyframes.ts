export const animations = {
  spin: 'spin 1s linear infinite',
  ripple: 'ripple 1s linear',
};

export const keyframes = {
  spin: {
    to: {
      transform: 'rotate(360deg)',
    },
  },
  ripple: {
    to: {
      transform: 'scale(2)',
      opacity: '0',
    },
  },
};
