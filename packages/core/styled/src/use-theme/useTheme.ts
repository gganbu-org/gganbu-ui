import { button, spinner } from '@gganbu-org/styled-utils/recipes';
import type { VariantProps } from './useTheme.types';

const components = {
  button,
  spinner,
};

export function useTheme<T extends keyof typeof components>(
  componentName: T,
  props?: VariantProps<T>,
): string {
  const component = components[componentName] as (
    props?: VariantProps<T>,
  ) => string;

  if (!component) {
    throw new Error(`Component ${componentName} is not defined in theme.`);
  }

  return component(props);
}
