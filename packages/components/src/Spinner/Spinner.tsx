import { forwardRef } from 'react';
import useSpinner from './useSpinner';
import { SpinnerProps } from './spinner.types';

const Spinner = forwardRef<HTMLDivElement, SpinnerProps>((props, ref) => {
  const { Component, label, getSpinnerProps } = useSpinner(props);

  return (
    <Component ref={ref} {...getSpinnerProps()}>
      {label}
    </Component>
  );
});

export default Spinner;
