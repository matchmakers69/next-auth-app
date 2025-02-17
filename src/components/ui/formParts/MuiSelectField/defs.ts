export type Value = string | number;
export type OptionType =
  | Value
  | { label: string | null; value: Value; disabled?: boolean };

interface CustomSelectProps<T extends OptionType> {
  id: string;
  labelOptionalText?: string;
  options: T[];
  value: Value;
  onChange: (_selected: T) => void;
  labelText?: string;
  emptyLabel?: string;
  displayEmpty?: boolean;
  error?: boolean;
  name?: string;
  ["data-testid"]?: string;
  ["aria-label"]?: string;
}
export type MuiSelectFieldProps<T extends OptionType> = CustomSelectProps<T>;
