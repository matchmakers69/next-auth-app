
import { CURRENCIES } from "@/constants/currencies";
import { CURRENCY } from "@prisma/client";

export function getFormatterForCurrency(currency: CURRENCY) {
    const locale = CURRENCIES.find((c) => c.value === currency)?.locale || "en-GB";
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
    });
}