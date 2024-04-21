import { ThemeContext as EmotionThemeContext } from '@emotion/react';
import { useContext } from 'react';
import {
  useColorScheme,
  createColorByColorScheme,
  createColorAlpha,
} from '@danji/components';
import { getValueByPath } from './base';
import { callIfFunc } from '@danji/utilities';
import { ThemeWithCssVars } from '../providers.types';

/**
 * @todo 각 컴포넌트 사이즈, 타입에 정의 매칭되도록 수정
 */
interface ThemeProps {
  theme?: string;
  size?: string;
  variant?: string;
}

export type ThemePropsWithUtils = ThemeProps & {
  switcher: (light: string, black: string) => string;
  colorAlpha: (color: string, opacity: number) => string;
};

const useTheme = <T extends Record<string, any>>() => {
  const ctx = useContext(EmotionThemeContext);

  if (ctx === null || ctx === undefined) throw new Error('useTheme error');

  return ctx as ThemeWithCssVars<T>;
};

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
      Object.assign(themeStyles, {
        ...callIfFunc(baseThemeMap, themeProps),
      });
    }

    if (sizeThemeMap) {
      Object.assign(themeStyles, {
        ...callIfFunc(
          getValueByPath(sizeThemeMap, themeProps.size),
          themeProps,
        ),
      });
    }

    if (variantThemeMap) {
      Object.assign(themeStyles, {
        ...callIfFunc(
          getValueByPath(variantThemeMap, themeProps.variant || 'solid'),
          themeProps,
        ),
      });
    }
  }

  return themeStyles;
};
