import { keyframes as emotionKeyFrames } from '@emotion/react';
import { config as c } from './config';

const spin = emotionKeyFrames({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

const utility = {
  srOnly: c.toBase('srOnly', function transform() {
    return {
      position: 'absolute',
      w: '1px',
      h: '1px',
      p: 0,
      m: '-1px',
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      whiteSpace: 'nowrap',
      borderWidth: 0,
    };
  }),
  animateSpin: c.toBase('animateSpin', function transform() {
    return {
      animation: `${spin} 0.75s linear infinite`,
    };
  }),
};

export default utility;
