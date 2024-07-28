import _merge from 'lodash.merge';
import aliases from './aliases';
import background from './background';
import color from './color';
import content from './content';
import flex from './flex';
import position from './position';
import space from './space';
import typography from './typography';
import utility from './utility';

export const systemProps = _merge(
  {},
  aliases,
  background,
  color,
  typography,
  content,
  flex,
  position,
  space,
  utility,
);

export const stylePropList = Object.keys(systemProps);
