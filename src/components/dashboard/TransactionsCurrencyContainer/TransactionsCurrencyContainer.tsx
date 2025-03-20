"use client";

import { CardWithoutBck } from "@/components/ui/CardWithoutBck";
import CardTitle from "@/components/ui/Card/CardTitle";
import { TransactionsCurrencyContainerProps } from "./defs";
import { FormTransactionsCurrency } from "./FormTransactionsCurrency";
import { useUserCurrencyQuery } from "@/reactQuery/hooks/useUserCurrenciesQuery";
import { Loader2 } from "lucide-react";

const TransactionsCurrencyContainer = ({
  userId,
}: TransactionsCurrencyContainerProps) => {
  const {
    data: selectedUserCurrency,
    isLoading,
    error,
  } = useUserCurrencyQuery(userId);

  if (isLoading) {
    return <Loader2 size={30} className="mx-auto my-10 animate-spin" />;
  }

  if (error) {
    return <div>{error.message ?? "Cannot fetch user's currencies"}</div>;
  }

  return (
    <>
      <CardWithoutBck className="border border-dark-border bg-[hsla(0,0%,100%,0.05)] p-14">
        <CardTitle
          text="The default currency is set to GBP. You can change it using the currency selector below."
          className="text-[2.2rem]"
        >
          Currency for transactions
        </CardTitle>
        <FormTransactionsCurrency
          selectedUserCurrency={selectedUserCurrency?.currency ?? "GBP"}
          userId={userId}
        />
      </CardWithoutBck>
    </>
  );
};

export default TransactionsCurrencyContainer;
