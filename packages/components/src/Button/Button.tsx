import { forwardRef } from 'react';
import { dj } from '@danji/styled';
import { ButtonOptions } from './button.types';
import Components from '../theme';

const Button = forwardRef<HTMLButtonElement, ButtonOptions>((props, ref) => {
  const { children, type = 'primary', variant = 'solid', size = 'md' } = props;

  const baseStyleProps = { type, variant, size };

  const sizeStyles = Components.Button.sizes[baseStyleProps.size];
  const colorStyles = Components.Button.variants[baseStyleProps.variant](
    baseStyleProps.type,
  );

  const styles = {
    borderRadius: '0.325rem',
    cursor: 'pointer',
    ...sizeStyles,
    ...colorStyles,
  };

  return (
    <dj.button styles={styles} ref={ref}>
      {children}
    </dj.button>
  );
});

export default Button;
