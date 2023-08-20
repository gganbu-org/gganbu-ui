import { scales as s } from './scales';

export const size = {
  width: s.sizes('width'),
  height: s.sizes('height'),
  minWidth: s.sizes('minWidth'),
  minHeight: s.sizes('minHeight'),
  maxWidth: s.sizes('maxWidth'),
  maxHeight: s.sizes('maxHeight'),
};

Object.assign(size, {
  w: size.width,
  h: size.height,
  minW: size.minWidth,
  maxW: size.maxWidth,
  minH: size.minHeight,
  maxH: size.maxHeight,
});
