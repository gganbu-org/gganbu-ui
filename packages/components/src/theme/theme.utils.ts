import { getValueByPath, getColorAlpha, isHexColor } from '@danji/utilities';
import { isDarkScheme } from '../ColorScheme/colorScheme.utils';
import { ColorScheme } from '../ColorScheme/colorScheme.types';

export const createColorByColorScheme =
  (colorScheme: ColorScheme) => (light: string, black: string) =>
    isDarkScheme(colorScheme) ? black : light;

export const createColorAlpha =
  <T extends Record<string, any>>(themeCtx: T) =>
  (color: string, opacity: number) => {
    const rawValue = getValueByPath(themeCtx?.colors, color);
    if (!rawValue) return color;
    if (!isHexColor(rawValue)) return color;

    return getColorAlpha(rawValue, opacity);
  };
