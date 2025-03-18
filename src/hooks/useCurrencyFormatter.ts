import { getFormatterForCurrency } from "@/utils/getFormatterForCurrency";
import { CURRENCY } from "@prisma/client";
import { useMemo } from "react";

export const useCurrencyFormatter = (currency: CURRENCY) => {
  const formatter = useMemo(() => {
    return getFormatterForCurrency(currency);
  }, [currency]);

  return { formatter };
};
