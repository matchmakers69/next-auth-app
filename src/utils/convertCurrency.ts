import { CurrencyConvertor } from "@/types";

export const convertCurrency = ({
  amount,
  from,
  to,
  rates,
  defaultCurrency = "GBP",
}: CurrencyConvertor): string => {
  const sourceCurrency = from || defaultCurrency;

  if (!rates || !rates[sourceCurrency] || !rates[to]) return "0.00";

  if (sourceCurrency === to) return amount.toFixed(2);

  return ((amount / rates[sourceCurrency]) * rates[to]).toFixed(2);
};
