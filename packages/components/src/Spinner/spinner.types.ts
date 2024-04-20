import { HTMLDjUIProps } from '@danji/styled';
import { Theme, Size } from '../theme/Spinner';

interface Props extends SpinnerThemeProps {
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

export type SpinnerProps = Props & HTMLDjUIProps<'div'>;
