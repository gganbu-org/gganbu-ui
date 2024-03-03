import { ThemePropsWithColorTheme } from '@danji/styled';

const colors = {
  primary: 'blue',
  secondary: 'purple',
};

const sizes = {
  sm: {
    minW: 64,
    paddingLeft: '0.75rem',
    paddingRight: '0.75rem',
    h: 32,
    fontSize: 'sm',
    lineHeight: 'sm',
    gap: '0.5rem',
  },
  md: {
    minW: 80,
    paddingLeft: '1rem',
    paddingRight: '1rem',
    h: 40,
    fontSize: 'md',
    lineHeight: 'sm',
    gap: '0.5rem',
  },
  lg: {
    minW: 96,
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    h: 48,
    fontSize: 'lg',
    lineHeight: 'lg',
    gap: '0.75rem',
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
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
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
