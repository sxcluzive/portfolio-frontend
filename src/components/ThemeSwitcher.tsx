import React from 'react';
import { useTheme, type Theme } from '../contexts/ThemeContext';

const themes = [
  {
    id: 'light' as Theme,
    name: 'Light Mode',
    icon: '☀️',
  },
  {
    id: 'matrix' as Theme,
    name: 'Matrix',
    icon: '🟢',
  },
  {
    id: 'macos' as Theme,
    name: 'macOS Terminal',
    icon: '💻',
  },
  {
    id: 'ubuntu' as Theme,
    name: 'Ubuntu Terminal',
    icon: '🐧',
  },
];

const themeVars: Record<Theme, Record<string, string>> = {
  light: {
    '--background': 'hsl(0, 0%, 100%)',
    '--foreground': 'hsl(222.2, 84%, 4.9%)',
    '--muted': 'hsl(210, 40%, 96.1%)',
    '--muted-foreground': 'hsl(215.4, 16.3%, 46.9%)',
    '--popover': 'hsl(0, 0%, 100%)',
    '--popover-foreground': 'hsl(222.2, 84%, 4.9%)',
    '--card': 'hsl(0, 0%, 100%)',
    '--card-foreground': 'hsl(222.2, 84%, 4.9%)',
    '--border': 'hsl(214.3, 31.8%, 91.4%)',
    '--input': 'hsl(214.3, 31.8%, 91.4%)',
    '--primary': 'hsl(221.2, 83.2%, 53.3%)',
    '--primary-foreground': 'hsl(210, 40%, 98%)',
    '--secondary': 'hsl(210, 40%, 96.1%)',
    '--secondary-foreground': 'hsl(222.2, 47.4%, 11.2%)',
    '--accent': 'hsl(210, 40%, 96.1%)',
    '--accent-foreground': 'hsl(222.2, 47.4%, 11.2%)',
    '--destructive': 'hsl(0, 84.2%, 60.2%)',
    '--destructive-foreground': 'hsl(210, 40%, 98%)',
    '--ring': 'hsl(221.2, 83.2%, 53.3%)',
    '--matrix': 'hsl(221.2, 83.2%, 53.3%)',
    '--matrix-dark': 'hsl(221.2, 83.2%, 40%)',
    '--terminal-bg': 'hsl(0, 0%, 8%)',
    '--terminal-gray': 'hsl(0, 0%, 12%)',
    '--terminal-border': 'hsl(0, 0%, 25%)',
    '--cyan-glow': 'hsl(180, 100%, 50%)',
    '--amber-glow': 'hsl(45, 100%, 50%)',
    '--red-glow': 'hsl(0, 100%, 62%)',
  },
  matrix: {
    '--background': 'hsl(0, 0%, 8%)',
    '--foreground': 'hsl(120, 100%, 70%)',
    '--muted': 'hsl(0, 0%, 12%)',
    '--muted-foreground': 'hsl(0, 0%, 45.1%)',
    '--popover': 'hsl(0, 0%, 12%)',
    '--popover-foreground': 'hsl(120, 100%, 70%)',
    '--card': 'hsl(0, 0%, 12%)',
    '--card-foreground': 'hsl(120, 100%, 70%)',
    '--border': 'hsl(0, 0%, 25%)',
    '--input': 'hsl(0, 0%, 25%)',
    '--primary': 'hsl(120, 100%, 70%)',
    '--primary-foreground': 'hsl(0, 0%, 8%)',
    '--secondary': 'hsl(0, 0%, 12%)',
    '--secondary-foreground': 'hsl(120, 100%, 70%)',
    '--accent': 'hsl(0, 0%, 12%)',
    '--accent-foreground': 'hsl(120, 100%, 70%)',
    '--destructive': 'hsl(0, 84.2%, 60.2%)',
    '--destructive-foreground': 'hsl(0, 0%, 98%)',
    '--ring': 'hsl(120, 100%, 70%)',
    '--matrix': 'hsl(120, 100%, 70%)',
    '--matrix-dark': 'hsl(120, 100%, 60%)',
    '--terminal-bg': 'hsl(0, 0%, 8%)',
    '--terminal-gray': 'hsl(0, 0%, 12%)',
    '--terminal-border': 'hsl(0, 0%, 25%)',
    '--cyan-glow': 'hsl(180, 100%, 50%)',
    '--amber-glow': 'hsl(45, 100%, 50%)',
    '--red-glow': 'hsl(0, 100%, 62%)',
  },
  macos: {
    '--background': '#1e1e1e',
    '--foreground': '#c7c7c7',
    '--muted': '#232323',
    '--muted-foreground': '#7f7f7f',
    '--popover': '#232323',
    '--popover-foreground': '#c7c7c7',
    '--card': '#232323',
    '--card-foreground': '#c7c7c7',
    '--border': '#333',
    '--input': '#333',
    '--primary': '#39ff14',
    '--primary-foreground': '#1e1e1e',
    '--secondary': '#232323',
    '--secondary-foreground': '#39ff14',
    '--accent': '#232323',
    '--accent-foreground': '#39ff14',
    '--destructive': '#ff5c57',
    '--destructive-foreground': '#fff',
    '--ring': '#39ff14',
    '--matrix': '#39ff14',
    '--matrix-dark': '#00e600',
    '--terminal-bg': '#1e1e1e',
    '--terminal-gray': '#232323',
    '--terminal-border': '#333',
    '--cyan-glow': '#00eaff',
    '--amber-glow': '#ffe66d',
    '--red-glow': '#ff5c57',
  },
  ubuntu: {
    '--background': '#2d0922',
    '--foreground': '#ffffff',
    '--muted': '#3a0f2e',
    '--muted-foreground': '#a0a0a0',
    '--popover': '#3a0f2e',
    '--popover-foreground': '#ffffff',
    '--card': '#3a0f2e',
    '--card-foreground': '#ffffff',
    '--border': '#4a1a3a',
    '--input': '#4a1a3a',
    '--primary': '#4e9a06',
    '--primary-foreground': '#2d0922',
    '--secondary': '#3a0f2e',
    '--secondary-foreground': '#4e9a06',
    '--accent': '#3a0f2e',
    '--accent-foreground': '#4e9a06',
    '--destructive': '#cc0000',
    '--destructive-foreground': '#ffffff',
    '--ring': '#4e9a06',
    '--matrix': '#4e9a06',
    '--matrix-dark': '#3d7a05',
    '--terminal-bg': '#2d0922',
    '--terminal-gray': '#3a0f2e',
    '--terminal-border': '#4a1a3a',
    '--cyan-glow': '#34e2e2',
    '--amber-glow': '#c4a000',
    '--red-glow': '#cc0000',
  },
};

const ThemeSwitcher = () => {
  const { theme, cycleTheme } = useTheme();

  const applyThemeVars = (theme: Theme) => {
    const vars = themeVars[theme];
    const root = document.documentElement;
    Object.entries(vars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  };

  // Apply theme vars on mount and when theme changes
  React.useEffect(() => {
    applyThemeVars(theme);
  }, [theme]);

  const currentIndex = themes.findIndex((t) => t.id === theme);
  const nextIndex = (currentIndex + 1) % themes.length;
  const nextTheme = themes[nextIndex];

  return (
    <button
      onClick={cycleTheme}
      className="flex items-center space-x-1 px-2 py-1 text-xs border border-[var(--terminal-border)] rounded hover:bg-[var(--terminal-gray)] transition-colors w-full justify-center"
      title={`Switch to ${nextTheme.name}`}
    >
      <span className="text-sm">{nextTheme.icon}</span>
      <span className="text-matrix truncate">{nextTheme.name}</span>
    </button>
  );
};

export default ThemeSwitcher; 