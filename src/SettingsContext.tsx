import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

type Theme = 'light' | 'dark';
type Font = 'default' | 'dyslexic';

interface SettingsContextType {
  theme: Theme;
  font: Font;
  toggleTheme: () => void;
  toggleFont: () => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('theme') as Theme) || 'light');
  const [font, setFont] = useState<Font>(() => (localStorage.getItem('font') as Font) || 'default');

  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.body.dataset.font = font;
    localStorage.setItem('font', font);
  }, [font]);

  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  const toggleFont = useCallback(() => {
    setFont(prevFont => (prevFont === 'default' ? 'dyslexic' : 'default'));
  }, []);

  const value = { theme, font, toggleTheme, toggleFont };

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
}