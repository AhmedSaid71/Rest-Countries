import { Link } from "react-router-dom";
import { Country } from "../types/country";

const Card = ({ country }: { country: Country }) => {
  return (
    <Link to={`country/${country.name.common.toLowerCase()}`}>
      <div className="flex flex-col gap-4 bg-white rounded hover:shadow-lg duration-300">
        <img
          src={country.flags.png}
          alt={country.name.common}
          className=" w-full min-h-[200px] sm:min-h-[160px] max-h-[160px] rounded-t"
        />
        <div className=" pt-2 pb-10 px-5 flex flex-col gap-4">
          <h3 className="font-bold text-lg">{country.name.common}</h3>
          <div className="flex flex-col gap-1">
            <div>
              <span className=" font-bold">Population: </span>
              {country.population}
            </div>
            <div>
              <span className=" font-bold">Region: </span>
              {country.region}
            </div>
            <div>
              <span className=" font-bold">Capital: </span>
              {country.capital}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
