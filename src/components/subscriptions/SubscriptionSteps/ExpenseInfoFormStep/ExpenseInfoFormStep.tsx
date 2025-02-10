import { useSubscriptionsContext } from "@/contexts/SubscriptionsProvider/SubscriptionsProvider";
import { Controller, useFormContext } from "react-hook-form";
import { SubscriptionStepValues } from "../../types";
import { ExpenseInfoFormProps } from "./defs";
import { Button } from "@/components/ui/Button";
import NumberField from "@/components/ui/formParts/NumberField/NumberField";
import MuiSelectField from "@/components/ui/formParts/MuiSelectField";

import {
  SUBSCRIPTION_BILLING_PERIOD,
  SUBSCRIPTION_CURRENCY,
} from "@prisma/client";
import { MUIDateTimePicker } from "@/components/ui/formParts/MUIDateTimePicker";
import { DATE_GLOBAL_FORMAT } from "@/constants";
import { InputSx } from "@/utils/stylesUtils";
import { MUITextFieldSelect } from "@/components/ui/formParts/MUITextFieldSelect";
import { addDays, format, parse, startOfDay, startOfToday } from "date-fns";
import { CURRENCIES, SUBSCRIPTION_BILLING_OPTIONS } from "@/constants/mocks";

const ExpenseInfoForm = ({ title, onSubmit, onPrev }: ExpenseInfoFormProps) => {
  const {
    handleSubmit,
    control,
    trigger,
    formState: { errors },
  } = useFormContext<SubscriptionStepValues>();
  const { dispatch } = useSubscriptionsContext();
  const handleSaveExpenseInformation = (stepValues: SubscriptionStepValues) => {
    dispatch({
      type: "SET_EXPENSE_INFORMATION",
      payload: stepValues.expenseInformation,
    });
    onSubmit({
      expenseInformation: stepValues.expenseInformation,
    });
  };

  const mappedBillingOptions = SUBSCRIPTION_BILLING_OPTIONS.map(
    (billingOption) => ({
      label: billingOption || "Uncategorized",
      value: billingOption as SUBSCRIPTION_BILLING_PERIOD,
    }),
  );

  return (
    <>
      <h4 className="mb-10 text-sm font-semibold">{title}</h4>
      <form
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit(handleSaveExpenseInformation)}
      >
        <div className="currencies-row mb-10 flex items-end gap-10">
          <div className="currency-field-wrapper flex w-full flex-col md:w-[50%]">
            <Controller
              name="expenseInformation.price"
              control={control}
              render={({ field }) => (
                <NumberField
                  id="subscription-cost"
                  placeholder="e.g. 5.00"
                  name="price"
                  fullWidth
                  label="Cost"
                  data-testid="costValue"
                  aria-label="Enter subscription cost"
                  onChange={field.onChange}
                  margin="none"
                  value={field.value}
                  type="number"
                  sx={InputSx}
                  isCurrency
                  step="0.01"
                  min="0"
                  //error={!!state?.errors?.content}
                />
              )}
            />

            {/* {state?.errors?.content && (
            <FormHelperText>{state?.errors?.content.join(", ")}</FormHelperText>
          )} */}
          </div>
          <div className="currency-selector-wrapper flex w-full flex-col md:w-[50%]">
            {/* SUBSCRIPTION_CURRENCY */}
            <Controller
              control={control}
              name="expenseInformation.currency"
              render={({ field }) => (
                <MUITextFieldSelect
                  id="currency-select"
                  labelText="Select currency"
                  displayValue
                  name="currency"
                  options={CURRENCIES}
                  data-testid="currency-value"
                  aria-label="Enter your currency"
                  onChange={(selected) => {
                    const typedSelected = selected as {
                      label: string;
                      value: SUBSCRIPTION_CURRENCY;
                    };
                    field.onChange(typedSelected.value);
                  }}
                  value={field.value}
                  displayEmpty
                  emptyLabel="Select a currency"
                  fullWidth
                />
              )}
            />
          </div>
        </div>
        <div className="mb-10">
          <Controller
            name="expenseInformation.billingPeriod"
            control={control}
            render={({ field }) => (
              <MuiSelectField
                id="billingPeriod-id"
                labelText="Billing period"
                displayEmpty
                emptyLabel="How ofter do you pay?"
                name="billingPeriod"
                data-testid="billingPeriod-value"
                aria-label="Enter your billing period"
                onChange={(selected) => {
                  const typedSelected = selected as {
                    label: string;
                    value: SUBSCRIPTION_BILLING_PERIOD;
                  };
                  field.onChange(typedSelected.value);
                }}
                value={field.value}
                options={mappedBillingOptions}
                //error={!!state?.errors?.content}
              />
            )}
          />

          {/* {state?.errors?.name && (
            <FormHelperText>{state.errors.name.join(", ")}</FormHelperText>
          )} */}
        </div>
        <div className="billing-period-row mb-10 flex items-end gap-10">
          <div className="billing-period-wrapper flex w-full flex-col md:w-[50%]">
            <Controller
              control={control}
              name="expenseInformation.start_date"
              render={({
                field: { onChange: onReactHookFormChange, value },
                fieldState: { error },
              }) => {
                const isValidDate = (val: unknown): val is Date => {
                  return val instanceof Date && !isNaN(val.getTime());
                };
                const dateValue = isValidDate(value)
                  ? value
                  : value
                    ? new Date(value as string)
                    : null;
                return (
                  <MUIDateTimePicker
                    disablePast
                    minDate={startOfToday()}
                    error={Boolean(error)}
                    // minDate={parse(
                    //   format(new Date(), "yyyy-MM-dd"),
                    //   "yyyy-MM-dd",
                    //   new Date(),
                    // )}
                    maxDate={null}
                    format={DATE_GLOBAL_FORMAT}
                    // errorMessage={
                    //   errors.expenseInformation?.start_date?.message
                    // }
                    onChange={(newValue) => {
                      const finalValue = isValidDate(newValue)
                        ? newValue.toISOString()
                        : newValue;
                      onReactHookFormChange(finalValue);
                    }}
                    // onChange={(newValue) => {
                    //   onReactHookFormChange(newValue);
                    //   trigger(["expenseInformation.start_date"]);
                    // }}
                    labelText="Start subscription date"
                    timezone="default"
                    value={dateValue}
                    placeholder="Start subscription date"
                  />
                );
              }}
            />
          </div>
          <div className="next-billing-column flex w-full flex-col md:w-[50%]">
            <Controller
              control={control}
              name="expenseInformation.nextPaymentDate"
              render={({
                field: { onChange: onReactHookFormChange, value },
              }) => {
                return (
                  <MUIDateTimePicker
                    disablePast
                    minDate={addDays(startOfDay(new Date()), 1)}
                    // minDate={parse(
                    //   format(new Date(), "yyyy-MM-dd"),
                    //   "yyyy-MM-dd",
                    //   new Date(),
                    // )}
                    maxDate={null}
                    format={DATE_GLOBAL_FORMAT}
                    error={Boolean(errors.expenseInformation?.nextPaymentDate)}
                    errorMessage={
                      errors.expenseInformation?.nextPaymentDate?.message
                    }
                    onChange={(newValue) => {
                      onReactHookFormChange(newValue);
                      trigger(["expenseInformation.nextPaymentDate"]);
                    }}
                    labelText="Next billing payment"
                    timezone="default"
                    value={value ? new Date(value) : null}
                    placeholder="Next billing payment"
                  />
                );
              }}
            />
          </div>
        </div>

        <div className="button-wrapper mt-20 flex items-end gap-6">
          <Button onClick={onPrev} size="sm" type="button" variant="default">
            Back to previous step
          </Button>
          <Button
            type="submit"
            variant="default"
            size="sm"
            // disabled={isPending}
          >
            {/* {isPending && <Loader className="size-6 animate-spin" />}
                    <span className="inline-block">
                      {isPending ? "Creating now..." : "Create topic"}
                    </span> */}
            Create subscription
          </Button>
        </div>
      </form>
    </>
  );
};

export default ExpenseInfoForm;
