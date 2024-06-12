import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../services/countriesApi";

export function useCountries() {
  const {
    isPending,
    data: countries,
    error,
  } = useQuery({
    queryKey: ["countries"],
    queryFn: getCountries,
  });
  return { isPending, countries, error };
}
