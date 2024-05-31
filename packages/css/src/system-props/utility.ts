import { config as c } from './config';

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
};

export default utility;
