import { button, spinner } from '@gganbu-org/styled-system/recipes';

const components = {
  button,
  spinner,
};

export function useTheme<T extends keyof typeof components>(
  componentName: T,
  props?: (typeof components)[T]['__type'],
): string {
  const component = components[componentName];

  if (!component) {
    throw new Error(`Component ${componentName} is not defined in theme.`);
  }

  return component(props as Record<string, unknown>);
}
