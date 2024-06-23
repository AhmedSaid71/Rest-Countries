import { languages } from "../constants";
import { useTranslation } from "react-i18next";
import DropDown from "./DropDown";
import { useSettings } from "../context";

const Footer = () => {
  const { i18n } = useTranslation();

  const { changeLanguage } = useSettings();
  return (
    <footer
      className="dark:bg-dark-blue py-5"
      style={{ direction: i18n.language === "ar" ? "rtl" : "ltr" }}
    >
      <div className="container flex justify-end gap-5 dark:text-white ">
        <DropDown
          options={languages}
          handleChange={changeLanguage}
          placeholder={i18n.language === "en" ? "English" : "العربية"}
        />
      </div>
    </footer>
  );
};

export default Footer;
