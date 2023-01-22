import { memo } from "react";
import BlockPreview from "./BlockPreview";
import styles from "./Hold.module.scss";

type Props = {
  blockType: BlockTypes | null;
};

const Hold = ({ blockType }: Props) => {
  return (
    <>
      <h2 className={styles.title}>Hold [S]</h2>
      <div className={styles.block}>
        <div className={styles.scale}>
          <BlockPreview blockType={blockType} />
        </div>
      </div>
    </>
  );
};

export default memo(Hold);
