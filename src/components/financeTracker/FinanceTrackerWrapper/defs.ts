import { CURRENCY } from "@prisma/client";

export interface FinanceTrackerWrapperProps {
  userId: string;
  currency: CURRENCY;
}
