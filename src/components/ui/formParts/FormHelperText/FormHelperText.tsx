"use client";

import { FormHelperText as MUIFormHelperText } from "@mui/material";
import { BaseProps } from "../../types/defs";

const FormHelperText = ({ children }: BaseProps) => {
  return (
    <MUIFormHelperText
      sx={{
        fontSize: "1.2rem",
        color: "#d32f2f",
        marginTop: "0.25rem",
        minHeight: "1.5rem",
        display: "block",
      }}
    >
      {children}
    </MUIFormHelperText>
  );
};

export default FormHelperText;
