export interface CssVariablesProps {
  selector?: string;
}

export interface GganbuProviderProps {
  theme?: Record<string, any>;
  defaultCssReset?: boolean;
  children?: React.ReactNode;
}
