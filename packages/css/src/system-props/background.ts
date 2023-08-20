import { scales as s } from './scales';

export const background = {
  backgroundColor: s.colors('backgroundColor'),
};

Object.assign(background, {
  bg: background.backgroundColor,
});
