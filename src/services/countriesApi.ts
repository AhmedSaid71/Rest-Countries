import axios from "axios";
import { Country } from "../types/country";

const BASE_URL = "https://restcountries.com/v3.1";

export const getCountries = async (): Promise<Country[]> => {
  const { data } = await axios.get(`${BASE_URL}/all`);
  return data;
};

export const getCountry = async (name: string): Promise<Country> => {
  const { data } = await axios.get(`${BASE_URL}/name/${name}`);
  return data[0];
};
