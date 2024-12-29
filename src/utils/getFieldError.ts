import { get } from "lodash";
import { FieldErrors, type FieldError } from "react-hook-form";

export const getFieldError = (errors: FieldErrors, fieldName: string): FieldError | undefined => {
	const error = get(errors, fieldName);

	if (error && "message" in error) {
		return error as FieldError;
	}

	return undefined;
};
