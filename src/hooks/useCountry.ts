import { useQuery } from "@tanstack/react-query";
import { getCountry } from "../services";
import { useParams } from "react-router-dom";

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
