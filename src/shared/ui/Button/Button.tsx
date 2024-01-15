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
}

export const ButtonUI = ({
  children,
  img,
  onClick,
  isActive,
  disabled,
}: ButtonUIProps) => {
  return (
    <Button
      variant="contained"
      className={styles.btn}
      startIcon={img}
      onClick={onClick}
      color={!isActive ? "primary" : "secondary"}
      disabled={disabled}
    >
      <TypographyUI.Span>{children}</TypographyUI.Span>
    </Button>
  );
};
