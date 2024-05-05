import { forwardRef } from '@danji/styled';
import useButton from './useButton';
import { ButtonProps } from './button.types';

const Button = forwardRef<'button', ButtonProps>((props, ref) => {
  const { Component, getButtonProps, buttonContent, isLoading, spinner } =
    useButton(props);

  return (
    <Component ref={ref} {...getButtonProps()}>
      {isLoading && spinner}
      {buttonContent}
    </Component>
  );
});

Button.displayName = 'Button';

export default Button;
