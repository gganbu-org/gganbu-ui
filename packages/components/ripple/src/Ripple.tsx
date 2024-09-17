import { gb } from '@gganbu-org/styled';
import type { RippleProps } from './Ripple.types';

const RIPPLE_COLOR = 'currentColor';

const Ripple = ({
  ripples,
  color = RIPPLE_COLOR,
  style,
  onClear,
}: RippleProps) => {
  return ripples.map(({ key, x, y, size }) => (
    <gb.span
      key={key}
      onAnimationEnd={() => onClear(key)}
      position="absolute"
      style={{
        backgroundColor: color,
        inset: 0,
        zIndex: 0,
        top: y,
        left: x,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '100%',
        pointerEvents: 'none',
        overflow: 'hidden',
        animationName: 'ripple',
        animationDuration: '550ms',
        animationFillMode: 'forwards',
        transform: 'scale(0)',
        opacity: 0.35,
        ...style,
      }}
    />
  ));
};

export default Ripple;
