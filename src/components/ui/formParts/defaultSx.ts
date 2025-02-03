import { SxProps, Theme } from "@mui/material";

export const getDefaultSx = (sx: SxProps<Theme> = {}) => ({
  ...sx,
  "& .MuiInputLabel-outlined": {
    color: "var(--text-light)",
    fontSize: "1.5rem",
  },
  "& .MuiInputLabel-outlined.Mui-disabled": {
    color: "var(--text-light)",
    fontSize: "1.5rem",
  },
  "& .MuiInputLabel-outlined.Mui-focused": {
    color: "var(--text-light)",
    fontSize: "1.5rem",
  },
  "& .MuiInputBase-input": {
    fontSize: "1.5rem",
    color: "var(--text-light)",
    "&::placeholder": {
      opacity: 0.3,
    },
  },
  "& .MuiOutlinedInput-root": {
    fontSize: "1.5rem",
    color: "var(--text-light)",
    borderRadius: "10px",
    transition: "border-color 120ms ease-in",
    "& fieldset": {
      border: "1px solid",
      borderColor: "hsla(0,0%,100%,.1)",
    },
    "&:hover fieldset": {
      borderColor: "hsla(0,0%,100%,.05)",
      border: "1px solid",
    },
    "&.Mui-focused fieldset": {
      borderColor: "var(--text-light)",
      background: "none",
      outline: 0,
    },
  },
}) as SxProps<Theme>;
