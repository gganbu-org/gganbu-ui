export interface RippleElement {
  key: React.Key;
  x: number;
  y: number;
  size: number;
}

export interface RippleProps {
  /**
   * The Ripple Element
   */
  ripples: RippleElement[];
  /**
   * The Ripple color.
   */
  color?: string;
  /**
   * The Ripple custom styles.
   */
  style?: React.CSSProperties;
  /**
   * The Ripple clear function.
   */
  onClear: (key: React.Key) => void;
}

export interface UseRippleProps {
  /**
   * The Ripple minimum size.
   */
  rippleSize?: number;
}
