/* eslint-disable no-restricted-syntax */
import { getValueByPath, isObject } from '@danji/styled';
import { CSSObject } from './types';
import { systemProps } from './system';

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

      const systemProp = getValueByPath(systemProps as any, key);

      if (!systemProp) {
        computedCSS[key] = val as any;
        continue;
      }

      const alias = systemProp.prop;
      computedCSS[alias] = systemProp.transform(val)(theme);
    }

    return computedCSS;
  };
