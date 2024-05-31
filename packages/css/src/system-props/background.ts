import * as CSS from 'csstype';
import { scales as s } from './scales';

const background = {
  backgroundColor: s.colors('backgroundColor'),
};

export interface BackgroundCSSProperties {
  /**
   * The background-color CSS property sets the background color of an element.
   */
  backgroundColor?: CSS.Property.BackgroundColor | string;
}

export default background;
