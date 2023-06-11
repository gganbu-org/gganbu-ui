export const isArray = (val: any) => Array.isArray(val);

export const isObject = (val: any) =>
  val !== null && typeof val === 'object' && !isArray(val);
