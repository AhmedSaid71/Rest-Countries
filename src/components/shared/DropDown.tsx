import { useTranslation } from "react-i18next";
import { Select } from "antd";

interface DropDownPropsType {
  handleChange: (value: string) => void;
  loading?: boolean;
  placeholder?: string;
  className?: string;
  options: { label: string; value: string }[];
}

const DropDown = ({
  loading,
  options,
  placeholder,
  handleChange,
  className,
}: DropDownPropsType) => {
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
