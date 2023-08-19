import { ThemeWithCssVars } from '@danji/styled/src/provider.types';

export type Transform = (
  value: string,
) => (theme: ThemeWithCssVars<Record<string, any>>) => any;
