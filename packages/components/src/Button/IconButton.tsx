import { forwardRef } from 'react';
import Button from './Button';
import { ButtonOptions } from './button.types';

const IconButton = forwardRef<HTMLButtonElement, ButtonOptions>(
  (props, ref) => {
    const { children } = props;

    return <Button ref={ref}>{children}</Button>;
  },
);

export default IconButton;
