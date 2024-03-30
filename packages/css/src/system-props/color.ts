import * as CSS from 'csstype';
import { scales as s } from './scales';

const color = {
  color: s.colors('color'),
  textColor: s.colors('textColor'),
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
}

export default color;
