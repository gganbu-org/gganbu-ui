import React from 'react';
import {
  Global as EmotionGlobal,
  jsx as emotionJsx,
  ThemeProvider as EmotionThemeProvider,
  Theme as EmotionTheme,
} from '@emotion/react';
import { toCustomProperties } from './theme';
import { colors } from './variables';
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

const customCssVariables = <T,>(theme: ThemeWithCssVars<T>) => {
  Object.assign(theme, {
    cssVars: { ...toCustomProperties(colors, '--dj') },
  });

  return theme;
};

export function DjProvider(props: any): JSX.Element {
  const { theme = {}, children } = props;

  return (
    <EmotionThemeProvider theme={customCssVariables<EmotionTheme>(theme)}>
      <CssReset />
      <CssVariables />
      {children}
    </EmotionThemeProvider>
  );
}
