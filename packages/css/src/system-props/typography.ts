import * as CSS from 'csstype';
import { scales as s } from './scales';

const typography = {
  fontSize: s.base('fontSize', 'fontSize'),
  lineHeight: s.base('lineHeight', 'lineHeight'),
  fontWeight: s.base('fontWeight', 'fontWeight'),
};

export interface TypographyCSSProperties {
  /**
   * The font-size CSS property sets the size of the font.
   */
  fontSize?: CSS.Property.FontSize | string;
  /**
   * The line-height CSS property sets the height of a line box.
   */
  lineHeight?: CSS.Property.LineHeight | string;
  /**
   * The font-weight CSS property sets the weight (or boldness) of the font.
   */
  fontWeight?: CSS.Property.FontWeight | string;
}

export default typography;
