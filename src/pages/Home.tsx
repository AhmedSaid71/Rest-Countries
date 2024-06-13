import { useState } from "react";
import { Filter, Loader, Card, SearchBar, NotFound } from "../components";
import { useCountries, useDebounce } from "../hooks";

const Home = () => {
  const [region, setRegion] = useState("");
  const [name, setName] = useState("");
  const debouncedSearch = useDebounce(name);

  const { isPending, countries } = useCountries(region, debouncedSearch);

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
      <div className="list">
        {isPending ? (
          <Loader />
        ) : !countries ? (
          <NotFound />
        ) : (
          countries?.map((country) => (
            <Card country={country} key={country.name.common} />
          ))
        )}
      </div>
    </section>
  );
};

export default Home;
