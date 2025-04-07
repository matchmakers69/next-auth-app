
import { updateUserCurrency } from "@/app/(root)/(dashboard)/settings/user-currency";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useUpdateCurrencyMutation = (
  onSuccessCallback?: () => void,
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateUserCurrency,
    onSuccess: async () => {
      toast.success("Updated currency successfully 🎉", {
        id: "update-currency",
      });
      await queryClient.invalidateQueries({ queryKey: ["overview"] });
      if (onSuccessCallback) onSuccessCallback();
    },
    onError: (error) => {
      console.error(error);
      if (error) {
        toast.error("Error, something went wrong with updating currency", {
            id: "update-currency",
          });
      }
    },
  });
};