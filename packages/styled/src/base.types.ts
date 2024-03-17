import type { CSSObject as EmotionCssObject } from '@emotion/react';

export type CSSObject = EmotionCssObject;

export type Dict<T = any> = Record<string, T>;

export type DOMElements = keyof JSX.IntrinsicElements;

export type Factory = {
  (tag: DOMElements): DjComponent<DOMElements>;
};

export type DjComponents = {
  [T in DOMElements]: DjComponent<T>;
};

export type DjComponent<T extends React.ElementType> = CustomComponent<T>;

type PropsWithChildren<T> = T & { children?: React.ReactNode | undefined };

interface CustomComponent<T extends React.ElementType> {
  (
    props: PropsWithChildren<React.ComponentProps<T>> & DjProps,
    context?: any,
  ): JSX.Element | null;
  propTypes?: React.WeakValidationMap<any>;
  contextTypes?: React.ValidationMap<any>;
  defaultProps?: Partial<any>;
  displayName?: string;
}

interface DjProps {
  _styles?: CSSObject;
}
