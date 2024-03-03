import { forwardRef } from 'react';
import useButton from './useButton';
import { ButtonProps } from './button.types';

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { Component, styles, startIcon, endIcon, children, rest } = useButton({
    ...props,
  });

  return (
    <Component styles={styles} ref={ref} {...rest}>
      {startIcon}
      {children}
      {endIcon}
    </Component>
  );
});

export default Button;
