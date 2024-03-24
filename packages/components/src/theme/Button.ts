import { ThemePropsWithSwitcher } from '@danji/styled';

const colorScheme = {
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
  },
  md: {
    minW: 80,
    paddingLeft: '1rem',
    paddingRight: '1rem',
    h: 40,
    fontSize: 'md',
    lineHeight: 'sm',
  },
  lg: {
    minW: 96,
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    h: 48,
    fontSize: 'lg',
    lineHeight: 'lg',
  },
};

const variants = {
  solid: ({ theme, switcher: s }: ThemePropsWithSwitcher) => {
    const c = colorScheme[theme as Theme];
    const defaultBg = s(`${c}.500`, `${c}.300`);

    return {
      color: 'text.primary',
      bg: defaultBg,
      '&:hover': {
        bg: s(`${c}.600`, `${c}.400`),
        '&:disabled': {
          bg: defaultBg,
        },
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

export type Theme = keyof typeof colorScheme;
export type Size = keyof typeof sizes;
export type Variant = keyof typeof variants;
