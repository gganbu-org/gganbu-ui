import { gb } from '@gganbu-org/styled';
import { useThemeStyles } from '@gganbu-org/theme';

import { SpinnerProps } from './Spinner.types';

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
