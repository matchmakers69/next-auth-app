import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentProps } from "react";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm uppercase transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-20",
  {
    variants: {
      variant: {
        default: "button-brown-bg text-white",
        outline: "border text-primary-foreground bg-transparent",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        secondary:
          "bg-secondary text-secondary-foreground hover:text-text-light",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        social:
          "flex items-center bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",
      },
      size: {
        default: "h-20 px-6 py-2 text-base min-w-[17rem] max-w-[20rem]",
        full: "h-20 px-6 py-2 text-base w-full",
        sm: "h-16 px-7 text-base min-w-[11rem] max-w-[15rem]",
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
