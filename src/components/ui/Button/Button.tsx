import { forwardRef, type ForwardedRef } from "react";
import { type ButtonProps, buttonVariants } from "./defs";
import { cn } from "@/libs/utils";
import { Slot } from "../Slots";

export const Button = forwardRef(
  (
    { className, variant, size, asChild = false, ...props }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
