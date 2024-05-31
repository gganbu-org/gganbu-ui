import { dj } from '@danji/styled';
import { SpinnerProps } from './spinner.types';
import { useThemeStyles } from '../hooks';

const useSpinner = (props: SpinnerProps) => {
  const { size = 'md', theme = 'primary', label, ...rest } = props;

  const Component = dj.div;
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
