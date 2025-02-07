import CreateSubscriptionContainer from "@/components/subscriptions/CreateSubscriptionContainer";
import Alert from "@/components/ui/Alert/Alert";
import PageTitle from "@/components/ui/PageTitle";
import { SubscriptionsProvider } from "@/contexts/SubscriptionsProvider";
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
  return (
    <>
      <section className="mb-16 flex w-full items-center justify-between">
        <PageTitle title="Subscriptions" />
        <SubscriptionsProvider>
          <CreateSubscriptionContainer />
        </SubscriptionsProvider>
      </section>
      {!subscriptions.length && (
        <Alert data-testid="subscriptions-missing-data" type="info">
          Sorry, but you don't have any subscriptions yet.
        </Alert>
      )}
      {/* Table data here */}
    </>
  );
}
