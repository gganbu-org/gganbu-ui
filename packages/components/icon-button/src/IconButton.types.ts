import type { HTMLGganbuUIProps, VariantProps } from '@gganbu-org/styled';

export interface ButtonWrapperProps {
  condition: boolean;
  wrapper: (children: JSX.Element) => JSX.Element;
  children: JSX.Element;
}

interface Props extends HTMLGganbuUIProps<'button'> {
  /**
   * The child Node
   */
  children?: React.ReactNode;
  /**
   * Whether the button show a loading spinner.
   * @default false
   */
  isLoading?: boolean;
  /**
   * Whether the button disabled.
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Replace content with spinner when isLoading is set to true.
   */
  spinner?: React.ReactNode;
}

export interface IconButtonProps extends Props, VariantProps<'iconButton'> {}
