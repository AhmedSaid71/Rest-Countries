import { useQuery } from "@tanstack/react-query";
import { CountryMiniType } from "@/types/country";
import { API } from "@/utils/axiosInstance";

const getCountries = async (
  region?: string,
  name?: string
): Promise<CountryMiniType[]> => {
  let query;

  if (region && name) query = `/translation/${name}`;
  else if (region) query = `/region/${region}`;
  else if (name) query = `/translation/${name}`;
  else query = `/all`;

  query += `?fields=name,capital,region,population,flags`;

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
