import react from "react";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import "./index.css";


function App() {
  return (
    <div>
      <nav>
        <h1>Wordle Explorer</h1>
      </nav>
      <Board />
      <Keyboard />
    </div>
  );
}

export default App;
