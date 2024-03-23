import React from 'react';
import { css } from '@danji/css';
import emotionStyled from '@emotion/styled';
import { DjComponent } from './base.types';

export const genComponentStyle = <T extends React.ElementType>(tag: T) => {
  if (!tag) {
    throw new Error('Define tag to create styled component');
  }

  /**
   * @todo system props 분리, 스타일 우선순위 정의
   */
  const styled = (props: any) => {
    const { _styles = {}, theme } = props;
    const cssObject = css(_styles)(theme);

    return cssObject;
  };

  const Component = emotionStyled(tag as React.ComponentType)(styled);

  return React.forwardRef((props, ref) =>
    React.createElement(Component, {
      ref,
      ...props,
    }),
  ) as DjComponent<T>;
};
