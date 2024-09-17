import { gb, forwardRef } from '@gganbu-org/styled';
import useSpinner from './useSpinner';
import type { SpinnerProps } from './Spinner.types';

const Spinner = forwardRef<'div', SpinnerProps>((props, ref) => {
  const { Component, label, getSpinnerProps } = useSpinner(props);

  return (
    <Component ref={ref} {...getSpinnerProps()}>
      {label && <gb.span srOnly>{label}</gb.span>}
    </Component>
  );
});

Spinner.displayName = 'Spinner';

export default Spinner;
