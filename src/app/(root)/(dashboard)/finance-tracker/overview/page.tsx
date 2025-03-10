import { Overview } from "@/components/financeTracker/Overview";
import PageTitle from "@/components/ui/PageTitle";
import { redirect } from "next/navigation";
import { currentUser } from "@/lib/currentUserAPI";
import { Metadata } from "next";
import paths from "@/utils/paths";

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
  return (
    <>
      <PageTitle className="mb-16" title="Overview" />
      <Overview userId={user.id} />
    </>
  );
}
