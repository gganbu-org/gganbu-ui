import foundation from './foundation';
import semanticTokens from './semanticTokens';

export const THEME = {
  KEY: 'gb',
  DEFAULT_KEY: '__default',
} as const;

export const TOKEN_ALIASES = {
  LIGHT: '_light',
  DARK: '_dark',
} as const;

export const TOKEN_PSEUDO_CLASSES = {
  [TOKEN_ALIASES.DARK]: '&[data-theme=dark]',
} as const;

export const PSEUDO_KEYS = Object.values(TOKEN_ALIASES);

export const GGANBU_DEFAULT_THEME = {
  key: THEME.KEY,
  ...foundation,
  semanticTokens,
} as const;

export type PseudoKeys = keyof typeof TOKEN_PSEUDO_CLASSES;

export type PseudoAliases = (typeof TOKEN_ALIASES)[keyof typeof TOKEN_ALIASES];
