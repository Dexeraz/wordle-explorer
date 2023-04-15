import react, { useState } from "react";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import "./index.css";
import { boardDefault } from "./helpers/Words";
import { createContext } from "react";

export const AppContext = createContext<any>(null);

function App() {
  const [board, setBoard] = useState<any>(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });

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

  const onEnter = () => {
    if (currAttempt.letterPos !== 5) {
      return;
    }
    setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
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
