import { isDarkScheme } from '../ColorScheme/colorScheme.utils';
import { ColorScheme } from '../ColorScheme/colorScheme.types';

export const createColorByColorScheme =
  (colorScheme: ColorScheme) => (light: string, black: string) =>
    isDarkScheme(colorScheme) ? black : light;
