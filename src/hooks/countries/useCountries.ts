import { useQuery } from "@tanstack/react-query";
import { CountryMiniType } from "@/types/country";
import { API } from "@/utils/axiosInstance";

const getAll = () => {
  return `/all?fields=name,capital,region,population,flags`;
};
const getByRegion = (region: string) => {
  return `/region/${region}?fields=name,capital,region,population,flags`;
};
const getByName = (name: string) => {
  return `/translation/${name}?fields=name,capital,region,population,flags`;
};

const getCountries = async (
  region?: string,
  name?: string
): Promise<CountryMiniType[]> => {
  let query;

  if (region && name) query = getByName(name);
  else if (region) query = getByRegion(region);
  else if (name) query = getByName(name);
  else query = getAll();

  const { data } = await API.get(query);

  return data;
};

export function useCountries(region: string, name: string) {
  const {
    isPending,
    data: countries,
    error,
  } = useQuery({
    queryKey: ["countries", region, name],
    queryFn: () => getCountries(region, name),
  });
  return { isPending, countries, error };
}
