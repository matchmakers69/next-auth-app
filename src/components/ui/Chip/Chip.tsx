import { Chip as MUIChip } from "@mui/material";
import Link from "next/link";
import { SxProps, Theme } from "@mui/system";
import { FC } from "react";
import { CustomChipProps } from "./defs";

const Chip: FC<CustomChipProps> = ({
  href,
  textColor = "inherit",
  textSize = "inherit",
  backgroundColor = "default",
  sx = {},
  ...props
}) => {
  const chipStyles: SxProps<Theme> = {
    color: textColor,
    fontSize: textSize,
    backgroundColor,
    border: "none",
    fontFamily: "var(--font-ibm)",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#ffffff29",
      color: "rgb(var(--light-grey))",
    },
    ...sx,
  };

  return href ? (
    <Link href={href} passHref legacyBehavior>
      <MUIChip component="a" clickable sx={chipStyles} {...props} />
    </Link>
  ) : (
    <MUIChip sx={chipStyles} {...props} />
  );
};

export default Chip;
