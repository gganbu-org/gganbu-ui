import { isFunction, isNonNull, isObject } from './assertion';
import { splitBySeparator } from './strUtils';

type AnyFunction = (...args: any[]) => any;
type Primitive = bigint | boolean | null | number | string | symbol | undefined;
type JSONValue = Primitive | JSONObject;
interface JSONObject {
  [key: string]: JSONValue;
}

export const callIfFunc = <T, U extends any[]>(
  valueOrFunc: T | ((...args: U) => T),
  ...args: U
): T => (isFunction(valueOrFunc) ? valueOrFunc(...args) : valueOrFunc);

export const pipe =
  <T>(f: AnyFunction, ...fs: readonly AnyFunction[]): AnyFunction =>
  (...as: T[]): T =>
    fs.reduce((value, func) => func(value), f(...as));

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
