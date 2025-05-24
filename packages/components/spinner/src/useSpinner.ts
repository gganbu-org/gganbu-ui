import { gb, useTheme } from '@gganbu-org/styled';
import type { SpinnerProps } from './Spinner.types';

const useSpinner = (props: SpinnerProps) => {
  const { size = 'md', theme = 'primary', label, ...rest } = props;

  const Component = gb.div;
  const classes = useTheme('spinner', { theme, size });

  const getSpinnerProps = () => ({
    _themeClasses: classes,
    ...rest,
  });

  return {
    Component,
    getSpinnerProps,
    label,
  };
};

export default useSpinner;
