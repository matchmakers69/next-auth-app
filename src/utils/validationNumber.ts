import { z } from "zod";
export const numberOrEmptyString = z.preprocess((val) => {
	if (typeof val === "string" && val === "") {
		return undefined; // Convert empty string to undefined
	}
	if (typeof val === "number" && isNaN(val)) {
		return undefined; // Convert NaN to undefined
	}
	return val;
}, z.number().nullable().optional());
