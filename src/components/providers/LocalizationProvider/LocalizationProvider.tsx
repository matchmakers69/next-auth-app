"use client";

import { LocalizationProviderProps } from "./defs";
import { LocalizationProvider as MUILocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";

const LocalizationProvider = ({ children }: LocalizationProviderProps) => {
  return (
    <MUILocalizationProvider dateAdapter={AdapterDateFns}>
      {children}
    </MUILocalizationProvider>
  );
};

export default LocalizationProvider;
