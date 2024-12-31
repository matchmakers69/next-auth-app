import { PaperProps } from "@mui/material";
import { ModalProps as MUIModalProps } from "@mui/material/Modal";
import { BaseProps } from "../types/defs";


export type ModalProps = {
    open: boolean;
    title: string;
    onClose?: () => void;
    additionalPaperProps?: PaperProps
} & BaseProps & Omit<MUIModalProps, 'open' | 'onClose'>;