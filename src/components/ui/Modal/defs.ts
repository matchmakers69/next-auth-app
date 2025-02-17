import { PaperProps } from "@mui/material";
import { ModalProps as MUIModalProps } from "@mui/material/Modal";
import { BaseProps } from "../types/defs";

export type ModalProps = {
  open: boolean;
  title: string;
  onClose?: () => void;
  additionalPaperProps?: PaperProps;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryButtonClick?: () => void;
  onSecondaryButtonClick?: () => void;
  href?: string;
  primaryButtonOrder?: number;
  secondaryButtonOrder?: number;
} & BaseProps &
  Omit<MUIModalProps, "open" | "onClose">;

type ModalButtonTypes = "primaryButton" | "secondaryButton";

type ModalButtonProps = {
  text?: string;
  onClick?: () => void;
  order?: number;
  href?: string;
};

export type ButtonModal = {
  // eslint-disable-next-line no-unused-vars
  [key in ModalButtonTypes]: ModalButtonProps;
};
