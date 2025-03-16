import { EXCHANGE_API_URL } from "@/lib/constants";
import { ApiClient } from "@/services/ApiClient";
import { queryOptions, useQuery } from "@tanstack/react-query";

const fetchExchangeRates = async () => {
  return await ApiClient(`${EXCHANGE_API_URL}&symbols=EUR,PLN,GBP,USD`).getCurrencies();
}

export const currenciesExchange = () =>
  queryOptions({
    queryKey: ["currency-exchange"],
    queryFn: fetchExchangeRates,
    select: (response) => {
        if (!response) return null;
        return response.rates;
      },
    refetchInterval: 300000, // Auto-refetch every 5 minutes
    refetchOnWindowFocus: true,
    staleTime: 300000,
  });

export const useFetchCurrenciesQuery = () => {
  return useQuery(currenciesExchange());
};