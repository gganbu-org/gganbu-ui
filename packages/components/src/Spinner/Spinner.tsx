import { forwardRef } from '@danji/styled';
import useSpinner from './useSpinner';
import { SpinnerProps } from './spinner.types';

const Spinner = forwardRef<'div', SpinnerProps>((props, ref) => {
  const { Component, label, getSpinnerProps } = useSpinner(props);

  return (
    <Component ref={ref} {...getSpinnerProps()}>
      {label}
    </Component>
  );
});

Spinner.displayName = 'Spinner';

export default Spinner;
