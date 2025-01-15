import { type InputHTMLAttributes } from "react";

type CheckboxType = InputHTMLAttributes<HTMLInputElement>;

export interface CheckboxProps extends CheckboxType {
	id: string;
	label: string;
	className?: string;
	strokeColor?: string;
}
