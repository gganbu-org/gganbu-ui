import { ThemeContext as EmotionThemeContext } from '@emotion/react';
import { useContext } from 'react';
import { useColorScheme } from '@danji/components';
import { createColorByColorScheme } from '@danji/components/theme/theme.utils';
import { ThemeWithCssVars } from '../providers.types';
import { getValueByPath } from './base';
import { callIfFunc } from '../utils';

/**
 * @todo 각 컴포넌트 사이즈, 타입에 정의 매칭되도록 수정
 */
interface ThemeProps {
  theme?: string;
  size?: string;
  variant?: string;
}

export type ThemePropsWithSwitcher = ThemeProps & {
  switcher: (light: string, black: string) => string;
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
  const themeStyles = {};
  const themeProps = {
    ...props,
    switcher,
  } as ThemePropsWithSwitcher;

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
