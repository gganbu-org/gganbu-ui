import React from 'react';
import emotionStyled from '@emotion/styled';
import { css, stylePropList } from '@danji/css';
import { pick } from '@danji/utilities';
import { DjComponent } from './base.types';

const styled = (props: any) => {
  const { _styles = {}, theme, ...rest } = props;
  const systemProps = pick(rest, stylePropList);

  /**
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#merging_objects_with_same_properties
   * The properties are overwritten by other objects that have the same properties later in the parameters order.
   */
  const styles = Object.assign(_styles, systemProps);

  const cssObject = css(styles)(theme);

  return cssObject;
};

export const genComponentStyle = <T extends React.ElementType>(tag?: T) => {
  if (!tag) {
    throw new Error('Define tag to create styled component');
  }

  const Component = emotionStyled(tag as React.ComponentType)(styled);

  return React.forwardRef(function Comp(props, ref) {
    return React.createElement(Component, {
      ref,
      ...props,
    });
  }) as DjComponent<T>;
};
