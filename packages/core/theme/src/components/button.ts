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
  solid: ({ theme }: ThemePropsWithUtils) => {
    const defaultBg = `background.base.${theme}`;

    return {
      color: 'text.primary',
      bg: defaultBg,
      '&:hover': {
        bg: `background.hover.${theme}`,
      },
      '&:active': {
        bg: `background.active.${theme}`,
      },
    };
  },
  bordered: ({ theme, switcher: s, colorAlpha }: ThemePropsWithUtils) => {
    const c = themes[theme as ButtonTheme];
    const defaultBg = `background.base.${theme}`;

    return {
      color: defaultBg,
      bg: 'transparent',
      borderColor: defaultBg,
      borderWidth: '0.125rem',
      '&:hover': {
        opacity: 0.8,
      },
      '&:active': {
        bg: s(`${c}.100`, colorAlpha(`${c}.100`, 0.2)),
      },
    };
  },
  link: ({ theme }: ThemePropsWithUtils) => ({
    color: `background.base.${theme}`,
    bg: 'transparent',
    border: 'transparent',
    padding: 0,
    height: 'auto',
    '&:hover': {
      textDecoration: 'underline',
    },
    '&:active': {
      color: `background.active.${theme}`,
    },
  }),
  ghost: ({ theme, switcher: s, colorAlpha }: ThemePropsWithUtils) => {
    const c = themes[theme as ButtonTheme];

    return {
      color: `background.base.${theme}`,
      bg: 'transparent',
      '&:hover': {
        bg: s(`${c}.100`, colorAlpha(`${c}.300`, 0.1)),
      },
      '&:active': {
        bg: s(`${c}.200`, colorAlpha(`${c}.400`, 0.2)),
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
    pointerEvents: 'none',
  },
};

export const buttonTheme = {
  variants,
  sizes,
  baseStyles,
};

export type ButtonTheme = keyof typeof themes;
export type ButtonSize = keyof typeof sizes;
export type ButtonVariant = keyof typeof variants;
