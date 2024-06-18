import { Link } from "react-router-dom";
import { Country } from "../types/country";
import { formatNumberWithCommas } from "../utils/helpers";

const Card = ({ country }: { country: Country }) => {
  return (
    <Link to={`country/${country.name.common.toLowerCase()}`}>
      <div className="flex flex-col gap-4 bg-white rounded hover:shadow-lg duration-300 dark:bg-dark-blue">
        <img
          src={country.flags.svg}
          alt={country.name.common}
          className="w-full min-h-[160px] max-h-[160px] rounded-t object-cover"
        />
        <div className=" pt-2 pb-10 px-5 flex flex-col gap-4">
          <h3 className="font-bold text-lg">{country.name.common}</h3>
          <div className="flex flex-col gap-1">
            <div>
              <span className=" font-bold">Population: </span>
              {formatNumberWithCommas(country.population)}
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
