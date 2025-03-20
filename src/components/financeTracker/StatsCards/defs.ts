import { CURRENCY } from "@prisma/client";

export type StatsCardsProps = {
    from: Date;
    to: Date;
    selectedCurrency: CURRENCY;
}