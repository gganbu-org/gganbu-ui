import { joinWithHyphen, pipe } from '../utils';

export const toVarFunc = (value: string) => `var(${value})`;

export const toVarDefinition = (value: string, prefix?: string) =>
  `--${joinWithHyphen(prefix, value)}`;

export const tokenToCssVar = (
  token: string | number,
  prefix?: string,
): string => toVarDefinition(String(token).replace(/\./g, '-'), prefix);

export const tokenToVarFunc = pipe(tokenToCssVar, toVarFunc);
