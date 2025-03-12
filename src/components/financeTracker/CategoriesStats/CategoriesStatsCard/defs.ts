import { CategoriesStatsType } from "@/types";
import { TransactionType } from "../../types";

export type CategoriesStatsCardProps = {
  type: TransactionType;
  formatter?: Intl.NumberFormat;
  data: CategoriesStatsType;
};