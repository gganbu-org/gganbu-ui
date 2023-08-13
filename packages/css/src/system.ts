import _merge from 'lodash/merge';
import { background, color } from './system-props';

export const systemProps = _merge({}, color, background);

export const isStyleProp = (prop: string) => prop in systemProps;
