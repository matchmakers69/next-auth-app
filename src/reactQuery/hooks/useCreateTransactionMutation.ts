import { CreateTransaction } from "@/actions/financeTrackerActions/create-transaction";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useCreateTransactionMutation = (
  onSuccessCallback?: () => void,
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: CreateTransaction,
    onSuccess: async () => {
      toast.success("Transaction created successfully 🎉", {
        id: "create-transaction",
      });
      await queryClient.invalidateQueries({ queryKey: ["overview"] });
      if (onSuccessCallback) onSuccessCallback();
    },
    onError: (error) => {
      console.error(error);
      if (error) {
        toast.error("Error, something went wrong with your transaction", {
            id: "create-transaction",
          });
      }
    },
  });
};
