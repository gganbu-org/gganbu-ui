import { callIfFunc } from '@gganbu/utilities';
import type { ThemeScale, ConfigOpts, Transform, gganbuTheme } from './types';
import { SCALE_TOKENS } from './constants';
import { shouldTransformToVarFunc, toVarFunc, tokenToCssVar } from '../cssVar';

export const scaleTokenMap = new Map(SCALE_TOKENS.map((st) => [st, st]));

const t = {
  valuetoVarFunc:
    (value: string, scale?: ThemeScale) => (theme: gganbuTheme) => {
      const prefix = `${theme.key}-${scale}`;
      const cssVar = tokenToCssVar(value, prefix);

      const transformedValue = shouldTransformToVarFunc(theme.cssVars, cssVar)
        ? toVarFunc(cssVar)
        : value;

      return transformedValue;
    },
};

const createTransform = (transform?: Transform, scale?: ThemeScale) => {
  const fn = (val: string) => (theme: gganbuTheme) => {
    const valueOrFunc = transform?.(val, scale) ?? val;
    const value = callIfFunc(valueOrFunc, theme);

    return value;
  };

  return fn;
};

const createConfig = ({ prop, scale, transform }: ConfigOpts) => ({
  prop,
  scale,
  transform: createTransform(transform, scale),
});

const toScales = (
  scale?: ThemeScale,
  transform: Transform = t.valuetoVarFunc,
) => {
  const fn = (prop: string) => createConfig({ prop, scale, transform });

  return fn;
};

const toBase = (prop: string, transform?: Transform) => {
  return createConfig({ prop, transform });
};

export const config = {
  colors: toScales(scaleTokenMap.get('colors')),
  fontSizes: toScales(scaleTokenMap.get('fontSizes')),
  lineHeights: toScales(scaleTokenMap.get('lineHeights')),
  fontWeights: toScales(scaleTokenMap.get('fontWeights')),
  toBase,
  toScales,
};
