import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export const CardDescription = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
	({ className, ...props }, ref) => <p ref={ref} className={cn("text-md", className)} {...props} />,
);
CardDescription.displayName = "CardDescription";
