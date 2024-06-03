import type { CSSObject as EmotionCssObject } from '@emotion/react';
import { SystemProps } from '@gganbu-org/css';

export type OmitProps<Target, Props extends keyof any> = Omit<Target, Props>;

export type RightJoinProps<
  Props extends object,
  OverrideProps extends object,
> = OmitProps<Props, keyof OverrideProps> & OverrideProps;

export type MergeProps<
  OriginalProps extends object,
  AdditionalProps extends object,
> = RightJoinProps<OriginalProps, AdditionalProps>;

export type As = React.ElementType;

export type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T>;

export type CSSObject = EmotionCssObject;

export type DOMElements = keyof JSX.IntrinsicElements;

export type Factory = {
  (tag: DOMElements): GganbuComponent<DOMElements>;
};

export type GganbuComponents = {
  [T in DOMElements]: GganbuComponent<T>;
};

export type GganbuComponent<T extends As> = CustomComponent<T>;

interface CustomComponent<Component extends As> {
  (
    props: MergeProps<React.ComponentProps<Component>, GganbuProps>,
    deprecatedLegacyContext?: any,
  ): JSX.Element | null;
  propTypes?: React.WeakValidationMap<any> | undefined;
  contextTypes?: React.ValidationMap<any> | undefined;
  defaultProps?: Partial<any> | undefined;
  displayName?: string | undefined;
}

export interface GganbuProps extends SystemProps {
  _styles?: CSSObject;
}

export type HTMLGganbuUIProps<
  T extends As,
  OmitKeys extends keyof any = never,
> = Omit<PropsOf<T>, 'ref' | keyof SystemProps | OmitKeys> & SystemProps;
