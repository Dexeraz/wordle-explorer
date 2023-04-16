import React, { useContext } from "react";
import { AppContext } from "../App";

function GameOver() {
  const { currAttempt, gameOver, correctWord } = useContext(AppContext);
  return (
    <div className="gameOver">
      <h1>{gameOver.guessedWord ? "Congrats! You won!" : "Try next time!"}</h1>
      <h2>{gameOver.guessedWord ? "" : `Correct Word: ${correctWord}`}</h2>
      {gameOver.guessedWord && (
        <h3>You guessed in {currAttempt.attempt} attempts</h3>
      )}
    </div>
  );
}

export default GameOver;
