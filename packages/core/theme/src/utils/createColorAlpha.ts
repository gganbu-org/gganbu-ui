import {
  getValueByPath,
  getColorAlpha,
  isHexColor,
} from '@gganbu-org/utilities';

export const createColorAlpha =
  <T extends Record<string, any>>(themeCtx: T) =>
  (color: string, opacity: number) => {
    const rawValue = getValueByPath(themeCtx?.colors, color);
    if (!rawValue) return color;
    if (!isHexColor(rawValue)) return color;

    return getColorAlpha(rawValue, opacity);
  };
