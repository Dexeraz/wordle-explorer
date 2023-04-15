import React, { useContext } from "react";
import { AppContext } from "../App";

type Props = {
  keyVal: any;
  bigKey: Boolean;
};

const Key = (props: Props) => {
  const { board, setBoard, currAttempt, setCurrAttempt } =
    useContext(AppContext);

  const selectLetter = () => {
    if (currAttempt.letterPos > 4) {
      return;
    }
    
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos] = props.keyVal;
    setBoard(newBoard);

    //After the first letter move forward to the next Key Position
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
  };

  return (
    <div className="key" id={props.bigKey && "big"} onClick={selectLetter}>
      {props.keyVal}
    </div>
  );
};

export default Key;
