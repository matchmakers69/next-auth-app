import { MuiSelectFieldProps, OptionType } from "./defs";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  SxProps,
  Theme,
} from "@mui/material";
import { FormLabel } from "../FormLabel";
import { fontDefault } from "@/constants/fonts";
import { dropDownOptionsSx, dropDownPaperOptionsSx } from "../defaultSx";

const defaultSx: SxProps<Theme> = {
  fontSize: "1.5rem",
  fontFamily: fontDefault,
  borderRadius: "10px",
  color: "var(--text-light)",
  border: "1px solid",
  borderColor: "hsla(0,0%,100%,0.15)",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "1px solid",
      borderColor: "hsla(0,0%,100%,0.15)",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid",
      borderColor: "var(--text-light)",
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: "10px",
    borderWidth: "1px",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: "1px solid",
    borderColor: "hsla(0,0%,100%,0.15)",
  },
  "&:hover": {
    "& .MuiOutlinedInput-notchedOutline": {
      border: "1px solid",
      borderColor: "var(--text-light)",
    },
  },
};

function MuiSelectField<T extends OptionType>({
  id,
  labelOptionalText,
  options,
  value,
  onChange,
  labelText,
  emptyLabel,
  displayEmpty,
  error,
  "data-testid": dataTestid,
  "aria-label": ariaLabel,
}: MuiSelectFieldProps<T>) {
  const handleChange = (e: SelectChangeEvent<string | number>) => {
    const selectedValue = options.find((option) =>
      typeof option === "number" || typeof option === "string"
        ? option === e.target.value
        : option.value === e.target.value,
    );

    if (selectedValue) {
      onChange(selectedValue as T);
    }
  };

  return (
    <FormControl
      data-testid="form-control"
      error={!!error}
      sx={{
        m: 0,
        width: "100%",
      }}
    >
      {labelText && (
        <FormLabel
          htmlFor={labelText}
          label={labelText}
          optionalText={labelOptionalText || ""}
        />
      )}
      <Select
        id={id}
        value={value ?? ""}
        onChange={handleChange}
        data-hj-suppress
        data-testid={dataTestid}
        aria-label={ariaLabel}
        displayEmpty={displayEmpty}
        SelectDisplayProps={{
          role: "combobox",
          "aria-controls": "select-field-menu",
        }}
        MenuProps={{
          MenuListProps: { id: "select-field-menu" },
          PaperProps: {
            sx: dropDownPaperOptionsSx,
          },
        }}
        sx={defaultSx}
      >
        {displayEmpty && (
          <MenuItem
            sx={{ ...dropDownOptionsSx, textTransform: "none" }}
            value=""
            disabled
          >
            {emptyLabel}
          </MenuItem>
        )}
        {options.map((option) => {
          if (typeof option === "object") {
            return (
              <MenuItem
                data-hj-suppress
                disabled={option.disabled ?? false}
                value={option.value}
                key={option.value}
                sx={dropDownOptionsSx}
              >
                {option.label}
              </MenuItem>
            );
          }
          return (
            <MenuItem
              sx={dropDownOptionsSx}
              data-hj-suppress
              value={option}
              key={option}
            >
              {option}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

export default MuiSelectField;
