import _merge from 'lodash.merge';
import {
  joinWithHyphen,
  pipe,
  isNonNull,
  isObject,
  splitBySeparator,
  join,
} from '@gganbu-org/utils';
import { DEFAULT_THEME } from '@gganbu-org/theme';
import { SCALE_TOKENS } from './system-props/constants';
import type { JSONObject } from './css.types';
import type { Theme } from './system-props/types';
import type { DesignToken, DesignTokens, Dict } from './cssVars.types';

const TOKEN_ALIASES: { LIGHT: string; DARK: string } = {
  LIGHT: '_light',
  DARK: '_dark',
} as const;

const TOKEN_PSEUDO_CLASSES = {
  [TOKEN_ALIASES.DARK]: '&[data-theme=dark]',
} as const;

export const toCustomProperties = (
  obj: JSONObject = {},
  prefix?: string,
  delimiter = '-',
  options: {
    halt?: (value: any) => boolean;
  } = {},
) => {
  const { halt } = options;
  const next: JSONObject = {};

  const transformObjectEntry = (key: string, value: any) => {
    const name = join(delimiter, prefix, key);

    const entry = { [name]: value };

    if (isObject(value) && halt?.(value)) {
      _merge(next, entry);
    } else {
      const nestedObj = isObject(value)
        ? toCustomProperties(value, name, delimiter, options)
        : entry;

      _merge(next, nestedObj);
    }
  };

  Object.entries(obj).forEach(([key, value]) =>
    transformObjectEntry(key, value),
  );

  return next;
};

export const shouldTransformToVarFunc = (obj: Dict, cssVar: string) =>
  isObject(obj) && cssVar in obj;

export const toVarFunc = (value: string) => `var(${value})`;

export const toVarDefinition = (value: string, prefix?: string) =>
  `--${joinWithHyphen(prefix, value)}`;

export const tokenToCssVar = (
  token: string | number,
  prefix?: string,
): string => toVarDefinition(String(token).replace(/\./g, '-'), prefix);

export const tokenToVarFunc = pipe(tokenToCssVar, toVarFunc);

const createTokensToCssVars = (tokens: DesignTokens) => {
  const target: JSONObject = {};

  Object.entries(tokens).forEach(([token, rawValue]) => {
    const key = tokenToCssVar(token, DEFAULT_THEME.KEY);

    const designToken = isObject(rawValue)
      ? rawValue
      : { [TOKEN_ALIASES.LIGHT]: rawValue };

    const getNormalizedValue = (value: string) => {
      const separator = '.';
      const scale = splitBySeparator(token, separator)[0];
      const valueWithScale = `${scale}${separator}${value}`;

      const transformedValue = shouldTransformToVarFunc(tokens, valueWithScale)
        ? tokenToVarFunc(valueWithScale, DEFAULT_THEME.KEY)
        : value;

      return transformedValue;
    };

    const transformValue = (propertyKey: string, propertyValue: DesignToken) =>
      Object.entries(propertyValue).reduce((acc, [alias, value]) => {
        if (!isNonNull(value)) return acc;

        const isDefaultAlias = alias === TOKEN_ALIASES.LIGHT;
        const pseudoClass = isDefaultAlias
          ? propertyKey
          : TOKEN_PSEUDO_CLASSES[alias] ?? alias;

        const normalizedValue = getNormalizedValue(value);

        acc[pseudoClass] = isDefaultAlias
          ? normalizedValue
          : {
              ...((target[pseudoClass] || {}) as object),
              [propertyKey]: normalizedValue,
            };

        return acc;
      }, {} as JSONObject);

    const source = transformValue(key, designToken);

    _merge(target, source);
  });

  return target;
};

export const createCssVars = (theme: Theme) => {
  let cssVars: JSONObject = {};

  const scaleTokens = SCALE_TOKENS.reduce((acc, scale) => {
    return {
      ...acc,
      ...toCustomProperties(theme[scale], scale, '.'),
    };
  }, {});

  const semanticTokens = toCustomProperties(
    theme.semanticTokens,
    'colors',
    '.',
    {
      halt: (value) =>
        Object.keys(value).every((key) =>
          Object.values(TOKEN_ALIASES).includes(key),
        ),
    },
  );

  const tokens = _merge(scaleTokens, semanticTokens) as DesignTokens;

  cssVars = _merge(cssVars, createTokensToCssVars(tokens));

  return cssVars;
};
