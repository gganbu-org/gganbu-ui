import { useCallback, useEffect, useMemo, useState } from 'react';
import { ColorThemeContext } from './colorThemeContext';
import { COLOR_THEME, ColorThemeState } from './colorTheme.types';

const preferDarkQuery = '(prefers-color-scheme: dark)';

interface ColorThemeProviderProps {
  children?: React.ReactNode;
}

function ColorThemeProvider(props: ColorThemeProviderProps) {
  const { children } = props;

  const [themes, setThemes] = useState<ColorThemeState>({
    userTheme: 'default',
    systemTheme: 'no-preference',
  });

  const theme = (() => {
    if (themes.userTheme !== 'default') return themes.userTheme;

    if (themes.systemTheme === 'no-preference') return COLOR_THEME.LIGHT;
    return themes.systemTheme;
  })();

  const toggleColorTheme = useCallback(() => {
    const nextUserTheme =
      theme === COLOR_THEME.DARK ? COLOR_THEME.LIGHT : COLOR_THEME.DARK;

    setThemes((prevThemes) => {
      return { ...prevThemes, userTheme: nextUserTheme };
    });
  }, [theme]);

  useEffect(() => {
    const matcher = window.matchMedia(preferDarkQuery);
    const systemPrefersDark = matcher.matches;

    const onChangePreferColorScheme = (event: MediaQueryListEvent) => {
      const { matches } = event;

      setThemes((prevThemes) => {
        return {
          ...prevThemes,
          systemTheme: matches ? COLOR_THEME.DARK : COLOR_THEME.LIGHT,
        };
      });
    };

    matcher.addEventListener('change', onChangePreferColorScheme);

    setThemes((prevThemes) => {
      return {
        ...prevThemes,
        systemTheme: systemPrefersDark ? COLOR_THEME.DARK : COLOR_THEME.LIGHT,
      };
    });

    return () => {
      matcher.removeEventListener('change', onChangePreferColorScheme);
    };
  }, [setThemes]);

  const context = useMemo(
    () => ({
      colorTheme: theme,
      toggleColorTheme,
    }),
    [toggleColorTheme, theme],
  );

  return (
    <ColorThemeContext.Provider value={context}>
      {children}
    </ColorThemeContext.Provider>
  );
}

export default ColorThemeProvider;
