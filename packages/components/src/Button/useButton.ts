import { cloneElement, createElement, isValidElement } from 'react';
import { dj, useThemeStyles } from '@danji/styled';
import { Spinner } from '@danji/components';
import { Size } from '../theme/Button';
import { ButtonProps } from './button.types';

const createContent = (isLoading: boolean, children: React.ReactNode) =>
  isLoading
    ? createElement(
        dj.span,
        {
          _styles: {
            opacity: 0,
          },
        },
        children,
      )
    : children;

const createSpinner = (size: Size, spinner?: React.ReactNode) =>
  createElement(
    dj.div,
    {
      _styles: {
        position: 'absolute',
        display: 'inline-flex',
        flexShrink: 0,
      },
    },
    isValidElement(spinner)
      ? spinner
      : createElement(Spinner, {
          size,
          color: 'current',
        }),
  );

const createCloneIcon = (icon: React.ReactNode) =>
  isValidElement(icon)
    ? createElement(
        dj.span,
        {
          _styles: {
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
    spinner: spinnnerProp,
    ...rest
  } = props;

  const Component = dj.button;
  const styles = useThemeStyles('Button', { color, variant, size });

  const startIcon = createCloneIcon(startIconProp);
  const endIcon = createCloneIcon(endIconProp);

  const spinner = createSpinner(size, spinnnerProp);

  const disabled = isDisabled || isLoading;

  const getButtonProps = () => ({
    _styles: styles,
    disabled,
    rest,
  });

  const buttonContent = createContent(isLoading, [
    startIcon,
    children,
    endIcon,
  ]);

  return {
    Component,
    getButtonProps,
    buttonContent,
    isLoading,
    spinner,
  };
};

export default useButton;
