import { Dialog, DialogContent, Box } from "@mui/material";
import { ButtonModal, ModalProps } from "./defs";

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

  console.log(hasButton, "hasButton");
  return (
    <Dialog
      role="dialog"
      data-testid={dataTestid}
      scroll="body"
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={additionalPaperProps}
      {...muiProps}
    >
      <Box
        sx={{
          px: 6,
          pt: 4,
        }}
      >
        <h3 className="mb-[2rem]">{title}</h3>
      </Box>
      <DialogContent sx={{ paddingTop: 4 }}>{children}</DialogContent>
    </Dialog>
  );
};

export default Modal;
