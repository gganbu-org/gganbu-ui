/* eslint-disable no-restricted-syntax */
import { getValueByPath } from '@danji/styled';
import _merge from 'lodash/merge';
import { CSSObject } from './types';

const color = {
  color: 'colors',
  textColor: 'colors',
};

const systemProps = _merge({}, color);

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
