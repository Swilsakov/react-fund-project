import { type ReactNode } from "react";
import Button from "@mui/material/Button";
import { TypographyUI } from "../Typography";

import styles from "./styles.module.scss";

interface ButtonUIProps {
  children: ReactNode;
  img?: ReactNode;
  onClick?: () => void;
  isActive?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export const ButtonUI = ({
  children,
  img,
  isActive,
  ...props
}: ButtonUIProps) => {
  return (
    <Button
      variant="contained"
      className={styles.btn}
      color={!isActive ? "primary" : "secondary"}
      startIcon={img}
      {...props}
    >
      <TypographyUI.Span>{children}</TypographyUI.Span>
    </Button>
  );
};
