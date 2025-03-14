import PageTitle from "@/components/ui/PageTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finance tracker - Transactions page",
  description:
    "Discover budget planner to gain a better understanding of your money coming in and out, and how to improve your finances.",
};

function TransactionsPage() {
  return (
    <>
      <PageTitle className="mb-16" title="Transactions" />
    </>
  );
}

export default TransactionsPage;
