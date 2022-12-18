/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from "react";
import { Images } from "./src/assets/images";

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
  const [inCorrect, setIncorrect] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [correctFish, SetCorrectFish] = useState(
    fishArr.length ? fishArr[0].name : null
  );

  const inputAnswer = () => {
    if (correctFish === inputValue) {
      const filter = fishArr.filter((fish) => fish.name !== inputValue);
      setFishArr(filter);
      setCorrect(correct + 1);
      SetCorrectFish(filter.length ? filter[0].name : null);
      setInputValue("");
    } else {
      const filter = fishArr.filter((fish) => fish.name !== correctFish);
      setFishArr(filter);
      setIncorrect(inCorrect + 1);
      SetCorrectFish(filter.length ? filter[0].name : null);
      setInputValue("");
    }
  };

  return (
    <AppContext.Provider
      value={{
        fishArr,
        inputAnswer,
        inputValue,
        inCorrect,
        correct,
        correctFish,
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
    inCorrect: context.inCorrect,
    correct: context.correct,
    correctFish: context.correctFish,
    initialFishes: context.initialFishes,
  };
};
