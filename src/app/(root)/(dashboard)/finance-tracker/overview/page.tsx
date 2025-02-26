import { Overview } from "@/components/financeTracker/Overview";
import PageTitle from "@/components/ui/PageTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finance tracker overview page",
  description:
    "Discover budget planner to gain a better understanding of your money coming in and out, and how to improve your finances.",
};

export default function OverviewPage() {
  return (
    <>
      <PageTitle className="mb-16" title="Finance tracker overview" />
      <Overview />
    </>
  );
}
