"use client";

import dynamic from "next/dynamic";
import { FinanceTrackerWrapperProps } from "./defs";

const Overview = dynamic(
  () =>
    import("@/components/financeTracker/Overview").then(
      (module) => module.Overview,
    ),
  {
    ssr: false,
    loading: () => (
      <p className="text-small text-text-light">Loading Overview...</p>
    ),
  },
);

const History = dynamic(
  () =>
    import("@/components/financeTracker/History").then(
      (module) => module.History,
    ),
  {
    ssr: false,
    loading: () => (
      <p className="text-small text-text-light">Loading History...</p>
    ),
  },
);

export default function FinanceTrackerWrapper({
  userId,
  currency,
}: FinanceTrackerWrapperProps) {
  return (
    <>
      <section className="mb-16" id="overview-section">
        <Overview userId={userId} currency={currency} />
      </section>
      <section id="history-section">
        <History currency={currency} />
      </section>
    </>
  );
}
