import { memo } from 'react';
import BlockPreview from "./BlockPreview";
import styles from "./Next.module.scss";

type Props = {
  blocks: BlockTypes[];
}

const Next = ({ blocks }: Props) => {
  return (
    <>
      <h2 className={styles.title}>Next</h2>
      <div className={styles.blocks}>
        <div className={styles.scale}>
          {blocks.map((blockType, index) => (
            <BlockPreview key={index} blockType={blockType} />
          ))}
        </div>
      </div>
    </>
  );
};

export default memo(Next);
