export const isNonNull = <T>(val: T | null | undefined): val is T =>
  val !== null && val !== undefined;

export const isArray = (val: any): val is any[] => Array.isArray(val);

export const isObject = <T>(val: T): val is T =>
  isNonNull(val) && typeof val === 'object' && !isArray(val);

export const isFunction = (value: any): value is (...args: any[]) => any =>
  typeof value === 'function';
