import { useThemeStyles } from '@danji/styled/theme';
import { dj } from '@danji/styled';
import { ButtonProps } from './button.types';

const useButton = (props: ButtonProps) => {
  const {
    children,
    color = 'primary',
    size = 'md',
    variant = 'solid',
    ...rest
  } = props;

  const styles = useThemeStyles('Button', { color, variant, size });

  return {
    Component: dj.button,
    styles,
    children,
    rest,
  };
};

export default useButton;
