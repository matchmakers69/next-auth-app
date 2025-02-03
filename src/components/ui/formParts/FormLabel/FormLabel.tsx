import { fontDefault } from "@/utils/fonts";
import { styled } from "@mui/material";

const StyledWrapper = styled("label")(({ theme }) => ({
  display: "block",
  lineHeight: "25px",
  marginBottom: "0.25rem",
}));

const StyledLabel = styled("label")(({ theme }) => ({
  fontWeight: 600,
  fontSize: "1.5rem",
  fontFamily: fontDefault,
}));

const StyledRequired = styled("span")(({ theme }) => ({
  color: "var(--dark-grey)",
}));

export type FormLabelProps = {
  id?: string;
  htmlFor?: string;
  label: React.ReactNode | string;
  optionalText: string;
};

const FormLabel = ({
  htmlFor,
  label,
  optionalText,
  ...rest
}: FormLabelProps) => {
  return (
    <StyledWrapper>
      <StyledLabel htmlFor={htmlFor} {...rest}>
        {label}
      </StyledLabel>
      {!!optionalText && (
        <StyledRequired>
          &nbsp;
          {optionalText}
        </StyledRequired>
      )}
    </StyledWrapper>
  );
};

export default FormLabel;
