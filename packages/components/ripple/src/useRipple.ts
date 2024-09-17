import { useState, MouseEvent } from 'react';
import type { RippleElement, UseRippleProps } from './Ripple.types';

const MINIMUM_RIPPLE_SIZE = 50;

const useRipple = (props?: UseRippleProps) => {
  const { rippleSize = MINIMUM_RIPPLE_SIZE } = props || {};
  const [ripples, setRipples] = useState<RippleElement[]>([]);

  const onRippleClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    const trigger = event.currentTarget;
    const { clientHeight, clientWidth } = trigger;
    const { left, top } = trigger.getBoundingClientRect();
    const size = Math.max(clientHeight, clientWidth, rippleSize);
    const x = event.clientX - left - size / 2;
    const y = event.clientY - top - size / 2;

    const newRipple: RippleElement = {
      key: event.timeStamp,
      size,
      x,
      y,
    };

    setRipples((prevRipples) => [...prevRipples, newRipple]);
  };

  const onClearRipple = (currentKey: React.Key) => {
    setRipples((state) =>
      state.filter(
        (previousRipple: RippleElement) => previousRipple.key !== currentKey,
      ),
    );
  };

  return { ripples, onRippleClickHandler, onClearRipple };
};

export default useRipple;
