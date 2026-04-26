import { createContext, useContext, useState, type ReactNode } from 'react';

export type Theme = 'light' | 'matrix' | 'macos' | 'ubuntu';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  cycleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('matrix');

  const cycleTheme = () => {
    setTheme((prev) =>
      prev === 'light' ? 'matrix' : prev === 'matrix' ? 'macos' : prev === 'macos' ? 'ubuntu' : 'light'
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
} 