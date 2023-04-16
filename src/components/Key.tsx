import React, { useContext } from "react";
import { AppContext } from "../App";

type Props = {
  keyVal: any;
  bigKey: boolean;
  disabled?: any;
};

const Key = (props: Props) => {
  const { onSelectLetter, onDelete, onEnter, gameOver } =
    useContext(AppContext);

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

  const keyClass = props.bigKey
    ? "key big"
    : props.disabled
    ? "key disabled"
    : "key";

  return (
    <div className={keyClass} onClick={selectLetter}>
      {props.keyVal}
    </div>
  );
};

export default Key;
