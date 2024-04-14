/* eslint-disable no-restricted-syntax */
import { getValueByPath, callIfFunc, isObject } from '@danji/styled';
import type { CSSObject } from '@danji/styled';
import { systemProps } from './system';

export const css =
  (stylesOrFunc: any) =>
  (theme: any): CSSObject => {
    const computedCSS: CSSObject = {};
    const styles = callIfFunc(stylesOrFunc, theme);

    for (const [key, valueOrFunc] of Object.entries(styles)) {
      const val = callIfFunc(valueOrFunc, theme);

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
