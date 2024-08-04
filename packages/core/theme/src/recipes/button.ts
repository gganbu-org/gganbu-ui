import { defineRecipe } from '@pandacss/dev';
import { compoundVariants } from '../utils';

export const buttonRecipe = defineRecipe({
  className: 'button',
  description: 'The styles for the Button component',
  base: {
    display: 'inline-flex',
    position: 'relative',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.325rem',
    cursor: 'pointer',
    _disabled: {
      opacity: 0.5,
      pointerEvents: 'none',
    },
  },
  variants: {
    theme: {
      primary: {},
      secondary: {},
      success: {},
      warning: {},
      danger: {},
    },
    variant: {
      solid: { color: 'text.primary' },
      outline: { borderWidth: '2px', bgColor: 'transparent' },
      ghost: { borderWidth: '2px', bgColor: 'transparent' },
      link: {},
    },
    size: {
      sm: {
        minW: 16,
        paddingLeft: 3,
        paddingRight: 3,
        h: 8,
        fontSize: 'sm',
        lineHeight: 'tight',
      },
      md: {
        minW: 20,
        paddingLeft: 4,
        paddingRight: 4,
        h: 10,
        fontSize: 'md',
        lineHeight: 'loose',
      },
      lg: {
        minW: 24,
        paddingLeft: 6,
        paddingRight: 6,
        h: 12,
        fontSize: 'md',
        lineHeight: 'loose',
      },
    },
    fullWidth: {
      true: {
        width: 'full',
      },
    },
  },
  defaultVariants: {
    variant: 'solid',
    theme: 'primary',
    size: 'sm',
    fullWidth: false,
  },
  compoundVariants: [
    {
      variant: 'solid',
      theme: 'primary',
      css: compoundVariants.solid.primary,
    },
    {
      variant: 'solid',
      theme: 'secondary',
      css: compoundVariants.solid.secondary,
    },
    {
      variant: 'solid',
      theme: 'success',
      css: compoundVariants.solid.success,
    },
    {
      variant: 'solid',
      theme: 'warning',
      css: compoundVariants.solid.warning,
    },
    {
      variant: 'solid',
      theme: 'danger',
      css: compoundVariants.solid.danger,
    },
    {
      variant: 'outline',
      theme: 'primary',
      css: compoundVariants.outline.primary,
    },
    {
      variant: 'outline',
      theme: 'secondary',
      css: compoundVariants.outline.secondary,
    },
    {
      variant: 'outline',
      theme: 'success',
      css: compoundVariants.outline.success,
    },
    {
      variant: 'outline',
      theme: 'warning',
      css: compoundVariants.outline.warning,
    },
    {
      variant: 'outline',
      theme: 'danger',
      css: compoundVariants.outline.danger,
    },
    {
      variant: 'ghost',
      theme: 'primary',
      css: compoundVariants.ghost.primary,
    },
    {
      variant: 'ghost',
      theme: 'secondary',
      css: compoundVariants.ghost.secondary,
    },
    {
      variant: 'ghost',
      theme: 'success',
      css: compoundVariants.ghost.success,
    },
    {
      variant: 'ghost',
      theme: 'warning',
      css: compoundVariants.ghost.warning,
    },
    {
      variant: 'ghost',
      theme: 'danger',
      css: compoundVariants.ghost.danger,
    },
    {
      variant: 'link',
      theme: 'primary',
      css: compoundVariants.link.primary,
    },
    {
      variant: 'link',
      theme: 'secondary',
      css: compoundVariants.link.secondary,
    },
    {
      variant: 'link',
      theme: 'success',
      css: compoundVariants.link.success,
    },
    {
      variant: 'link',
      theme: 'warning',
      css: compoundVariants.link.warning,
    },
    {
      variant: 'link',
      theme: 'danger',
      css: compoundVariants.link.danger,
    },
  ],
});
