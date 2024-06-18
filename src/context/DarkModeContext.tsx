import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
interface Context {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}
const DarkModeContext = createContext<Context | undefined>(undefined);
interface Props {
  children: ReactNode;
}
function DarkModeProvider({ children }: Props) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  function toggleDarkMode() {
    setIsDarkMode((isDark) => !isDark);
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
