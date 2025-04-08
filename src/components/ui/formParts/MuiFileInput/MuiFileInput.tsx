"use client";

import { forwardRef } from "react";
import { TextField } from "@mui/material";
import { getDefaultSx } from "../defaultSx";
import { MuiTextFieldProps } from "./defs";

const MuiFileInput = forwardRef<HTMLInputElement, MuiTextFieldProps>(
  (
    {
      variant,
      label,
      name,
      id = "text-id",
      sx = {},
      "data-testid": dataTestid,
      "aria-label": ariaLabel,
      accept = "image/*",
      onFileChange,
      onChange,
      ...props
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
        type="file"
        slotProps={{
          htmlInput: {
            accept,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
              const file = e.target.files?.[0] ?? null;
              if (onFileChange) onFileChange(file);
              if (onChange) onChange(e);
            },
          },
        }}
        {...props}
      />
    );
  },
);

MuiFileInput.displayName = "MuiFileInput";

export default MuiFileInput;
