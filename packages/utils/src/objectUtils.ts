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

export const omit = <T extends Record<string, T>, K extends keyof T>(
  object: T,
  keys: K[],
) => {
  /*
   * Return a (shallow) copy of an object with some specified set of keys removed.
   */
  const clone = { ...object };

  for (const key of keys) {
    if (key in clone) delete clone[key as string];
  }
  return clone;
};
