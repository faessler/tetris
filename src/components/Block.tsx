import { memo } from 'react';
import cx from "classnames";
import styles from "./Block.module.scss";

type Props = {
  hideEmptyBorder?: boolean;
  isOutlined?: boolean;
  type: BlockTypes | null;
};

const Block = ({
  hideEmptyBorder = false,
  isOutlined = false,
  type,
}: Props) => {
  return (
    <div
      className={cx(
        styles.block,
        { [styles.emptyBorder]: !hideEmptyBorder },
        { [styles.outlined]: isOutlined },
        { [styles[type || ""]]: type }
      )}
    />
  );
};

export default memo(Block);
