import { forwardRef } from 'react';
import Button from './Button';

interface Props {
  children?: React.ReactNode;
}

const IconButton = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { children } = props;

  return <Button ref={ref}>{children}</Button>;
});

export default IconButton;
