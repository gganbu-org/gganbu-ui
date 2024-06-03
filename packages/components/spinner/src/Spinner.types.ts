import { HTMLGganbuUIProps } from '@gganbu-org/styled';

import { SpinnerTheme, SpinnerSize } from '@gganbu-org/theme';

interface Props extends HTMLGganbuUIProps<'div'> {
  /**
   * Place hidden label text inside the spinner for screen reader users.
   */
  label?: string;
}

interface SpinnerThemeProps {
  /**
   * The color theme of the spinner
   * @default primary
   */
  theme?: SpinnerTheme;
  /**
   * The size of the spinner
   * @default md
   */
  size?: SpinnerSize;
}

export interface SpinnerProps extends Props, SpinnerThemeProps {}
