import { isDarkScheme, ColorScheme } from '../providers/colorSchemeProvider';

export const createColorByColorScheme =
  (colorScheme: ColorScheme) => (light: string, black: string) =>
    isDarkScheme(colorScheme) ? black : light;
