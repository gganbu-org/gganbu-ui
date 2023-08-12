import { colors } from './variables';
import { join, splitBySeparator } from './utils';
import { JSONObject, JSONValue } from './theme.types';

export const DJ_DEFAULT_THEME = {
  colors,
};

export const THEME = {
  KEY: 'dj',
  DEFAULT_KEY: '__default',
} as const;

export const toVarFunc = (value: string) => `var(${value})`;

export const toVarDefinition = (value: string, prefix?: string) =>
  `--${join(prefix, value)}`;

export const tokenToCssVarFunc = (token: string | number): string =>
  toVarFunc(String(token).replace(/\./g, '-'));

export const tokenToCssVar = (
  token: string | number,
  prefix?: string,
): string => toVarDefinition(String(token).replace(/\./g, '-'), prefix);

export const toCustomProperties = (
  obj: Record<string, any>,
  prefix?: string,
) => {
  const next: Record<string, any> = {};

  Object.entries(obj).forEach(([key, value]) => {
    const name = join(prefix, key);

    if (typeof value === 'object') {
      const nestedObj = toCustomProperties(value, name);
      Object.assign(next, nestedObj);
    } else {
      next[name] = value;
    }
  });
  return next;
};

export const getValueByPath = (
  object: JSONObject,
  path: string | number | undefined,
  fallback?: unknown,
): any => {
  const properties =
    path && typeof path === 'string' ? splitBySeparator(path, '.') : [path];

  let current: JSONValue = object;

  for (let i = 0; i < properties.length; i += 1) {
    const property = properties[i];

    if (property == null) return fallback;

    current = current ? (current as any)[property] : undefined;
  }

  return typeof current === 'undefined' ? fallback : current;
};
