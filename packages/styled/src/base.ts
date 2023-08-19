import React from 'react';
import { css } from '@danji/css';
import emotionStyled from '@emotion/styled';
import { DjComponent } from './base.types';

export const genComponentStyle = <T extends React.ElementType>(tag: T) => {
  if (!tag) {
    throw new Error('Define tag to create styled component');
  }

  const styled = () => {
    const toStyleObject = (props: any) => {
      const { styles = {} } = props;
      // TODO: component theme prop, system prop 분리

      return css(styles)(props.theme);
    };

    return toStyleObject;
  };

  const Component = emotionStyled(tag as React.ComponentType)(styled);

  return React.forwardRef((props, ref) =>
    React.createElement(Component, {
      ref,
      ...props,
    }),
  ) as DjComponent<T>;
};
