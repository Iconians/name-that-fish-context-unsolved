import React from "react";
import { useAppContext } from "../app.Context";
import "./App.css";
import { FinalScore } from "./Components/FinalScore";
import { GameBoard } from "./Components/GameBoard";
import { ScoreBoard } from "./Components/ScoreBoard";
import "./Components/styles/final-score.css";

function App() {
  const { fishArr } = useAppContext();
  return (
    <div className="App">
      <header>
        {fishArr.length ? (
          <>
            <ScoreBoard />
            <GameBoard />
          </>
        ) : (
          <FinalScore />
        )}
      </header>
    </div>
  );
}

export default App;
