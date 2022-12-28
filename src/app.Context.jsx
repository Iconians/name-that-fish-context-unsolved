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
  const [incorrectScore, setIncorrectScore] = useState(0);
  const [correctScore, setCorrectScore] = useState(0);

  const inputAnswer = () => {
    const deleteFish = fishArr.filter((fish) => fish.name !== fishArr[0].name);
    if (fishArr[0].name === inputValue) {
      setFishArr(deleteFish);
      setCorrectScore(correctScore + 1);
      setInputValue("");
    } else {
      setFishArr(deleteFish);
      setIncorrectScore(incorrectScore + 1);
      setInputValue("");
    }
  };

  return (
    <AppContext.Provider
      value={{
        fishArr,
        inputAnswer,
        inputValue,
        incorrectScore,
        correctScore,
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
    incorrectScore: context.incorrectScore,
    correctScore: context.correctScore,
    initialFishes: context.initialFishes,
  };
};
