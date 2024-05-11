import React, { useContext, forwardRef as reactForwardRef } from 'react';
import {
  Global as EmotionGlobal,
  jsx as emotionJsx,
  ThemeContext as EmotionThemeContext,
  ThemeProvider as EmotionThemeProvider,
  Theme as EmotionTheme,
  ThemeProviderProps as EmotionThemeProviderProps,
} from '@emotion/react';
import { createCssVars, djTheme } from '@danji/css';
import { CssVariablesProps } from './providers.types';
import { As, MergeProps, PropsOf } from './base.types';

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
      styles={(theme: djTheme) => {
        return {
          [selector]: theme.cssVars,
        };
      }}
    />
  );
}

const customTheme = <T extends object>(theme: T) => {
  Object.assign(theme, {
    cssVars: createCssVars(theme),
  });

  return theme as djTheme;
};

export const useTheme = () => {
  const ctx = useContext(EmotionThemeContext);

  if (ctx === null || ctx === undefined) throw new Error('useTheme error');

  return ctx as djTheme;
};

export function ThemeProvider(props: EmotionThemeProviderProps): JSX.Element {
  const { theme, children } = props;

  return (
    <EmotionThemeProvider theme={customTheme(theme as EmotionTheme)}>
      <CssVariables />
      {children}
    </EmotionThemeProvider>
  );
}

export function forwardRef<Component extends As, Props extends object>(
  component: React.ForwardRefRenderFunction<
    any,
    MergeProps<PropsOf<Component>, Props>
  >,
) {
  return reactForwardRef(component);
}
