import { SystemProperties as PandaSystemProperites } from '@gganbu-org/styled-utils/types';
import type { SystemProperties } from '@gganbu-org/theme';

type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

type EnsureExtract<T, U> = [T] extends [Extract<T, U>] ? T : U;

export type SystemProps = {
  [K in keyof SystemProperties]?: EnsureExtract<
    PandaSystemProperites[K],
    ArrayElement<SystemProperties[K]>
  >;
};
