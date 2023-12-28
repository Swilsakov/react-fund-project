import { type ReactNode } from "react";
import Button from "@mui/material/Button";
import styles from "./styles.module.scss";
import { Typography } from "../Typography";

interface ButtonUIProps {
  children: ReactNode;
  img?: ReactNode;
}

export const ButtonUI = ({ children, img }: ButtonUIProps) => {
  return (
    <Button variant="contained" className={styles.btn} startIcon={img}>
      <Typography.Span>{children}</Typography.Span>
    </Button>
  );
};
