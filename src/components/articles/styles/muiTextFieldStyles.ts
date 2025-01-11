import { SxProps, Theme } from "@mui/material";

export const InputSx: SxProps<Theme> = {
  "& .MuiInputLabel-outlined": {
        color: "var(--dark-grey)",
        fontSize: "1.5rem",
      },
      "& .MuiInputLabel-outlined.Mui-focused": {
        color: "var(--dark-grey)",
        fontSize: "1.5rem",
      },
  "& .MuiOutlinedInput-root": {
    fontSize: "1.5rem",
    color: "var(--dark-grey)",
    borderRadius: "10px",
    transition: "border-color 120ms ease-in",

    "& .MuiInputBase-input": {
      fontSize: "1.5rem",
      color: "var(--dark-grey)",
      "&::placeholder": {
        opacity: 0.3,
      },
    },
    "& fieldset": {
      border: "1px solid",
      borderColor: "var(--border-grey-light)",
    },
    "&:hover fieldset": {
      border: "1px solid",
      borderColor: "var(--dark-grey)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "var(--dark-grey)",
      background: "none",
    },
  },
};
