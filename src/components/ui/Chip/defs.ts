import { ChipProps } from "@mui/material";
import { SxProps, Theme } from "@mui/system";

export interface CustomChipProps extends ChipProps {
    href?: string; // If provided, Chip will render as a link
    sx?: SxProps<Theme>; // Custom styles for the Chip
    textColor?: string; // Custom text color
    textSize?: string; // Custom font size
    backgroundColor?: string; // Custom background color
  }