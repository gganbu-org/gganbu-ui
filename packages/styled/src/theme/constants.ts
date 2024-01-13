import { Theme } from '@danji/components';
import { colors } from '../variables';

export const DJ_DEFAULT_THEME = {
  colors,
  components: Theme,
} as const;

export const THEME = {
  KEY: 'dj',
  DEFAULT_KEY: '__default',
} as const;
