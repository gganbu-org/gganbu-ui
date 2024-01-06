import React, { PropsWithChildren, useEffect } from 'react';
import type { Preview } from '@storybook/react';
import { useDarkMode } from 'storybook-dark-mode';
import { themes } from '@storybook/theming';
import { DocsContainer, DocsContainerProps } from '@storybook/addon-docs';

import { ColorThemeProvider } from '@danji/components';
import { CssReset, DJ_DEFAULT_THEME, ThemeProvider } from '@danji/styled';

function CustomDjProvider(props: PropsWithChildren) {
  const { children } = props;
  const storybookDarkMode = useDarkMode();

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

  return (
    <ThemeProvider theme={DJ_DEFAULT_THEME}>
      <ColorThemeProvider value={storybookDarkMode ? 'dark' : 'light'}>
        <CssReset />
        {children}
      </ColorThemeProvider>
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
