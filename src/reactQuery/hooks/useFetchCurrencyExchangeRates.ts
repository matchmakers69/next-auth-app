import { EXCHANGE_API_URL, SELECTED_CURRENCIES } from "@/lib/constants";
import { ApiClient } from "@/services/ApiClient";
import { queryOptions, useQuery } from "@tanstack/react-query";

const fetchExchangeRates = async () => {
  return await ApiClient(`${EXCHANGE_API_URL}&currencies=${SELECTED_CURRENCIES}`).getCurrencyExchangeRates();
}

export const currenciesExchange = () =>
  queryOptions({
    queryKey: ["currency-exchange-rates"],
    queryFn: fetchExchangeRates,
    select: (response) => response?.data ?? null,
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false
  });

export const useFetchCurrencyExchangeRatesQuery = () => {
  return useQuery(currenciesExchange());
};