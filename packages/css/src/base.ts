/* eslint-disable no-restricted-syntax */
import { getValueByPath } from '@danji/styled';
import { CSSObject } from './types';
import { systemProps } from './system';

export const css =
  (styles: any) =>
  (theme: any): CSSObject => {
    const computedCSS: CSSObject = {};

    for (const [key, val] of Object.entries(styles)) {
      const systemProp = getValueByPath(systemProps, key);
      const themeProp = getValueByPath(theme, systemProp);

      const value = getValueByPath(themeProp, val as string, val);

      computedCSS[key] = value;
    }

    return computedCSS;
  };
