import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export const CardHeader = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col pb-2", className)} {...props} />
));
CardHeader.displayName = "CardHeader";
