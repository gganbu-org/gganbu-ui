import {
  joinWithHyphen,
  pipe,
  isNonNull,
  isObject,
  splitBySeparator,
  join,
} from '@danji/utilities';
import {
  THEME,
  TOKEN_ALIASES,
  TOKEN_PSEUDO_CLASSES,
  pseudoKeys,
  PseudoKeys,
  PseudoAliases,
} from './theme';
import { JSONObject } from './base.types';
import {
  DesignToken,
  DesignTokenObject,
  DesignTokens,
  Dict,
} from './cssVar.types';

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
      Object.assign(next, entry);
    } else {
      const nestedObj = isObject(value)
        ? toCustomProperties(value, name, delimiter, options)
        : entry;

      Object.assign(next, nestedObj);
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
    const key = tokenToCssVar(token, THEME.KEY);

    const designToken = isObject(rawValue)
      ? rawValue
      : { [TOKEN_ALIASES.LIGHT]: rawValue };

    const getNormalizedValue = (value: string) => {
      const separator = '.';
      const scale = splitBySeparator(token, separator)[0];
      const valueWithScale = `${scale}${separator}${value}`;

      const transformedValue = shouldTransformToVarFunc(tokens, valueWithScale)
        ? tokenToVarFunc(valueWithScale, THEME.KEY)
        : value;

      return transformedValue;
    };

    const transformValue = (propertyKey: string, propertyValue: DesignToken) =>
      Object.entries(propertyValue).reduce((acc, [alias, value]) => {
        if (!isNonNull(value)) return acc;

        const isDefaultAlias = alias === TOKEN_ALIASES.LIGHT;
        const pseudoClass = isDefaultAlias
          ? propertyKey
          : ((TOKEN_PSEUDO_CLASSES as Dict)[alias] as PseudoAliases) ?? alias;

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

    Object.assign(target, source);
  });

  return target;
};

export const createCssVars = <
  T extends {
    colors?: DesignTokenObject;
    semanticTokens?: DesignTokenObject;
    typography?: DesignTokenObject;
  },
>(
  theme: T,
) => {
  const { colors, semanticTokens, typography } = theme;
  const cssVars: JSONObject = {};

  const tokens = {
    ...toCustomProperties(typography, '', '.'),
    ...toCustomProperties(colors, 'colors', '.'),
    ...toCustomProperties(semanticTokens, 'colors', '.', {
      halt: (value) =>
        Object.keys(value).every((key) =>
          pseudoKeys.includes(key as PseudoKeys),
        ),
    }),
  } as DesignTokens;

  Object.assign(cssVars, createTokensToCssVars(tokens));

  return cssVars;
};
