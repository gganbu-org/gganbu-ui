import { COLOR_SCHEME } from './colorScheme.constants';

export type ColorScheme = (typeof COLOR_SCHEME)[keyof typeof COLOR_SCHEME];
export type ColorSchemeWithSystem = ColorScheme | 'system';

export interface ColorSchemeContextType {
  colorScheme: ColorScheme;
  toggleColorScheme: () => void;
  setColorScheme: (colorScheme: ColorScheme) => void;
}
