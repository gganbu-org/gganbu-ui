import { useCallback, useMemo, useState, useEffect } from 'react';
import { useMediaQuery } from '@danji/components/hooks';
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
  setDataset,
} from './colorTheme.utils';
import { ColorTheme, ColorThemeWithSystem } from './colorTheme.types';

interface ColorThemeProviderProps {
  value?: ColorTheme;
  children?: React.ReactNode;
}

function ColorThemeProvider(props: ColorThemeProviderProps) {
  const { value, children } = props;

  const [colorTheme, setColorTheme] = useState<ColorThemeWithSystem>(() =>
    getColorTheme(storageManager, DEFAULT_COLOR_MODE),
  );

  const [systemColorTheme, setSystemColorTheme] = useState<ColorTheme>(() =>
    getSystemTheme(),
  );

  const handleSetColorTheme = useCallback(
    (nextColorTheme: ColorTheme) => {
      setColorTheme(nextColorTheme);
      storageManager.set(nextColorTheme);
      setDataset(nextColorTheme);
    },
    [getSystemTheme],
  );

  const theme = isSystemTheme(colorTheme)
    ? systemColorTheme
    : (colorTheme as ColorTheme);

  // data attributes initalize
  useEffect(() => {
    const initColorTheme = colorTheme;

    if (isSystemTheme(initColorTheme)) {
      const systemTheme = getSystemTheme();
      setDataset(systemTheme);
    } else {
      setDataset(initColorTheme);
    }
  }, []);

  useMediaQuery(
    PREFER_DARK_QUERY,
    {
      triggerFirstLoad: false,
    },
    (matches) => {
      const nextColorTheme = matches ? COLOR_THEME.DARK : COLOR_THEME.LIGHT;
      setSystemColorTheme(nextColorTheme);
      setDataset(nextColorTheme);
    },
  );

  // 최종적으로 제공하는 인터페이스
  const context = useMemo(
    () =>
      value
        ? {
            colorTheme: value,
            toggleColorTheme: () => {},
            setColorTheme: () => {},
          }
        : {
            colorTheme: theme,
            toggleColorTheme: () => {
              const nextUserTheme = isDarkTheme(theme)
                ? COLOR_THEME.LIGHT
                : COLOR_THEME.DARK;

              handleSetColorTheme(nextUserTheme);
            },
            setColorTheme: handleSetColorTheme,
          },
    [theme, value],
  );

  return (
    <ColorThemeContext.Provider value={context}>
      {children}
    </ColorThemeContext.Provider>
  );
}

export default ColorThemeProvider;
