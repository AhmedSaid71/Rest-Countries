import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../services/countriesApi";

export function useCountries(region: string) {
  const {
    isPending,
    data: countries,
    error,
  } = useQuery({
    queryKey: ["countries", region],
    queryFn: () => getCountries(region),
  });
  return { isPending, countries, error };
}
