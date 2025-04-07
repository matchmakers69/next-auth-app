import { defaultRates } from "@/lib/constants";
import { useFetchCurrencyExchangeRatesQuery } from "@/reactQuery/hooks/useFetchCurrencyExchangeRates";

export const useCurrencyExchangeRates = () => {
    const { data, error, isPending, isFetching } = useFetchCurrencyExchangeRatesQuery();
    const rates = data || defaultRates;
    const isUsingFallbackRates = !!error;

    return { rates, error, isPending, isFetching, isUsingFallbackRates };
  };
