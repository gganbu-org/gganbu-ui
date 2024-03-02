import { forwardRef } from 'react';
import { dj, useThemeStyles } from '@danji/styled';
import { ButtonProps } from './button.types';

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, color = 'primary', variant = 'solid', size = 'md' } = props;

  const buttonThemeStyles = useThemeStyles('Button', { color, variant, size });

  return (
    <dj.button styles={buttonThemeStyles} ref={ref}>
      {children}
    </dj.button>
  );
});

export default Button;
