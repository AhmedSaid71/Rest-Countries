import { useCountry } from "../hooks";
import { Loader } from "../components";
const Country = () => {
  const { country, isPending } = useCountry();
  if (isPending) return <Loader />;
  return (
    <section className="flex gap-8 flex-col mt-8">
      <div className="flex gap-8">
        <div className="flex-1">
          <img
            src={country?.flags?.svg}
            alt={country?.flags?.alt}
            className="w-full max-h-[600px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Country;
