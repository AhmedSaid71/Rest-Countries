import { ChangeEvent } from "react";
import { Input } from "antd";
import { SearchBarType } from "../types";
import { useTranslation } from "react-i18next";

const SearchBar = ({ name, setName }: SearchBarType) => {
  const { t } = useTranslation();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <Input
      value={name}
      onChange={handleChange}
      placeholder={t("searchBarPlaceholder")}
      className="px-7 py-3 w-full border-none outline-none bg-white rounded focus:shadow-lg dark:bg-dark-blue dark:text-white dark:placeholder:text-white"
      // disabled={loading}
    />
  );
};

export default SearchBar;
