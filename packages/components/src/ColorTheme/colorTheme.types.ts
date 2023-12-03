import { COLOR_THEME } from './colorTheme.constants';

export type ColorTheme = (typeof COLOR_THEME)[keyof typeof COLOR_THEME];
export type ColorThemeWithSystem = ColorTheme | 'system';

export interface ColorThemeContextType {
  colorTheme: ColorTheme;
  toggleColorTheme: () => void;
  setColorTheme: (colorTheme: ColorTheme) => void;
}
