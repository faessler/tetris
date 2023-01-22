import { useId } from "react";

export const getInitialBlocks = (): Block[] => {
  return new Array(200)
    .fill({ block: null, isOutlined: false })
    .map((field) => ({ ...field, id: useId() }));
};
