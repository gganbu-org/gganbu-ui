/* eslint-disable no-restricted-syntax */
import { getValueByPath, isFunction, isObject } from '@danji/styled';
import { CSSObject } from './types';
import { systemProps } from './system';

const callIfFunc = <T, U extends any[]>(
  valueOrFunc: T | ((...args: U) => T),
  ...args: U
): T => (isFunction(valueOrFunc) ? valueOrFunc(...args) : valueOrFunc);

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
