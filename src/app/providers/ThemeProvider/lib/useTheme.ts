import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

export interface ThemeResultState {
  theme: Theme,
  toggleTheme: () => void
}

export function useTheme(): ThemeResultState  {
  const { theme, setTheme } = useContext<any>(ThemeContext);

  const toggleTheme = () => {
    let newTheme:Theme;

    switch(theme){
      case Theme.NORMAL:
        newTheme = Theme.DARK
        break
      case newTheme = Theme.DARK:
        newTheme = Theme.BLUE
        break
      case Theme.BLUE:
        newTheme = Theme.NORMAL
        break
        default: newTheme = Theme.NORMAL
    }
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  };

  return {
    theme: theme || Theme.NORMAL,
    toggleTheme
  }
};
