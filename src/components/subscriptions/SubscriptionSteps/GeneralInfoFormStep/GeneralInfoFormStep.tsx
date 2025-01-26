"use client";

import { Button } from "@/components/ui/Button";
import { GeneralInfoFormStepProps } from "./defs";
import { Controller, useController, useFormContext } from "react-hook-form";
import { SubscriptionStepValues } from "../../types";
import { useSubscriptionsContext } from "@/contexts/SubscriptionsProvider/SubscriptionsProvider";
import { MuiTextField } from "@/components/ui/formParts/MuiTextField";
import { InputSx } from "@/components/ui/formParts/MuiTextField/muiTextFieldStyles";
import { SubscriptionCategoriesSelector } from "../../SubscriptionCategoriesSelector";
import { SUBSCRIPTION_CATEGORY_LABEL } from "@prisma/client";

const GeneralInfoFormStep = ({ title, onSubmit }: GeneralInfoFormStepProps) => {
  const { handleSubmit, control } = useFormContext<SubscriptionStepValues>();
  const { dispatch } = useSubscriptionsContext();

  const categoryController = useController({
    control,
    name: "subscriptionsGeneralInformation.category",
    defaultValue: "" as SUBSCRIPTION_CATEGORY_LABEL,
  });

  const handleSaveGeneralInfo = (stepValues: SubscriptionStepValues) => {
    dispatch({
      type: "SET_GENERAL_INFORMATION",
      payload: stepValues.subscriptionsGeneralInformation,
    });
    console.log(stepValues, "stepValues");
    onSubmit(stepValues);
  };

  return (
    <div>
      <h4>{title}</h4>
      <form noValidate onSubmit={handleSubmit(handleSaveGeneralInfo)}>
        <div className="mb-10 mt-6">
          <Controller
            name="subscriptionsGeneralInformation.name"
            control={control}
            render={({ field }) => (
              <MuiTextField
                id="subscription-name-value"
                placeholder="I.e Netflix"
                name="name"
                fullWidth
                label="Subscription name"
                data-testid="subscriptionValue"
                aria-label="Enter subscription name"
                onChange={field.onChange}
                rows={4}
                margin="none"
                value={field.value}
                sx={InputSx}
                //error={!!state?.errors?.content}
              />
            )}
          />

          {/* {state?.errors?.content && (
            <FormHelperText>{state?.errors?.content.join(", ")}</FormHelperText>
          )} */}
        </div>
        <div className="mb-10 mt-6">
          <SubscriptionCategoriesSelector
            value={
              categoryController.field.value as SUBSCRIPTION_CATEGORY_LABEL
            }
            onChange={categoryController.field.onChange}
          />
        </div>
        <div className="button-wrapper mt-6">
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
            Go next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default GeneralInfoFormStep;
