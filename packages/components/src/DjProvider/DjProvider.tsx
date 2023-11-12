import { CssReset, DJ_DEFAULT_THEME, ThemeProvider } from '@danji/styled';

export interface DjProviderProps {
  theme?: Record<string, any>;
  defaultCssReset?: boolean;
  children?: React.ReactNode;
}

export function DjProvider(props: DjProviderProps) {
  const { theme = DJ_DEFAULT_THEME, defaultCssReset = true, children } = props;

  return (
    <ThemeProvider theme={theme}>
      {defaultCssReset && <CssReset />}
      {children}
    </ThemeProvider>
  );
}
