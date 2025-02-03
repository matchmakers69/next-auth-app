import MuiSelectField from "@/components/ui/formParts/MuiSelectField";
import { useGetSubscriptionCategoriesQuery } from "@/reactQuery/hooks/useSubscriptionCategoriesQuery";
import { Loader2 } from "lucide-react";
import { SubscriptionCategoriesSelectorProps } from "./defs";
import { SUBSCRIPTION_CATEGORY_LABEL } from "@prisma/client";

const SubscriptionCategoriesSelector = ({
  value,
  onChange,
}: SubscriptionCategoriesSelectorProps) => {
  const {
    data: subscriptionCategories,
    isLoading,
    error,
  } = useGetSubscriptionCategoriesQuery();

  if (!subscriptionCategories || isLoading) {
    return <Loader2 size={30} className="mx-auto my-10 animate-spin" />;
  }

  if (error) {
    return <div>{error.message ?? "Cannot fetch subscription categories"}</div>;
  }

  // Map subscription categories to enum values
  const mappedOptions = subscriptionCategories.map((category) => ({
    label: category.label || "Uncategorized",
    value: category.label as SUBSCRIPTION_CATEGORY_LABEL, // Ensure proper casting
  }));

  const handleChange = (selected: {
    label: SUBSCRIPTION_CATEGORY_LABEL;
    value: SUBSCRIPTION_CATEGORY_LABEL;
  }) => {
    onChange(selected.value); // Extract `value` and pass it to the parent handler
  };

  return (
    <MuiSelectField
      id="subscription-categories"
      labelText="Subscription category"
      onChange={handleChange}
      value={value}
      name="subscriptionCategory"
      displayEmpty
      emptyLabel="Select category"
      options={mappedOptions}
    />
  );
};

export default SubscriptionCategoriesSelector;
