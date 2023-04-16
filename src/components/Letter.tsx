import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

type Props = {
  letterPos: number;
  attemptVal: number;
};

const Letter = (props: Props) => {
  const { board, correctWord, currAttempt, setDisabledLetters } =
    useContext(AppContext);
  const letter = board[props.attemptVal][props.letterPos];

  const correct = correctWord.toUpperCase()[props.letterPos] === letter;

  //if it is not correct letter for this position, and it is not empty the and the typed letter is somewhere then it is yellow
  const almost =
    !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
  //This changes the id to change the color to indicate if the letter is correct - with CSS
  //if it is correct, then correct if not then is it almost, if not the we set error
  const letterState =
    currAttempt.attempt > props.attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");

  //For the future: RIGHT - ALL GREAN, RIGTT WE GET 🟩🟩🟩🟨🟩 - which is not correct
  // No Yellow color bug

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      console.log(letter);
      setDisabledLetters((prev: any) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);

  return (
    <div className="letter" id={letterState.toString()}>
      {letter}
    </div>
  );
};

export default Letter;
