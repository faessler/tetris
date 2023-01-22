import { useState, useEffect } from "react";
import { getInitialBlocks } from "../utils/game";

type ReturnType = {
  blocks: Block[];
  hold: BlockTypes | null;
  next: BlockTypes[];
};

export const useGame = (): ReturnType => {
  const [blocks, setBlocks] = useState(getInitialBlocks());
  const [hold, setHold] = useState<BlockTypes | null>(null);
  const [next, setNext] = useState<BlockTypes[]>([
    "T",
    "Z",
    "J",
    "I",
    "L",
    "S",
  ]);

  // // mock data
  // useEffect(() => {
  //   setTimeout(() => {
  //     setHold("O");
  //   }, 5000)
  // }, [])
  // useEffect(() => {
  //   setTimeout(() => {
  //     setNext(["Z", "J", "I", "L", "S", "J"]);
  //   }, 4000)
  // }, [])
  // useEffect(() => {
  //   setTimeout(() => {
  //     setBlocks((prevFields) => {
  //       const filds = [...prevFields];
  //       filds[191] = { ...filds[191], type: "I" };
  //       filds[192] = { ...filds[192], type: "J" };
  //       filds[172] = { ...filds[172], type: "L" };
  //       filds[173] = { ...filds[173], type: "L" };
  //       filds[183] = { ...filds[183], type: "L" };
  //       filds[193] = { ...filds[193], type: "L" };
  //       filds[194] = { ...filds[194], type: "O" };
  //       filds[195] = { ...filds[195], type: "S" };
  //       filds[196] = { ...filds[196], type: "T" };
  //       filds[197] = { ...filds[197], type: "Z", isOutlined: true };
  //       return filds;
  //     });
  //   }, 3000);
  // }, []);

  return { blocks, hold, next };
};
