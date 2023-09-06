import { getColorByType } from '../Button/button.utils';
import { Type } from '../Button/button.types';

const variantSolid = (type: Type) => {
  const c = getColorByType(type);

  return {
    bg: `${c}.500`,
    color: `white`,
    '&:hover': {
      backgroundColor: `${c}.600`,
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
