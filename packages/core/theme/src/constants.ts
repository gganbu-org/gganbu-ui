import semanticTokens from './semanticTokens';
import { colors, fontSizes, fontWeights, lineHeights } from './foundation';
import { buttonTheme, spinnerTheme } from './components';

export const DEFAULT_THEME = {
  KEY: 'gb',
  DEFAULT_KEY: '__default',
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
  semanticTokens,
  components: {
    Button: buttonTheme,
    Spinner: spinnerTheme,
  },
} as const;
