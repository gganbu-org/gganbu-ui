import _merge from 'lodash/merge';
import { background, color, size } from './system-props';

export const systemProps = _merge({}, color, background, size);

export const isStyleProp = (prop: string) => prop in systemProps;
