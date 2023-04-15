import React, { useCallback, useEffect, useContext } from "react";
import { AppContext } from "../App";
import Key from "./Key";

type Props = {};

const Keyboard = (props: Props) => {
  const { currAttempt, onSelectLetter, onEnter, onDelete, disabledLetters } =
    useContext(AppContext);
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const handleKeyboard = useCallback(
    (event: any) => {
      if (event.key === "Enter") {
        onEnter();
      } else if (event.key === "Backspace") {
        onDelete();
      } else {
        // looping though arrey to check if pressed key is the key in the array and we pass it to onSelectLetter
        keys1.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        keys2.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        keys3.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
      }
    },
    [currAttempt]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div className="line1">
        {keys1.map((key) => {
          return (
            <div>
              {" "}
              <Key
                keyVal={key}
                bigKey={false}
                // disabled={disabledLetters.includes(key)}
              />{" "}
            </div>
          );
        })}
      </div>
      <div className="line2">
        {keys2.map((key) => {
          return (
            <div>
              {" "}
              <Key
                keyVal={key}
                bigKey={false}
                // disabled={disabledLetters.includes(key)}
              />{" "}
            </div>
          );
        })}
      </div>
      <div className="line3">
        <Key keyVal={"ENTER"} bigKey={true} />
        {keys3.map((key) => {
          return (
            <div>
              {" "}
              <Key
                keyVal={key}
                bigKey={false}
                // disabled={disabledLetters.includes(key)}
              />{" "}
            </div>
          );
        })}
        <Key keyVal={"DELETE"} bigKey={true} />
      </div>
    </div>
  );
};

export default Keyboard;
