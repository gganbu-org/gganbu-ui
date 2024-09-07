import { defineSemanticTokens } from '@pandacss/dev';
import { convertNestedValue } from '../utils';
import { semanticColors as colors } from '../foundation';

const TOKEN_ALIASES: { BASE: string; DARK: string } = {
  BASE: 'base',
  DARK: '_dark',
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
