import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { CountryMiniType } from "../types/country";
import { formatNumberWithCommas } from "../utils/helpers";

const Card = ({ country }: { country: CountryMiniType }) => {
  const { i18n, t } = useTranslation();

  return (
    <Link to={`country/${country.name.common.toLowerCase()}`}>
      <div className="flex flex-col gap-4 bg-white rounded hover:shadow-lg duration-300 dark:bg-dark-blue">
        <img
          src={country.flags.svg}
          alt={country.name.common}
          className="w-full min-h-[180px] sm:max-h-[180px] h-full max-h-[260px] rounded-t object-cover"
        />
        <div className=" pt-2 pb-10 px-5 flex flex-col gap-4">
          <h3 className="font-bold text-lg">
            {i18n.language === "ar"
              ? country?.translations?.ara?.common
              : country?.name?.common}
          </h3>
          <div className="flex flex-col gap-1">
            <div>
              <span className="font-bold">{t("population")}: </span>
              {formatNumberWithCommas(country.population)}
            </div>
            <div>
              <span className="font-bold">{t("region")}: </span>
              {t(`regions.${country?.region.toLowerCase()}`)}
            </div>
            <div>
              <span className="font-bold">{t("capital")}: </span>
              {country.capital}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
