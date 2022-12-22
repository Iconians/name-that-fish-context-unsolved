/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from "react";
import { Images } from "./assets/images";

const AppContext = createContext({});

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

export const AppProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [fishArr, setFishArr] = useState(initialFishes);
  const [showInCorrectScore, setShowIncorrectScore] = useState(0);
  const [showCorrectScore, setShowCorrectScore] = useState(0);

  let currentCorrectFish = fishArr.length ? fishArr[0].name : null;

  const inputAnswer = () => {
    const filter = fishArr.filter((fish) => fish.name !== currentCorrectFish);
    if (currentCorrectFish === inputValue) {
      setFishArr(filter);
      setShowCorrectScore(showCorrectScore + 1);
      currentCorrectFish = filter.length ? filter[0].name : null;
      setInputValue("");
    } else {
      setFishArr(filter);
      setShowIncorrectScore(showInCorrectScore + 1);
      currentCorrectFish = filter.length ? filter[0].name : null;
      setInputValue("");
    }
  };

  return (
    <AppContext.Provider
      value={{
        fishArr,
        inputAnswer,
        inputValue,
        showInCorrectScore,
        showCorrectScore,
        initialFishes,
        setInputValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return {
    fishArr: context.fishArr,
    inputAnswer: context.inputAnswer,
    setInputValue: context.setInputValue,
    inputValue: context.inputValue,
    showInCorrectScore: context.showInCorrectScore,
    showCorrectScore: context.showCorrectScore,
    initialFishes: context.initialFishes,
  };
};
