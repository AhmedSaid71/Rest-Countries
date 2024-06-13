import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../services/countriesApi";

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
