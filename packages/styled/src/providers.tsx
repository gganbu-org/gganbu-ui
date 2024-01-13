import React from 'react';
import {
  Global as EmotionGlobal,
  jsx as emotionJsx,
  ThemeProvider as EmotionThemeProvider,
  Theme as EmotionTheme,
  ThemeProviderProps as EmotionThemeProviderProps,
} from '@emotion/react';
import {
  THEME,
  TOKEN_ALIASES,
  TOKEN_PSEUDO_CLASSES,
  toCustomProperties,
  tokenToCssVar,
  pseudoKeys,
  PseudoKeys,
} from './theme';
import { isObject } from './utils';
import { CssVariablesProps, ThemeWithCssVars } from './providers.types';
import { Dict } from './base.types';

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
      styles={(djTheme: ThemeWithCssVars<EmotionTheme>) => {
        return {
          [selector]: djTheme.cssVars,
        };
      }}
    />
  );
}

const createTokensToCssVars = (tokens: Dict) => {
  const target: Dict = {};

  Object.keys(tokens).forEach((token) => {
    const key = tokenToCssVar(token, THEME.KEY);
    const value = tokens[token];

    const normalizeValue = isObject(value)
      ? value
      : { [TOKEN_ALIASES.LIGHT]: value };

    const source = Object.entries(normalizeValue).reduce(
      (acc, [conditionAlias, conditionValue]) => {
        if (!conditionValue) return acc;

        const isDefaultAlias = conditionAlias === TOKEN_ALIASES.LIGHT;
        const conditionSelector = isDefaultAlias
          ? key
          : (TOKEN_PSEUDO_CLASSES as Dict)[conditionAlias] ?? conditionAlias;

        acc[conditionSelector] = isDefaultAlias
          ? conditionValue
          : { [key]: conditionValue };

        return acc;
      },
      {} as Dict,
    );

    Object.assign(target, source);
  });

  return target;
};

export const createCssVars = <T extends Dict>(theme: T) => {
  const { colors, sematicTokens } = theme;
  const cssVars: Dict = {};

  const tokens = {
    ...toCustomProperties(colors, 'colors', '.'),
    ...toCustomProperties(sematicTokens, 'colors', '.', {
      halt: (value) =>
        Object.keys(value).every((key) =>
          pseudoKeys.includes(key as PseudoKeys),
        ),
    }),
  };

  Object.assign(cssVars, createTokensToCssVars(tokens));

  return cssVars;
};

export const customTheme = <T extends Dict>(theme: T) => {
  Object.assign(theme, {
    cssVars: createCssVars(theme),
  });

  return theme as ThemeWithCssVars<T>;
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
