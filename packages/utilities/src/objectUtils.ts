import { isNonNull } from './assertion';

export const pick = <T extends Record<string, T>, K extends keyof T>(
  object: T,
  keys: K[],
) =>
  keys.reduce((obj, key) => {
    const value = object[key];

    if (isNonNull(value)) {
      return {
        ...obj,
        [key]: value,
      };
    }

    return obj;
  }, {});
