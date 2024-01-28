import { THEME, isObject, toVarFunc, tokenToCssVar } from '@danji/styled';
import { ThemeWithCssVars } from '@danji/styled/providers.types';
import { Dict } from '@danji/styled/base.types';
import { Transform } from './types';

export const tokens = ['colors', 'sizes'] as const;
export const scaleTokenMap = new Map(tokens.map((t) => [t, t]));
export type ThemeScale = (typeof tokens)[number];

export interface ScaleOpts {
  scale: ThemeScale;
  transform?: Transform;
}

export const shouldTransformToVarFunc = (obj: Dict, cssVar: string) =>
  isObject(obj) && cssVar in obj;

const getNormalizedValue =
  (scale: ThemeScale, value: string) =>
  (theme: ThemeWithCssVars<Record<string, any>>) => {
    const prefix = `${THEME.KEY}-${scale}`;
    const cssVar = tokenToCssVar(value, prefix);

    const transformedValue = shouldTransformToVarFunc(theme.cssVars, cssVar)
      ? toVarFunc(cssVar)
      : value;

    return transformedValue;
  };

const createTransform = ({ scale, transform }: ScaleOpts) => {
  const fn =
    (val: string) => (theme: ThemeWithCssVars<Record<string, any>>) => {
      const normalizedValue = getNormalizedValue(scale, val)(theme);

      const value =
        transform?.(normalizedValue)(theme[scale]) ?? normalizedValue;

      return value;
    };

  return fn;
};

const toScale = ({ scale, transform }: ScaleOpts) => {
  const fn = (prop: string) => {
    return {
      prop,
      scale,
      transform: createTransform({ scale, transform }),
    };
  };
  return fn;
};

export const scales = {
  colors: toScale({ scale: scaleTokenMap.get('colors') as ThemeScale }),
  sizes: toScale({ scale: scaleTokenMap.get('sizes') as ThemeScale }),
};
