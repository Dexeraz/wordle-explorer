import React, { useContext } from "react";
import { AppContext } from "../App";

type Props = {
  keyVal: any;
  bigKey: boolean;
  disabled?: any;
};

const Key = (props: Props) => {
  const { onSelectLetter, onDelete, onEnter, gameOver } = useContext(AppContext);

  const selectLetter = () => {
    if (gameOver.gameOver) return;

    if (props.keyVal === "ENTER") {
      onEnter();
    } else if (props.keyVal === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(props.keyVal);
    }
  };

  return (
    <div
      className="key"
      id={props.bigKey ? "big" : props.disabled && "disabled"}
      onClick={selectLetter}
    >
      {props.keyVal}
    </div>
  );
};

export default Key;
