import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";

import { useDarkMode } from "@/context/DarkModeContext";
import Language from "@/components/country/Language";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
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
          <Language />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
