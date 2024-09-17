type AnyFunction = (...args: any[]) => any;

export const chain = <T extends AnyFunction>(
  ...fs: (T | undefined)[]
): ((...args: Parameters<T>) => void) => {
  return (...args: Parameters<T>) => {
    fs.forEach((f) => f?.(...args));
  };
};
