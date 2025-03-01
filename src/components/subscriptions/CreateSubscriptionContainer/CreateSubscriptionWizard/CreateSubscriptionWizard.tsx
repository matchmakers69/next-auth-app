"use client";

import { CreateSubscriptionWizardProps } from "./defs";
import { FormProvider, useForm } from "react-hook-form";
import { getSubscriptionsStepByKey } from "../../services";
import { useSubscriptionsContext } from "@/contexts/SubscriptionsProvider/SubscriptionsProvider";
import { useSubscriptionsStepper } from "../../hooks/useSubscriptionsStepper";
import { SubscriptionStepValues } from "../../types";
import { Modal } from "@/components/ui/Modal";
import { createSubscription } from "@/actions/subscriptionActions/create-subscription";
import {
  SUBSCRIPTION_BILLING_PERIOD,
  SUBSCRIPTION_CURRENCY,
} from "@prisma/client";
import { useSession } from "next-auth/react";

// const schemas = {
//   subscriptionsGeneralInformation: GeneralInformationSchema,
//   expenseInformation: ExpenseInformationSchema,
// };

const CreateSubscriptionWizard = ({
  open,
  onClose,
}: CreateSubscriptionWizardProps) => {
  const { data: session } = useSession();
  const user = session?.user;
  const { currentStep } = useSubscriptionsContext();
  const { handleGoToNextStep, handleBackToPrevStep, lastStep } =
    useSubscriptionsStepper();

  const SubscriptionStepComponent =
    getSubscriptionsStepByKey(currentStep).component;
  const subscriptionTitle = getSubscriptionsStepByKey(currentStep).title;

  // Creating a new subscription login
  const methods = useForm({
    mode: "all",
    // resolver: zodResolver(schemas[currentStep]),
    defaultValues: {
      subscriptionsGeneralInformation: {
        name: "",
        category: "",
        avatarUrl: "https://dsc.cloud/88160a/Google-Avatar.png",
      },
      expenseInformation: {
        price: 0,
        currency: "",
        billingPeriod: "",
        start_date: null,
        next_payment: null,
      },
    },
  });

  const handleAddSubscriptionSubmit = async (
    stepValues: SubscriptionStepValues,
  ) => {
    if (!currentStep) {
      throw new Error("Current step is not defined");
    }

    if (!lastStep) {
      handleGoToNextStep();
    } else {
      const nestedSubscriptionsData: SubscriptionStepValues = {
        ...methods.getValues(),
        ...stepValues,
      };

      const subscriptionData = {
        name: nestedSubscriptionsData.subscriptionsGeneralInformation.name,
        category:
          nestedSubscriptionsData.subscriptionsGeneralInformation.category,
        avatar_url:
          nestedSubscriptionsData.subscriptionsGeneralInformation.avatarUrl,
        price: Number(nestedSubscriptionsData.expenseInformation.price),
        currency: nestedSubscriptionsData.expenseInformation
          .currency as SUBSCRIPTION_CURRENCY,
        billing_period: nestedSubscriptionsData.expenseInformation
          .billingPeriod as SUBSCRIPTION_BILLING_PERIOD,
        next_payment_date: new Date(
          nestedSubscriptionsData.expenseInformation.next_payment,
        ),
        // TODO add start date
        ownerId: user?.id,
      };

      console.log(subscriptionData, "subscriptionData");

      const formData = new FormData();
      Object.entries(subscriptionData).forEach(([key, value]) => {
        if (value instanceof Date) {
          formData.append(key, value.toISOString());
        } else if (value !== null && value !== undefined) {
          formData.append(key, value.toString());
        }
      });

      try {
        const result = await createSubscription(formData, {}); // Pass an empty `prevState` if not needed

        if (result.errors && Object.keys(result.errors).length > 0) {
          console.error("Failed to create subscription:", result.errors);
          // Handle validation errors here, e.g., displaying error messages in the UI
        } else {
          console.log("Subscription created successfully!");
          onClose(); // Close the modal
          methods.reset(); // Reset the form
          // You might want to show a success message or redirect the user
        }
      } catch (error) {
        console.error("An unexpected error occurred:", error);
        // Handle unexpected errors
      }
    }
  };

  return (
    <Modal
      open={open}
      title="Add new subscription"
      additionalPaperProps={{
        sx: {
          lg: {
            minWidth: "64rem",
          },
        },
      }}
      onClose={() => {
        onClose();
        methods.reset();
      }}
    >
      <FormProvider {...methods}>
        <SubscriptionStepComponent
          title={subscriptionTitle}
          onPrev={handleBackToPrevStep}
          onSubmit={handleAddSubscriptionSubmit}
        />
      </FormProvider>
    </Modal>
  );
};

export default CreateSubscriptionWizard;
