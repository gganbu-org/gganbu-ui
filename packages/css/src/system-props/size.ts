import * as CSS from 'csstype';
import { scales as s } from './scales';

const size = {
  width: s.sizes('width'),
  height: s.sizes('height'),
  minWidth: s.sizes('minWidth'),
  minHeight: s.sizes('minHeight'),
  maxWidth: s.sizes('maxWidth'),
  maxHeight: s.sizes('maxHeight'),
};

export interface SizeCSSProperties {
  /**
   * The width CSS property sets an element's width.
   */
  width?: CSS.Property.Width | string;
  /**
   * The height CSS property specifies the height of an element.
   */
  height?: CSS.Property.Height | string;
  /**
   * The min-width CSS property sets the minimum width of an element.
   */
  minWidth?: CSS.Property.MinWidth | string;
  /**
   * The min-height CSS property sets the minimum height of an element.
   */
  minHeight?: CSS.Property.MinHeight | string;
  /**
   * The max-width CSS property sets the maximum width of an element.
   */
  maxWidth?: CSS.Property.MaxWidth | string;
  /**
   * The max-height CSS property sets the maximum height of an element.
   */
  maxHeight?: CSS.Property.MaxHeight | string;
}

export default size;
