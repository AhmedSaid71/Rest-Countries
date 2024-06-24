import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "antd";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useTranslation } from "react-i18next";

import { useCountryBorders } from "@/hooks/countryBorders/useCountryBorders";
import { useCountry } from "@/hooks/country/useCountry";
import { formatNumberWithCommas } from "@/utils/formatNumberWithCommas";
import { Currencies, Languages } from "@/types/country";
import Loader from "@/components/shared/Loader";

const Country = () => {
  const { t, i18n } = useTranslation();
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
          {i18n.language === "ar" ? (
            <GoArrowRight className="group-hover:-translate-x-1 transition" />
          ) : (
            <GoArrowLeft className="group-hover:translate-x-1 transition" />
          )}
          {t("goBack")}
        </Button>
      </div>
      <div className="flex gap-16 flex-col lg:flex-row">
        <div className="flex-1 items-center justify-center flex ">
          <img
            src={country?.flags?.svg}
            alt={country?.flags?.alt || country?.name?.common}
            className="min-w-full  h-full object-fit"
          />
        </div>
        <div className="flex-1 flex flex-col gap-4 sm:pt-10">
          <h1 className=" text-3xl font-extrabold">
            {i18n.language === "ar"
              ? country?.translations?.ara?.common
              : country?.name?.common}
          </h1>
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="flex flex-col gap-3 flex-1">
              <div>
                <span className="font-bold">{t("nativeName")}: </span>
                {i18n.language === "ar"
                  ? country?.translations?.ara?.official
                  : country?.name?.official}
              </div>
              <div>
                <span className="font-bold">{t("population")}: </span>
                {formatNumberWithCommas(country?.population as number)}
              </div>
              <div>
                <span className="font-bold">{t("region")}: </span>
                {t(`regions.${country?.region.toLowerCase()}`)}
              </div>
              <div>
                <span className="font-bold">{t("subRegion")}: </span>
                {country?.subregion}
              </div>
              <div>
                <span className="font-bold">{t("capital")}: </span>
                {country?.capital}
              </div>
            </div>
            <div className="flex flex-col gap-3 flex-1">
              <div>
                <span className="font-bold">{t("tld")}: </span>
                {country?.tld}
              </div>
              <div>
                <span className="font-bold">{t("currencies")}: </span>
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
                <span className="font-bold">{t("languages")}: </span>
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
              <h2>{t("borderCountries")}:</h2>
              <div className="flex gap-2 flex-wrap">
                {borders?.map((border) => (
                  <Link
                    to={`/country/${border.name.common.toLowerCase()}`}
                    key={border?.name?.official}
                  >
                    <div className="py-2 px-4 shadow-md hover:bg-gray-200 cursor-pointer flex items-stretch min-w-fit dark:bg-dark-blue dark:hover:bg-dark-blue/60 transition">
                      {i18n.language === "ar"
                        ? border.translations.ara.common
                        : border.name.common}
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
