import * as CSS from 'csstype';
import { BackgroundCSSProperties } from './background';
import { ColorCSSProperties } from './color';
import { SizeCSSProperties } from './size';
import { TypographyCSSProperties } from './typography';
import { AliasesCSSProperties } from './aliases';

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
