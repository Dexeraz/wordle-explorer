import React, { useContext } from "react";
import { AppContext } from "../App";

type Props = {
  letterPos: number;
  attemptVal: number;
};

const Letter = (props: Props) => {
  const { board } = useContext(AppContext);
  const letter = board[props.attemptVal][props.letterPos];

  return <div className="letter">{letter}</div>;
};

export default Letter;
