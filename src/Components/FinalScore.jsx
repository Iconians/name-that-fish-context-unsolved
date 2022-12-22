import React from "react";
import { useAppContext } from "../app.Context";

// ! Do Not Add Props Here

export const FinalScore = () => {
  const { showCorrectScore, initialFishes } = useAppContext();
  return (
    <div id="final-score">
      <h1>Your Final Score Was</h1>
      <div id="score">
        <p>{showCorrectScore}</p>
        <hr />
        <p>{initialFishes.length}</p>
      </div>
    </div>
  );
};
