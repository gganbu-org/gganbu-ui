import { CssReset, ThemeProvider } from '@gganbu/styled';
import { GGANBU_THEME_WITH_COMPONENT } from '../theme';
import { ColorSchemeProvider } from '../ColorScheme';

export interface GganbuProviderProps {
  theme?: Record<string, any>;
  defaultCssReset?: boolean;
  children?: React.ReactNode;
}

export function GganbuProvider(props: GganbuProviderProps) {
  const {
    theme = GGANBU_THEME_WITH_COMPONENT,
    defaultCssReset = true,
    children,
  } = props;

  return (
    <ThemeProvider theme={theme}>
      <ColorSchemeProvider>
        {defaultCssReset && <CssReset />}
        {children}
      </ColorSchemeProvider>
    </ThemeProvider>
  );
}
