import axios from "axios";
import { Borders, Country } from "../types/country";

const BASE_URL = "https://restcountries.com/v3.1";

export const getCountries = async (region?: string): Promise<Country[]> => {
  let query;
  if (region) query = `${BASE_URL}/region/${region}`;
  else query = `${BASE_URL}/all`;
  const { data } = await axios.get(query);
  return data;
};

export const getCountry = async (name: string): Promise<Country> => {
  const { data } = await axios.get(`${BASE_URL}/name/${name}`);
  return data[0];
};

export const getCountryBorders = async (codes: string): Promise<Borders[]> => {
  // https://restcountries.com/v3.1/alpha?codes=AND
  const { data } = await axios.get(
    `${BASE_URL}/alpha?codes=${codes}&fields=name`
  );
  return data;
};
