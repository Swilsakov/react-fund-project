import { useRef, type ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./styles.module.scss";

interface ModalProps {
  children: ReactNode;
  open?: boolean;
}

export const Modal = ({ children, open }: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [open]);

  const modalRoot = document.getElementById("modal") as Element;

  return createPortal(
    <dialog className={styles.modal} ref={dialogRef}>
      {children}
    </dialog>,
    modalRoot
  );
};
