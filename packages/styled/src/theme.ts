import { JSONObject, JSONValue } from './theme.types';

export const splitBySeparator = (str: string, separator: string) =>
  str.split(separator);

export const join = (...args: (string | undefined)[]) =>
  args.filter(Boolean).join('-');

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

export const getValueFromKey = (object: JSONObject, key: string) => {
  const properties = splitBySeparator(key, '.');
  let current: JSONValue = object;

  for (let i = 0; i < properties.length; i += 1) {
    const property = properties[i];

    if (property == null) return undefined;

    current = (current as any)[property];
  }

  return current;
};
