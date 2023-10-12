/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const TipContext = createContext();

const TipContextProvider = ({ children }) => {
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [billNum, setBillNum] = useState("");
  const [pplNum, setPplNum] = useState("");
  const [custom, setCustom] = useState("");
  const [selectedButton, setSelectedButton] = useState(null);

  const resetCalculator = () => {
    setTipAmount(0);
    setTotalAmount(0);
    setBillNum("");
    setPplNum("");
    setCustom("");
    setSelectedButton(null);
  };

  const objectsPassed = {
    tipAmount,
    setTipAmount,
    totalAmount,
    setTotalAmount,
    billNum,
    setBillNum,
    pplNum,
    setPplNum,
    custom,
    setCustom,
    selectedButton,
    setSelectedButton,
    resetCalculator,
  };
  return (
    <TipContext.Provider value={objectsPassed}>{children}</TipContext.Provider>
  );
};

export default TipContextProvider;
