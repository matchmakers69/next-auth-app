import { fetchSubscriptionsCategories } from "@/queries/get-subscriptions-categories";

const SubscriptionsCategorySelector = async () => {
  const categories = await fetchSubscriptionsCategories();
  if (!categories) return null;
  console.log(categories);
  return <div>dupa</div>;
};

export default SubscriptionsCategorySelector;
