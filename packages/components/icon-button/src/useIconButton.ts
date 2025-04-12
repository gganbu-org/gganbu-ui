import { cloneElement, isValidElement } from 'react';
import { gb, useTheme } from '@gganbu-org/styled';
import { useRipple } from '@gganbu-org/ripple';
import { chain } from '@gganbu-org/utils';
import type { IconButtonProps } from './IconButton.types';

const createCloneIcon = (icon?: React.ReactNode) =>
  isValidElement(icon)
    ? cloneElement(icon, {
        // @ts-ignore
        'aria-hidden': true,
        focusable: false,
      })
    : icon;

const useButton = (props: IconButtonProps) => {
  const {
    children,
    variant = 'solid',
    theme = 'primary',
    size = 'md',
    isDisabled = false,
    isLoading = false,
    rounded = false,
    spinner,
    onClick: rawOnClick,
    ...rest
  } = props;
  const { onRippleClickHandler, onClearRipple, ripples } = useRipple();

  const Component = gb.button;
  const disabled = isDisabled || isLoading;

  const classes = useTheme('iconButton', { variant, theme, size, rounded });

  const getIconButtonProps = () => ({
    _themeClasses: classes,
    disabled,
    onClick: chain(rawOnClick, onRippleClickHandler),
    type: 'button' as const,
    ...rest,
  });

  const Icon = createCloneIcon(children);

  const getRippleProps = () => ({ ripples, onClear: onClearRipple });

  return {
    Component,
    getIconButtonProps,
    children: Icon,
    isLoading,
    spinner,
    spinnerSize: size,
    getRippleProps,
  };
};

export default useButton;
