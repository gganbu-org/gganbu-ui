import { createContext, useContext } from 'react';
import type { ColorSchemeContextType } from './colorScheme.types';

export const ColorSchemeContext = createContext({} as ColorSchemeContextType);

export function useColorScheme() {
  const context = useContext(ColorSchemeContext);
  if (context === undefined) {
    throw new Error('useColorScheme must be used within a ColorSchemeProvider');
  }
  return context;
}
