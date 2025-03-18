import { CURRENCY_SYMBOLS } from "@/constants/currencies";
import { CURRENCY } from "@prisma/client";

export function useCurrencyOptions() {
    const currencyOptions = Object.entries(CURRENCY).map(([key, value]) => ({
      label: `${CURRENCY_SYMBOLS[key as keyof typeof CURRENCY]}`,
      value: value as keyof typeof CURRENCY,
    }));

    return currencyOptions;
  }