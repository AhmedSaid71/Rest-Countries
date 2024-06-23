import { ChangeEvent, useState } from "react";
import {
  DropDown,
  Loader,
  Card,
  Input,
  NotFound,
  Pagination,
} from "../components";
import { useCountries, useDebounce } from "../hooks";
import { useTranslation } from "react-i18next";
import { IoMdSearch } from "react-icons/io";
const Home = () => {
  const { t } = useTranslation();
  const [region, setRegion] = useState("");
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const debouncedSearch = useDebounce(name);
  const { isPending, countries } = useCountries(region, debouncedSearch);

  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paginatedCountries = countries?.slice(start, end);
  const handlePageChange = (page: number, size: number) => {
    setPage(page);
    setPageSize(size);
  };

  const handleRegionChange = (value: string) => {
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
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <section className="flex flex-col gap-8 min-h-dvh">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 ">
        <div className="max-w-[350px] w-full flex items-center">
          <Input
            className="px-7 py-3 w-full bg-white rounded focus:shadow-xl dark:bg-dark-blue dark:text-white dark:placeholder:text-white"
            handleChange={handleSearchChange}
            placeholder={t("searchBarPlaceholder")}
            prefix={
              <IoMdSearch className="text-xl text-gray-400 dark:text-white" />
            }
          />
        </div>
        <div>
          <DropDown
            placeholder={t("filterPlaceholder")}
            handleChange={handleRegionChange}
            loading={isPending}
            className="select w-44 h-10 border-none outline-none dark:bg-dark-blue"
            options={regions}
          />
        </div>
      </div>
      {isPending ? (
        <Loader />
      ) : !countries ? (
        <NotFound message="No Country Founded With This Name!"/>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
            {paginatedCountries?.map((country) => (
              <Card country={country} key={country.name.common} />
            ))}
          </div>
          <div className="flex w-full justify-center">
            <Pagination
              defaultPage={1}
              total={countries?.length || 0}
              handleChange={handlePageChange}
            />
          </div>
        </>
      )}
    </section>
  );
};

export default Home;
