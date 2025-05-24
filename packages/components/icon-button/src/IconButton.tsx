import { Ripple } from '@gganbu-org/ripple';
import { Spinner } from '@gganbu-org/spinner';
import { forwardRef } from '@gganbu-org/styled';
import useIconButton from './useIconButton';
import { IconButtonProps } from './IconButton.types';

const IconButton = forwardRef<'button', IconButtonProps>((props, ref) => {
  const {
    Component,
    getIconButtonProps,
    children,
    isLoading,
    spinnerSize,
    spinner = <Spinner size={spinnerSize} theme="current" />,
    getRippleProps,
  } = useIconButton(props);

  return (
    <Component ref={ref} {...getIconButtonProps()}>
      {isLoading && spinner}
      {!isLoading && children}
      <Ripple {...getRippleProps()} />
    </Component>
  );
});

IconButton.displayName = 'IconButton';

export default IconButton;
