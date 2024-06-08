import background from './background';
import content from './content';
import space from './space';

const aliases = {
  bg: background.backgroundColor,
  w: content.width,
  h: content.height,
  minW: content.minWidth,
  maxW: content.maxWidth,
  minH: content.minHeight,
  maxH: content.maxHeight,
  m: space.margin,
  mt: space.marginTop,
  mr: space.marginRight,
  mb: space.marginBottom,
  ml: space.marginLeft,
  p: space.padding,
  pt: space.paddingTop,
  pr: space.paddingRight,
  pb: space.paddingBottom,
  pl: space.paddingLeft,
};

export default aliases;
