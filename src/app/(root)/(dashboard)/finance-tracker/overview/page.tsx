import { Overview } from "@/components/financeTracker/Overview";
import { History } from "@/components/financeTracker/History";
import PageTitle from "@/components/ui/PageTitle";
import { redirect } from "next/navigation";
import { currentUser } from "@/lib/currentUserAPI";
import { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import paths from "@/utils/paths";
import { getUserSettings } from "@/lib/get-user-currencyAPI";

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
      <section className="mb-16" id="overview-section">
        <Overview userId={user.id} currency={currency} />
      </section>
      <section id="history-section">
        <History currency={currency} />
      </section>
    </>
  );
}
