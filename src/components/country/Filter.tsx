import { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";

import DropDown from "@/components/shared/DropDown";

interface FilterPropsType {
  loading: boolean;
  setRegion: Dispatch<SetStateAction<string>>;
}

const Filter = ({ loading, setRegion }: FilterPropsType) => {
  const { t } = useTranslation();
  const handleRegionChange = (value: string) => setRegion(value);
  const regions = [
    { value: "", label: t("regions.all") },
    { value: "africa", label: t("regions.africa") },
    { value: "america", label: t("regions.america") },
    { value: "asia", label: t("regions.asia") },
    { value: "europe", label: t("regions.europe") },
    { value: "oceania", label: t("regions.oceania") },
  ];
  return (
    <DropDown
      placeholder={t("filterPlaceholder")}
      handleChange={handleRegionChange}
      loading={loading}
      className="select w-44 h-10 border-none outline-none dark:bg-dark-blue"
      options={regions}
    />
  );
};

export default Filter;
