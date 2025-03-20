import { useFetchCategoriesStatsQuery } from "@/reactQuery/hooks/useFetchCategoriesStats";
import { CategoriesStatsProps } from "./defs";
import { SkeletonWrapper } from "@/components/ui/Skeleton/SkeletonWrapper";
import { CategoriesStatsCard } from "./CategoriesStatsCard";
import { useCurrencyFormatter } from "@/hooks/useCurrencyFormatter";

const CategoriesStats = ({
  from,
  to,
  selectedCurrency,
}: CategoriesStatsProps) => {
  const statsQuery = useFetchCategoriesStatsQuery(
    from || new Date(),
    to || new Date(),
  );
  const { formatter } = useCurrencyFormatter(selectedCurrency);
  return (
    <div className="relative mt-[4rem] grid grid-cols-1 grid-rows-1 gap-[3.06rem] gap-y-[2.5rem] rounded-[7px] sm:grid-cols-2 sm:gap-[2.6rem] md:grid-cols-2 md:gap-[3.06rem]">
      <SkeletonWrapper isLoading={statsQuery.isFetching}>
        <CategoriesStatsCard
          formatter={formatter}
          type="income"
          data={statsQuery.data || []}
        />
      </SkeletonWrapper>
      <SkeletonWrapper isLoading={statsQuery.isFetching}>
        <CategoriesStatsCard
          formatter={formatter}
          type="expense"
          data={statsQuery.data || []}
        />
      </SkeletonWrapper>
    </div>
  );
};

export default CategoriesStats;
