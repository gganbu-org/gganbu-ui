import { cloneElement, createElement, isValidElement } from 'react';
import { dj, useThemeStyles } from '@danji/styled';
import { ButtonProps } from './button.types';

const createCloneIcon = (icon: React.ReactNode) =>
  isValidElement(icon)
    ? createElement(
        dj.span,
        {
          styles: {
            display: 'inline-flex',
            flexShrink: 0,
          },
        },
        cloneElement(icon, {
          // @ts-ignore
          'aria-hidden': true,
          focusable: false,
        }),
      )
    : null;

const useButton = (props: ButtonProps) => {
  const {
    children,
    color = 'primary',
    size = 'md',
    variant = 'solid',
    startIcon: startIconProp,
    endIcon: endIconProp,
    isDisabled = false,
    isLoading = false,
    ...rest
  } = props;

  const Component = dj.button;
  const styles = useThemeStyles('Button', { color, variant, size });

  const startIcon = createCloneIcon(startIconProp);
  const endIcon = createCloneIcon(endIconProp);

  const disabled = isDisabled || isLoading;

  const getButtonProps = () => ({
    styles,
    disabled,
    rest,
  });

  return {
    Component,
    getButtonProps,
    startIcon,
    endIcon,
    children,
  };
};

export default useButton;
