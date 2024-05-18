import { DJ_DEFAULT_THEME } from '@danji/styled';
import { buttonTheme } from './Button';
import { spinnerTheme } from './Spinner';

const Components = {
  Button: buttonTheme,
  Spinner: spinnerTheme,
};

export const DJ_THEME_WITH_COMPONENT = {
  ...DJ_DEFAULT_THEME,
  components: Components,
} as const;
