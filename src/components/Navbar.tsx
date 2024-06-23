import { useTranslation } from "react-i18next";
import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSettings } from "../context";
import DropDown from "./DropDown";
import { languages } from "../constants";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode, changeLanguage } = useSettings();
  const { t, i18n } = useTranslation();

  return (
    <nav
      className="flex justify-center dark:bg-dark-blue dark:text-white items-center py-6 mx-auto shadow-sm border-b border-b-dark-gray dark:border-b-dark-blue"
      style={{ direction: i18n.language === "ar" ? "rtl" : "ltr" }}
    >
      <div className="container flex justify-between">
        <Link to="/">
          <h1 className=" text-base sm:text-2xl font-bold">{t("title")}</h1>
        </Link>
        <div className="flex gap-4 items-center">
          <button
            type="button"
            className="flex items-center gap-1 sm:gap-2"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? (
              <IoMoonSharp className="text-lg" />
            ) : (
              <IoMoonOutline className="text-lg" />
            )}
            <span className="sm:font-medium">{t("darkMode")}</span>
          </button>
          <DropDown
            options={languages}
            handleChange={changeLanguage}
            placeholder={i18n.language === "en" ? "English" : "العربية"}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
