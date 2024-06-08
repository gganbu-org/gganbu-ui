export interface ThemeProps {
  theme?: string;
  size?: string;
  variant?: string;
}

export type ThemePropsWithUtils = ThemeProps & {
  switcher: (light: string, black: string) => string;
  colorAlpha: (color: string, opacity: number) => string;
};
