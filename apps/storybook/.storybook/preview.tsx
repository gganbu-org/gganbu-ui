import React, { PropsWithChildren, useEffect } from 'react';
import { DocsContainer, DocsContainerProps } from '@storybook/addon-docs';
import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import { ColorSchemeProvider, setDataset } from '@gganbu-org/styled';
import { DARK_MODE_EVENT_NAME, useDarkMode } from 'storybook-dark-mode';
import '@gganbu-org/styled/styles.css';

interface CustomGganbuProviderProps extends PropsWithChildren {
  isDarkMode: boolean;
}

function CustomGganbuProvider(props: CustomGganbuProviderProps) {
  const { children, isDarkMode } = props;
  const theme = isDarkMode ? 'dark' : 'light';

  /**
   * storybook-dark-mode issue
   * {@link https://github.com/hipstersmoothie/storybook-dark-mode/issues/235 GitHub}.
   */
  useEffect(() => {
    const backgroundColor = isDarkMode ? themes.dark.appBg : themes.light.appBg;

    document.body.style.backgroundColor = backgroundColor || 'inherit';
  }, [isDarkMode]);

  // 외부에서 테마 상태를 관리하는 경우에는 외부에서 data attributes를 관리
  useEffect(() => {
    setDataset(theme);
  }, [theme]);

  return <ColorSchemeProvider value={theme}>{children}</ColorSchemeProvider>;
}

const preview: Preview = {
  parameters: {
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
        const [isDark, setDark] = React.useState(true);

        React.useEffect(() => {
          props.context.channel.on(DARK_MODE_EVENT_NAME, setDark);

          return () =>
            props.context.channel.removeListener(DARK_MODE_EVENT_NAME, setDark);
        }, [props.context.channel]);

        const currentProps = { ...props };
        currentProps.theme = isDark ? themes.dark : themes.light;

        return React.createElement(DocsContainer, currentProps);
      },
    },
  },
  decorators: [
    (Story) => {
      const isDarkMode = useDarkMode();

      return (
        <CustomGganbuProvider isDarkMode={isDarkMode}>
          <Story />
        </CustomGganbuProvider>
      );
    },
  ],
};

export default preview;
