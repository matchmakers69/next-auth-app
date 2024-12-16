import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentProps } from "react";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm uppercase transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-20",
  {
    variants: {
      variant: {
        default: "button-brown-bg text-white",
        outline:
          "border border-solid border-[1px] rounded-lg text-primary-foreground bg-transparent",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        secondary:
          "bg-secondary text-secondary-foreground hover:text-text-light",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4",
        social:
          "flex text-white items-center rounded-lg shadow-md max-w-xs px-6 py-2 text-sm focus:ring-2 focus:outline-none font-medium",
      },
      size: {
        default: "h-20 px-6 py-2 text-base min-w-[17rem] max-w-[20rem]",
        full: "h-20 px-6 py-2 text-base w-full",
        sm: "h-16 px-7 text-base min-w-[14rem] max-w-[18rem]",
        lg: "h-22 px-8 text-md min-w-[18rem] max-w-[22rem]",
        xl: "h-24 px-8 text-md",
        icon: "h-10 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export type ButtonProps = Readonly<{
  asChild?: boolean;
}> &
  VariantProps<typeof buttonVariants> &
  ComponentProps<"button">;
