import { SvgComponentProps } from "../types/defs";

export const SvgAlarmBellBold = ({ title, ...props }: SvgComponentProps) => (
  <svg
    height={24}
    viewBox="0 0 24 24"
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {title ? <title>{title}</title> : null}
    <path d="M21 17.5a1.5 1.5 0 0 1-1.5-1.5v-4.86A8 8 0 0 0 13 3.07V1a1 1 0 0 0-2 0v2.07a8 8 0 0 0-6.5 8.07V16A1.5 1.5 0 0 1 3 17.5a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2ZM14.24 21H9.76a.25.25 0 0 0-.24.22 2.64 2.64 0 0 0 0 .28 2.5 2.5 0 0 0 5 0 2.64 2.64 0 0 0 0-.28.25.25 0 0 0-.28-.22Z" />
  </svg>
);
