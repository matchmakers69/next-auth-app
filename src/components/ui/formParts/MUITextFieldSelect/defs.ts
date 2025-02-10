import { SxProps, TextFieldProps } from "@mui/material";

export interface OptionType {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface MUITextFieldSelectProps extends Omit<TextFieldProps, "onChange"> {
  id?: string;
  labelText?: string;
  emptyLabel?: string;
  displayEmpty?: boolean;
  error?: boolean;
  options: OptionType[];
  value: OptionType["value"];
  onChange: (selected: OptionType) => void; // Custom onChange handler
  name?: string;
  maxWidth?: number;
  minWidth?: number;
  sx?: SxProps;
  ["data-testid"]?: string;
  ["aria-label"]?: string;
  displayValue?: boolean;
  placeholder?: string;
}
