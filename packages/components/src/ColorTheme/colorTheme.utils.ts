import { getMatches } from '../hooks/useMediaQuery';
import {
  COLOR_THEME,
  COLOR_THEME_SYSTEM,
  PREFER_DARK_QUERY,
} from './colorTheme.constants';
import { ColorTheme, ColorThemeWithSystem } from './colorTheme.types';

export const getSystemTheme = () =>
  getMatches(PREFER_DARK_QUERY) ? COLOR_THEME.DARK : COLOR_THEME.LIGHT;

export const isSystemTheme = (theme: ColorThemeWithSystem) =>
  theme === COLOR_THEME_SYSTEM;

export const isDarkTheme = (theme: ColorTheme) => theme === COLOR_THEME.DARK;
