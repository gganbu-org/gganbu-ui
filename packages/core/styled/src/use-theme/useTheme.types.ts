import type {
  ButtonVariantProps,
  SpinnerVariantProps,
} from '@gganbu-org/styled-utils/recipes';

interface VariantMap {
  button: ButtonVariantProps;
  spinner: SpinnerVariantProps;
}

export type VariantProps<T extends keyof VariantMap> = VariantMap[T];
