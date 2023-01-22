export const getBlockPreview = (
  blockType: BlockTypes | null
): { type: BlockTypes | null }[] => {
  switch (blockType) {
    case "I":
      return [
        { type: null },
        { type: null },
        { type: null },
        { type: null },
        { type: "I" },
        { type: "I" },
        { type: "I" },
        { type: "I" },
      ];
    case "J":
      return [
        { type: "J" },
        { type: null },
        { type: null },
        { type: null },
        { type: "J" },
        { type: "J" },
        { type: "J" },
        { type: null },
      ];
    case "L":
      return [
        { type: null },
        { type: null },
        { type: "L" },
        { type: null },
        { type: "L" },
        { type: "L" },
        { type: "L" },
        { type: null },
      ];
    case "O":
      return [
        { type: null },
        { type: "O" },
        { type: "O" },
        { type: null },
        { type: null },
        { type: "O" },
        { type: "O" },
        { type: null },
      ];
    case "S":
      return [
        { type: null },
        { type: "S" },
        { type: "S" },
        { type: null },
        { type: "S" },
        { type: "S" },
        { type: null },
        { type: null },
      ];
    case "T":
      return [
        { type: null },
        { type: "T" },
        { type: null },
        { type: null },
        { type: "T" },
        { type: "T" },
        { type: "T" },
        { type: null },
      ];
    case "Z":
      return [
        { type: "Z" },
        { type: "Z" },
        { type: null },
        { type: null },
        { type: null },
        { type: "Z" },
        { type: "Z" },
        { type: null },
      ];
    default:
      return [
        { type: null },
        { type: null },
        { type: null },
        { type: null },
        { type: null },
        { type: null },
        { type: null },
        { type: null },
      ];
  }
};
