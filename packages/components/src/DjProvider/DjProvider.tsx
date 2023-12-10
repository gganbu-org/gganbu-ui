import { CssReset, DJ_DEFAULT_THEME, ThemeProvider } from '@danji/styled';
import { ColorThemeProvider } from '@danji/components';

export interface DjProviderProps {
  theme?: Record<string, any>;
  defaultCssReset?: boolean;
  children?: React.ReactNode;
}

export function DjProvider(props: DjProviderProps) {
  const { theme = DJ_DEFAULT_THEME, defaultCssReset = true, children } = props;

  return (
    <ThemeProvider theme={theme}>
      <ColorThemeProvider>
        {defaultCssReset && <CssReset />}
        {children}
      </ColorThemeProvider>
    </ThemeProvider>
  );
}
