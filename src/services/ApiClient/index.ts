import { requests } from "@/config/axios";
import { BalanceStatsType, CategoriesStatsType, ExchangeRates, SubscriptionCategories, UserCurrency } from "../../types";
import { GetHistoryTransactionDataResponse } from "@/lib/get-transactions-history-dataAPI";


export const ApiClient = (url: string) => {
  return {
    getSubscriptionCategories: (): Promise<SubscriptionCategories[]> =>
      requests.get(url),
    getFinanceTrackerStatsBalance: (): Promise<BalanceStatsType> =>
      requests.get(url),
    getFinanceTrackerStatsCategories: (): Promise<CategoriesStatsType> =>
      requests.get(url),
    getCurrencyExchangeRates: (): Promise<ExchangeRates> => requests.get(url),
    getUserCurrencies: (): Promise<UserCurrency> => requests.get(url),
    updateUserCurrency: (data: {userId: string, currency: string}): Promise<any> => requests.patch(url, data),
    getTransactionsHistory: (): Promise<GetHistoryTransactionDataResponse> => requests.get(url),
  };
};
