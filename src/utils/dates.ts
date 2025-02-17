import { DATE_GLOBAL_FORMAT } from "@/constants";
import {
  setHours,
  setMinutes,
  setSeconds,
  setMilliseconds,
  format,
} from "date-fns";

// Get today's date
const today = new Date();

// Format the date
export const formattedCurrentDate = format(today, DATE_GLOBAL_FORMAT);

export const preserveDateTime = (
  newValue: Date | null,
  currentDate: Date = new Date(),
): Date | null => {
  if (newValue) {
    return setHours(
      setMinutes(
        setSeconds(setMilliseconds(newValue, 0), currentDate.getSeconds()),
        currentDate.getMinutes(),
      ),
      currentDate.getHours(),
    );
  }
  return null;
};

export const isValidDate = (val: unknown): val is Date => {
  return val instanceof Date && !isNaN(val.getTime());
};

export const isDateBeforeToday = (date: Date): boolean => {
  return date < today;
};

export const isDateAfterToday = (date: Date): boolean => {
  return date > today;
};
