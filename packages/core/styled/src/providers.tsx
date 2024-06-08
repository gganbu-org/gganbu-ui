import React, { forwardRef as reactForwardRef } from 'react';
import _merge from 'lodash.merge';
import {
  Global as EmotionGlobal,
  jsx as emotionJsx,
  ThemeProvider as EmotionThemeProvider,
  CacheProvider as EmotionCacheProvider,
  Theme as EmotionTheme,
  ThemeProviderProps as EmotionThemeProviderProps,
} from '@emotion/react';
import createEmotionCache from '@emotion/cache';
import { DEFAULT_THEME } from '@gganbu-org/theme';
import { createCssVars } from './cssVars';
import { ColorSchemeProvider } from './color-scheme';
import CssReset from './reset';
import type { GganbuTheme } from './system-props/types';
import type { CssVariablesProps, GganbuProviderProps } from './providers.types';
import type { As, MergeProps, PropsOf } from './base.types';

const defaultCache = createEmotionCache({ key: 'gb', prepend: true });

const jsx: typeof React.createElement = <P extends object>(
  type: React.FunctionComponent<P> | React.ComponentClass<P> | string,
  props: React.Attributes & P,
  ...children: React.ReactNode[]
): any => emotionJsx(type, props, ...children);

const Global = ({ styles }: any) =>
  jsx(EmotionGlobal, {
    styles,
  });

const customTheme = <T extends object>(theme: T) => {
  _merge(theme, {
    cssVars: createCssVars(theme),
  });

  return theme as GganbuTheme;
};

function CssVariables({ selector = ':root' }: CssVariablesProps): JSX.Element {
  return (
    <Global
      styles={(theme: GganbuTheme) => {
        return {
          [selector]: theme.cssVars,
        };
      }}
    />
  );
}

export function ThemeProvider(props: EmotionThemeProviderProps): JSX.Element {
  const { theme, children } = props;

  return (
    <EmotionThemeProvider theme={customTheme(theme as EmotionTheme)}>
      <CssVariables />
      {children}
    </EmotionThemeProvider>
  );
}

export function CacheProvider({ children }: { children: React.ReactNode }) {
  return (
    <EmotionCacheProvider value={defaultCache}>{children}</EmotionCacheProvider>
  );
}

export function GganbuProvider(props: GganbuProviderProps) {
  const { theme = DEFAULT_THEME, defaultCssReset = true, children } = props;

  return (
    <ThemeProvider theme={theme}>
      <ColorSchemeProvider>
        {defaultCssReset && <CssReset />}
        {children}
      </ColorSchemeProvider>
    </ThemeProvider>
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
