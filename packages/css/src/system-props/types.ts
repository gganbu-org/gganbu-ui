import * as CSS from 'csstype';

export interface BackgroundCSSProperties {
  /**
   * The background-color CSS property sets the background color of an element.
   */
  backgroundColor?: CSS.Property.BackgroundColor | string;
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
  /**
   * The opacity CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.
   */
  opacity?: CSS.Property.Opacity | string;
}

export interface ContentCSSProperties {
  /**
   * The display CSS property sets whether an element is treated as a block or inline box and the layout used for its children, such as flow layout, grid or flex.
   */
  display?: CSS.Property.Display | string;
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

export interface FlexCSSProperties {
  /**
   * The flex CSS shorthand property sets how a flex item will grow or shrink to fit the space available in its flex container.
   */
  flex?: CSS.Property.Flex | string;
  /**
   * The flex-basis CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with box-sizing.
   */
  flexBasis?: CSS.Property.FlexBasis | string;
  /**
   * The flex-direction CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).
   */
  flexDirection?: CSS.Property.FlexDirection | string;
  /**
   * The flex-flow CSS shorthand property specifies the direction of a flex container, as well as its wrapping behavior.
   */
  flexFlow?: CSS.Property.FlexFlow | string;
  /**
   * The flex-grow CSS property sets the flex grow factor, which specifies how much of the flex container's remaining space should be assigned to the flex item's main size.
   */
  flexGrow?: CSS.Property.FlexGrow | string;
  /**
   * The flex-shrink CSS property sets the flex shrink factor of a flex item.
   */
  flexShrink?: CSS.Property.FlexShrink | string;
  /**
   * The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines.
   */
  flexWrap?: CSS.Property.FlexWrap | string;
  /**
   * The CSS align-items property sets the align-self value on all direct children as a group.
   */
  alignItems?: CSS.Property.AlignItems | string;
  /**
   * The CSS align-content property sets the distribution of space between and around content items along a flexbox's cross axis, or a grid or block-level element's block axis.
   */
  alignContent?: CSS.Property.AlignContent | string;
  /**
   * The align-self CSS property overrides a grid or flex item's align-items value.
   */
  alignSelf?: CSS.Property.AlignSelf | string;
  /**
   * The CSS justify-items property defines the default justify-self for all items of the box, giving them all a default way of justifying each box along the appropriate axis.
   */
  justifyItems?: CSS.Property.JustifyItems | string;
  /**
   * The CSS justify-content property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.
   */
  justifyContent?: CSS.Property.JustifyContent | string;
  /**
   * The CSS justify-self property sets the way a box is justified inside its alignment container along the appropriate axis.
   */
  justifySelf?: CSS.Property.JustifySelf | string;
}

export interface PositionCSSProperties {
  /**
   * The position CSS property sets how an element is positioned in a document.
   */
  position?: CSS.Property.Position | string;
  /**
   * The top CSS property sets the vertical position of a positioned element.
   */
  top?: CSS.Property.Top | string;
  /**
   * The right CSS property participates in specifying the horizontal position of a positioned element.
   */
  right?: CSS.Property.Right | string;
  /**
   * The bottom CSS property participates in setting the vertical position of a positioned element.
   */
  bottom?: CSS.Property.Bottom | string;
  /**
   * The left CSS property participates in specifying the horizontal position of a positioned element.
   */
  left?: CSS.Property.Left | string;
  /**
   * The z-index CSS property sets the z-order of a positioned element and its descendants or flex and grid items.
   */
  zIndex?: CSS.Property.ZIndex | string;
}

export interface SpaceCSSProperties {
  /**
   * The margin CSS shorthand property sets the margin area on all four sides of an element.
   */
  margin?: CSS.Property.Margin | string;
  /**
   * The margin-top CSS property sets the margin area on the top of an element.
   */
  marginTop?: CSS.Property.MarginTop | string;
  /**
   * The margin-right CSS property sets the margin area on the right side of an element.
   */
  marginRight?: CSS.Property.MarginRight | string;
  /**
   * The margin-bottom CSS property sets the margin area on the bottom of an element.
   */
  marginBottom?: CSS.Property.MarginBottom | string;
  /**
   * The margin-left CSS property sets the margin area on the left side of an element.
   */
  marginLeft?: CSS.Property.MarginLeft | string;
  /**
   * The padding CSS shorthand property sets the padding area on all four sides of an element at once.
   */
  padding?: CSS.Property.Padding | string;
  /**
   * The padding-top CSS property sets the height of the padding area on the top of an element.
   */
  paddingTop?: CSS.Property.PaddingTop | string;
  /**
   * The padding-right CSS property sets the width of the padding area on the right of an element.
   */
  paddingRight?: CSS.Property.PaddingRight | string;
  /**
   * The padding-bottom CSS property sets the height of the padding area on the bottom of an element.
   */
  paddingBottom?: CSS.Property.PaddingBottom | string;
  /**
   * The padding-left CSS property sets the width of the padding area to the left of an element.
   */
  paddingLeft?: CSS.Property.PaddingLeft | string;
}

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
  /**
   * The margin CSS shorthand property sets the margin area on all four sides of an element.
   */
  m?: OverwriteCSSProperties['margin'];
  /**
   * The margin-top CSS property sets the margin area on the top of an element.
   */
  mt?: OverwriteCSSProperties['marginTop'];
  /**
   * The margin-right CSS property sets the margin area on the right side of an element.
   */
  mr?: OverwriteCSSProperties['marginRight'];
  /**
   * The margin-bottom CSS property sets the margin area on the bottom of an element.
   */
  mb?: OverwriteCSSProperties['marginBottom'];
  /**
   * The margin-left CSS property sets the margin area on the left side of an element.
   */
  ml?: OverwriteCSSProperties['marginLeft'];
  /**
   * The padding CSS shorthand property sets the padding area on all four sides of an element at once.
   */
  p?: OverwriteCSSProperties['padding'];
  /**
   * The padding-top CSS property sets the height of the padding area on the top of an element.
   */
  pt?: OverwriteCSSProperties['paddingTop'];
  /**
   * The padding-right CSS property sets the width of the padding area on the right of an element.
   */
  pr?: OverwriteCSSProperties['paddingRight'];
  /**
   * The padding-bottom CSS property sets the height of the padding area on the bottom of an element.
   */
  pb?: OverwriteCSSProperties['paddingBottom'];
  /**
   * The padding-left CSS property sets the width of the padding area to the left of an element.
   */
  pl?: OverwriteCSSProperties['paddingLeft'];
}

export type ThemeWithCssVars<T> = T & {
  cssVars: Record<string, any>;
};

export type djTheme = ThemeWithCssVars<Record<string, any>>;

export type Transform = (value: string) => (theme: djTheme) => any;

export interface OverwriteCSSProperties
  extends BackgroundCSSProperties,
    ColorCSSProperties,
    ContentCSSProperties,
    FlexCSSProperties,
    PositionCSSProperties,
    SpaceCSSProperties,
    TypographyCSSProperties {}

export interface DjCSSProperties
  extends Omit<CSS.Properties, keyof OverwriteCSSProperties>,
    OverwriteCSSProperties,
    AliasesCSSProperties {}

export type SystemProps = OverwriteCSSProperties & AliasesCSSProperties;
