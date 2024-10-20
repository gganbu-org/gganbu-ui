import React from 'react';
import { split } from '@gganbu-org/utils';
import { cx, css } from '@gganbu-org/styled-utils/css';
import { systemPropList } from './system-props';
import type { GganbuComponent } from './base.types';
import { forwardRef } from './providers';

export const genComponentStyle = <T extends React.ElementType>(tag?: T) => {
  if (!tag) {
    throw new Error('Define tag to create styled component');
  }

  const StyledComponent = forwardRef(function Comp(props, ref) {
    const {
      as: Element = tag,
      children,
      _themeClasses,
      className,
      ...rest
    } = props;
    const [systemProps, restProps] = split(rest, systemPropList);
    const classes = () => cx(_themeClasses, css(systemProps), className);

    return React.createElement(
      Element,
      {
        ref,
        ...restProps,
        className: classes(),
      },
      children,
    );
  });

  return StyledComponent as GganbuComponent<T>;
};
