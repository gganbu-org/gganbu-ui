import { defineRecipe } from '@pandacss/dev';
import { compoundVariants } from '../utils';

export const SpinnerRecipe = defineRecipe({
  className: 'spinner',
  description: 'The styles for the Spinner component',
  base: {
    display: 'inline-block',
    borderRadius: '50%',
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderStyle: 'solid',
    animation: 'spin',
  },
  variants: {
    theme: {
      current: {
        color: 'currentColor',
      },
      primary: {
        color: compoundVariants.outline.primary.color,
      },
      secondary: {
        color: compoundVariants.outline.secondary.color,
      },
      success: {
        color: compoundVariants.outline.success.color,
      },
      warning: {
        color: compoundVariants.outline.warning.color,
      },
      danger: {
        color: compoundVariants.outline.danger.color,
      },
    },
    size: {
      sm: {
        width: 5,
        height: 5,
        borderWidth: '0.125rem',
      },
      md: {
        width: 6,
        height: 6,
        borderWidth: '0.1875rem',
      },
      lg: {
        width: 7,
        height: 7,
        borderWidth: '0.225rem',
      },
    },
  },
  defaultVariants: {
    theme: 'primary',
    size: 'md',
  },
});
