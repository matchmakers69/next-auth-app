"use client";

import { useGetBudgetQuery } from "@/reactQuery/hooks/useBudgetQuery";
import { Loader2 } from "lucide-react";

const Overview = () => {
  const { data: budget, isLoading, error } = useGetBudgetQuery();

  if (!budget || isLoading) {
    return <Loader2 size={30} className="mx-auto my-10 animate-spin" />;
  }

  if (error) {
    return <div>{error.message ?? "Cannot fetch budgets"}</div>;
  }

  const categories = budget.map((item) => item.category);
  const amounts = budget.map((item) => item.amount);
  console.log(categories);
  console.log(amounts);

  return <div>hello</div>;
};

export default Overview;
