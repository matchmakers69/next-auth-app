import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentProps } from "react";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm transition focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-20",
  {
    variants: {
      variant: {
        default:
          "bg-light-blue text-text-light rounded-lg items-center justify-center flex flex-col",
        outline:
          "border border-solid rounded-lg bg-transparent hover:opacity-60",
        destructive:
          "bg-destructive rounded-lg text-destructive-foreground shadow-sm hover:bg-destructive/90",
        secondary:
          "bg-light-blue text-text-light rounded-lg items-center justify-center flex flex-col",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-text-light",
        social:
          "flex text-text-light items-center rounded-lg shadow-md px-6 py-2 text-sm focus:ring-2 focus:outline-none font-medium",
      },
      size: {
        default: "h-20 px-6 py-2 text-sm min-w-[17rem]",
        full: "h-20 px-6 py-2 text-sm w-full",
        sm: "px-7 text-sm min-w-[10rem] h-[42px]",
        lg: "h-[42px] px-8 text-md min-w-[18rem]",
        xl: "h-[42px] px-8 text-md",
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
