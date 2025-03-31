import { CURRENCY } from "@prisma/client";

export type CurrencyPickerContainerProps = {
    userId: string;
    currency: CURRENCY;
}