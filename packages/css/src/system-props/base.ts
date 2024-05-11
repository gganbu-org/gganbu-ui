import _merge from 'lodash.merge';
import aliases from './aliases';
import background from './background';
import color from './color';
import size from './size';
import typography from './typography';

export const systemProps = _merge(
  {},
  aliases,
  background,
  color,
  size,
  typography,
);

export const stylePropList = Object.keys(systemProps);
