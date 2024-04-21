import { isObject } from '@danji/utilities';
import { Transform, djTheme } from './types';
import { toVarFunc, tokenToCssVar } from '../cssVar';

const scaleTokens = [
  'colors',
  'sizes',
  'fontSize',
  'lineHeight',
  'fontWeight',
] as const;

const scaleTokenMap = new Map(scaleTokens.map((t) => [t, t]));
type ThemeScale = (typeof scaleTokens)[number];
type Dict = Record<string, any>;

export interface ScaleOpts {
  scale: ThemeScale;
  transform?: Transform;
}

export const shouldTransformToVarFunc = (obj: Dict, cssVar: string) =>
  isObject(obj) && cssVar in obj;

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

const scaleFunc = (prop: string, scale: ThemeScale, transform?: Transform) => {
  return {
    prop,
    scale,
    transform: createTransform({ scale, transform }),
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
