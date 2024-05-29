export const THEME = {
  KEY: 'dj',
  DEFAULT_KEY: '__default',
} as const;

export const TOKEN_ALIASES = {
  LIGHT: '_light',
  DARK: '_dark',
} as const;

export const TOKEN_PSEUDO_CLASSES = {
  [TOKEN_ALIASES.DARK]: '&[data-theme=dark]',
} as const;

export type PseudoKeys = keyof typeof TOKEN_PSEUDO_CLASSES;

export type PseudoAliases = (typeof TOKEN_ALIASES)[keyof typeof TOKEN_ALIASES];

export const pseudoKeys = Object.values(TOKEN_ALIASES);
