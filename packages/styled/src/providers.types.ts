import { Dict } from './base.types';

export interface CssVariablesProps {
  selector?: string;
}

export type ThemeWithCssVars<T> = T & {
  cssVars: Dict;
};

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
