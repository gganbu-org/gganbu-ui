import { THEME, foundation, semanticTokens } from '@danji/styled';

import { buttonTheme } from './Button';
import { spinnerTheme } from './Spinner';

const Components = {
  Button: buttonTheme,
  Spinner: spinnerTheme,
};

export const DJ_DEFAULT_THEME = {
  key: THEME.KEY,
  ...foundation,
  semanticTokens,
  components: Components,
} as const;
