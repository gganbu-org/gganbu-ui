import { Dict } from './base.types';

export interface CssVariablesProps {
  selector?: string;
}

export type ThemeWithCssVars<T> = T & {
  cssVars: Dict;
};
