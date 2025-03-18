import { EXCHANGE_API_URL, SELECTED_CURRENCIES } from "@/lib/constants";
import { ApiClient } from "@/services/ApiClient";
import { queryOptions, useQuery } from "@tanstack/react-query";

const fetchExchangeRates = async () => {
  return await ApiClient(`${EXCHANGE_API_URL}&currencies=${SELECTED_CURRENCIES}`).getCurrencies();
}

export const currenciesExchange = () =>
  queryOptions({
    queryKey: ["currency-exchange"],
    queryFn: fetchExchangeRates,
    select: (response) => response?.data ?? null,
    refetchInterval: 900000,
    refetchOnWindowFocus: false,
    staleTime: 900000,
  });

export const useFetchCurrenciesQuery = () => {
  return useQuery(currenciesExchange());
};