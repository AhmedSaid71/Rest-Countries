import { languages } from "../constants";
import { useTranslation } from "react-i18next";
import DropDown from "./DropDown";

const Footer = () => {
  const { i18n } = useTranslation();
  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  return (
    <footer
      className="dark:bg-dark-blue py-5"
      style={{ direction: i18n.language === "ar" ? "rtl" : "ltr" }}
    >
      <div className="container flex justify-end gap-5 dark:text-white ">
        <DropDown
          options={languages}
          handleChange={handleLanguageChange}
          placeholder={i18n.language === "en" ? "English" : "Arabic"}
        />
      </div>
    </footer>
  );
};

export default Footer;
