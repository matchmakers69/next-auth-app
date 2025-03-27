import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { CardTitleProps } from "./defs";

const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, text, ...props }, ref) => (
    <header className={cn("card-title-header mb-24", className)}>
      <h2
        ref={ref}
        className={cn("font-semibold leading-none tracking-tight", className)}
        {...props}
      >
        {props.children}
      </h2>
      {text && <p className="text-sm text-text-grey">{text}</p>}
    </header>
  ),
);
CardTitle.displayName = "CardTitle";

export default CardTitle;
