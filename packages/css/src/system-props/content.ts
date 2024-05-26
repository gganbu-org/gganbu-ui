import { config as c } from './config';

const content = {
  display: c.toBase('display'),
  width: c.toBase('width'),
  height: c.toBase('height'),
  minWidth: c.toBase('minWidth'),
  minHeight: c.toBase('minHeight'),
  maxWidth: c.toBase('maxWidth'),
  maxHeight: c.toBase('maxHeight'),
};

export default content;
