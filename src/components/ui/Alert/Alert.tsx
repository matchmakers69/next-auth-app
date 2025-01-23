import { Alert as MUIAlert, AlertProps, IconButton } from "@mui/material";
import { SquareX } from "lucide-react";

const Alert = (props: AlertProps) => {
  let closeButton;

  if (props.onClose) {
    closeButton = (
      <IconButton
        aria-label="Close"
        onClick={props.onClose}
        sx={{ marginLeft: 3, marginRight: 3 }}
      >
        <SquareX />
      </IconButton>
    );
  }

  return (
    <MUIAlert action={closeButton} {...props}>
      <h3 className="text-left text-sm">{props.children}</h3>
    </MUIAlert>
  );
};

export default Alert;
