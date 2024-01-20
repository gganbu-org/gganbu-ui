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
  PseudoAliases,
} from './theme';
import { isNonNull, isObject } from './utils';
import {
  CssVariablesProps,
  DesignToken,
  DesignTokenObject,
  DesignTokens,
  ThemeWithCssVars,
} from './providers.types';
import { Dict } from './base.types';
import { JSONObject } from './theme/base.types';

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

const createTokensToCssVars = (tokens: DesignTokens) => {
  const target: JSONObject = {};

  const transformValue = (propertyKey: string, propertyValue: DesignToken) =>
    Object.entries(propertyValue).reduce((acc, [alias, value]) => {
      if (!isNonNull(value)) return acc;

      const isDefaultAlias = alias === TOKEN_ALIASES.LIGHT;
      const pseudoClass = isDefaultAlias
        ? propertyKey
        : ((TOKEN_PSEUDO_CLASSES as Dict)[alias] as PseudoAliases) ?? alias;

      acc[pseudoClass] = isDefaultAlias ? value : { [propertyKey]: value };

      return acc;
    }, {} as JSONObject);

  Object.entries(tokens).forEach(([token, value]) => {
    const key = tokenToCssVar(token, THEME.KEY);

    const normalizeValue = isObject(value)
      ? value
      : { [TOKEN_ALIASES.LIGHT]: value };

    const source = transformValue(key, normalizeValue as DesignToken);

    Object.assign(target, source);
  });

  return target;
};

export const createCssVars = <
  T extends {
    colors?: DesignTokenObject;
    sematicTokens?: DesignTokenObject;
  },
>(
  theme: T,
) => {
  const { colors, sematicTokens } = theme;
  const cssVars: JSONObject = {};

  const tokens = {
    ...toCustomProperties(colors, 'colors', '.'),
    ...toCustomProperties(sematicTokens, 'colors', '.', {
      halt: (value) =>
        Object.keys(value).every((key) =>
          pseudoKeys.includes(key as PseudoKeys),
        ),
    }),
  } as DesignTokens;

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
