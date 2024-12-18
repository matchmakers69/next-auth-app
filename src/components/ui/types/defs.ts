import { SxProps } from "@mui/material";
import { ReactNode } from "react";

export type BaseProps<T = ReactNode> = {
  children?: T;
  ["data-testid"]?: string;
  id?: string;
  sx?: SxProps;
};
