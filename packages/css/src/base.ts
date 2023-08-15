/* eslint-disable no-restricted-syntax */
import {
  THEME,
  getValueByPath,
  isObject,
  toVarFunc,
  tokenToCssVar,
} from '@danji/styled';
import { CSSObject } from './types';
import { systemProps } from './system';
import { aliases } from './system-props';

export const css =
  (styles: any) =>
  (theme: any): CSSObject => {
    const computedCSS: CSSObject = {};

    for (const [key, val] of Object.entries(styles)) {
      if (isObject(val)) {
        const nestedStyles = val;
        computedCSS[key] = css(nestedStyles)(theme);
        continue;
      }

      const rawProp = getValueByPath(aliases, key, key);
      const systemProp = getValueByPath(systemProps, rawProp);

      if (!systemProp) {
        computedCSS[rawProp] = val as any;
        continue;
      }

      const cssVar = tokenToCssVar(val as string, THEME.KEY);

      const transformed =
        isObject(theme.cssVars) && cssVar in theme.cssVars
          ? `${toVarFunc(cssVar)}`
          : val;

      computedCSS[rawProp] = transformed as any;
    }

    return computedCSS;
  };
