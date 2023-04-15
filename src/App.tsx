import react, { useState, useEffect } from "react";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import "./index.css";
import { boardDefault, generateWordSet } from "./helpers/Words";
import { createContext } from "react";

export const AppContext = createContext<any>(null);

function App() {
  const [board, setBoard] = useState<any>(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });
  const [wordSet, setWordSet] = useState(new Set());

  const correctWord = "RIGHT";

  useEffect(() => {
    generateWordSet().then((words: any) => {
      setWordSet(words.wordSet);
    });
  }, []);

  const onEnter = () => {
    if (currAttempt.letterPos !== 5) {
      return;
    }

    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attempt][i];
    }

    if (wordSet.has(currWord.toLowerCase().trim())) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
    } else {
      console.log(wordSet);
      console.log(currWord);
      alert("Word not found");
    }

    if (currWord.toLowerCase()  === correctWord) {
      alert("You won!");
    }
  };

  const onDelete = () => {
    if (currAttempt.letterPos === 0) {
      return;
    }
    const newBaord = [...board];
    newBaord[currAttempt.attempt][currAttempt.letterPos - 1] = "";
    setBoard(newBaord);

    // We stay at the same Attempt but we go back to the previous letterPosition
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 });
  };

  const onSelectLetter = (keyVal: any) => {
    if (currAttempt.letterPos > 4) {
      return;
    }

    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setBoard(newBoard);

    //After the first letter move forward to the next Key Position
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
  };

  return (
    <div>
      <nav>
        <h1>Wordle Explorer</h1>
      </nav>
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currAttempt,
          setCurrAttempt,
          onSelectLetter,
          onDelete,
          onEnter,
          correctWord,
        }}
      >
        <div className="game">
          <Board />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
