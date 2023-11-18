export type ValueOf<T> = T[keyof T];

export const COLOR_THEME = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

export type ColorTheme = ValueOf<typeof COLOR_THEME>;
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
