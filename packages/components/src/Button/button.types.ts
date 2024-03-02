import { Color, Size, Variant } from '../theme/Button';

export interface ButtonProps extends ButtonThemeProps {
  /**
   * The child Node
   */
  children?: React.ReactNode;
}

interface ButtonThemeProps {
  /**
   * The color of the Button
   * @default primary
   */
  color?: Color;
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
