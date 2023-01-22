import { getBlockPreview } from "../utils/getBlockPreview";
import Block from "./Block";
import styles from "./BlockPreview.module.scss";

type Props = {
  blockType: BlockTypes | null;
};

const BlockPreview = ({ blockType }: Props) => {
  const blocks = getBlockPreview(blockType);

  return (
    <div className={styles.blockPreview}>
      {blocks.map((block, index) => (
        <Block key={index} type={block.type} hideEmptyBorder />
      ))}
    </div>
  );
};

export default BlockPreview;
