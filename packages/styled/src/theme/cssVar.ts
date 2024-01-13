import { join } from '../utils';

export const toVarFunc = (value: string) => `var(${value})`;

export const toVarDefinition = (value: string, prefix?: string) =>
  `--${join(prefix, value)}`;

export const tokenToCssVarFunc = (token: string | number): string =>
  toVarFunc(String(token).replace(/\./g, '-'));

export const tokenToCssVar = (
  token: string | number,
  prefix?: string,
): string => toVarDefinition(String(token).replace(/\./g, '-'), prefix);
