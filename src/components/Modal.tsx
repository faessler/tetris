import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";

type Props = {
  children: ReactNode;
  onClose: () => void;
};

const Modal = ({ children, onClose }: Props) => {
  useEffect(() => {
    const onKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    addEventListener("keydown", onKeyPress);
    return () => removeEventListener("keydown", onKeyPress);
  }, []);

  return createPortal(
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.modal}>{children}</div>
    </>,
    document.body
  );
};

export default Modal;
