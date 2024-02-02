import { isNonNull, isObject, join, splitBySeparator } from '../utils';
import { JSONObject, JSONValue } from './base.types';

interface CustomPropertiesOptions {
  halt?: (value: any) => boolean;
}

export const toCustomProperties = (
  obj: JSONObject = {},
  prefix?: string,
  delimiter = '-',
  options: CustomPropertiesOptions = {},
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

    if (!isNonNull(property) || !isObject(current) || !(property in current))
      return fallback;

    current = current[property];
  }

  return current;
};
