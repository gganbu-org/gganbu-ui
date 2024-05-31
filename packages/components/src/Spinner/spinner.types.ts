import { HTMLGganbuUIProps } from '@gganbu/styled';
import { Theme, Size } from '../theme/Spinner';

interface Props extends HTMLGganbuUIProps<'div'> {
  /**
   * Place hidden label text inside the spinner for screen reader users.
   */
  label?: string;
}

interface SpinnerThemeProps {
  /**
   * The color theme of the spinner
   * @default primary
   */
  theme?: Theme;
  /**
   * The size of the spinner
   * @default md
   */
  size?: Size;
}

export interface SpinnerProps extends Props, SpinnerThemeProps {}
