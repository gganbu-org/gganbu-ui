import { ThemePropsWithColorTheme } from '@danji/styled';

const colors = {
  primary: 'blue',
  secondary: 'purple',
};

const sizes = {
  sm: {
    minW: 64,
    'padding-left': '0.75rem',
    'padding-right': '0.75rem',
    h: 32,
    fontSize: 'sm',
    lineHeight: 'sm',
  },
  md: {
    minW: 80,
    'padding-left': '1rem',
    'padding-right': '1rem',
    h: 40,
    fontSize: 'md',
    lineHeight: 'sm',
  },
  lg: {
    minW: 96,
    'padding-left': '1.5rem',
    'padding-right': '1.5rem',
    h: 48,
    fontSize: 'lg',
    lineHeight: 'lg',
  },
};

const variants = {
  solid: ({ color, switcher: s }: ThemePropsWithColorTheme) => {
    const c = colors[color as Color] || colors.primary;

    return {
      color: 'text.primary',
      bg: s(`${c}.500`, `${c}.300`),
      '&:hover': {
        bg: s(`${c}.600`, `${c}.400`),
      },
      '&:active': {
        bg: s(`${c}.700`, `${c}.500`),
      },
    };
  },
};

const baseStyles = {
  borderRadius: '0.325rem',
  cursor: 'pointer',
  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
};

export const buttonTheme = {
  variants,
  sizes,
  baseStyles,
};

export type Color = keyof typeof colors;
export type Size = keyof typeof sizes;
export type Variant = keyof typeof variants;
