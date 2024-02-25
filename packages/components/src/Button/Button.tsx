import { forwardRef } from 'react';
import { dj, useThemeStyles } from '@danji/styled';
import { ButtonOptions } from './button.types';

const Button = forwardRef<HTMLButtonElement, ButtonOptions>((props, ref) => {
  const { children, type = 'primary', variant = 'solid', size = 'md' } = props;

  const buttonThemeStyles = useThemeStyles('Button', { type, variant, size });

  return (
    <dj.button styles={buttonThemeStyles} ref={ref}>
      {children}
    </dj.button>
  );
});

export default Button;
