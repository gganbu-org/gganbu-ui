import { defineTokens } from '@pandacss/dev';
import { convertNestedValue } from '../utils';
import {
  colors,
  fontWeights,
  fontSizes,
  lineHeights,
  letterSpacings,
  sizes,
  spacing,
} from '../foundation';
import { animations } from './keyframes';

export const createTokens = () => {
  const tokens = convertNestedValue({
    colors,
    fontSizes,
    fontWeights,
    lineHeights,
    letterSpacings,
    spacing,
    sizes,
    animations,
  });

  return defineTokens(tokens);
};
