import { ThemePropsWithColorTheme } from '@danji/styled';
import { createColorByColorTheme } from './theme.utils';
import { getColorByType } from '../Button/button.utils';
import { Type } from '../Button/button.types';

const variantSolid = (themeProps: ThemePropsWithColorTheme) => {
  const { type, colorTheme } = themeProps;
  const c = getColorByType(type as Type);
  const getColor = createColorByColorTheme(colorTheme);

  return {
    bg: getColor(`${c}.500`, `${c}.300`),
    color: `white`,
    '&:hover': {
      backgroundColor: getColor(`${c}.600`, `${c}.400`),
    },
  };
};

export const variants = {
  solid: variantSolid,
};

export const sizes = {
  sm: {
    minW: 80,
    h: 40,
    w: 80,
    padding: 5,
  },
  md: {
    minW: 150,
    h: 45,
    w: 150,
    padding: 7,
  },
  lg: {
    minW: 200,
    h: 55,
    w: 200,
    padding: 10,
  },
};

export const buttonTheme = {
  variants,
  sizes,
};
