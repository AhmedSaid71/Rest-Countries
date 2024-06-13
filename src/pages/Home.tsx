import { useState } from "react";
import { Filter, Loader, Card } from "../components";
import { useCountries } from "../hooks";

const Home = () => {
  const [region, setRegion] = useState("");
  const { isPending, countries } = useCountries(region);
  return (
    <section className="flex flex-col gap-8 min-h-dvh">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div>search Bar</div>
        <div>
          <Filter region={region} setRegion={setRegion} loading={isPending} />
        </div>
      </div>
      <div className="list">
        {isPending ? (
          <Loader />
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
