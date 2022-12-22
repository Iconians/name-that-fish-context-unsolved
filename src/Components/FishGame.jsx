import React from "react";
import { useAppContext } from "../app.Context";
import { FinalScore } from "./FinalScore";
import { GameBoard } from "./GameBoard";
import { ScoreBoard } from "./ScoreBoard";
import "./styles/final-score.css";

export const FishGame = () => {
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
};
