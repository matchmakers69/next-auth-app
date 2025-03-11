import { cn } from "@/lib/utils";
import Skeleton from "../Skeleton";
import { SkeletonWrapperProps } from "./defs";

const SkeletonWrapper = ({
  isLoading,
  children,
  fullWidth = true,
}: SkeletonWrapperProps) => {
  if (!isLoading) return children;
  return (
    <Skeleton className={cn(fullWidth && "w-full")}>
      <div className="opacity-0">{children}</div>
    </Skeleton>
  );
};

export default SkeletonWrapper;
