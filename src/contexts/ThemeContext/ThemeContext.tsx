import { createContext, useContext, useEffect, useState } from 'react';

import { setCssVariables, type ThemeVariant } from './themeHelpers';

type ThemeContextType = {
  theme: ThemeVariant;
  changeTheme: (arg: ThemeVariant) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeVariant>('light');

  const changeTheme = (theme: ThemeVariant) => setTheme(theme);

  useEffect(() => {
    setCssVariables(theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, changeTheme }}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = () => {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error('Missing themeContext, it is not wrapped in ThemeContextProvider!');
  }

  return theme;
};
