import { ThemePropsWithColorTheme, keyframes } from '@danji/styled';

const spin = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

const colors = {
  primary: 'blue',
  secondary: 'purple',
  success: 'green',
  warning: 'yellow',
  danger: 'red',
  current: 'currentColor',
};

const sizes = {
  sm: {
    width: '1em',
    height: '1em',
    borderWidth: '0.125rem',
  },
  md: {
    width: '1.5em',
    height: '1.5em',
    borderWidth: '0.1875rem',
  },
  lg: {
    width: '2em',
    height: '2em',
    borderWidth: '0.225rem',
  },
};

const variants = {
  solid: ({ color, switcher: s }: ThemePropsWithColorTheme) => {
    const c = colors[color as Color];

    if (c === colors.current) return c;

    return {
      color: s(`${c}.500`, `${c}.300`),
    };
  },
};

const baseStyles = {
  display: 'inline-block',
  borderRadius: '50%',
  borderTopColor: 'transparent',
  borderRightColor: 'transparent',
  borderStyle: 'solid',
  animation: `${spin} 0.75s linear infinite`,
};

export const spinnerTheme = {
  variants,
  sizes,
  baseStyles,
};

export type Color = keyof typeof colors;
export type Size = keyof typeof sizes;
