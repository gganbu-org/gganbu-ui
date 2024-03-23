import { useCallback, useMemo, useState, useEffect } from 'react';
import { useMediaQuery } from '@danji/components/hooks';
import { ColorSchemeContext } from './colorSchemeContext';
import {
  COLOR_SCHEME,
  DEFAULT_COLOR_MODE,
  PREFER_DARK_QUERY,
} from './colorScheme.constants';
import {
  getSystemScheme,
  getColorScheme,
  isDarkScheme,
  isSystemScheme,
  storageManager,
  setDataset,
} from './colorScheme.utils';
import { ColorScheme, ColorSchemeWithSystem } from './colorScheme.types';

interface ColorSchemeProviderProps {
  value?: ColorScheme;
  children?: React.ReactNode;
}

function ColorSchemeProvider(props: ColorSchemeProviderProps) {
  const { value: externalColorScheme, children } = props;

  const [colorScheme, setColorScheme] = useState<ColorSchemeWithSystem>(() =>
    getColorScheme(storageManager, DEFAULT_COLOR_MODE),
  );

  const [systemColorScheme, setSystemColorScheme] = useState<ColorScheme>(() =>
    getSystemScheme(),
  );

  const handleSetColorScheme = useCallback(
    (nextColorScheme: ColorScheme) => {
      setColorScheme(nextColorScheme);
      storageManager.set(nextColorScheme);
      setDataset(nextColorScheme);
    },
    [getSystemScheme],
  );

  const internalColorSheme = isSystemScheme(colorScheme)
    ? systemColorScheme
    : (colorScheme as ColorScheme);

  // data attributes initialize
  useEffect(() => {
    const initColorScheme = colorScheme;
    if (externalColorScheme) return;

    if (isSystemScheme(initColorScheme)) {
      const systemScheme = getSystemScheme();
      setDataset(systemScheme);
    } else {
      setDataset(initColorScheme);
    }
  }, []);

  useMediaQuery(
    PREFER_DARK_QUERY,
    {
      triggerFirstLoad: false,
    },
    (matches) => {
      if (!isSystemScheme(colorScheme)) return;

      const nextColorScheme = matches ? COLOR_SCHEME.DARK : COLOR_SCHEME.LIGHT;
      setSystemColorScheme(nextColorScheme);
      setDataset(nextColorScheme);
    },
  );

  // 최종적으로 제공하는 인터페이스
  const context = useMemo(
    () =>
      externalColorScheme
        ? {
            colorScheme: externalColorScheme,
            toggleColorScheme: () => {},
            setColorScheme: () => {},
          }
        : {
            colorScheme: internalColorSheme,
            toggleColorScheme: () => {
              const nextColorScheme = isDarkScheme(internalColorSheme)
                ? COLOR_SCHEME.LIGHT
                : COLOR_SCHEME.DARK;

              handleSetColorScheme(nextColorScheme);
            },
            setColorScheme: handleSetColorScheme,
          },
    [internalColorSheme, externalColorScheme],
  );

  return (
    <ColorSchemeContext.Provider value={context}>
      {children}
    </ColorSchemeContext.Provider>
  );
}

export default ColorSchemeProvider;
