import _merge from 'lodash/merge';
import { color } from './system-props';

export const systemProps = _merge({}, color);

export const isStyleProp = (prop: string) => prop in systemProps;
