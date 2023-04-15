import react, { useState } from "react";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import "./index.css";
import { boardDefault } from "./helpers/Words";
import { createContext } from "react";

export const AppContext = createContext<any>(null);

function App() {
  const [board, setBoard] = useState<any>(boardDefault); //any for now

  return (
    <div>
      <nav>
        <h1>Wordle Explorer</h1>
      </nav>
      <AppContext.Provider value={{ board, setBoard }}>
        <div className="game">
          <Board />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
