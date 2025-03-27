import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { BadgeProps } from "./defs";

export const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-4 py-5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "border-dark-border bg-[hsla(0,0%,100%,0.05)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export default function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
