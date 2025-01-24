import { BaseProps } from "../types/defs";

export type AlertProps = {
  type?: "success" | "error" | "warning" | "info";
  className?: string;
  onClose?: () => void;
} & BaseProps;
