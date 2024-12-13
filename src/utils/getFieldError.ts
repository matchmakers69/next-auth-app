import { get } from "lodash";
import { type FieldError } from "react-hook-form";

export const getFieldError = (errors: Record<string, any>, fieldName: string): FieldError | undefined => {
	const error = get(errors, fieldName);

	if (error && "message" in error) {
		return error as FieldError;
	}

	return undefined;
};
