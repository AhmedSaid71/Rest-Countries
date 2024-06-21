import { Select } from "antd";
import { languages } from "../constants";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { i18n } = useTranslation();

  return (
    <footer className="dark:bg-dark-blue-700 pb-5">
      <div className="container flex justify-end gap-5 text-white">
        {/* <Select options={languages} defaultValue={la nguages[0]} onClick={} />
         */}
        <button
          className="border-2 border-dark-blue px-8 py-1 rounded hover:bg-dark-blue transition"
          onClick={() => i18n.changeLanguage("ar")}
        >
          Ar
        </button>
        <button
          className="border-2 border-dark-blue px-8 py-1 rounded hover:bg-dark-blue transition"
          onClick={() => i18n.changeLanguage("en")}
        >
          En
        </button>
      </div>
    </footer>
  );
};

export default Footer;
