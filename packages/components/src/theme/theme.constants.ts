import { GGANBU_DEFAULT_THEME } from '@gganbu/styled';
import { buttonTheme } from './Button';
import { spinnerTheme } from './Spinner';

const Components = {
  Button: buttonTheme,
  Spinner: spinnerTheme,
};

export const GGANBU_THEME_WITH_COMPONENT = {
  ...GGANBU_DEFAULT_THEME,
  components: Components,
} as const;
