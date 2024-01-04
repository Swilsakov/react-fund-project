import { type ReactNode } from "react";
import Button from "@mui/material/Button";
import { TypographyUI } from "../Typography";

import styles from "./styles.module.scss";

interface ButtonUIProps {
  children: ReactNode;
  img?: ReactNode;
  onClick?: () => void;
}

export const ButtonUI = ({ children, img, onClick }: ButtonUIProps) => {
  return (
    <Button
      variant="contained"
      className={styles.btn}
      startIcon={img}
      onClick={onClick}
    >
      <TypographyUI.Span>{children}</TypographyUI.Span>
    </Button>
  );
};
