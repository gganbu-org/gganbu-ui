import { useContext } from 'react';
import _merge from 'lodash.merge';
import { ThemeContext as EmotionThemeContext } from '@emotion/react';
import {
  callIfFunc,
  getColorAlpha,
  getValueByPath,
  isHexColor,
} from '@gganbu-org/utils';
import type { ThemeProps, ThemePropsWithUtils } from '@gganbu-org/theme';
import { useColorScheme, ColorScheme, isDarkScheme } from './color-scheme';
import type { GganbuTheme } from './system-props/types';

const useTheme = () => {
  const ctx = useContext(EmotionThemeContext);

  if (ctx === null || ctx === undefined) throw new Error('useTheme error');

  return ctx as GganbuTheme;
};

const createColorAlpha =
  <T extends Record<string, any>>(themeCtx: T) =>
  (color: string, opacity: number) => {
    const rawValue = getValueByPath(themeCtx?.colors, color);
    if (!rawValue) return color;
    if (!isHexColor(rawValue)) return color;

    return getColorAlpha(rawValue, opacity);
  };

const createColorByColorScheme =
  (colorScheme: ColorScheme) => (light: string, black: string) =>
    isDarkScheme(colorScheme) ? black : light;

export const useThemeStyles = (themeKey: string, props: ThemeProps) => {
  const themeCtx = useTheme();
  const { colorScheme } = useColorScheme();
  const switcher = createColorByColorScheme(colorScheme);
  const colorAlpha = createColorAlpha(themeCtx);

  const themeStyles = {};
  const themeProps = {
    ...props,
    switcher,
    colorAlpha,
  } as ThemePropsWithUtils;

  const themeStyleConfig = getValueByPath(themeCtx, `components.${themeKey}`);

  if (themeStyleConfig) {
    const baseThemeMap = getValueByPath(themeStyleConfig, 'baseStyles');
    const sizeThemeMap = getValueByPath(themeStyleConfig, 'sizes');
    const variantThemeMap = getValueByPath(themeStyleConfig, 'variants');

    if (baseThemeMap) {
      _merge(themeStyles, {
        ...callIfFunc(baseThemeMap, themeProps),
      });
    }

    if (sizeThemeMap) {
      _merge(themeStyles, {
        ...callIfFunc(
          getValueByPath(sizeThemeMap, themeProps.size),
          themeProps,
        ),
      });
    }

    if (variantThemeMap) {
      _merge(themeStyles, {
        ...callIfFunc(
          getValueByPath(variantThemeMap, themeProps.variant || 'solid'),
          themeProps,
        ),
      });
    }
  }

  return themeStyles;
};
