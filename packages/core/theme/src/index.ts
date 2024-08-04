import { definePreset } from '@pandacss/dev';
import { recipes } from './recipes';
import { conditions } from './conditions';
import { createTokens } from './tokens';
import { keyframes } from './keyframes';
import { createSemanticTokens } from './semanticTokens';
import {
  mapValueToKeys,
  systemProperties,
  type SystemProperties,
} from './utils';

const recipeKeys = Object.keys(recipes);

const createPreset = () => {
  const tokens = createTokens();
  const semanticTokens = createSemanticTokens();

  return definePreset({
    conditions,
    theme: {
      recipes,
      keyframes,
      tokens,
      semanticTokens,
    },
    staticCss: {
      recipes: mapValueToKeys(recipeKeys, ['*']),
      css: [
        {
          properties: systemProperties as Record<string, any>,
        },
      ],
    },
  });
};

const gganbuPreset = createPreset();

export { gganbuPreset, systemProperties };
export type { SystemProperties };
