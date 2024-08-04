import React from 'react';
import { pick, omit } from '@gganbu-org/utils';
import { cx, css } from '@gganbu-org/styled-system/css';
import { systemPropList } from './system-props';
import type { GganbuComponent } from './base.types';

export const genComponentStyle = <T extends React.ElementType>(tag?: T) => {
  if (!tag) {
    throw new Error('Define tag to create styled component');
  }

  /**
   * @todo props 타입 강화
   */
  const StyledComponent = React.forwardRef(function Comp(
    props: Record<string, any>,
    ref,
  ) {
    const {
      as: Element = tag,
      children,
      _themeClasses,
      className,
      ...rest
    } = props;

    const restProps = omit(rest, systemPropList);

    function classes() {
      const systemProps = pick(rest, systemPropList);
      return cx(_themeClasses, className, css(systemProps));
    }

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
