import { definePreset } from '@pandacss/dev';
import { mapValueToKeys, normalizeCssRules } from './utils';
import { recipes } from './recipes';
import {
  createTokens,
  keyframes,
  conditions,
  createSemanticTokens,
} from './customization';
import type { PresetOptions } from './base.types';

const recipeKeys = Object.keys(recipes);

const createPreset = (presetOpts: PresetOptions = {}) => {
  const { css: rawCss = [] } = presetOpts;

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
      css: normalizeCssRules(rawCss),
    },
  });
};

export const gganbuPreset = createPreset;
