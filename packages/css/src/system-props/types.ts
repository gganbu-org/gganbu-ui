import * as CSS from 'csstype';
import { ThemeWithCssVars } from '@danji/styled/providers.types';
import { BackgroundCSSProperties } from './background';
import { ColorCSSProperties } from './color';
import { SizeCSSProperties } from './size';
import { TypographyCSSProperties } from './typography';
import { AliasesCSSProperties } from './aliases';

export type Transform = (
  value: string,
) => (theme: ThemeWithCssVars<Record<string, any>>) => any;

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
