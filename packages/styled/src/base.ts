import emotionStyled from '@emotion/styled';
import React from 'react';

import { isObject } from './utils';
import { DjComponent, Dict } from './base.types';

export const genComponentStyle = <T extends React.ElementType>(tag: T) => {
  if (!tag) {
    throw new Error('Define tag to create styled component');
  }

  const styled = (props: any) => {
    const { styles = [] } = props || {};
    let computedStyles: Dict = {};
    // TODO: theme, styled-system등에서 지원해야 할 전처리

    for (let i = 0; i < styles.length; i += 1) {
      if (isObject(styles[i])) {
        computedStyles = Object.assign(computedStyles, styles[i]);
      } else {
        // TODO: 예외 처리
      }
    }

    return computedStyles;
  };

  const Component = emotionStyled(tag as React.ComponentType)(styled);

  return React.forwardRef((props, ref) =>
    React.createElement(Component, {
      ref,
      ...props,
    }),
  ) as DjComponent<T>;
};
