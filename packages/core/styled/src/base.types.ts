import { SystemProps } from './system-props';

export type Primitive = null | undefined | boolean | number | string;

export interface Dict {
  [propertiesName: string]: Primitive;
}

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
  _themeClasses?: string;
}

export type HTMLGganbuUIProps<
  T extends As,
  OmitKeys extends keyof any = never,
> = Omit<PropsOf<T>, 'ref' | keyof SystemProps | OmitKeys> & SystemProps;
