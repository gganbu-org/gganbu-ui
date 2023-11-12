import { ThemeContext as EmotionThemeContext } from '@emotion/react';
import { useContext } from 'react';
import { ThemeWithCssVars } from '../providers.types';
import { getValueByPath } from './base';

const useTheme = <T extends Record<string, any>>() => {
  const ctx = useContext(EmotionThemeContext);

  if (ctx === null || ctx === undefined) throw new Error('useTheme error');

  return ctx as ThemeWithCssVars<T>;
};

export const useThemeStyles = (themeKey: string, props: any) => {
  const theme = useTheme();
  const { variant, size, type } = props;
  const styles = {};

  const themeStyleConfig = getValueByPath(theme, `components.${themeKey}`);

  if (themeStyleConfig) {
    Object.assign(styles, {
      ...themeStyleConfig.sizes[size],
      ...themeStyleConfig.variants[variant](type),
    });
  }

  return styles;
};
