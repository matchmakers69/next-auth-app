import { cn } from "@/lib/utils";
import { forwardRef, HTMLAttributes } from "react";

const CardTitle = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn("mb-12 font-medium leading-none tracking-tight", className)}
    {...props}
  >
    {props.children}
  </h2>
));
CardTitle.displayName = "CardTitle";

export default CardTitle;
