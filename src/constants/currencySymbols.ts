import { CURRENCY } from "@prisma/client";

export const CURRENCY_SYMBOLS: Record<CURRENCY, string> = {
    PLN: "🇵🇱 (zł)",
    EUR: "🇪🇺 (€)",
    GBP: "🇬🇧 (£)",
    USD: "🇺🇸 ($)",
  };