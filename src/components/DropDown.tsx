import { useTranslation } from "react-i18next";
import { Select } from "antd";
import { DropDownType } from "../types";

const DropDown = ({
  loading,
  options,
  placeholder,
  handleChange,
  className,
}: DropDownType) => {
  const { i18n } = useTranslation();

  return (
    <Select
      className={className}
      placeholder={placeholder}
      onChange={handleChange}
      options={options}
      disabled={loading}
      dropdownStyle={{ direction: i18n.language === "ar" ? "rtl" : "ltr" }}
    />
  );
};

export default DropDown;
