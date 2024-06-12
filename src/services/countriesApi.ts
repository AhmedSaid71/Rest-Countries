import axios from "axios";
import { Country } from "../types/country";

const BASE_URL = "https://restcountries.com/v3.1/all";

export const getCountries = async (): Promise<Country[]> => {
  const { data } = await axios.get(BASE_URL);
  return data;
};
