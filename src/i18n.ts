import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationAr from "./locale/ar.json";
import translationEn from "./locale/en.json";
import LanguageDeTector from "i18next-browser-languagedetector";

const resources = {
  ar: {
    translation: translationAr,
  },
  en: {
    translation: translationEn,
  },
};

i18n
  .use(LanguageDeTector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
