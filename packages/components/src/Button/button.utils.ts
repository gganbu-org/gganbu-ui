import { Type } from './button.types';

export const getColorByType = (type: Type) => {
  let color;

  switch (type) {
    case 'secondary':
      color = 'purple';
      break;
    case 'primary':
    default:
      color = 'blue';
      break;
  }

  return color;
};
