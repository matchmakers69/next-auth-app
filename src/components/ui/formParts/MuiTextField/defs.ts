import { SxProps } from "@mui/material";
import { TextFieldProps } from "@mui/material/TextField";

export type MuiTextFieldProps = {
  id?: string;
  label?: string;
  name?: string;
  maxWidth?: number;
  minWidth?: number;
  sx?: SxProps;
  ["data-testid"]?: string;
  ["aria-label"]?: string;
} & TextFieldProps;
