import { forwardRef } from "react";
import { TextField } from "@mui/material";
import { MuiTextFieldProps } from "./defs";
import { getDefaultSx } from "../defaultSx";

const MuiTextField = forwardRef<HTMLInputElement, MuiTextFieldProps>(
  (
    {
      variant,
      label,
      name,
      id = "text-id",
      sx = {},
      "data-testid": dataTestid,
      "aria-label": ariaLabel,
      ...props // Allows using TextFieldProps like label, variant, etc.
    },
    ref,
  ) => {
    const mergedSx = { ...getDefaultSx(), ...sx };

    return (
      <TextField
        ref={ref}
        data-testid={dataTestid}
        aria-label={ariaLabel}
        id={id}
        label={label}
        name={name}
        variant={variant}
        sx={mergedSx}
        {...props}
      />
    );
  },
);

MuiTextField.displayName = "MuiTextField";

export default MuiTextField;
