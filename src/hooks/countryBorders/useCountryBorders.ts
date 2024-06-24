import { useQuery } from "@tanstack/react-query";
import { API } from "@/utils/axiosInstance";
import { Borders } from "@/types/country";

const getCountryBorders = async (codes: string): Promise<Borders[]> => {
  const { data } = await API.get(
    `/alpha?codes=${codes}&fields=name,translations`
  );
  return data;
};

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
