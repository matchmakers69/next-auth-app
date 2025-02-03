import { SvgComponentProps } from "../types/defs";

export const SvgChecklistBold = ({ title, ...props }: SvgComponentProps) => (
  <svg
    height={24}
    viewBox="0 0 24 24"
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {title ? <title>{title}</title> : null}
    <path d="M21.5 0h-19A2.5 2.5 0 0 0 0 2.5v19A2.5 2.5 0 0 0 2.5 24h19a2.5 2.5 0 0 0 2.5-2.5v-19A2.5 2.5 0 0 0 21.5 0Zm-3 9.5H14a1 1 0 0 1 0-2h4.5a1 1 0 0 1 0 2Zm1 8a1 1 0 0 1-1 1H14a1 1 0 0 1 0-2h4.5a1 1 0 0 1 1 1ZM11.3 5.6l-3 4a1 1 0 0 1-.73.4 1 1 0 0 1-.78-.29l-1.5-1.5a1 1 0 1 1 1.42-1.42l.68.69L9.7 4.4a1 1 0 0 1 1.6 1.2Zm0 10-3 4a1 1 0 0 1-1.51.11l-1.5-1.5a1 1 0 0 1 1.42-1.42l.68.69L9.7 14.4a1 1 0 0 1 1.6 1.2Z" />
  </svg>
);
