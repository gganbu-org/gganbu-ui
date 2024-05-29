import background from './background';
import size from './size';
import { OverwriteCSSProperties } from './types';

const aliases = {
  bg: background.backgroundColor,
  w: size.width,
  h: size.height,
  minW: size.minWidth,
  maxW: size.maxWidth,
  minH: size.minHeight,
  maxH: size.maxHeight,
};

export interface AliasesCSSProperties {
  /**
   * The background-color CSS property sets the background color of an element.
   */
  bg?: OverwriteCSSProperties['backgroundColor'];
  /**
   * The width CSS property sets an element's width.
   */
  w?: OverwriteCSSProperties['width'];
  /**
   * The height CSS property specifies the height of an element.
   */
  h?: OverwriteCSSProperties['height'];
  /**
   * The min-width CSS property sets the minimum width of an element.
   */
  minW?: OverwriteCSSProperties['minWidth'];
  /**
   * The min-height CSS property sets the minimum height of an element.
   */
  minH?: OverwriteCSSProperties['minHeight'];
  /**
   * The max-width CSS property sets the maximum width of an element.
   */
  maxW?: OverwriteCSSProperties['maxWidth'];
  /**
   * The max-height CSS property sets the maximum height of an element.
   */
  maxH?: OverwriteCSSProperties['maxHeight'];
}

export default aliases;
