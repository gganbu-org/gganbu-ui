import { HTMLDjUIProps, dj, forwardRef } from '@danji/styled';
import useButton from './useButton';
import { ButtonProps } from './button.types';
import { Spinner } from '../Spinner';
import { Wrapper } from '../Wrapper';

function ButtonIcon(props: HTMLDjUIProps<'span'>) {
  const { children, ...rest } = props;

  return (
    <dj.span display="inline-flex" alignSelf="center" flexShrink={0} {...rest}>
      {children}
    </dj.span>
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
        <dj.span
          display="inline-flex"
          alignSelf="center"
          flexShrink={0}
          position="absolute"
        >
          {spinner}
        </dj.span>
      )}
      <Wrapper
        condition={isLoading}
        wrapper={(buttonContent) => (
          <dj.span opacity={0}>{buttonContent}</dj.span>
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
