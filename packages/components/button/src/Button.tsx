import { type HTMLGganbuUIProps, gb, forwardRef } from '@gganbu-org/styled';
import { Spinner } from '@gganbu-org/spinner';
import useButton from './useButton';
import type { ButtonProps, ButtonWrapperProps } from './Button.types';

function Wrapper({ condition, wrapper, children }: ButtonWrapperProps) {
  return condition ? wrapper(children) : children;
}

function ButtonIcon(props: HTMLGganbuUIProps<'span'>) {
  const { children, ...rest } = props;

  return (
    <gb.span display="inline-flex" alignSelf="center" flexShrink={0} {...rest}>
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
    iconSpacing,
    isLoading,
    spinnerSize,
    spinner = <Spinner size={spinnerSize} theme="current" />,
  } = useButton(props);

  return (
    <Component ref={ref} {...getButtonProps()}>
      {isLoading && (
        <gb.span
          display="inline-flex"
          alignSelf="center"
          flexShrink={0}
          position="absolute"
        >
          {spinner}
        </gb.span>
      )}
      <Wrapper
        condition={isLoading}
        wrapper={(buttonContent) => (
          <gb.span opacity={0}>{buttonContent}</gb.span>
        )}
      >
        <>
          {startIcon && <ButtonIcon mr={iconSpacing}>{startIcon}</ButtonIcon>}
          {children}
          {endIcon && <ButtonIcon ml={iconSpacing}>{endIcon}</ButtonIcon>}
        </>
      </Wrapper>
    </Component>
  );
});

Button.displayName = 'Button';

export default Button;
