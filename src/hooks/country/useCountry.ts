import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { API } from "@/utils/axiosInstance";
import { CountryType } from "@/types/country";

export const getCountry = async (name: string): Promise<CountryType> => {
  const { data } = await API.get(
    `/name/${name}?fields=flags,name,population,region,subregion,capital,tld,currencies,languages,borders,cca3,translations`
  );
  return data[0];
};

export function useCountry() {
  const { countryName } = useParams();

  const {
    isPending,
    error,
    data: country,
  } = useQuery({
    queryKey: ["country", countryName],
    queryFn: () => getCountry(countryName as string),
  });
  return { isPending, error, country };
}
