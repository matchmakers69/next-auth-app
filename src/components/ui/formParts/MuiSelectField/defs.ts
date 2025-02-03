export interface OptionType {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface MuiSelectFieldProps<T extends OptionType> {
  id: string;
  labelOptionalText?: string;
  options: T[];
  value: T["value"];
  onChange: (selected: T) => void;
  labelText?: string;
  emptyLabel?: string;
  displayEmpty?: boolean;
  error?: boolean;
  name?: string;
  ["data-testid"]?: string;
  ["aria-label"]?: string;
}
