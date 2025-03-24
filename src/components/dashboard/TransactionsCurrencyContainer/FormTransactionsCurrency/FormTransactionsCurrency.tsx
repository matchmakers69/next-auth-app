"use client";

import FormHelperText from "@/components/ui/formParts/FormHelperText";

import { TransactionCurrencyValues } from "./validation/transactionsCurrencySchema";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/Button";
import { Loader } from "lucide-react";
import { MUITextFieldSelect } from "@/components/ui/formParts/MUITextFieldSelect";
import { useCurrencyOptions } from "@/hooks/useCurrencyOptions";
import { CURRENCY } from "@prisma/client";
import { FormTransactionsCurrencyProps } from "./defs";
import { useUpdateUserCurrency } from "@/reactQuery/hooks/useUserCurrenciesQuery";
import { useCurrencyStore } from "@/hooks/useCurrencyStore";

const FormTransactionsCurrency = ({
  userId,
  selectedUserCurrency,
}: FormTransactionsCurrencyProps) => {
  const CURRENCY_OPTIONS = useCurrencyOptions();
  const { setBaseCurrency } = useCurrencyStore();
  const mutation = useUpdateUserCurrency(userId);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
    reset,
  } = useForm<TransactionCurrencyValues>({
    mode: "onTouched",
    defaultValues: { currency: selectedUserCurrency ?? "GBP" },
  });

  const handleUpdateUserCurrencySubmit = (data: TransactionCurrencyValues) => {
    mutation.mutate(data?.currency || "", {
      onSuccess: () => {
        toast.success("Currency updated successfully!");
        setBaseCurrency(data.currency as CURRENCY);
        reset({ currency: data.currency ?? "GBP" });
      },
      onError: () => {
        toast.error("Failed to update currency. Please try again.");
      },
    });
  };

  return (
    <form
      className="flex w-full flex-col flex-wrap"
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit(handleUpdateUserCurrencySubmit)}
    >
      <div className="input-select-currency-wrapper mb-12">
        <Controller
          control={control}
          name="currency"
          render={({ field }) => (
            <MUITextFieldSelect
              id="currency-select"
              labelText="Set your default currency for transactions"
              displayValue
              name="currency"
              placeholder="i.e GBP"
              options={CURRENCY_OPTIONS}
              data-testid="currency-select-field-dropdown"
              aria-label="Enter your currency"
              onChange={(selected) => {
                const typedSelected = selected as {
                  label: string;
                  value: CURRENCY;
                };
                field.onChange(typedSelected.value);
              }}
              value={field.value ?? ""}
              displayEmpty
              emptyLabel="Select a currency"
              fullWidth
              error={!!errors.currency}
            />
          )}
        />
        {errors.currency && (
          <FormHelperText>{errors.currency.message}</FormHelperText>
        )}
      </div>
      <div className="mb-8">
        <Button
          type="submit"
          variant="default"
          size="sm"
          disabled={!isDirty || isSubmitting || mutation.isPending}
        >
          {mutation.isPending && <Loader className="size-6 animate-spin" />}
          <span className="inline-block">
            {mutation.isPending ? "Updating now..." : "Update currency"}
          </span>
        </Button>
      </div>
    </form>
  );
};

export default FormTransactionsCurrency;
