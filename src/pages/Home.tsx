import { Filter, Loader, Card } from "../components";
import { useCountries } from "../hooks";

const Home = () => {
  const { isPending, countries } = useCountries();
  if (isPending) return <Loader />;
  return (
    <section className="flex flex-col gap-8 min-h-dvh">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div>SearchBar</div>
        <div>
          <Filter />
        </div>
      </div>
      <div className="list">
        {countries?.map((country) => (
          <Card country={country} key={country.name.common} />
        ))}
      </div>
    </section>
  );
};

export default Home;
