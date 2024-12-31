import { Dialog, DialogContent, Box } from "@mui/material";
import { ModalProps } from "./defs";

const Modal = ({
  children,
  open = false,
  onClose,
  "data-testid": dataTestid,
  title = "",
  additionalPaperProps,
  ...muiProps
}: ModalProps) => {
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
        {title}
      </Box>
      <DialogContent sx={{ paddingTop: 4 }}>{children}</DialogContent>
    </Dialog>
  );
};

export default Modal;
