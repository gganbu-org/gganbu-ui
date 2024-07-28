import _merge from 'lodash.merge';
import { callIfFunc, isObject, getValueByPath } from '@gganbu-org/utils';
import { systemProps } from './system-props';
import type { GganbuTheme } from './system-props/types';
import type { Dict } from './cssVars.types';

export const css = (stylesOrFunc: Dict) => (theme: GganbuTheme) => {
  let computedCSS: Dict = {};

  const styles = callIfFunc(stylesOrFunc, theme);
  const mergeCSS = (target: Dict, source: Dict) =>
    _merge(target, css(source)(theme));

  for (const [key, valueOrFunc] of Object.entries(styles)) {
    const val = callIfFunc(valueOrFunc, theme);
    const systemProp = getValueByPath(systemProps, key);

    if (isObject(val)) {
      const nestedStyles = val;
      computedCSS[key] = mergeCSS(computedCSS[key] ?? {}, nestedStyles);
      continue;
    }

    if (!systemProp) {
      computedCSS[key] = val;
      continue;
    }

    const transformedValue = systemProp.transform?.(val)(theme) ?? val;

    if (isObject(transformedValue)) {
      computedCSS = mergeCSS(computedCSS, transformedValue);
      continue;
    }

    const alias = systemProp.prop || key;
    computedCSS[alias] = transformedValue;
  }

  return computedCSS;
};
