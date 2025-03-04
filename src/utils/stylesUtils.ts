import { SxProps, Theme } from "@mui/material";


export const InputSx: SxProps<Theme> = {
  "& .MuiInputLabel-outlined": {
    color: "var(--dark-grey)",
    fontSize: "1.5rem",
  },
  "& .MuiInputLabel-outlined.Mui-focused": {
    color: "var(--dark-grey)",
    fontSize: "1.5rem",
  },
  "& .MuiOutlinedInput-root": {
    fontSize: "1.5rem",
    color: "var(--dark-grey)",
    borderRadius: "10px",
    transition: "border-color 120ms ease-in",

    "& .MuiInputBase-input": {
      fontSize: "1.5rem",
      color: "var(--dark-grey)",
      "&::placeholder": {
        opacity: 0.3,
      },
    },
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
  },
};

export const datePickerPaperStyling = (theme: Theme) => {
  return {
    backgroundColor: theme.palette.grey[100],
    "& .MuiTouchRipple-root": {
      display: "none",
    },
    marginTop: "0.125",
    "& svg": {
      stroke: "var(--text-light)",
      width: "1.3rem",
      height: "1.3rem",
      strokeWidth: "0.25rem",
    },
    "& .MuiIconButton-root.Mui-disabled": {
      "& svg": {
        opacity: "0.8",
      },
    },
    "& .MuiIconButton-root:hover": {
      "& svg": {
        stroke: "var(--text-light)",
      },
    },
    "& .MuiPickersCalendarHeader-labelContainer": {
      color: "var(--text-light)",
      fontSize: "1.4rem",
      "> div": {
        backgroundColor: "var(--dark-grey)",
      },
    },
    "& .MuiCalendarPicker-viewTransitionContainer": {
      backgroundColor: theme.palette.grey[100],
      color: theme.palette.text.secondary,
      "& .Mui-disabled": {
        color: theme.palette.grey[500],
      },
    },
    "& .MuiPickersYear-root": {
      color: theme.palette.grey[600],
      fontSize: "1.25rem", // Increase font size for year selection
      "& .Mui-disabled": {
        color: theme.palette.grey[500],
      },
    },
    "& .MuiPickersMonth-root": {
      color: theme.palette.grey[600],
      fontSize: "1.25rem", // Increase font size for month selection
      "& .Mui-disabled": {
        color: theme.palette.grey[500],
      },
    },
    "& .MuiButtonBase-root": {
      color: theme.palette.primary,
    },
    "& .MuiButtonBase-root:hover": {
      textDecoration: "underline",
      backgroundColor: theme.palette.grey[300],
    },
    "& .MuiButtonBase-root.Mui-selected": {
      color: "var(--text-light)",
      fontWeight: "600",
      backgroundColor: `${theme.palette.primary} !important`,
    },
    "& .MuiPickersFadeTransitionGroup-root": {
      borderRadius: "0 0 0.25rem 0.25rem",
      backgroundColor: theme.palette.grey[100],
    },
    "& .MuiPickersSlideTransition-root": {
      borderRadius: "0 0 0.25rem 0.25rem",
      backgroundColor: theme.palette.grey[100],
    },
    "& .MuiDayCalendar-header": {
      backgroundColor: theme.palette.grey[100],
      fontSize: "1.25rem", // Bigger font for weekdays
      fontWeight: "bold",
    },
    "& .PrivatePickersSlideTransition-root": {
      minHeight: "230px",
    },

    "& .MuiPickersArrowSwitcher-root": {
      gap: 1,
      button: {
        visibility: "visible !important",
        opacity: 1,
        backgroundColor: "var(--dark-blue)",
        color: "var(--text-light)",
        "&:hover": {
          backgroundColor: "var(--google-color)",
        },
      },
    },

    "& .MuiPickersCalendarHeader-root": {
      margin: "0.5625rem 0.5rem",
      borderRadius: "0.25rem 0.25rem 0 0",
      fontSize: "1.4rem",
      backgroundColor: "var(--dark-grey)",
    },
    "& .MuiDayCalendar-weekDayLabel": {
      fontSize: "1.4rem",
    },

    /** Increase font size for the days (numbers in the calendar) **/
    "& .MuiPickersDay-root": {
      fontSize: "1.3rem", // Bigger font for day numbers
    },

    "& .MuiPickersDay-day": {
      fontSize: "1.3rem",
    },

    /** Ensure the month and year selectors are larger **/
    "& .MuiPickersYear-root, & .MuiPickersMonth-root": {
      fontSize: "1.25rem",
    },

    /** Fix for today’s date to be more visible **/
    "& .MuiPickersDay-today": {
      border: `2px solid ${theme.palette.primary}`,
      fontWeight: "bold",
    },
    "& .MuiDialogActions-root": {
      "& .MuiButtonBase-root": {
        fontSize: "1.4rem",
        color: "var(--body)",
      },
    },
  };
};

export const dateTimeTextFieldStyling = (
  theme: Theme,
  error: boolean,
  open: boolean,
  disabled: boolean,
) => {
  let background = "none";
  let border = error
    ? `1px solid ${theme.palette.error.main} !important`
    : `1px solid ${theme.palette.grey[600]}`;
  let focusedBorder = error
    ? `1px solid ${theme.palette.error.main} !important`
    : "1px solid var(--text-light)";
  if (open)
    border = error
      ? `1px solid ${theme.palette.error.main} !important`
      : "1px solid var(--text-light)";
  if (disabled) {
    border = "none";
    focusedBorder = "none";
    background = theme.palette.background.default;
  }

  return {
    input: {
      color: "var(--text-light)",
      "&::placeholder": {
        color: "var(--text-light)",
        opacity: 1,
      },
    },
    marginBottom: "0",
    "& .MuiFormHelperText-root": {
      fontSize: "1rem",
      marginLeft: "0",
      marginTop: "0.25rem",
      color: error ? theme.palette.error.main : "var(--text-light)",
    },
    "& .MuiInputAdornment-root": {
        "& .MuiIconButton-root": {
          color: "var(--text-light)",
        }
    },
    "& .MuiOutlinedInput-root": {
      fontSize: "1.5rem",
      fontFamily: "var(--font-ibm)",
      borderRadius: "10px",
      "& fieldset": {
        border: disabled ? "none" : border,
        background: disabled ? theme.palette.grey[300] : "none",
        color: disabled ? theme.palette.text.primary : "none",
        zIndex: disabled ? "-100" : "0",
        borderColor: "hsla(0,0%,100%,0.15)",
      },
    },
    "& .MuiOutlinedInput-root:focus": {
      "& fieldset": {
        // border: focusedBorder,
        background,
      },
    },
    "& .MuiOutlinedInput-root:focus-visible": {
      "& fieldset": {
        border: focusedBorder,
        background,
      },
    },
    "& .MuiOutlinedInput-root:hover": {
      "& fieldset": {
        border: focusedBorder,
        background,
      },
    },
  };
};
