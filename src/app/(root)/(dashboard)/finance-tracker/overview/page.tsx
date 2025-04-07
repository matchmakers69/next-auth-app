import { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import paths from "@/utils/paths";
import { currentUser } from "@/lib/currentUserAPI";
import PageTitle from "@/components/ui/PageTitle";
import { getUserSettings } from "@/lib/get-user-currencyAPI";
import { FinanceTrackerWrapper } from "@/components/financeTracker/FinanceTrackerWrapper";
import { OverviewCurrencyActionsHeader } from "@/components/financeTracker/OverviewCurrencyActionsHeader";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Finance tracker overview page",
  description:
    "Discover budget planner to gain a better understanding of your money coming in and out, and how to improve your finances.",
};

export default async function OverviewPage() {
  const user = await currentUser();
  if (!user) {
    redirect(paths.login());
  }
  const userCurrencyData = await getUserSettings(user);
  const currency = userCurrencyData?.currency || "GBP";

  return (
    <>
      <PageTitle className="mb-16" title="Overview" />
      <OverviewCurrencyActionsHeader>
        <div className="w-full">
          <p className="mb-4 text-[12px] text-text-grey">
            Stay up to date with live exchange rates. Click the button below to
            see the current rates in real time.
          </p>
        </div>
      </OverviewCurrencyActionsHeader>

      {!userCurrencyData && (
        <div className="mb-20 border border-solid border-[hsla(0,0%,100%,0.1)] bg-transparent p-6">
          <p className="mb-4 text-[12px] text-text-grey">
            The default currency is set to GBP. You can change it in settings.
          </p>
          <Button
            className="rounded-[10px] border border-solid border-[hsla(0,0%,100%,0.1)] bg-transparent px-[15px] py-[10px] text-sm text-light-grey transition-all duration-200 ease-out md:hover:bg-[#ffffff13] md:hover:text-text-light"
            asChild
            variant="link"
            size="sm"
          >
            <Link href={paths.settings()}>Go to settings page</Link>
          </Button>
        </div>
      )}
      <FinanceTrackerWrapper userId={user.id} currency={currency} />
    </>
  );
}
