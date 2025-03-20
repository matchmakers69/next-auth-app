import {
  queryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { ApiClient } from "@/services/ApiClient";

const CURRENCY_API_ENDPOINT = "/dashboard/settings/currencies";

const fetchUserCurrency = async (userId: string) => {
  return await ApiClient(
    `${CURRENCY_API_ENDPOINT}?userId=${userId}`,
  ).getUserCurrencies();
};

export const useFetchUserCurrencies = (userId: string) =>
  queryOptions({
    queryKey: ["userCurrency", userId],
    queryFn: () => fetchUserCurrency(userId),
    staleTime: 1000 * 15,
  });

export const useUserCurrencyQuery = (userId: string) => {
  return useQuery(useFetchUserCurrencies(userId));
};

// Mutation function for updating currency
const updateUserCurrency = async (userId: string, currency: string) => {
  return await ApiClient(CURRENCY_API_ENDPOINT).updateUserCurrency({ userId, currency });
};

export const useUpdateUserCurrency = (userId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newCurrency: string) => updateUserCurrency(userId, newCurrency),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userCurrency", userId] });
    },
  });
};
