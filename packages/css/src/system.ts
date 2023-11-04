import _merge from 'lodash/merge';
import { aliases, background, color, size } from './system-props';

export const systemProps = _merge({}, aliases, background, color, size);

export const isStyleProp = (prop: string) => prop in systemProps;
