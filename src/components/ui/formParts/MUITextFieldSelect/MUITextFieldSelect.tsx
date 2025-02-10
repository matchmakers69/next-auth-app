import { forwardRef } from "react";
import { TextField, MenuItem, SxProps, Theme, Box } from "@mui/material";
import { getDefaultSx } from "../defaultSx";
import { MUITextFieldSelectProps } from "./defs";
import { fontDefault } from "@/utils/fonts";

const MUITextFieldSelect = forwardRef<
  HTMLInputElement,
  MUITextFieldSelectProps
>(
  (
    {
      variant = "outlined",
      labelText,
      name,
      id = "text-id",
      sx = {},
      "data-testid": dataTestid,
      "aria-label": ariaLabel,
      options,
      value,
      onChange,
      displayEmpty = false,
      emptyLabel = "Select an option",
      displayValue = false,
      placeholder = "",
      ...props
    },
    ref,
  ) => {
    const defaultSx: SxProps<Theme> = {
      "& .MuiInputLabel-outlined": {
        color: "var(--dark-grey)",
        fontSize: "1.5rem",
      },

      "& .MuiInputLabel-outlined.Mui-focused": {
        color: "var(--dark-grey)",
        fontSize: "1.5rem",
      },
      "& .MuiInputBase-input": {
        fontSize: "1.5rem",
        color: "var(--dark-grey)",
        ...(displayValue && {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }),
        "&::placeholder": {
          opacity: 0.3,
        },
      },
      "& .MuiOutlinedInput-root": {
        fontSize: "1.5rem",
        fontFamily: fontDefault,
        borderRadius: "10px",
        "& fieldset": {
          border: "1px solid",
          borderColor: "var(--border-grey-light)",
        },
        "&:hover fieldset": {
          border: "1px solid",
          borderColor: "var(--dark-grey)",
        },
        "&.Mui-focused fieldset": {
          border: "1px solid",
          borderColor: "var(--dark-grey)",
        },
        ".MuiOutlinedInput-notchedOutline": {
          borderRadius: "10px",
        },
      },
    };
    const mergedSx: SxProps<Theme> = {
      ...(getDefaultSx() as object),
      ...(sx as object),
      ...defaultSx,
    };

    return (
      <TextField
        ref={ref}
        data-testid={dataTestid}
        aria-label={ariaLabel}
        id={id}
        name={name}
        label={labelText}
        variant={variant}
        sx={mergedSx}
        placeholder={placeholder}
        select
        value={value}
        onChange={(e) => {
          const selectedOption = options.find(
            (opt) => opt.value === e.target.value,
          );
          if (selectedOption) {
            onChange(selectedOption);
          }
        }}
        {...props}
      >
        {displayEmpty && (
          <MenuItem
            sx={{
              fontSize: "1.5rem",
              color: "var(--dark-grey)",
            }}
            value=""
            disabled
          >
            {emptyLabel}
          </MenuItem>
        )}
        {options.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            disabled={option.disabled}
            sx={{
              fontSize: "1.5rem",
              color: "var(--dark-grey)",
              fontWeight: 600,
              ...(displayValue && {
                display: "flex",
                alignItems: "center",
                gap: 1,
              }),
            }}
          >
            {option.label}
            {displayValue && (
              <Box sx={{ fontWeight: "normal" }} component="span">
                {option.value}
              </Box>
            )}
          </MenuItem>
        ))}
      </TextField>
    );
  },
);

MUITextFieldSelect.displayName = "MUITextFieldSelect";

export default MUITextFieldSelect;
