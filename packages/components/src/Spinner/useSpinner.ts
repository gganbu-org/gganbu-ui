import { dj, useThemeStyles } from '@danji/styled';
import { SpinnerProps } from './spinner.types';

const useSpinner = (props: SpinnerProps) => {
  const { size = 'md', color, ...rest } = props;

  const Component = dj.div;

  const styles = {
    ...useThemeStyles('Spinner', { size }),
    color,
  };

  const getSpinnerProps = () => ({
    styles,
    rest,
  });

  return {
    Component,
    getSpinnerProps,
  };
};

export default useSpinner;
