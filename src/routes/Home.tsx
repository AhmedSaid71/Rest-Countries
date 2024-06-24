import { useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";

import { useCountries } from "@/hooks/countries/useCountries";
import Loader from "@/components/shared/Loader";
import NotFound from "@/components/shared/NotFound";
import Card from "@/components/country/Card";
import Pagination from "@/components/shared/Pagination";
import Filter from "@/components/country/Filter";
import SearchBar from "@/components/country/SearchBar";

const Home = () => {
  const [region, setRegion] = useState("");
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const debouncedSearch = useDebounce(name, 500);
  const { isPending, countries } = useCountries(region, debouncedSearch);

  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paginatedCountries = countries?.slice(start, end);
  const handlePageChange = (page: number, size: number) => {
    setPage(page);
    setPageSize(size);
  };

  return (
    <section className="flex flex-col gap-8 min-h-dvh">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 ">
        <div className="max-w-[350px] w-full flex items-center">
          <SearchBar setName={setName} />
        </div>
        <div>
          <Filter setRegion={setRegion} loading={isPending} />
        </div>
      </div>
      {isPending ? (
        <Loader />
      ) : !countries ? (
        <NotFound message="No Country Founded With This Name!" />
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
