import Alert from "@/components/ui/Alert/Alert";
import PageTitle from "@/components/ui/PageTitle";
import { getSubscriptionsList } from "@/queries/get-subscriptions-list";
import { getCurrentUserFromDatabase } from "@/queries/getCurrentUserFromDatabase";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subscriptions",
};

export default async function SubscriptionsPage() {
  const user = await getCurrentUserFromDatabase();
  if (!user) {
    return null;
  }

  const subscriptions = await getSubscriptionsList(user.id, {
    key: "next_payment_date",
    value: "desc",
  });

  if (!subscriptions) {
    return null;
  }

  if (!subscriptions.length) {
    return (
      <Alert data-testid="subscriptions-missing-data" severity="info">
        Sorry, but you don't have any subscriptions yet.
      </Alert>
    );
  }
  return (
    <>
      <PageTitle className="mb-16" title="Subscriptions" />
      {/* Table data here */}
    </>
  );
}
