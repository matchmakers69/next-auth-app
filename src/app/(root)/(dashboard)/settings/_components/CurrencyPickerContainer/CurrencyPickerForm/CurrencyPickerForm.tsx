"use client";

import { useCallback, useEffect, useState } from "react";
import FormHelperText from "@/components/ui/formParts/FormHelperText";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TransactionCurrencyValues,
  transactionsCurrencySchema,
} from "./validation/transactionsCurrencySchema";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/Button";
import { Loader, Loader2 } from "lucide-react";
import { MUITextFieldSelect } from "@/components/ui/formParts/MUITextFieldSelect";
import { useCurrencyOptions } from "@/hooks/useCurrencyOptions";
import { CURRENCY } from "@prisma/client";
import { CurrencyPickerFormProps } from "./defs";
import { useCurrencyStore } from "@/hooks/useCurrencyStore";
import { useUpdateCurrencyMutation } from "@/reactQuery/hooks/useUpdateCurrencyMutation";

const CurrencyPickerForm = ({
  selectedUserCurrency,
}: CurrencyPickerFormProps) => {
  const CURRENCY_OPTIONS = useCurrencyOptions();
  const { setBaseCurrency } = useCurrencyStore();
  const [clientReady, setClientReady] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
    reset,
  } = useForm<TransactionCurrencyValues>({
    mode: "onTouched",
    resolver: zodResolver(transactionsCurrencySchema),
    defaultValues: { currency: selectedUserCurrency ?? "GBP" },
  });

  const { mutate, isPending } = useUpdateCurrencyMutation();

  useEffect(() => {
    setClientReady(true);
  }, []);

  const handleUpdateUserCurrencySubmit = useCallback(
    (values: TransactionCurrencyValues) => {
      toast.loading("Updating currency...", {
        id: "update-currency",
      });

      const formData = new FormData();
      formData.append("currency", values.currency || "GBP");

      mutate(formData, {
        onSuccess: () => {
          toast.success("Currency updated successfully!", {
            id: "update-currency",
          });
          setBaseCurrency(values.currency as CURRENCY);
          reset({ currency: values.currency ?? "GBP" });
        },
        onError: () => {
          toast.error("Failed to update currency. Please try again.", {
            id: "update-currency",
          });
        },
      });
    },
    [mutate, setBaseCurrency, reset],
  );

  if (!clientReady) {
    return <Loader2 size={30} className="mx-auto my-10 animate-spin" />;
  }

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
          disabled={!isDirty || isSubmitting || isPending}
        >
          {isPending && <Loader className="size-6 animate-spin" />}
          <span className="inline-block">
            {isPending ? "Updating now..." : "Update currency"}
          </span>
        </Button>
      </div>
    </form>
  );
};

export default CurrencyPickerForm;
