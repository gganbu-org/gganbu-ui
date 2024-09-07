import { definePreset } from '@pandacss/dev';
import { mapValueToKeys, systemProperties } from './utils';
import { recipes } from './recipes';
import {
  createTokens,
  keyframes,
  conditions,
  createSemanticTokens,
} from './customization';

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

export const gganbuPreset = createPreset();
