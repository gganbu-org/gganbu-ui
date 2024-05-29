import React, { PropsWithChildren, useEffect } from 'react';
import type { Preview } from '@storybook/react';
import { useDarkMode } from 'storybook-dark-mode';
import { themes } from '@storybook/theming';
import { DocsContainer, DocsContainerProps } from '@storybook/addon-docs';

import {
  ColorSchemeProvider,
  DJ_DEFAULT_THEME,
  setDataset,
} from '@danji/components';
import { CssReset, ThemeProvider } from '@danji/styled';

function CustomDjProvider(props: PropsWithChildren) {
  const { children } = props;
  const storybookDarkMode = useDarkMode();
  const theme = storybookDarkMode ? 'dark' : 'light';

  /**
   * storybook-dark-mode issue
   * {@link https://github.com/hipstersmoothie/storybook-dark-mode/issues/235 GitHub}.
   */
  useEffect(() => {
    const backgroundColor = storybookDarkMode
      ? themes.dark.appBg
      : themes.light.appBg;

    document.body.style.backgroundColor = backgroundColor || 'inherit';
  }, [storybookDarkMode]);

  // 외부에서 테마 상태를 관리하는 경우에는 외부에서 data attributes를 관리
  useEffect(() => {
    setDataset(theme);
  }, [theme]);

  return (
    <ThemeProvider theme={DJ_DEFAULT_THEME}>
      <ColorSchemeProvider value={theme}>
        <CssReset />
        {children}
      </ColorSchemeProvider>
    </ThemeProvider>
  );
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      /**
       * storybook-dark-mode issue
       * {@link https://github.com/hipstersmoothie/storybook-dark-mode/issues/180 GitHub}.
       */
      container: (props: DocsContainerProps) => {
        const isDark = useDarkMode();
        const currentProps = { ...props };
        currentProps.theme = isDark ? themes.dark : themes.light;

        return React.createElement(DocsContainer, currentProps);
      },
    },
  },
  decorators: [
    (Story) => (
      <CustomDjProvider>
        <Story />
      </CustomDjProvider>
    ),
  ],
};

export default preview;
