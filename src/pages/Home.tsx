import { useState } from "react";
import {
  Filter,
  Loader,
  Card,
  SearchBar,
  NotFound,
  Pagination,
} from "../components";
import { useCountries, useDebounce } from "../hooks";

const Home = () => {
  const [region, setRegion] = useState("");
  const [name, setName] = useState("");
  const debouncedSearch = useDebounce(name);
  const { isPending, countries } = useCountries(region, debouncedSearch);

  //pagination
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paginatedCountries = countries?.slice(start, end);

  const handleChange = (page: number, size: number) => {
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
          <Filter setRegion={setRegion} loading={isPending} />
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
              handleChange={handleChange}
            />
          </div>
        </>
      )}
    </section>
  );
};

export default Home;
