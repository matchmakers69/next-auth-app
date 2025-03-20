import { CURRENCY } from "@prisma/client";

export type CategoriesStatsProps = {
    from: Date;
    to: Date;
    selectedCurrency: CURRENCY;
};