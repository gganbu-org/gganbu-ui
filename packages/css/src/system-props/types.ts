import { ThemeWithCssVars } from '@danji/styled/providers.types';

export type Transform = (
  value: string,
) => (theme: ThemeWithCssVars<Record<string, any>>) => any;
