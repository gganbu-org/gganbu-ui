import { ThemeContext as EmotionThemeContext } from '@emotion/react';
import { useContext } from 'react';
import { useColorTheme } from '@danji/components';
import { createColorByColorTheme } from '@danji/components/theme/theme.utils';
import { ThemeWithCssVars } from '../providers.types';
import { getValueByPath } from './base';
import { callIfFunc } from '../utils';

/**
 * @todo 각 컴포넌트 사이즈, 타입에 정의 매칭되도록 수정
 */
interface ThemeProps {
  variant: string;
  size: string;
  type: string;
}

export type ThemePropsWithColorTheme = ThemeProps & {
  switcher: (light: string, black: string) => string;
};

const useTheme = <T extends Record<string, any>>() => {
  const ctx = useContext(EmotionThemeContext);

  if (ctx === null || ctx === undefined) throw new Error('useTheme error');

  return ctx as ThemeWithCssVars<T>;
};

export const useThemeStyles = (themeKey: string, props: ThemeProps) => {
  const theme = useTheme();
  const { colorTheme } = useColorTheme();
  const switcher = createColorByColorTheme(colorTheme);
  const styles = {};
  const themeProps = {
    switcher,
    ...props,
  } as ThemePropsWithColorTheme;

  const themeStyleConfig = getValueByPath(theme, `components.${themeKey}`);

  if (themeStyleConfig) {
    Object.assign(styles, {
      ...callIfFunc(themeStyleConfig.sizes[themeProps.size], themeProps),
      ...callIfFunc(themeStyleConfig.variants[themeProps.variant], themeProps),
    });
  }

  return styles;
};
