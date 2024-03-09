import { Size } from '../theme/Spinner';

export interface SpinnerProps extends SpinnerThemeProps {
  /**
   * The color of the spinner
   */
  color?: string;
}

interface SpinnerThemeProps {
  /**
   * The size of the Spinner
   * @default md
   */
  size?: Size;
}
