import { setHours, setMinutes, setSeconds, setMilliseconds } from "date-fns";

export const preserveDateTime = (newValue: Date | null, currentDate: Date = new Date()): Date | null => {
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
