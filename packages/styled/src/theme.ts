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
