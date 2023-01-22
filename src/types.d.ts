type Colors =
  | "YELLOW"
  | "ORANGE"
  | "RED"
  | "GREEN"
  | "BLUE"
  | "TURQOISE"
  | "PURPLE";

type BlockTypes = "I" | "J" | "L" | "O" | "S" | "T" | "Z";

type Block = {
  id: string;
  isOutlined: boolean;
  type: BlockTypes | null;
};
