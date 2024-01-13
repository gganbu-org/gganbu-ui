import { Theme } from '@danji/components';
import { colors, sematicTokens } from '../variables';

export const DJ_DEFAULT_THEME = {
  colors,
  sematicTokens,
  components: Theme,
} as const;

export const THEME = {
  KEY: 'dj',
  DEFAULT_KEY: '__default',
} as const;

export const TOKEN_ALIASES = {
  LIGHT: '_light',
  DARK: '_dark',
} as const;

export const TOKEN_PSEUDO_CLASSES = {
  [TOKEN_ALIASES.DARK]: '[data-theme=dark]',
} as const;

export type PseudoKeys = keyof typeof TOKEN_PSEUDO_CLASSES;

export const pseudoKeys = Object.values(TOKEN_ALIASES);
