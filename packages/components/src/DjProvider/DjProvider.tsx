import { CssReset, ThemeProvider } from '@danji/styled';
import { ColorSchemeProvider, DJ_DEFAULT_THEME } from '@danji/components';

export interface DjProviderProps {
  theme?: Record<string, any>;
  defaultCssReset?: boolean;
  children?: React.ReactNode;
}

export function DjProvider(props: DjProviderProps) {
  const { theme = DJ_DEFAULT_THEME, defaultCssReset = true, children } = props;

  return (
    <ThemeProvider theme={theme}>
      <ColorSchemeProvider>
        {defaultCssReset && <CssReset />}
        {children}
      </ColorSchemeProvider>
    </ThemeProvider>
  );
}
