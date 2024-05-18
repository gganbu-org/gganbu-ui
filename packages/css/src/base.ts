import { callIfFunc, isObject, getValueByPath } from '@danji/utilities';
import { systemProps } from './system-props/base';
import { djTheme } from './system-props/types';

export const css = (stylesOrFunc: Record<string, any>) => (theme: djTheme) => {
  const computedCSS: Record<string, any> = {};
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
