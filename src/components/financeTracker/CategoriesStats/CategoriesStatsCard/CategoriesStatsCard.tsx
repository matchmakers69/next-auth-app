import { CardWithoutBck } from "@/components/ui/CardWithoutBck";
import { useCallback } from "react";
import { CategoriesStatsCardProps } from "./defs";
import CardTitle from "@/components/ui/Card/CardTitle";
import { ProgressBar } from "@/components/ui/ProgressBar";

const CategoriesStatsCard = ({
  type,
  data,
  formatter,
}: CategoriesStatsCardProps) => {
  const formatFn = useCallback(
    (value: number) => {
      return formatter?.format(value);
    },
    [formatter],
  );
  const filteredData = data.filter((item) => item.type === type);

  const total = filteredData.reduce(
    (acc, item) => acc + (item._sum?.amount ?? 0),
    0,
  );
  return (
    <CardWithoutBck className="border border-dark-border bg-[hsla(0,0%,100%,0.05)] p-10">
      <CardTitle className="mb-6 text-[2.2rem]">
        {type === "income" ? "Incomes" : "Expenses"} by category
      </CardTitle>
      <div className="flex items-center justify-between gap-2">
        {filteredData.length === 0 && (
          <div className="flex h-60 w-full flex-col items-center justify-center">
            No data for the selected period
            <p className="text-muted-foreground text-sm">
              Try selecting a different period or try adding new{" "}
              {type === "income" ? "incomes" : "expenses"}
            </p>
          </div>
        )}

        {filteredData.length > 0 && (
          <div className="flex h-60 w-full flex-1 flex-col overflow-y-auto">
            <div className="flex w-full flex-col gap-4 py-4">
              {filteredData.map((item) => {
                const amount = item._sum?.amount || 0;
                const percentage = (amount * 100) / (total || amount);

                return (
                  <div key={item.category} className="mb-6 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center text-grey-light">
                        {item.category}
                        <span className="text-muted-foreground ml-2 text-xs">
                          ({percentage.toFixed(0)}%)
                        </span>
                      </span>

                      <span className="text-sm text-grey-light">
                        {formatFn(amount)}
                      </span>
                    </div>

                    <ProgressBar
                      progress={percentage}
                      color={type === "income" ? "success" : "error"}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </CardWithoutBck>
  );
};

export default CategoriesStatsCard;
