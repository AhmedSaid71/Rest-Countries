import { ReactNode, createContext, useContext, useEffect } from "react";
import i18n from "../i18n";
import { useLocalStorage } from "@uidotdev/usehooks";

interface LanguageContextType {
  changeLanguage: (lang: string) => void;
}
interface LanguageProviderTypes {
  children: ReactNode;
}
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);
function LanguageProvider({ children }: LanguageProviderTypes) {
  const [language, setLanguage] = useLocalStorage("language", "en");
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const changeLanguage = (value: string) => {
    setLanguage(value);
  };
  return (
    <LanguageContext.Provider value={{ changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined)
    throw new Error("LanguageContext was used outside of LanguageProvider");
  return context;
}

export { LanguageProvider, useLanguage };
