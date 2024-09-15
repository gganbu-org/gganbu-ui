interface NestedObject<T> {
  [key: string]: T | NestedObject<T>;
}

export interface RawCssRule {
  properties: {
    [property: string]: Array<string | number | boolean>;
  };
}

export interface CssRule {
  properties: {
    [property: string]: Array<string | number>;
  };
}

export interface Tokens {
  [key: string]: { value: any } | Tokens;
}

type RawTokens = NestedObject<string>;

export const convertNestedValue = (
  rawTokens: RawTokens,
  options: {
    halt?: (value: any) => boolean;
  } = {},
): Tokens => {
  const { halt } = options;

  const convert = (obj: RawTokens | string) => {
    if (typeof obj !== 'object' || halt?.(obj)) return { value: obj };

    const result: Tokens = {};
    for (const [key, value] of Object.entries(obj)) {
      result[key] = convert(value);
    }
    return result;
  };

  return convert(rawTokens) as Tokens;
};

export const mapValueToKeys = <T extends string, U>(keys: T[], value: U) =>
  keys.reduce((o, key) => ({ ...o, [key]: value }), {});

export const normalizeCssRules = (rules: RawCssRule[]): CssRule[] => {
  return rules.map((rule) => ({
    ...rule,
    properties: Object.fromEntries(
      Object.entries(rule.properties).map(([key, values]) => [
        key,
        values.map((value) =>
          typeof value === 'boolean' ? value.toString() : value,
        ),
      ]),
    ),
  }));
};
