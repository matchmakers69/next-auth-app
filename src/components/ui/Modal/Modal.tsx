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

const IbmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibmPlex",
  weight: ["300", "400", "500", "600", "700"],
});

const defaultPaperStyles: SxProps<Theme> = {
  maxWidth: "60",
  boxShadow: `0px 4px 8px -4px rgb(0 0 0 / 48%)`,
  margin: "1.6rem",
  minWidth: "50rem",
  "@media (min-width: 768px)": {
    minWidth: "52rem",
  },
  "@media (min-width: 960px)": {
    minWidth: "62rem",
  },
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
        }}
      >
        <h3
          className={`${IbmPlex.className} text-[2rem] font-semibold text-dark-grey sm:text-[2.4rem]`}
        >
          {title}
        </h3>
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
