export const isNonNull = <T>(val: T) => val !== null && val !== undefined;

export const isArray = <T>(val: T) => Array.isArray(val);

export const isObject = <T>(val: T) =>
  isNonNull(val) && typeof val === 'object' && !isArray(val);

export const isFunction = (value: any): value is (...args: any[]) => any =>
  typeof value === 'function';
