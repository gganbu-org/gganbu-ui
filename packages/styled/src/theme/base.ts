import { isObject, join, splitBySeparator } from '../utils';
import { JSONObject, JSONValue } from './base.types';

export const toCustomProperties = (
  obj: Record<string, any>,
  prefix?: string,
) => {
  const next: Record<string, any> = {};

  Object.entries(obj).forEach(([key, value]) => {
    const name = join(prefix, key);

    if (isObject(value)) {
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
