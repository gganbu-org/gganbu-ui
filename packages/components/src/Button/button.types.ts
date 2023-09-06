export type Size = 'sm' | 'md' | 'lg';
export type Type = 'primary' | 'secondary';
export type Variant = 'solid';
export type SizeDetail = 'minWidth' | 'height' | 'width' | 'padding';

export interface ButtonOptions {
  /**
   * The child Node
   */
  children: React.ReactNode;
  /**
   * The size of the Button
   * @default md
   */
  size?: Size;
  /**
   * The size of the Button
   * @default primary
   */
  type?: Type;
  /**
   * The size of the Button
   * @default solid
   */
  variant?: Variant;
}
