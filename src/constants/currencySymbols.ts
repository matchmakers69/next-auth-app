import { SUBSCRIPTION_CURRENCY } from "@prisma/client";

export const CURRENCY_SYMBOLS: Record<SUBSCRIPTION_CURRENCY, string> = {
    PLN: "🇵🇱 (zł)",
    EUR: "🇪🇺 (€)",
    GBP: "🇬🇧 (£)",
    USD: "🇺🇸 ($)",
  };