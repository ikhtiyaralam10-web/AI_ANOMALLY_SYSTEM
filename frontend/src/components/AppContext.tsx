"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Theme = "dark" | "light";

interface AppContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isAbnormal: boolean;
  setIsAbnormal: (val: boolean) => void;
}

const AppContext = createContext<AppContextType>({
  theme: "dark",
  setTheme: () => {},
  isAbnormal: false,
  setIsAbnormal: () => {}
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("dark");
  const [isAbnormal, setIsAbnormal] = useState(false);

  // Apply theme to body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <AppContext.Provider value={{ theme, setTheme, isAbnormal, setIsAbnormal }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
