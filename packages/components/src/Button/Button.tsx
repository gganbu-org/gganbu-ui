import { forwardRef } from 'react';
import useButton from './useButton';
import { ButtonProps } from './button.types';

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { Component, getButtonProps, startIcon, endIcon, children } =
    useButton(props);

  return (
    <Component ref={ref} {...getButtonProps()}>
      {startIcon}
      {children}
      {endIcon}
    </Component>
  );
});

export default Button;
