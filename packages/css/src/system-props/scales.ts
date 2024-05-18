import { Transform, djTheme } from './types';
import { toVarFunc, tokenToCssVar, shouldTransformToVarFunc } from '../cssVar';

const scaleTokens = [
  'colors',
  'sizes',
  'fontSizes',
  'lineHeights',
  'fontWeights',
] as const;

const scaleTokenMap = new Map(scaleTokens.map((t) => [t, t]));
type ThemeScale = (typeof scaleTokens)[number];

export interface ScaleOpts {
  scale: ThemeScale;
  transform?: Transform;
}

const getNormalizedValue =
  (scale: ThemeScale, value: string) => (theme: djTheme) => {
    const prefix = `${theme.key}-${scale}`;
    const cssVar = tokenToCssVar(value, prefix);

    const transformedValue = shouldTransformToVarFunc(theme.cssVars, cssVar)
      ? toVarFunc(cssVar)
      : value;

    return transformedValue;
  };

const createTransform = ({ scale, transform }: ScaleOpts) => {
  const fn = (val: string) => (theme: djTheme) => {
    const normalizedValue = getNormalizedValue(scale, val)(theme);

    const value = transform?.(normalizedValue)(theme[scale]) ?? normalizedValue;

    return value;
  };

  return fn;
};

const scaleFunc = (prop: string, scale?: ThemeScale, transform?: Transform) => {
  return {
    prop,
    scale,
    ...(scale && {
      transform: createTransform({ scale, transform }),
    }),
  };
};

const toScale = ({ scale, transform }: ScaleOpts) => {
  const fn = (prop: string) => scaleFunc(prop, scale, transform);
  return fn;
};

export const scales = {
  base: scaleFunc,
  colors: toScale({ scale: scaleTokenMap.get('colors') as ThemeScale }),
  sizes: toScale({ scale: scaleTokenMap.get('sizes') as ThemeScale }),
};
