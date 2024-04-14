import * as CSS from 'csstype';
import { scales as s } from './scales';

const color = {
  color: s.colors('color'),
  textColor: s.colors('textColor'),
  borderColor: s.colors('borderColor'),
};

export interface ColorCSSProperties {
  /**
   * The color CSS property sets the foreground color value of an element's text and text decorations, and sets the currentcolor value.
   */
  color?: CSS.Property.Color | string;
  /**
   * The textColor CSS property sets the foreground color value of an element's text and text decorations, and sets the currentcolor value.
   */
  textColor?: CSS.Property.Color | string;
  /**
   * The border-color shorthand CSS property sets the color of an element's border.
   */
  borderColor?: CSS.Property.BorderColor | string;
}

export default color;
