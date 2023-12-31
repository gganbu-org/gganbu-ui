import { isDarkTheme } from '../ColorTheme/colorTheme.utils';
import { ColorTheme } from '../ColorTheme/colorTheme.types';

export const createColorByColorTheme =
  (colorTheme: ColorTheme) => (light: string, black: string) =>
    isDarkTheme(colorTheme) ? black : light;
