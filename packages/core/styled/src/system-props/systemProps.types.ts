import { SystemProperties as PandaSystemProperites } from '@gganbu-org/styled-utils/types';
import { systemProperties } from './systemProps.constants';

export type SystemProperties = typeof systemProperties;

type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

type EnsureExtract<T, U> = [T] extends [Extract<T, U>] ? T : U;

export type SystemProps = {
  [K in keyof SystemProperties]?: EnsureExtract<
    PandaSystemProperites[K],
    ArrayElement<SystemProperties[K]>
  >;
};
