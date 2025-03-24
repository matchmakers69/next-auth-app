"use client";

import { forwardRef } from "react";
import { InputAdornment, TextField } from "@mui/material";
import { NumberFieldProps } from "./defs";
import { getDefaultSx } from "../defaultSx";
import { HandCoins } from "lucide-react";

const NumberField = forwardRef<HTMLInputElement, NumberFieldProps>(
  (
    {
      variant,
      label,
      name,
      id = "currency-id",
      sx = {},
      "data-testid": dataTestid = "number-field",
      "aria-label": ariaLabel,
      min = "",
      max = "",
      step = "",
      isCurrency = false,
      ...props // Allows using TextFieldProps like label, variant, etc.
    },
    ref,
  ) => {
    const mergedSx = { ...getDefaultSx(), ...sx };

    return (
      <TextField
        ref={ref}
        type="number"
        id={id}
        label={label}
        name={name}
        variant={variant}
        sx={mergedSx}
        {...props}
        slotProps={{
          input: {
            startAdornment: isCurrency && (
              <InputAdornment
                sx={{ color: "var(--text-light)" }}
                data-testid="currency-symbol"
                position="start"
              >
                <HandCoins size={20} />
              </InputAdornment>
            ),
          },
          htmlInput: {
            "aria-label": ariaLabel,
            "data-testid": dataTestid,
            min,
            max,
            step,
          },
        }}
      />
    );
  },
);

NumberField.displayName = "NumberField";

export default NumberField;
