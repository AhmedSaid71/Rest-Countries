import { useTranslation } from "react-i18next";

import { useLanguage } from "@/context/LanguageContext";
import DropDown from "@/components/shared/DropDown";

const languages = [
  { value: "en", label: "English" },
  { value: "ar", label: "العربية" },
];

const Language = () => {
  const { changeLanguage } = useLanguage();
  const { i18n } = useTranslation();

  return (
    <DropDown
      options={languages}
      handleChange={changeLanguage}
      placeholder={i18n.language === "en" ? "English" : "العربية"}
    />
  );
};

export default Language;
