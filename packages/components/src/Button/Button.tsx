import { forwardRef } from 'react';
import { dj, useThemeStyles } from '@danji/styled';
import { ButtonOptions } from './button.types';

const Button = forwardRef<HTMLButtonElement, ButtonOptions>((props, ref) => {
  const { children, type = 'primary', variant = 'solid', size = 'md' } = props;

  const baseStyles = {
    borderRadius: '0.325rem',
    cursor: 'pointer',
  };

  const buttonThemeStyles = useThemeStyles('Button', { type, variant, size });

  const styles = {
    ...baseStyles,
    ...buttonThemeStyles,
  };

  return (
    <dj.button styles={styles} ref={ref}>
      {children}
    </dj.button>
  );
});

export default Button;
