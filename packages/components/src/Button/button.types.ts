export type Size = 'sm' | 'md' | 'lg';
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
}
