import React from 'react';
import {
  Global as EmotionGlobal,
  jsx as emotionJsx,
  ThemeProvider as EmotionThemeProvider,
} from '@emotion/react';
import { toCustomProperties } from './theme';
import { colors } from './variables';
import { Dict } from './base.types';

export interface GlobalProps {
  selector?: string;
  styles: Dict;
}

export const jsx: typeof React.createElement = <P extends object>(
  type: React.FunctionComponent<P> | React.ComponentClass<P> | string,
  props: React.Attributes & P,
  ...children: React.ReactNode[]
): any => emotionJsx(type, props, ...children);

const Global = ({ styles, selector = ':root' }: GlobalProps): JSX.Element =>
  jsx(EmotionGlobal, {
    styles: (emotionTheme: any) => {
      return {
        [selector]: toCustomProperties(colors, '-'),
      };
    },
  });

export function DjProvider(props: any): JSX.Element {
  const { theme: emotionTheme = {}, styles, children } = props;

  return (
    <EmotionThemeProvider theme={emotionTheme}>
      <Global styles={styles} />
      {children}
    </EmotionThemeProvider>
  );
}
