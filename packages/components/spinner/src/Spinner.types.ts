import type { HTMLGganbuUIProps, VariantProps } from '@gganbu-org/styled';

interface Props extends HTMLGganbuUIProps<'div'> {
  /**
   * Place hidden label text inside the spinner for screen reader users.
   */
  label?: string;
}

export interface SpinnerProps extends Props, VariantProps<'spinner'> {}
