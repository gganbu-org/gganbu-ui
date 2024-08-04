import { gb, forwardRef } from '@gganbu-org/styled';
import { Spinner } from '@gganbu-org/spinner';
import { Ripple } from '@gganbu-org/ripple';
import useButton from './useButton';
import type {
  ButtonProps,
  ButtonWrapperProps,
  ButtonIconProps,
} from './Button.types';

function ConditionalWrapper({
  condition,
  wrapper,
  children,
}: ButtonWrapperProps) {
  return condition ? wrapper(children) : children;
}

function ButtonIcon(props: ButtonIconProps) {
  const { children, ml, mr, ...rest } = props;

  return (
    <gb.span
      display="inline-flex"
      alignSelf="center"
      flexShrink="0"
      marginLeft={ml}
      marginRight={mr}
      {...rest}
    >
      {children}
    </gb.span>
  );
}

const Button = forwardRef<'button', ButtonProps>((props, ref) => {
  const {
    Component,
    getButtonProps,
    startIcon,
    children,
    endIcon,
    isLoading,
    iconSpacing,
    spinnerSize,
    spinner = <Spinner size={spinnerSize} theme="current" />,
    getRippleProps,
  } = useButton(props);

  return (
    <Component ref={ref} {...getButtonProps()}>
      <ConditionalWrapper
        condition={isLoading}
        wrapper={(buttonContent) => (
          <>
            <gb.span
              display="inline-flex"
              alignSelf="center"
              flexShrink="0"
              position="absolute"
            >
              {spinner}
            </gb.span>
            <gb.span opacity="0">{buttonContent}</gb.span>
          </>
        )}
      >
        <>
          {startIcon && <ButtonIcon mr={iconSpacing}>{startIcon}</ButtonIcon>}
          {children}
          {endIcon && <ButtonIcon ml={iconSpacing}>{endIcon}</ButtonIcon>}
          <Ripple {...getRippleProps()} />
        </>
      </ConditionalWrapper>
    </Component>
  );
});

Button.displayName = 'Button';

export default Button;
