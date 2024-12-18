import { forwardRef } from "react";
import { TextField } from "@mui/material";
import { MuiTextFieldProps } from "./defs";

const MuiTextField = forwardRef<HTMLInputElement, MuiTextFieldProps>(
  (
    {
      variant,
      label,
      name,
      id = "",
      "data-testid": dataTestid,
      "aria-label": ariaLabel,
      ...props // Allows using TextFieldProps like label, variant, etc.
    },
    ref, // Ref is received here and forwarded to TextField
  ) => {
    return (
      <TextField
        ref={ref} // Forwarding ref to the underlying TextField component
        data-testid={dataTestid}
        aria-label={ariaLabel}
        id={id}
        label={label}
        name={name}
        variant={variant}
        sx={{
          "& .MuiInputLabel-root": {
            color: "#F8F9FA",
            fontSize: "1.4rem",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#F8F9FA",
            fontSize: "1.4rem",
          },
          "& .MuiInputBase-input": {
            fontSize: "1.4rem",
            color: "#F8F9FA",
            "&::placeholder": {
              opacity: 0.3,
            },
          },
          "& .MuiOutlinedInput-root": {
            fontSize: "1.4rem",
            color: "#F8F9FA",
            boxSizing: "border-box",
            height: "100%",
            borderRadius: "10px",
            transition: "border-color 120ms ease-in",
            "& fieldset": {
              border: "1px solid",
              borderColor: "hsla(0,0%,100%,.05)",
              background: "transparent",
            },

            "&:hover fieldset": {
              borderColor: "hsla(0,0%,100%,.05)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "white",
              background: "transparent",
            },
          },
        }}
        {...props}
      />
    );
  },
);

MuiTextField.displayName = "MuiTextField";

export default MuiTextField;
