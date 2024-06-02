import { ThemePropsWithUtils } from '../hooks';

const themes = {
  primary: 'blue',
  secondary: 'purple',
  success: 'green',
  warning: 'yellow',
  danger: 'red',
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
  solid: ({ theme, switcher: s }: ThemePropsWithUtils) => {
    const c = themes[theme as Theme];
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
  bordered: ({ theme, switcher: s, colorAlpha }: ThemePropsWithUtils) => {
    const c = themes[theme as Theme];
    const defaultBg = s(`${c}.500`, `${c}.300`);

    return {
      color: defaultBg,
      bg: 'transparent',
      borderColor: defaultBg,
      borderWidth: '0.125rem',

      '&:hover': {
        opacity: 0.8,

        '&:disabled': {
          opacity: 0.5,
        },
      },
      '&:active': {
        bg: s(`${c}.100`, colorAlpha(`${c}.100`, 0.2)),
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

export type Theme = keyof typeof themes;
export type Size = keyof typeof sizes;
export type Variant = keyof typeof variants;
