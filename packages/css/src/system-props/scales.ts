import { THEME, isObject, toVarFunc, tokenToCssVar } from '@danji/styled';
import { ThemeWithCssVars } from '@danji/styled/src/provider.types';
import { Transform } from './types';

export const tokens = ['colors', 'sizes'] as const;
export const scaleTokenMap = new Map(tokens.map((t) => [t, t]));
export type ThemeScale = (typeof tokens)[number];

export interface ScaleOpts {
  scale: ThemeScale;
  transform?: Transform;
}

const tokenToCssVarFunc =
  (scale: ThemeScale, val: string) =>
  (theme: ThemeWithCssVars<Record<string, any>>) => {
    const prefix = `${THEME.KEY}-${scale}`;
    const cssVar = tokenToCssVar(val, prefix);

    const transformed =
      isObject(theme.cssVars) && cssVar in theme.cssVars
        ? `${toVarFunc(cssVar)}`
        : val;

    return transformed;
  };

const createTransform = ({ scale, transform }: ScaleOpts) => {
  const fn =
    (val: string) => (theme: ThemeWithCssVars<Record<string, any>>) => {
      const cssVarFunc = tokenToCssVarFunc(scale, val)(theme);

      const value = transform?.(cssVarFunc)(theme[scale]) ?? cssVarFunc;

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
