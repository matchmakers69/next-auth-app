import { forwardRef } from "react";
import { SxProps, TextField, Theme } from "@mui/material";
import { MuiTextFieldProps } from "./defs";

const MuiTextField = forwardRef<HTMLInputElement, MuiTextFieldProps>(
  (
    {
      variant,
      label,
      name,
      id = "",
      sx,
      "data-testid": dataTestid,
      "aria-label": ariaLabel,
      ...props // Allows using TextFieldProps like label, variant, etc.
    },
    ref, // Ref is received here and forwarded to TextField
  ) => {
    const defaultSx: SxProps<Theme> = {
      "& .MuiInputLabel-root": {
        color: "var(--text-light)",
        fontSize: "1.4rem",
      },
      "& .MuiInputLabel-root.Mui-focused": {
        color: "var(--text-light)",
        fontSize: "1.4rem",
      },
      "& .MuiInputBase-input": {
        fontSize: "1.4rem",
        color: "var(--text-light)",
        "&::placeholder": {
          opacity: 0.3,
        },
      },
      "& .MuiOutlinedInput-root": {
        fontSize: "1.4rem",
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
      ...sx,
    };

    return (
      <TextField
        ref={ref} // Forwarding ref to the underlying TextField component
        data-testid={dataTestid}
        aria-label={ariaLabel}
        id={id}
        label={label}
        name={name}
        variant={variant}
        sx={defaultSx}
        {...props}
      />
    );
  },
);

MuiTextField.displayName = "MuiTextField";

export default MuiTextField;
