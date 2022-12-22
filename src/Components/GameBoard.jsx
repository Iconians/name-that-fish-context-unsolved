import "./styles/game-board.css";
import React from "react";
import { useAppContext } from "../app.Context";

// ! Do not add props to gameboard

export const GameBoard = () => {
  const { fishArr, inputValue, inputAnswer, setInputValue } = useAppContext();
  const nextFishToName = fishArr[0];

  const fishInput = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form
        id="fish-guess-form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={inputValue}
          onChange={fishInput}
        />
        <input type="submit" onClick={inputAnswer} />
      </form>
    </div>
  );
};
