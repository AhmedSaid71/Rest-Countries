import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { GoArrowLeft } from "react-icons/go";

import { useCountry } from "../hooks";
import { Loader } from "../components";
import { Currencies, Languages } from "../types";
import { formatNumberWithCommas } from "./../utils/helpers";

const Country = () => {
  const { country, isPending } = useCountry();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  if (isPending) return <Loader />;
  return (
    <section className="flex gap-8 flex-col mt-8">
      <div>
        <Button onClick={handleGoBack} className="px-8 shadow-md py-4">
          <GoArrowLeft />
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
            <div className="flex flex-col gap-3">
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
            <div className="flex flex-col gap-3">
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
        </div>
      </div>
    </section>
  );
};

export default Country;
