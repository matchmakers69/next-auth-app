import { useSubscriptionsContext } from "@/contexts/SubscriptionsProvider/SubscriptionsProvider";
import { Controller, useFormContext } from "react-hook-form";
import { SubscriptionStepValues } from "../../types";
import { ExpenseInfoFormProps } from "./defs";
import NumberField from "@/components/ui/formParts/NumberField/NumberField";
import MuiSelectField from "@/components/ui/formParts/MuiSelectField";
import FormHelperText from "@/components/ui/formParts/FormHelperText";
import {
  SUBSCRIPTION_BILLING_PERIOD,
  SUBSCRIPTION_CURRENCY,
} from "@prisma/client";
import { MUIDateTimePicker } from "@/components/ui/formParts/MUIDateTimePicker";
import { MUITextFieldSelect } from "@/components/ui/formParts/MUITextFieldSelect";
import { startOfToday } from "date-fns";
import { CURRENCIES, SUBSCRIPTION_BILLING_OPTIONS } from "@/constants/mocks";
import { SubscriptionStepperFooter } from "../../SubscriptionStepperFooter";
import {
  startTransition,
  useActionState,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { runExpensesInfoValidation } from "@/actions/subscriptionSteps/run-expenses-info-validation";
import { DATE_GLOBAL_FORMAT, isValidDate } from "@/utils/dates";

const ExpenseInfoForm = ({ title, onSubmit, onPrev }: ExpenseInfoFormProps) => {
  const [state, formAction, isPending] = useActionState(
    runExpensesInfoValidation,
    {
      errors: {},
      success: false,
    },
  );
  const { handleSubmit, control, getValues } =
    useFormContext<SubscriptionStepValues>();
  const { dispatch } = useSubscriptionsContext();

  const mappedBillingOptions = SUBSCRIPTION_BILLING_OPTIONS.map(
    (billingOption) => ({
      label: billingOption || "Uncategorized",
      value: billingOption as SUBSCRIPTION_BILLING_PERIOD,
    }),
  );

  const formRef = useRef<HTMLFormElement>(null);
  const stepValues = getValues().expenseInformation;

  const handleSaveExpensesInfoStep = () => {
    const formData = new FormData(formRef.current!);
    // Ensure price is converted to a number before submitting
    const numericPrice = parseFloat(stepValues.price.toString());

    if (isNaN(numericPrice)) {
      console.error("Invalid price value:", stepValues.price);
      return;
    }
    formData.append("price", numericPrice.toString());
    formData.append("currency", stepValues.currency);
    formData.append("billing_period", stepValues.billingPeriod);
    formData.append("start_date", stepValues.start_date);
    formData.append("next_payment", stepValues.next_payment);

    startTransition(() => {
      formAction(formData);
    });

    dispatch({
      type: "SET_EXPENSE_INFORMATION",
      payload: stepValues,
    });
  };

  const handleGoToNextStep = useCallback(() => {
    onSubmit(stepValues);
  }, [onSubmit, stepValues]);

  useEffect(() => {
    if (!state.success) {
      return;
    }
    handleGoToNextStep();
  }, [handleGoToNextStep, state]);

  console.log("error", state.errors);
  return (
    <>
      <h4 className="mb-10 text-sm font-semibold">{title}</h4>
      <form
        ref={formRef}
        autoComplete="off"
        action={formAction}
        noValidate
        onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          handleSubmit(handleSaveExpensesInfoStep)(event);
        }}
      >
        <div className="currencies-row mb-10 flex items-start gap-10">
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
                  isCurrency
                  step="0.01"
                  min="0"
                  error={!!state?.errors?.price}
                />
              )}
            />

            {state?.errors?.price && (
              <FormHelperText>{state?.errors?.price.join(", ")}</FormHelperText>
            )}
          </div>
          <div className="currency-selector-wrapper flex w-full flex-col md:w-[50%]">
            <Controller
              control={control}
              name="expenseInformation.currency"
              render={({ field }) => (
                <MUITextFieldSelect
                  id="currency-select"
                  labelText="Select currency"
                  displayValue
                  name="currency"
                  placeholder="i.e USD"
                  options={CURRENCIES}
                  data-testid="currency-select-field-dropdown"
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
                  error={!!state?.errors?.currency}
                />
              )}
            />
            {state?.errors?.currency && (
              <FormHelperText>
                {state?.errors?.currency.join(", ")}
              </FormHelperText>
            )}
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
                error={!!state?.errors?.billing_period}
              />
            )}
          />

          {state?.errors?.billing_period && (
            <FormHelperText>
              {state.errors.billing_period.join(", ")}
            </FormHelperText>
          )}
        </div>
        <div className="subscription-dates-row mb-10 flex items-start gap-10">
          <div className="start-date-col flex w-full flex-col md:w-[50%]">
            <Controller
              control={control}
              name="expenseInformation.start_date"
              render={({
                field: { onChange: onReactHookFormChange, value },
              }) => {
                const dateValue = isValidDate(value)
                  ? value
                  : value
                    ? new Date(value as string)
                    : null;
                return (
                  <MUIDateTimePicker
                    minDate={null}
                    maxDate={null}
                    format={DATE_GLOBAL_FORMAT}
                    onChange={(newValue) => {
                      const finalValue = isValidDate(newValue)
                        ? newValue.toISOString()
                        : newValue;
                      onReactHookFormChange(finalValue);
                    }}
                    labelText="Start subscription date"
                    timezone="default"
                    value={dateValue}
                    placeholder="Start subscription date"
                    error={!!state?.errors?.start_date}
                  />
                );
              }}
            />
            {state?.errors?.start_date && (
              <FormHelperText>
                {state.errors.start_date.join(", ")}
              </FormHelperText>
            )}
          </div>
          <div className="next-billing-col flex w-full flex-col md:w-[50%]">
            <Controller
              control={control}
              name="expenseInformation.next_payment"
              render={({
                field: { onChange: onReactHookFormChange, value },
              }) => {
                const dateValue = isValidDate(value)
                  ? value
                  : value
                    ? new Date(value as string)
                    : null;
                return (
                  <MUIDateTimePicker
                    disablePast
                    minDate={startOfToday()}
                    maxDate={null}
                    format={DATE_GLOBAL_FORMAT}
                    onChange={(newValue) => {
                      const finalValue = isValidDate(newValue)
                        ? newValue.toISOString()
                        : newValue;
                      onReactHookFormChange(finalValue);
                    }}
                    labelText="Next billing payment"
                    timezone="default"
                    value={dateValue}
                    placeholder="Next billing payment"
                    error={!!state?.errors?.next_payment}
                  />
                );
              }}
            />
            {state?.errors?.next_payment && (
              <FormHelperText>
                {state.errors.next_payment.join(", ")}
              </FormHelperText>
            )}
          </div>
        </div>
        <SubscriptionStepperFooter isPending={isPending} onPrev={onPrev} />
      </form>
    </>
  );
};

export default ExpenseInfoForm;
