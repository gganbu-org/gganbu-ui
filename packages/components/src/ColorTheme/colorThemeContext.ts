import { createContext, useContext } from 'react';
import { ColorThemeContextType } from './colorTheme.types';

export const ColorThemeContext = createContext({} as ColorThemeContextType);

export function useColorTheme() {
  const context = useContext(ColorThemeContext);
  if (context === undefined) {
    throw new Error('useColorTheme must be used within a ColorThemeProvider');
  }
  return context;
}
