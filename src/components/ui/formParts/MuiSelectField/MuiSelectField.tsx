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
import { fontDefault } from "@/utils/fonts";

const defaultSx: SxProps<Theme> = {
  fontSize: "1.5rem",
  fontFamily: fontDefault,
  borderRadius: "10px",
  color: "var(--dark-grey)",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderWidth: "1px",
      borderColor: "var(--border-grey-light)",
    },
    "&:hover fieldset": {
      borderWidth: "1px",
      borderColor: "var(--dark-grey)",
    },
    "&.Mui-focused fieldset": {
      borderWidth: "1px",
      borderColor: "var(--dark-grey) !important",
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: "10px",
    borderWidth: "1px",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "var(--dark-grey) !important",
    borderWidth: "1px !important",
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
    const selectedValue = options.find(
      (option) => option.value === e.target.value,
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
            sx: {
              borderRadius: 0,
              bgcolor: "background.default",
              fontSize: "1.5rem",
            },
          },
        }}
        sx={defaultSx}
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
            data-hj-suppress
            disabled={option.disabled ?? false}
            value={option.value}
            key={option.value}
            sx={{
              fontSize: "1.5rem",
              color: "var(--dark-grey)",
            }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default MuiSelectField;
