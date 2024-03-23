import { ThemePropsWithSwitcher, keyframes } from '@danji/styled';

const spin = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

const colorScheme = {
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
  solid: ({ theme, switcher: s }: ThemePropsWithSwitcher) => {
    const c = colorScheme[theme as Theme];

    if (c === colorScheme.current) return c;

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

export type Theme = keyof typeof colorScheme;
export type Size = keyof typeof sizes;
