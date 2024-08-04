import React, { forwardRef as reactForwardRef } from 'react';
import { ColorSchemeProvider } from './color-scheme';
import type { GganbuProviderProps } from './providers.types';
import type { As, MergeProps, PropsOf } from './base.types';

export function GganbuProvider(props: GganbuProviderProps) {
  const { children } = props;

  return <ColorSchemeProvider>{children}</ColorSchemeProvider>;
}

export function forwardRef<Component extends As, Props extends object>(
  component: React.ForwardRefRenderFunction<
    any,
    MergeProps<PropsOf<Component>, Props>
  >,
) {
  return reactForwardRef(component);
}
