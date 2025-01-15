import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export const CardFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn("flex items-center justify-between gap-x-8 p-0", className)} {...props} />
	),
);
CardFooter.displayName = "CardFooter";
