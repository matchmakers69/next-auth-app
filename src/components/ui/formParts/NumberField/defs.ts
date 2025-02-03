import { SxProps } from "@mui/material";
import { TextFieldProps } from "@mui/material/TextField";

export type NumberFieldType = "number";

export type NumberFieldProps = {
	id?: string;
	label?: string;
	name?: string;
	maxWidth?: number;
	minWidth?: number;
	sx?: SxProps;
	["data-testid"]?: string;
	["aria-label"]?: string;
	min?: number | null;
	max?: number | null;
	isCurrency?: boolean;
} & TextFieldProps;
