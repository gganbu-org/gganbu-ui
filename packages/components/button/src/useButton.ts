import { cloneElement, isValidElement } from 'react';
import { gb, useTheme } from '@gganbu-org/styled';
import { useRipple } from '@gganbu-org/ripple';
import { chain } from '@gganbu-org/utils';
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
    variant = 'solid',
    theme = 'primary',
    size = 'md',
    startIcon: startIconProp,
    endIcon: endIconProp,
    iconSpacing = '1',
    isDisabled = false,
    isLoading = false,
    fullWidth = false,
    spinner,
    onClick: rawOnClick,
    ...rest
  } = props;
  const { onRippleClickHandler, onClearRipple, ripples } = useRipple();

  const Component = gb.button;
  const disabled = isDisabled || isLoading;

  const startIcon = createCloneIcon(startIconProp);
  const endIcon = createCloneIcon(endIconProp);

  const classes = useTheme('button', { variant, theme, size, fullWidth });

  const getButtonProps = () => ({
    _themeClasses: classes,
    disabled,
    onClick: chain(rawOnClick, onRippleClickHandler),
    type: 'button' as const,
    ...rest,
  });

  const getRippleProps = () => ({ ripples, onClear: onClearRipple });

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
    getRippleProps,
  };
};

export default useButton;
