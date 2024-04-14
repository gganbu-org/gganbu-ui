import { createContext, useContext } from 'react';
import { ColorSchemeContextType } from './colorScheme.types';

export const ColorSchemeContext = createContext({} as ColorSchemeContextType);

export function useColorScheme() {
  const context = useContext(ColorSchemeContext);
  if (context === undefined) {
    throw new Error('useColorScheme must be used within a ColorSchemeProvider');
  }
  return context;
}

if (process.env.NODE_ENV !== 'production')
  ColorSchemeContext.displayName = 'ColorSchemeContext';
