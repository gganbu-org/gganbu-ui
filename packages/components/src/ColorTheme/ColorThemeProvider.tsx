import { useCallback, useMemo, useState } from 'react';
import { useMediaQuery } from '@danji/components/src/hooks';
import { ColorThemeContext } from './colorThemeContext';
import {
  COLOR_THEME,
  DEFAULT_COLOR_MODE,
  PREFER_DARK_QUERY,
} from './colorTheme.constants';
import {
  getSystemTheme,
  getColorTheme,
  isDarkTheme,
  isSystemTheme,
  storageManager,
} from './colorTheme.utils';
import { ColorTheme, ColorThemeWithSystem } from './colorTheme.types';

interface ColorThemeProviderProps {
  children?: React.ReactNode;
}

function ColorThemeProvider(props: ColorThemeProviderProps) {
  const { children } = props;

  const [colorTheme, setColorTheme] = useState<ColorThemeWithSystem>(() =>
    getColorTheme(storageManager, DEFAULT_COLOR_MODE),
  );

  const handleSetColorTheme = useCallback(
    (nextColorTheme: ColorTheme) => {
      setColorTheme(nextColorTheme);
      storageManager.set(nextColorTheme);
    },
    [getSystemTheme],
  );

  const theme = isSystemTheme(colorTheme)
    ? getSystemTheme()
    : (colorTheme as ColorTheme);

  useMediaQuery(PREFER_DARK_QUERY, (matches) => {
    handleSetColorTheme(matches ? COLOR_THEME.DARK : COLOR_THEME.LIGHT);
  });

  // 최종적으로 제공하는 인터페이스
  const context = useMemo(
    () => ({
      colorTheme: theme,
      toggleColorTheme: () => {
        const nextUserTheme = isDarkTheme(theme)
          ? COLOR_THEME.LIGHT
          : COLOR_THEME.DARK;

        handleSetColorTheme(nextUserTheme);
      },
      setColorTheme: handleSetColorTheme,
    }),
    [theme],
  );

  return (
    <ColorThemeContext.Provider value={context}>
      {children}
    </ColorThemeContext.Provider>
  );
}

export default ColorThemeProvider;
