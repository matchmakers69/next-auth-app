export const convertCurrency = (
  amount: number,
  from: string,
  to: string,
  rates: Record<string, number>,
): string => {
  if (!rates || !rates[from] || !rates[to]) {
    return "0.00";
  }
  if (from === "EUR") {
    return (amount * rates[to]).toFixed(2);
  }
  if (to === "EUR") {
    return (amount / rates[from]).toFixed(2);
  }
  return ((amount / rates[from]) * rates[to]).toFixed(2);
};
