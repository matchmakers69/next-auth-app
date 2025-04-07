"use client";

import { useFeatureSwitcher } from "@/hooks/useFeatureSwitcher";
import { OverviewCurrencyActionsHeaderProps } from "./defs";
import { CurrencyConverterModalWrapper } from "../CurrencyConverterModalWrapper";
import paths from "@/utils/paths";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const OverviewCurrencyActionsHeader = ({
  children,
}: OverviewCurrencyActionsHeaderProps) => {
  const modalFeature = useFeatureSwitcher();

  const handleOpenCurrencyRatesModal = () => {
    modalFeature.on();
  };

  return (
    <>
      <div className="mb-10 flex w-full flex-col border border-solid border-[hsla(0,0%,100%,0.1)] bg-transparent p-6">
        {children}
        <div className="flex w-full items-center gap-6">
          <Button
            className="rounded-[10px] border border-solid border-[hsla(0,0%,100%,0.1)] bg-transparent px-[15px] py-[10px] text-sm text-light-grey transition-all duration-200 ease-out md:hover:bg-[#ffffff13] md:hover:text-text-light"
            variant="outline"
            size="sm"
            onClick={handleOpenCurrencyRatesModal}
          >
            See Current Rates
          </Button>

          <Button
            className="rounded-[10px] border border-solid border-[hsla(0,0%,100%,0.1)] bg-transparent px-[15px] py-[10px] text-sm text-light-grey transition-all duration-200 ease-out md:hover:bg-[#ffffff13] md:hover:text-text-light"
            asChild
            variant="link"
            size="sm"
          >
            <Link href={paths.settings()}>Change your currency</Link>
          </Button>
        </div>
      </div>
      {modalFeature.isOn && (
        <CurrencyConverterModalWrapper
          open={modalFeature.isOn}
          onClose={modalFeature.off}
        />
      )}
    </>
  );
};

export default OverviewCurrencyActionsHeader;
