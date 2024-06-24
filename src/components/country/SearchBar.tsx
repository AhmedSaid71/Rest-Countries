import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import { IoMdSearch } from "react-icons/io";

import Input from "@/components/shared/Input";

interface SearchBarPropsType {
  setName: Dispatch<SetStateAction<string>>;
}

const SearchBar = ({ setName }: SearchBarPropsType) => {
  const { t } = useTranslation();
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  return (
    <Input
      className="px-7 py-3 w-full bg-white rounded focus:shadow-xl dark:bg-dark-blue dark:text-white dark:placeholder:text-white"
      handleChange={handleSearchChange}
      placeholder={t("searchBarPlaceholder")}
      prefix={<IoMdSearch className="text-xl text-gray-400 dark:text-white" />}
    />
  );
};

export default SearchBar;
