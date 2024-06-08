import { cloneElement, isValidElement } from 'react';
import { gb, useThemeStyles } from '@gganbu-org/styled';
import type { ButtonProps } from './Button.types';

const createCloneIcon = (icon?: React.ReactNode) =>
  isValidElement(icon)
    ? cloneElement(icon, {
        // @ts-ignore
        'aria-hidden': true,
        focusable: false,
      })
    : icon;

const useButton = (props: ButtonProps) => {
  const {
    children,
    theme = 'primary',
    size = 'md',
    variant = 'solid',
    startIcon: startIconProp,
    endIcon: endIconProp,
    iconSpacing = '0.5rem',
    isDisabled = false,
    isLoading = false,
    spinner,
    ...rest
  } = props;

  const Component = gb.button;
  const disabled = isDisabled || isLoading;
  const themeStyles = useThemeStyles('Button', { theme, size, variant });

  const startIcon = createCloneIcon(startIconProp);
  const endIcon = createCloneIcon(endIconProp);

  const getButtonProps = () => ({
    _styles: themeStyles,
    disabled,
    ...rest,
  });

  return {
    Component,
    getButtonProps,
    startIcon,
    children,
    endIcon,
    iconSpacing,
    isLoading,
    spinner,
    spinnerSize: size,
  };
};

export default useButton;
