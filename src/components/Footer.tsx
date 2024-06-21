import { Select } from "antd";
import { languages } from "../constants";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { i18n } = useTranslation();

  return (
    <footer
      className="dark:bg-dark-blue py-4"
      style={{ direction: i18n.language === "ar" ? "rtl" : "ltr" }}
    >
      <div className="container flex justify-end gap-5 dark:text-white ">
        {/* <Select options={languages} defaultValue={la nguages[0]} onClick={} />
         */}
        <button
          className="border-2  dark:border-dark-blue-700 px-8 py-1 rounded dark:hover:bg-dark-blue-700 transition"
          onClick={() => i18n.changeLanguage("ar")}
        >
          Ar
        </button>
        <button
          className="border-2  dark:border-dark-blue-700 px-8 py-1 rounded dark:hover:bg-dark-blue-700 transition"
          onClick={() => i18n.changeLanguage("en")}
        >
          En
        </button>
      </div>
    </footer>
  );
};

export default Footer;
