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

  const mappedOptions = subscriptionCategories.map((category) => ({
    label: category.label || "Uncategorized",
    value: category.label as SUBSCRIPTION_CATEGORY_LABEL,
  }));

  const handleChange = (selected: SUBSCRIPTION_CATEGORY_LABEL) => {
    onChange(selected);
  };

  return (
    <MuiSelectField
      id="subscription-categories"
      labelText="Category"
      onChange={(selected) => handleChange(selected.value)}
      value={value || ""}
      name="category"
      displayEmpty
      emptyLabel="Select category"
      options={mappedOptions}
    />
  );
};

export default SubscriptionCategoriesSelector;
