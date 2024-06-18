import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "antd";
import { GoArrowLeft } from "react-icons/go";

import { useCountry, useCountryBorders } from "../hooks";
import { Loader } from "../components";
import { Currencies, Languages } from "../types";
import { formatNumberWithCommas } from "./../utils/helpers";

const Country = () => {
  const { country, isPending } = useCountry();
  const { borders, isPending: isPendingBorders } = useCountryBorders(
    country?.borders?.join(",") as string
  );
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  if (isPending || isPendingBorders) return <Loader />;
  return (
    <section className="flex gap-8 flex-col mt-8">
      <div>
        <Button
          onClick={handleGoBack}
          className="px-8 shadow-md py-5 dark:text-white dark:bg-dark-blue dark:border-dark-blue group rounded-sm"
        >
          <GoArrowLeft className="group-hover:translate-x-1 transition" />
          Back
        </Button>
      </div>
      <div className="flex gap-16 flex-col md:flex-row">
        <div className="flex-1 items-center justify-center flex lg:block">
          <img
            src={country?.flags?.svg}
            alt={country?.flags?.alt}
            className="w-full max-h-[300px] h-full object-fit"
          />
        </div>
        <div className="flex-1 flex flex-col gap-4 sm:pt-10">
          <h1 className=" text-3xl font-extrabold">{country?.name?.common}</h1>
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="flex flex-col gap-3 flex-1">
              <div>
                <span className="bold">Native Name: </span>
                {country?.name?.common}
              </div>
              <div>
                <span className="bold">Population: </span>
                {formatNumberWithCommas(country?.population as number)}
              </div>
              <div>
                <span className="bold">Region: </span>
                {country?.region}
              </div>
              <div>
                <span className="bold">Sub Region: </span>
                {country?.subregion}
              </div>
              <div>
                <span className="bold">Capital: </span>
                {country?.capital}
              </div>
            </div>
            <div className="flex flex-col gap-3 flex-1">
              <div>
                <span className="bold">Top Level Domain: </span>
                {country?.tld}
              </div>
              <div>
                <span className="bold">Currencies: </span>
                {Object.entries(country?.currencies as Currencies).map(
                  (cr, i, arr) => (
                    <React.Fragment key={`${i}-${cr[1].name}`}>
                      <span>{cr[1].name}</span>
                      {i < arr.length - 1 && <span>, </span>}
                    </React.Fragment>
                  )
                )}
              </div>
              <div>
                <span className="bold">Languages: </span>
                {Object.entries(country?.languages as Languages).map(
                  (c, i, arr) => (
                    <React.Fragment key={`${i}-${c[1]}`}>
                      <span>{c[1]}</span>
                      {i < arr.length - 1 && <span>, </span>}
                    </React.Fragment>
                  )
                )}
              </div>
            </div>
          </div>
          {borders && (
            <div className="flex flex-col gap-2">
              <h2>Border Countries:</h2>
              <div className="flex gap-2 flex-wrap">
                {borders?.map((border) => (
                  <Link to={`/country/${border.name.common.toLowerCase()}`}>
                    <div className="py-2 px-4 shadow-md hover:bg-gray-200 cursor-pointer flex items-stretch min-w-fit dark:bg-dark-blue dark:hover:bg-dark-blue/60 transition">
                      {border.name.common}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Country;
