import { Size } from '../theme/Spinner';

export interface SpinnerProps extends SpinnerThemeProps {
  /**
   * The color of the spinner
   */
  color?: string;
}

interface SpinnerThemeProps {
  /**
   * The size of the spinner
   * @default md
   */
  size?: Size;
}
