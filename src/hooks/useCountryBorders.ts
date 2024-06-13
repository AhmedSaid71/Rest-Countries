import { useQuery } from "@tanstack/react-query";
import { getCountryBorders } from "../services";

export function useCountryBorders(codes: string) {
  const {
    data: borders,
    isPending,
    error,
  } = useQuery({
    queryKey: ["countryBorders", codes],
    queryFn: () => getCountryBorders(codes),
  });
  return { borders, isPending, error };
}
