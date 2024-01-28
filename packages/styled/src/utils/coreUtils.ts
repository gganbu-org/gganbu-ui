import { isFunction } from './assertion';

type AnyFunction = (...args: any[]) => any;

export const callIfFunc = <T, U extends any[]>(
  valueOrFunc: T | ((...args: U) => T),
  ...args: U
): T => (isFunction(valueOrFunc) ? valueOrFunc(...args) : valueOrFunc);

export const pipe =
  <T>(f: AnyFunction, ...fs: readonly AnyFunction[]): AnyFunction =>
  (...as: T[]): T =>
    fs.reduce((value, func) => func(value), f(...as));
