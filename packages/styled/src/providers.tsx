import React from 'react';
import {
  Global as EmotionGlobal,
  jsx as emotionJsx,
  ThemeProvider as EmotionThemeProvider,
  Theme as EmotionTheme,
  ThemeProviderProps as EmotionThemeProviderProps,
} from '@emotion/react';
import { THEME, toCustomProperties, toVarDefinition } from './theme';
import { CssVariablesProps, ThemeWithCssVars } from './providers.types';
import { join } from './utils';

const jsx: typeof React.createElement = <P extends object>(
  type: React.FunctionComponent<P> | React.ComponentClass<P> | string,
  props: React.Attributes & P,
  ...children: React.ReactNode[]
): any => emotionJsx(type, props, ...children);

export const Global = ({ styles }: any) =>
  jsx(EmotionGlobal, {
    styles,
  });

function CssVariables({ selector = ':root' }: CssVariablesProps): JSX.Element {
  return (
    <Global
      styles={(djTheme: any) => {
        return {
          [selector]: djTheme.cssVars,
        };
      }}
    />
  );
}

export const customTheme = <T extends Record<string, any>>(theme: T) => {
  const { colors } = theme;

  const flattenTokens = {
    ...toCustomProperties(colors, toVarDefinition(join(THEME.KEY, 'colors'))),
  };

  Object.assign(theme, {
    cssVars: flattenTokens,
  });

  return theme as ThemeWithCssVars<T>;
};

export function ThemeProvider(props: EmotionThemeProviderProps): JSX.Element {
  const { theme, children } = props;

  return (
    <EmotionThemeProvider theme={customTheme<EmotionTheme>(theme)}>
      <CssVariables />
      {children}
    </EmotionThemeProvider>
  );
}
