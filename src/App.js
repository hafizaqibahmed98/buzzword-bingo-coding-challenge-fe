import logo from './logo.svg';
import './App.css';
import React from "react";
import Board from "./bingo-game/Board";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Buzzword Bingo
        </p>
      </header>
      <div className="game-board">
        <Board />
      </div>

    </div>
  );
}

export default App;
