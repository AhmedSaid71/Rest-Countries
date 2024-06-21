import { Select } from "antd";
import { FilterType } from "../types";
import { useTranslation } from "react-i18next";

const Filter = ({ setRegion, loading }: FilterType) => {
  const { t, i18n } = useTranslation();
  const handleChange = (value: string) => {
    setRegion(value);
  };

  const regions = [
    { value: "", label: t("regions.all") },
    { value: "africa", label: t("regions.africa") },
    { value: "america", label: t("regions.america") },
    { value: "asia", label: t("regions.asia") },
    { value: "europe", label: t("regions.europe") },
    { value: "oceania", label: t("regions.oceania") },
  ];

  return (
    <Select
      className="select w-44 h-10 border-none outline-none dark:bg-dark-blue"
      placeholder={t("filterPlaceholder")}
      onChange={handleChange}
      options={regions}
      disabled={loading}
      dropdownStyle={{ direction: i18n.language === "ar" ? "rtl" : "ltr" }}
    />
  );
};

export default Filter;
