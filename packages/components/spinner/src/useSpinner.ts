import { gb } from '@gganbu/styled';
import { SpinnerProps } from './Spinner.types';
import { useThemeStyles } from '../../src/hooks';

const useSpinner = (props: SpinnerProps) => {
  const { size = 'md', theme = 'primary', label, ...rest } = props;

  const Component = gb.div;
  const themeStyles = useThemeStyles('Spinner', { size, theme });

  const getSpinnerProps = () => ({
    _styles: themeStyles,
    ...rest,
  });

  return {
    Component,
    getSpinnerProps,
    label,
  };
};

export default useSpinner;
