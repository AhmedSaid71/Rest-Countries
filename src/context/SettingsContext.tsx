import { ReactNode, createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks";
import i18n from "../i18n";
interface SettingsContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  changeLanguage: (lang: string) => void;
}
interface SettingsProviderTypes {
  children: ReactNode;
}
const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined
);
function SettingsProvider({ children }: SettingsProviderTypes) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState<boolean>(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
    "isDarkMode"
  );
  const [language, setLanguage] = useLocalStorageState<string>(
    "en",
    "language"
  );
  useEffect(() => {
    i18n.changeLanguage(language);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode, language]);

  const toggleDarkMode = () => {
    setIsDarkMode((isDark: boolean) => !isDark);
  };
  const changeLanguage = (value: string) => {
    setLanguage(value);
  };
  return (
    <SettingsContext.Provider
      value={{ isDarkMode, toggleDarkMode, changeLanguage }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

function useSettings() {
  const context = useContext(SettingsContext);
  if (context === undefined)
    throw new Error("SettingsContext was used outside of SettingsProvider");
  return context;
}

export { SettingsProvider, useSettings };
