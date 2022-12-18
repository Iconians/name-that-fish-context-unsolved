import "./styles/score-board.css";
import React from "react";
import { useAppContext } from "../../app.Context";
//  Where the score is presented

// ! do not add props to scoreboard

export const ScoreBoard = () => {
  const { correct, inCorrect, fishArr } = useAppContext();
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {inCorrect}</div>
      <div id="choices-left">
        {fishArr.map((answer) => (
          <div key={answer.name} className="choice">
            {answer.name}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correct}</div>
    </div>
  );
};
