import { COLOR_THEME } from './colorTheme.constants';

export type ColorTheme = (typeof COLOR_THEME)[keyof typeof COLOR_THEME];
export type UserTheme = ColorTheme | 'default';
export type SystemTheme = ColorTheme | 'no-preference';

export interface ColorThemeState {
  userTheme: UserTheme;
  systemTheme: SystemTheme;
}

export interface ColorThemeContextType {
  colorTheme: ColorTheme;
  toggleColorTheme: () => void;
}
