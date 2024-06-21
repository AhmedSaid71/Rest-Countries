import { useState } from "react";
import {
  DropDown,
  Loader,
  Card,
  SearchBar,
  NotFound,
  Pagination,
} from "../components";
import { useCountries, useDebounce } from "../hooks";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  const [region, setRegion] = useState("");
  const [name, setName] = useState("");
  const debouncedSearch = useDebounce(name);
  const { isPending, countries } = useCountries(region, debouncedSearch);

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

  //pagination
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paginatedCountries = countries?.slice(start, end);

  const handlePageChange = (page: number, size: number) => {
    setPage(page);
    setPageSize(size);
  };

  return (
    <section className="flex flex-col gap-8 min-h-dvh">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div className="max-w-[350px] w-full">
          <SearchBar name={name} setName={setName} />
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
        <NotFound />
      ) : (
        <>
          <div className="list">
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
