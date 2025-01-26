export interface OptionType {
	label: string;
	value: string | number;
	disabled?: boolean; // Optional property
  }

export interface MuiSelectFieldProps<T extends OptionType> {
  id: string;
  inputLabelId: string;
  options: T[];
  value: T["value"];
  onChange: (selected: T) => void;
  label?: string;
  placeholder?: string;
  emptyLabel?: string;
  displayEmpty?: boolean;
  error?: boolean;
  name?: string;
  "data-testid"?: string;
}
