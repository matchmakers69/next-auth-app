import { SxProps, Theme } from "@mui/material";

export const InputSx: SxProps<Theme> = {
  "& .MuiOutlinedInput-root": {
    fontSize: "1.4rem",
    color: "var(--dark-grey)",
    borderRadius: "10px",
    transition: "border-color 120ms ease-in",
    "& .MuiInputLabel-root.Mui-focused": {
      color: "var(--dark-grey)",
      fontSize: "1.4rem",
    },
    "& .MuiInputBase-input": {
      fontSize: "1.4rem",
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
      borderColor: "var(--background-grey-light)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "var(--background-grey-light)",
      background: "none",
    },
  }
};
