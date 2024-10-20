import { defineSemanticTokens } from '@pandacss/dev';
import { PSEUDO_CLASSES } from './conditions';
import { convertNestedValue } from '../utils';
import { semanticColors as colors } from '../foundation';

const TOKEN_ALIASES: { BASE: string; DARK: string } = {
  BASE: PSEUDO_CLASSES.BASE.VALUE,
  DARK: PSEUDO_CLASSES.DARK.VALUE,
} as const;

export const createSemanticTokens = () => {
  const semnaticTokens = convertNestedValue(
    {
      colors,
    },
    {
      halt: (value) =>
        Object.keys(value).every((key) =>
          Object.values(TOKEN_ALIASES).includes(key),
        ),
    },
  );

  return defineSemanticTokens(semnaticTokens);
};
