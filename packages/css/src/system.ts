import _merge from 'lodash/merge';
import { aliases, background, color, size, typography } from './system-props';

export const systemProps = _merge(
  {},
  aliases,
  background,
  color,
  size,
  typography,
);

export const isStyleProp = (prop: string) => prop in systemProps;
