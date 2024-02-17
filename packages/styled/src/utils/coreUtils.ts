import { isFunction, isNonNull } from './assertion';
import { Dict } from '../base.types';

type AnyFunction = (...args: any[]) => any;

export const callIfFunc = <T, U extends any[]>(
  valueOrFunc: T | ((...args: U) => T),
  ...args: U
): T => (isFunction(valueOrFunc) ? valueOrFunc(...args) : valueOrFunc);

export const pipe =
  <T>(f: AnyFunction, ...fs: readonly AnyFunction[]): AnyFunction =>
  (...as: T[]): T =>
    fs.reduce((value, func) => func(value), f(...as));

export const pick = <T extends Dict, K extends keyof T>(object: T, keys: K[]) =>
  keys.reduce((obj, key) => {
    const value = object[key];

    if (isNonNull(value)) {
      return {
        ...obj,
        [key]: value,
      };
    }

    return obj;
  }, {});
