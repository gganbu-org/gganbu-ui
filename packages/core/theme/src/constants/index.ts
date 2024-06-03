import { GGANBU_DEFAULT_THEME } from '@gganbu-org/styled';

import { buttonTheme, spinnerTheme } from '../components';

const Components = {
  Button: buttonTheme,
  Spinner: spinnerTheme,
};

export const GGANBU_THEME_WITH_COMPONENT = {
  ...GGANBU_DEFAULT_THEME,
  components: Components,
} as const;
