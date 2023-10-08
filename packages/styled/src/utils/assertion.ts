export const isArray = (val: any) => Array.isArray(val);

export const isObject = (val: any) =>
  val !== null && typeof val === 'object' && !isArray(val);

export const isFunction = (value: any): value is (...args: any[]) => any =>
  typeof value === 'function';
