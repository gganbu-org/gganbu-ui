import { ThemeContext as EmotionThemeContext } from '@emotion/react';
import { useContext } from 'react';
import { useColorTheme } from '@danji/components';
import { ColorTheme } from '@danji/components/ColorTheme/colorTheme.types';
import { ThemeWithCssVars } from '../providers.types';
import { getValueByPath } from './base';

/**
 * @todo 각 컴포넌트 사이즈, 타입에 정의 매칭되도록 수정
 */
interface ThemeProps {
  variant: string;
  size: string;
  type: string;
}

export type ThemePropsWithColorTheme = ThemeProps & {
  colorTheme: ColorTheme;
};

const useTheme = <T extends Record<string, any>>() => {
  const ctx = useContext(EmotionThemeContext);

  if (ctx === null || ctx === undefined) throw new Error('useTheme error');

  return ctx as ThemeWithCssVars<T>;
};

export const useThemeStyles = (themeKey: string, props: ThemeProps) => {
  const theme = useTheme();
  const { colorTheme } = useColorTheme();
  const styles = {};
  const themeProps = {
    colorTheme,
    ...props,
  } as ThemePropsWithColorTheme;

  const themeStyleConfig = getValueByPath(theme, `components.${themeKey}`);

  if (themeStyleConfig) {
    Object.assign(styles, {
      ...themeStyleConfig.sizes[themeProps.size],
      ...themeStyleConfig.variants[themeProps.variant](themeProps),
    });
  }

  return styles;
};
