import background from './background';
import size from './size';

const aliases = {
  bg: background.backgroundColor,
  w: size.width,
  h: size.height,
  minW: size.minWidth,
  maxW: size.maxWidth,
  minH: size.minHeight,
  maxH: size.maxHeight,
};

export default aliases;
