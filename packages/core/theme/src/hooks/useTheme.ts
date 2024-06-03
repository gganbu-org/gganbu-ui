import { useTheme } from '@gganbu-org/styled';
import { callIfFunc, getValueByPath } from '@gganbu-org/utilities';

import { useColorScheme } from '../providers/colorSchemeProvider';
import { createColorByColorScheme, createColorAlpha } from '../utils';

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