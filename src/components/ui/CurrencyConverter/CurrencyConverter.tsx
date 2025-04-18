"use client";

import { convertCurrency } from "@/utils/convertCurrency";
import { CURRENCY } from "@prisma/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import {
  CurrencySchema,
  CurrencySchemaType,
} from "./validation/currencyValidationSchema";
import { Controller, useForm } from "react-hook-form";
import { MUITextFieldSelect } from "../formParts/MUITextFieldSelect";
import FormHelperText from "../formParts/FormHelperText";
import { Button } from "../Button";
import NumberField from "../formParts/NumberField/NumberField";
import { useCurrencyOptions } from "@/hooks/useCurrencyOptions";
import { CurrencyConverterProps } from "./defs";
import { useCurrencyStore } from "@/hooks/useCurrencyStore";

const CurrencyConverter = ({ rates }: CurrencyConverterProps) => {
  const storeCurrency = useCurrencyStore();
  const [baseCurrency, setBaseCurrency] = useState<CURRENCY>(
    storeCurrency.baseCurrency ? storeCurrency.baseCurrency : "GBP",
  );
  const [amount, setAmount] = useState<number>(1);
  const CURRENCY_OPTIONS = useCurrencyOptions();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CurrencySchemaType>({
    mode: "onTouched",
    resolver: zodResolver(CurrencySchema),
    defaultValues: {
      currency: "GBP",
    },
  });

  const targetCurrencies: CURRENCY[] = ["EUR", "PLN", "USD", "GBP"];

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputVal = e.target.value;
    const numericValue = parseFloat(inputVal);

    if (isNaN(numericValue) || numericValue <= 0) {
      setAmount(1);
    } else {
      setAmount(numericValue);
    }
  };

  const handleSaveCurrencySubmit = (data: CurrencySchemaType) => {
    setBaseCurrency(data?.currency as CURRENCY);
  };

  return (
    <>
      <div className="mb-12 flex w-full flex-col gap-2">
        <h3 className="mb-2 flex items-center gap-4 text-md text-text-light">
          <NumberField
            id="income-amount"
            placeholder="Enter your amount"
            name="amount"
            label="Amount"
            data-testid="amountValue"
            aria-label="Enter amount"
            onChange={handleAmountChange}
            margin="none"
            value={amount}
            type="number"
            isCurrency
            step="1"
            min="1"
          />
          {baseCurrency} in other currencies:
        </h3>
        <div className="flex items-center gap-4">
          {targetCurrencies.map((currency) => (
            <div key={currency} className="align-center flex gap-4">
              <span className="font-semibold text-text-light">{`${currency}:`}</span>
              <span className="text-text-light">
                {rates
                  ? convertCurrency({
                      amount,
                      from: baseCurrency,
                      to: currency,
                      rates,
                    })
                  : "N/A"}
              </span>
            </div>
          ))}
        </div>
      </div>
      <form
        className="flex w-full max-w-[400px]"
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit(handleSaveCurrencySubmit)}
      >
        <div className="flex w-full items-center gap-2">
          <div className="currency-selector-wrapper flex w-full flex-col">
            <div className="input-select-currency-wrapper">
              <Controller
                control={control}
                name="currency"
                render={({ field }) => (
                  <MUITextFieldSelect
                    id="currency-select"
                    labelText="Choose your currency"
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
                    value={field.value}
                    displayEmpty
                    emptyLabel="Select a currency"
                    fullWidth
                    error={!!errors.currency}
                  />
                )}
              />
            </div>
            <div className="error-wrapper">
              {errors.currency && (
                <FormHelperText>{errors.currency.message}</FormHelperText>
              )}
            </div>
          </div>
          <div className="button-wrapper">
            <Button
              type="submit"
              variant="link"
              size="sm"
              disabled={isSubmitting}
            >
              Calculate currency
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CurrencyConverter;
