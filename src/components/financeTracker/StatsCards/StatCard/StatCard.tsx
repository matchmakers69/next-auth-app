import CardTitle from "@/components/ui/Card/CardTitle";
import { CardWithoutBck } from "@/components/ui/CardWithoutBck";
import { StatCardProps } from "./defs";
import CountUp from "react-countup";
import { useCallback } from "react";

const StatCard = ({ title, value, icon, formatter }: StatCardProps) => {
  const formatFn = useCallback(
    (value: number) => {
      return formatter.format(value);
    },
    [formatter],
  );
  return (
    <CardWithoutBck className="border border-dark-border bg-[hsla(0,0%,100%,0.05)] p-10">
      <div className="flex items-center gap-6">
        <div className="icon-wrapper">{icon}</div>
        <div className="stats-wrapper flex flex-col">
          <CardTitle className="mb-0 text-[2.2rem]">{title}</CardTitle>

          <CountUp
            preserveValue
            redraw={false}
            end={value}
            decimals={2}
            className="text-lg"
            formattingFn={formatFn}
          />
        </div>
      </div>
    </CardWithoutBck>
  );
};

export default StatCard;
