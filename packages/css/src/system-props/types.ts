import * as CSS from 'csstype';

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

export interface BackgroundCSSProperties {
  /**
   * The background-color CSS property sets the background color of an element.
   */
  backgroundColor?: CSS.Property.BackgroundColor | string;
}

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

export type ThemeWithCssVars<T> = T & {
  cssVars: Record<string, any>;
};

export type djTheme = ThemeWithCssVars<Record<string, any>>;

export type Transform = (value: string) => (theme: djTheme) => any;

export interface OverwriteCSSProperties
  extends BackgroundCSSProperties,
    ColorCSSProperties,
    SizeCSSProperties,
    TypographyCSSProperties {}

export interface DjCSSProperties
  extends Omit<CSS.Properties, keyof OverwriteCSSProperties>,
    OverwriteCSSProperties,
    AliasesCSSProperties {}

export type SystemProps = OverwriteCSSProperties & AliasesCSSProperties;
