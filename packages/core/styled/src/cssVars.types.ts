export type Dict<T = any> = Record<string, T>;

export type NormalToken = string | number;

export type NormalizedToken = {
  _light: NormalToken;
};

export type SemanticToken = NormalizedToken & {
  _dark?: NormalToken;
};

export type DesignToken = NormalToken | SemanticToken | DesignTokenObject;

export type DesignTokens = Record<string, DesignToken>;

export interface DesignTokenObject {
  [key: string]: DesignToken;
}
