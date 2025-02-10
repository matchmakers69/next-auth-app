"use client";

import {
  startTransition,
  useActionState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import FormHelperText from "@/components/ui/formParts/FormHelperText";
import { GeneralInfoFormStepProps } from "./defs";
import { Controller, useFormContext } from "react-hook-form";
import { SubscriptionStepValues } from "../../types";
import { useSubscriptionsContext } from "@/contexts/SubscriptionsProvider/SubscriptionsProvider";
import { MuiTextField } from "@/components/ui/formParts/MuiTextField";
import { InputSx } from "@/utils/stylesUtils";
import { runGeneralInfoValidation } from "@/actions/subscriptionSteps/run-general-info-validation";
import MuiSelectField from "@/components/ui/formParts/MuiSelectField";
import { SUBSCRIPTION_CATEGORIES } from "@/constants/mocks";
import { SubscriptionStepperFooter } from "../../SubscriptionStepperFooter";

const GeneralInfoFormStep = ({ title, onSubmit }: GeneralInfoFormStepProps) => {
  const [state, formAction, isPending] = useActionState(
    runGeneralInfoValidation,
    {
      errors: {},
      success: false,
    },
  );
  const { handleSubmit, control, getValues } =
    useFormContext<SubscriptionStepValues>();
  const { dispatch } = useSubscriptionsContext();

  const formRef = useRef<HTMLFormElement>(null);
  const stepValues = getValues().subscriptionsGeneralInformation;

  const handleSaveGeneralInformationStep = () => {
    const formData = new FormData(formRef.current!);
    formData.append("category", stepValues.category); // append required as a workaround for validation

    startTransition(() => {
      formAction(formData);
    });

    dispatch({
      type: "SET_GENERAL_INFORMATION",
      payload: stepValues,
    });
  };

  const handleGoToNextStep = useCallback(() => {
    onSubmit(stepValues);
  }, [state]);

  useEffect(() => {
    if (!state.success) {
      return;
    }
    handleGoToNextStep();
  }, [state]);

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
          handleSubmit(handleSaveGeneralInformationStep)(event);
        }}
      >
        <div className="mb-10">
          <Controller
            name="subscriptionsGeneralInformation.name"
            control={control}
            render={({ field }) => (
              <MuiTextField
                id="subscription-name"
                placeholder="i.e Netflix"
                name="name"
                fullWidth
                label="Enter name of your subscription"
                data-testid="subscriptionValue"
                aria-label="Enter subscription name"
                value={field.value ?? ""}
                onChange={field.onChange}
                type="text"
                margin="none"
                sx={InputSx}
                error={!!state?.errors?.name}
              />
            )}
          />

          {state?.errors?.name && (
            <FormHelperText>{state.errors.name.join(", ")}</FormHelperText>
          )}
        </div>
        <div className="mb-10 mt-6">
          <Controller
            name="subscriptionsGeneralInformation.category"
            control={control}
            render={({ field }) => (
              <>
                <MuiSelectField
                  id="subscription-categories"
                  labelText="Category"
                  data-testid="subscriptionValue"
                  aria-label="Enter subscription category"
                  value={field.value ?? ""}
                  onChange={field.onChange}
                  name="category"
                  error={!!state?.errors?.category}
                  displayEmpty
                  emptyLabel="Select category"
                  options={SUBSCRIPTION_CATEGORIES}
                />
              </>
            )}
          />
          {state?.errors?.category && (
            <FormHelperText>{state.errors.category.join(", ")}</FormHelperText>
          )}
        </div>
        <div className="mb-10 mt-6">
          <Controller
            name="subscriptionsGeneralInformation.avatarUrl"
            control={control}
            render={({ field }) => (
              <MuiTextField
                id="subscription-avatar-url"
                placeholder="i.e https://dsc.cloud/88160a/Google-Avatar.png"
                name="avatarUrl"
                fullWidth
                type="text"
                label="Avatar url"
                data-testid="avatarValue"
                aria-label="Enter avatar url"
                onChange={field.onChange}
                margin="none"
                value={field.value}
                sx={InputSx}
              />
            )}
          />
        </div>
        <SubscriptionStepperFooter />
      </form>
    </>
  );
};

export default GeneralInfoFormStep;
