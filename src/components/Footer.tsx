import { useState } from "react";
import Controls from "./Controls";
import Modal from "./Modal";
import styles from "./Footer.module.scss";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className={styles.footer}>
      <button
        className={styles.button}
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        controls
      </button>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <Controls />
        </Modal>
      )}
    </footer>
  );
};

export default Footer;
