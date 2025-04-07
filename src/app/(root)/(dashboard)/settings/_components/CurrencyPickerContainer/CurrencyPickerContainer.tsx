import { CardWithoutBck } from "@/components/ui/CardWithoutBck";
import CardTitle from "@/components/ui/Card/CardTitle";
import { CurrencyPickerContainerProps } from "./defs";
import { CurrencyPickerForm } from "./CurrencyPickerForm";

const CurrencyPickerContainer = ({
  userId,
  currency,
}: CurrencyPickerContainerProps) => {
  return (
    <>
      <CardWithoutBck className="border border-dark-border bg-[hsla(0,0%,100%,0.05)] p-14">
        <CardTitle
          text="The default currency is set to GBP. You can change it using the currency selector below."
          className="text-[2.2rem]"
        >
          Currency for transactions
        </CardTitle>
        <CurrencyPickerForm
          selectedUserCurrency={currency ?? "GBP"}
          userId={userId}
        />
      </CardWithoutBck>
    </>
  );
};

export default CurrencyPickerContainer;
