import { CssReset, ThemeProvider } from '@gganbu-org/styled';

import { ColorSchemeProvider } from '../colorSchemeProvider';
import { GGANBU_THEME_WITH_COMPONENT } from '../../constants';

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
