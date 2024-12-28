import { type MutableRefObject } from "react";

export interface UseClickOutsideConfig {
	onOutside: () => void;
}

export interface UseClickOutsideReturn<T extends HTMLElement> {
	ref: MutableRefObject<T | null>;
}
