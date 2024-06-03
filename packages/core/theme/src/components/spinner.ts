import { keyframes } from '@gganbu-org/styled';
import { ThemePropsWithUtils } from '../hooks';

const spin = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

const themes = {
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
    width: '1.75em',
    height: '1.75em',
    borderWidth: '0.225rem',
  },
};

const variants = {
  solid: ({ theme }: ThemePropsWithUtils) => {
    const c = themes[theme as SpinnerTheme];

    if (c === themes.current) {
      return {
        color: c,
      };
    }

    return {
      color: `background.base.${theme}`,
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

export type SpinnerTheme = keyof typeof themes;
export type SpinnerSize = keyof typeof sizes;
