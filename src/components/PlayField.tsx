import Block from "./Block";
import styles from "./PlayField.module.scss";

type Props = {
  blocks: Block[];
};

const PlayField = ({ blocks }: Props) => {
  return (
    <div className={styles.playField}>
      {blocks.map(({ id, isOutlined, type }) => (
        <Block key={id} type={type} isOutlined={isOutlined} />
      ))}
    </div>
  );
};

export default PlayField;
