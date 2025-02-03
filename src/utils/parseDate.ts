import { parseISO } from "date-fns";

export const parseAndValidateDate = (value: string | Date | null | undefined): Date | null => {
  if (!value) return null;

  const parsedValue = typeof value === "string" ? parseISO(value) : value;

  if (parsedValue instanceof Date && !isNaN(parsedValue.getTime())) {
    return parsedValue;
  } else {
    console.error("Invalid date value:", value);
    return null;
  }
};
