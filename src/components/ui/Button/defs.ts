import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentProps } from "react";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-20",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-blue-700 to-indigo-500 text-text-light rounded-lg",
        outline:
          "border border-solid border-[1px] rounded-lg text-primary-foreground bg-transparent rounded-lg",
        destructive:
          "bg-destructive rounded-lg text-destructive-foreground shadow-sm hover:bg-destructive/90",
        secondary:
          "bg-secondary text-secondary-foreground hover:text-text-light",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-text-light flex flex-col",
        social:
          "flex text-text-light items-center rounded-lg shadow-md px-6 py-2 text-sm focus:ring-2 focus:outline-none font-medium",
      },
      size: {
        default: "h-20 px-6 py-2 text-base min-w-[17rem]",
        full: "h-20 px-6 py-2 text-sm w-full",
        sm: "px-7 text-base min-w-[14rem] h-[40px]",
        lg: "h-22 px-8 text-md min-w-[18rem] max-w-[24rem]",
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
