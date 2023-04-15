import React, { useContext } from "react";
import { AppContext } from "../App";

type Props = {
  letterPos: number;
  attemptVal: number;
};

const Letter = (props: Props) => {
  const { board, correctWord, currAttempt } = useContext(AppContext);
  const letter = board[props.attemptVal][props.letterPos];

  const correct = correctWord[props.letterPos] === letter;

  //if it is not correct letter for this position, and it is not empty the and the typed letter is somewhere then it is yellow
  const almost = !correct && letter !== "" && correctWord.includes(letter);

  //if it is correct, then correct if not then is it almost, if not the we set error
  const letterState =
    currAttempt.attempt > props.attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");

  return (
    <div className="letter" id={letterState.toString()}>
      {letter}
    </div>
  );
};

export default Letter;
