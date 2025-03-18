import { CURRENCY } from "@prisma/client";

export const CURRENCIES = [
  { value: "USD", label: "$ Dollar", locale: "en-US" },
  { value: "EUR", label: "🇪🇺 (€)", locale: "en_EU" },
  { value: "PLN", label: "🇵🇱 (zł)", locale: "pl-PL" },
  { value: "GBP", label: "🇬🇧 (£)", locale: "en-GB" },
];

export const CURRENCY_SYMBOLS: Record<CURRENCY, string> = {
    PLN: "🇵🇱 (zł)",
    EUR: "🇪🇺 (€)",
    GBP: "🇬🇧 (£)",
    USD: "🇺🇸 ($)",
  };

export type CurrenciesType = (typeof CURRENCIES)[number];