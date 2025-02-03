"use client";

import { Button } from "@/components/ui/Button";
import { GeneralInfoFormStepProps } from "./defs";
import { Controller, useController, useFormContext } from "react-hook-form";
import { SubscriptionStepValues } from "../../types";
import { useSubscriptionsContext } from "@/contexts/SubscriptionsProvider/SubscriptionsProvider";
import { MuiTextField } from "@/components/ui/formParts/MuiTextField";
import { SubscriptionCategoriesSelector } from "../../SubscriptionCategoriesSelector";
import { SUBSCRIPTION_CATEGORY_LABEL } from "@prisma/client";
import { InputSx } from "@/utils/stylesUtils";

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
    onSubmit(stepValues);
  };

  return (
    <>
      <h4 className="mb-10 text-sm font-semibold">{title}</h4>
      <form
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit(handleSaveGeneralInfo)}
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
                onChange={field.onChange}
                type="text"
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
                //error={!!state?.errors?.content}
              />
            )}
          />

          {/* {state?.errors?.content && (
            <FormHelperText>{state?.errors?.content.join(", ")}</FormHelperText>
          )} */}
        </div>
        <div className="button-wrapper mt-20">
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
    </>
  );
};

export default GeneralInfoFormStep;
