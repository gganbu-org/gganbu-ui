import { gb, useThemeStyles } from '@gganbu-org/styled';
import type { SpinnerProps } from './Spinner.types';

const useSpinner = (props: SpinnerProps) => {
  const { size = 'md', theme = 'primary', label, ...rest } = props;

  const Component = gb.div;
  const themeStyles = useThemeStyles('Spinner', { size, theme });

  const getSpinnerProps = () => ({
    _styles: themeStyles,
    ...rest,
    animateSpin: true,
  });

  return {
    Component,
    getSpinnerProps,
    label,
  };
};

export default useSpinner;
