"use client";

import { Modal } from "@/components/ui/Modal";
import { CurrencyConverterModalWrapperProps } from "./defs";
import { CurrencyConverter } from "@/components/ui/CurrencyConverter";
import { Loader2 } from "lucide-react";
import { useCurrencyExchangeRates } from "@/hooks/useCurrencyExchangeRates";

const CurrencyConverterModalWrapper = ({
  open,
  onClose,
}: CurrencyConverterModalWrapperProps) => {
  const { rates, error, isPending, isFetching } = useCurrencyExchangeRates();

  return (
    <Modal
      open={open}
      title="Currency convertor"
      additionalPaperProps={{
        sx: {
          lg: {
            minWidth: "64rem",
          },
        },
      }}
      onClose={() => {
        onClose();
      }}
    >
      <>
        {isFetching && (
          <Loader2 size={30} className="mx-auto my-10 animate-spin" />
        )}
        {isPending ? (
          <h4>{"No rates to display yet"}</h4>
        ) : error ? (
          <h4>{"Error occured, service is not available"}</h4>
        ) : (
          <CurrencyConverter rates={rates} />
        )}
      </>
    </Modal>
  );
};

export default CurrencyConverterModalWrapper;
