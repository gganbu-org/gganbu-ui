import React, { forwardRef } from 'react';

interface Props {
  children?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { children } = props;

  return (
    <button type="button" ref={ref}>
      {children}
    </button>
  );
});

export default Button;
