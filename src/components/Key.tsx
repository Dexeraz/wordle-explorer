import React, { useContext } from "react";
import { AppContext } from "../App";

type Props = {
  keyVal: any;
  bigKey: Boolean;
};

const Key = (props: Props) => {
  const { onSelectLetter, onDelete, onEnter } = useContext(AppContext);

  const selectLetter = () => {
    if (props.keyVal === "ENTER") {
      onEnter();
    } else if (props.keyVal === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(props.keyVal);
    }
  };

  return (
    <div className="key" id={props.bigKey && "big"} onClick={selectLetter}>
      {props.keyVal}
    </div>
  );
};

export default Key;
