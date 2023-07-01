import { forwardRef } from 'react';
import { dj } from '@danji/styled';
import { ButtonOptions } from './button.types';
import { SIZES } from './button.constants';

const Button = forwardRef<HTMLButtonElement, ButtonOptions>((props, ref) => {
  const { children, size = 'md' } = props;

  const sizeStyles = SIZES[size];
  const styles = [sizeStyles];

  return (
    <dj.button styles={styles} ref={ref}>
      {children}
    </dj.button>
  );
});

export default Button;
