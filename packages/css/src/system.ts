import _merge from 'lodash/merge';
import { aliases, background, color } from './system-props';

export const systemProps = _merge({}, color, background);

export const isStyleProp = (prop: string) => prop in systemProps;

export { aliases };
