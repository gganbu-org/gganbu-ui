import { forwardRef } from 'react';
import { ButtonOptions } from './button.types';
import { SIZES } from './button.constants';

const Button = forwardRef<HTMLButtonElement, ButtonOptions>((props, ref) => {
  const { children, size = 'md' } = props;

  const tempSize = SIZES[size];

  return (
    <button style={tempSize} type="button" ref={ref}>
      {children}
    </button>
  );
});

export default Button;
