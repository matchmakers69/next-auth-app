import { FieldValues, Path } from "react-hook-form";
import { BaseProps } from "../../types/defs";

export type MUIDateTimePickerProps = {
  disabled?: boolean;
  disableFuture?: boolean;
  disablePast?: boolean;
  error?: boolean;
  errorMessage?: string;
  format?: string;
  labelText: string;
  labelOptionalText?: string;
  maxDate?: Date | null;
  minDate?: Date | null;
  onChange?: (value: Date | null) => void;
  placeholder?: string;
  timezone?: string;
  value?: Date | null;
  name?: string;
} & BaseProps;

