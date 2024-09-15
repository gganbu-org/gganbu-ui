import type {
  HTMLGganbuUIProps,
  VariantProps,
  SystemProps,
} from '@gganbu-org/styled';

export interface ButtonWrapperProps {
  condition: boolean;
  wrapper: (children: JSX.Element) => JSX.Element;
  children: JSX.Element;
}

export interface ButtonIconProps extends HTMLGganbuUIProps<'span'> {
  /**
   * The child Node
   */
  children?: React.ReactNode;
  /**
   * The button start icon.
   */
  mr?: SystemProps['marginRight'];
  /**
   * The button end icon.
   */
  ml?: SystemProps['marginLeft'];
}

interface Props extends HTMLGganbuUIProps<'button'> {
  /**
   * The child Node
   */
  children?: React.ReactNode;
  /**
   * The button start icon.
   */
  startIcon?: React.ReactNode;
  /**
   * The button end icon.
   */
  endIcon?: React.ReactNode;
  /**
   * The spacing of the icon
   * @default "1"
   */
  iconSpacing?: SystemProps['marginLeft'];
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

export interface ButtonProps extends Props, VariantProps<'button'> {}
