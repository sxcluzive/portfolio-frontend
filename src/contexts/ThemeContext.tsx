import { createContext, useContext, useState, type ReactNode } from 'react';

export type Theme = 'matrix' | 'macos' | 'ubuntu';

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
      prev === 'matrix' ? 'macos' : prev === 'macos' ? 'ubuntu' : 'matrix'
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