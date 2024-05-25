import _merge from 'lodash.merge';
import { callIfFunc, isObject, getValueByPath } from '@danji/utilities';
import { systemProps, type djTheme } from './system-props';

export const css = (stylesOrFunc: Record<string, any>) => (theme: djTheme) => {
  const computedCSS: Record<string, any> = {};

  const styles = callIfFunc(stylesOrFunc, theme);

  for (const [key, valueOrFunc] of Object.entries(styles)) {
    const val = callIfFunc(valueOrFunc, theme);

    if (isObject(val)) {
      const nestedStyles = val;

      computedCSS[key] = _merge(
        computedCSS[key] ?? {},
        css(nestedStyles)(theme),
      );
      continue;
    }

    const systemProp = getValueByPath(systemProps, key);

    if (!systemProp) {
      computedCSS[key] = val;
      continue;
    }

    const alias = systemProp.prop;
    computedCSS[alias] = systemProp.transform?.(val)(theme) ?? val;
  }

  return computedCSS;
};
