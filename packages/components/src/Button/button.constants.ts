import { Size, SizeDetail } from './button.types';

export const SIZES: Record<Size, Record<SizeDetail, string>> = {
  sm: {
    minWidth: '80px',
    height: '40px',
    width: '80px',
    padding: '5px',
  },
  md: {
    minWidth: '150px',
    height: '45px',
    width: '150px',
    padding: '7px',
  },
  lg: {
    minWidth: '200px',
    height: '55px',
    width: '200px',
    padding: '10px',
  },
};

export const TEMP = 'prefer default export';
