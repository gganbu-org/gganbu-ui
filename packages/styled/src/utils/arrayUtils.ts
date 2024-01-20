export const join = (delimiter: string, ...args: (string | undefined)[]) =>
  args.filter(Boolean).join(delimiter);

export const joinWithHyphen = (...args: (string | undefined)[]) =>
  join('-', ...args);
