import {
  Dialog,
  DialogContent,
  Box,
  DialogActions,
  SxProps,
  Theme,
} from "@mui/material";
import { IBM_Plex_Sans } from "next/font/google";
import { ButtonModal, ModalProps } from "./defs";
import { X } from "lucide-react";
import { Button } from "../Button";

const IbmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibmPlex",
  weight: ["300", "400", "500", "600", "700"],
});

const defaultPaperStyles: SxProps<Theme> = {
  maxWidth: "60rem",
  boxShadow: `0px 4px 8px -4px rgb(0 0 0 / 48%)`,
  margin: "1.5rem",
  minWidth: "50rem",
  padding: "1.5rem",
  "@media (min-width: 768px)": {
    minWidth: "52rem",
  },
  "@media (min-width: 960px)": {
    minWidth: "62rem",
  },
  backgroundColor: "hsl(var(--background))",
  border: "1px solid hsla(0,0%,100%,0.15)",
};

const Modal = ({
  children,
  open = false,
  onClose,
  "data-testid": dataTestid,
  title = "",
  primaryButtonText,
  additionalPaperProps,
  onPrimaryButtonClick,
  href,
  primaryButtonOrder,
  secondaryButtonText,
  onSecondaryButtonClick,
  secondaryButtonOrder,
  ...muiProps
}: ModalProps) => {
  const buttons: ButtonModal = {
    primaryButton: {
      text: primaryButtonText,
      onClick: onPrimaryButtonClick,
      href,
      order: primaryButtonOrder,
    },
    secondaryButton: {
      text: secondaryButtonText,
      onClick: onSecondaryButtonClick,
      order: secondaryButtonOrder,
    },
  };

  const hasButton = Object.values(buttons).some((button) =>
    Boolean(button.text),
  );

  return (
    <Dialog
      role="dialog"
      data-testid={dataTestid}
      scroll="body"
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{
        role: "document",
        ...additionalPaperProps,
        sx: { ...defaultPaperStyles, ...additionalPaperProps?.sx },
      }}
      {...muiProps}
    >
      <Box
        sx={{
          padding: "16px 18px",
          paddingBottom: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <h3
          className={`${IbmPlex.className} text-[2rem] font-semibold text-text-light sm:text-[2.4rem]`}
        >
          {title}
        </h3>
        <Button
          variant="secondary"
          type="button"
          onClick={onClose}
          className="h-[32px] w-[32px] min-w-0 rounded-none border border-text-light bg-transparent text-text-light transition-colors duration-200 hover:border-[rgb(20,20,20)] focus:border-[var(--text-light)] focus:bg-transparent"
        >
          <X strokeWidth={1} />
        </Button>
      </Box>
      <DialogContent sx={{ padding: "16px 18px" }}>{children}</DialogContent>
      {hasButton && (
        <DialogActions
          sx={{
            pb: 8,
            pt: 8,
            justifyContent: "center",
          }}
        >
          buttons
        </DialogActions>
      )}
    </Dialog>
  );
};

export default Modal;
