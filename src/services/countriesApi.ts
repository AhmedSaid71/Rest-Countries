import axios from "axios";
import { Borders, CountryType, CountryMiniType } from "../types/country";

const BASE_URL = "https://restcountries.com/v3.1";

export const getCountries = async (
  region?: string,
  name?: string
): Promise<CountryMiniType[]> => {
  let query;

  if (region && name) query = `${BASE_URL}/translation/${name}`;
  else if (region) query = `${BASE_URL}/region/${region}`;
  else if (name) query = `${BASE_URL}/translation/${name}`;
  else query = `${BASE_URL}/all`;

  query += `?fields=name,capital,region,population,flags`;

  const { data } = await axios.get(query);

  return data;
};

export const getCountry = async (name: string): Promise<CountryType> => {
  const { data } = await axios.get(
    `${BASE_URL}/name/${name}?fields=flags,name,population,region,subregion,capital,tld,currencies,languages,borders,cca3,translations`
  );
  return data[0];
};

export const getCountryBorders = async (codes: string): Promise<Borders[]> => {
  // https://restcountries.com/v3.1/alpha?codes=AND
  const { data } = await axios.get(
    `${BASE_URL}/alpha?codes=${codes}&fields=name,translations`
  );
  return data;
};
