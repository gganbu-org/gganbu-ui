import React, { PropsWithChildren } from 'react';
import type { Preview } from '@storybook/react';
import { DjProvider, useColorTheme } from '@danji/components';
import { DocsContainer } from './DocsContainer';
import { useDarkMode } from 'storybook-dark-mode';

function ThemeSideEffectWrapper(props: PropsWithChildren) {
  const storybookDarkMode = useDarkMode();
  const { setColorTheme } = useColorTheme();

  React.useEffect(() => {
    setColorTheme(storybookDarkMode ? 'dark' : 'light');
  }, [storybookDarkMode]);

  return <>{props.children}</>;
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
      <DjProvider>
        <ThemeSideEffectWrapper>
          <Story />
        </ThemeSideEffectWrapper>
      </DjProvider>
    ),
  ],
};

export default preview;
