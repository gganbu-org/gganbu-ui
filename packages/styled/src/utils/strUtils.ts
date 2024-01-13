export const splitBySeparator = (str: string, separator: string) =>
  str.split(separator);

export const join = (...args: (string | undefined)[]) =>
  args.filter(Boolean).join('-');
