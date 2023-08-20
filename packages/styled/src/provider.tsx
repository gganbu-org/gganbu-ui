import React from 'react';
import {
  Global as EmotionGlobal,
  jsx as emotionJsx,
  ThemeProvider as EmotionThemeProvider,
  Theme as EmotionTheme,
} from '@emotion/react';
import {
  DJ_DEFAULT_THEME,
  THEME,
  toCustomProperties,
  toVarDefinition,
} from './theme';
import { CssVariablesProps, ThemeWithCssVars } from './provider.types';
import CssReset from './reset';

const jsx: typeof React.createElement = <P extends object>(
  type: React.FunctionComponent<P> | React.ComponentClass<P> | string,
  props: React.Attributes & P,
  ...children: React.ReactNode[]
): any => emotionJsx(type, props, ...children);

const CssVariables = ({ selector = ':root' }: CssVariablesProps): JSX.Element =>
  jsx(EmotionGlobal, {
    styles: (djTheme: any) => {
      return {
        [selector]: djTheme.cssVars,
      };
    },
  });

export const customTheme = <T extends Record<string, any>>(theme: T) => {
  const { colors } = theme;

  const flattenTokens = {
    ...toCustomProperties(colors, toVarDefinition(THEME.KEY)),
  };

  Object.assign(theme, {
    cssVars: flattenTokens,
  });

  return theme as ThemeWithCssVars<T>;
};

export function DjProvider(props: any): JSX.Element {
  const { theme = DJ_DEFAULT_THEME, children } = props;

  return (
    <EmotionThemeProvider theme={customTheme<EmotionTheme>(theme)}>
      <CssReset />
      <CssVariables />
      {children}
    </EmotionThemeProvider>
  );
}
