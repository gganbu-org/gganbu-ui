import React from 'react';
import _merge from 'lodash.merge';
import emotionStyled from '@emotion/styled';
import { pick } from '@gganbu-org/utils';
import { stylePropList } from './system-props';
import { css } from './css';
import type { GganbuComponent } from './base.types';

const gganbuProps = new Set([...stylePropList, '_styles']);

const styled = (props: any) => {
  const { _styles = {}, theme, ...rest } = props;
  const systemProps = pick(rest, stylePropList);

  /**
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#merging_objects_with_same_properties
   * The properties are overwritten by other objects that have the same properties later in the parameters order.
   */
  const styles = _merge(_styles, systemProps);

  const cssObject = css(styles)(theme);

  return cssObject;
};

export const genComponentStyle = <T extends React.ElementType>(tag?: T) => {
  if (!tag) {
    throw new Error('Define tag to create styled component');
  }

  const shouldForwardProp = (prop: string) => !gganbuProps.has(prop);

  const Component = emotionStyled(tag as React.ComponentType, {
    shouldForwardProp,
  })(styled);

  return React.forwardRef(function Comp(props, ref) {
    return React.createElement(Component, {
      ref,
      ...props,
    });
  }) as GganbuComponent<T>;
};