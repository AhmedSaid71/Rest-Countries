import { ReactNode, createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks";
interface DarkModeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}
interface DarkModeProviderTypes {
  children: ReactNode;
}
const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
);
function DarkModeProvider({ children }: DarkModeProviderTypes) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState<boolean>(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
    "isDarkMode"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  function toggleDarkMode() {
    setIsDarkMode((isDark: boolean) => !isDark);
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("DarkModeContext was used outside of DarkModeProvider");
  return context;
}

export { DarkModeProvider, useDarkMode };
