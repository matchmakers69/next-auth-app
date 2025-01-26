import { MuiSelectFieldProps, OptionType } from "./defs";
import InputLabel from "@mui/material/InputLabel";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

function MuiSelectField<T extends OptionType>({
  id,
  inputLabelId,
  options,
  value,
  onChange,
  label,
  placeholder,
  emptyLabel,
  displayEmpty,
  error,
  "data-testid": dataTestid,
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
      {label && <InputLabel id={inputLabelId}>{label}</InputLabel>}
      <Select
        id={id}
        value={value ?? ""}
        onChange={handleChange}
        data-hj-suppress
        data-testid={dataTestid}
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
        sx={{
          fontSize: "1.5rem",
          borderRadius: "10px",
          color: "var(--dark-grey)",
          "& fieldset": {
            border: "1px solid",
            borderColor: "var(--border-grey-light)",
          },
          "&:hover fieldset": {
            border: "1px solid",
            borderColor: "var(--dark-grey)",
          },
          "&.Mui-focused fieldset": {
            borderColor: "var(--dark-grey)",
            background: "none",
          },

          ".MuiOutlinedInput-notchedOutline": {
            borderRadius: "10px",
          },
        }}
      >
        {displayEmpty && (
          <MenuItem value="" disabled>
            {emptyLabel}
          </MenuItem>
        )}
        {placeholder && (
          <MenuItem value="" disabled>
            {placeholder}
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
