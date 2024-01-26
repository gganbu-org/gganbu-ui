import { isFunction } from './assertion';

export const callIfFunc = <T, U extends any[]>(
  valueOrFunc: T | ((...args: U) => T),
  ...args: U
): T => (isFunction(valueOrFunc) ? valueOrFunc(...args) : valueOrFunc);
