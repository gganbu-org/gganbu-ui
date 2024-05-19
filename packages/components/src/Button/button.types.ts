import { HTMLDjUIProps } from '@danji/styled';
import { Theme, Size, Variant } from '../theme/Button';

interface Props extends HTMLDjUIProps<'button'> {
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
   * @default 0.5rem
   */
  iconSpacing?: string;
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

interface ButtonThemeProps {
  /**
   * The color theme of the Button
   * @default primary
   */
  theme?: Theme;
  /**
   * The size of the Button
   * @default md
   */
  size?: Size;
  /**
   * The variant of the Button
   * @default solid
   */
  variant?: Variant;
}

export interface ButtonProps extends Props, ButtonThemeProps {}
