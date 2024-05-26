import { config as c } from './config';

const color = {
  color: c.colors('color'),
  textColor: c.colors('textColor'),
  borderColor: c.colors('borderColor'),
  opacity: c.toBase('opacity'),
};

export default color;
