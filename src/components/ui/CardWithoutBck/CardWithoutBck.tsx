import React, { forwardRef } from "react";
import Card from "../Card";
import { CardWithoutBckProps } from "./defs";
import { cn } from "@/lib/utils";

const CardWithoutBck = forwardRef<HTMLDivElement, CardWithoutBckProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <Card
        ref={ref}
        className={cn(
          "w-full max-w-[100%] rounded-xl sm:max-w-[56rem] md:max-w-[60rem] lg:max-w-[70rem]",
          className,
        )}
        {...rest}
      >
        <div className="flex h-full w-full flex-col sm:flex-wrap lg:flex-nowrap">
          <div className="flex flex-col">{children}</div>
        </div>
      </Card>
    );
  },
);

CardWithoutBck.displayName = "CardWithoutBck";

export default CardWithoutBck;
