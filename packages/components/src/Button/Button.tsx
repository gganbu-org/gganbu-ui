import { forwardRef } from 'react';
import useButton from './useButton';
import { ButtonProps } from './button.types';

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { Component, getButtonProps, buttonContent, isLoading, spinner } =
    useButton(props);
  return (
    <Component ref={ref} {...getButtonProps()}>
      {isLoading && spinner}
      {buttonContent}
    </Component>
  );
});

export default Button;
