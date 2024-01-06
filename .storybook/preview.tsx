import React, { PropsWithChildren } from 'react';
import type { Preview } from '@storybook/react';
import { ColorThemeProvider } from '@danji/components';
import { DocsContainer } from './DocsContainer';
import { useDarkMode } from 'storybook-dark-mode';
import { CssReset, DJ_DEFAULT_THEME, ThemeProvider } from '@danji/styled';

function CustomDjProvider(props: PropsWithChildren) {
  const { children } = props;
  const storybookDarkMode = useDarkMode();

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
      container: DocsContainer,
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
